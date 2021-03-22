/*

           TODO
          ------     
          ~ Image uploads? (base64 encode)

          ~ localStorage to remember youre logged in
            ~ use LS from Index

    */


//---------
// Global Data
//---------
var baseURL             = "https://notes-12519-default-rtdb.firebaseio.com",

    chatroomsRef        = new Firebase(baseURL + "/chatrooms"),
    chatroomRef         = chatroomsRef.push(),
    chatroomKey         = "",

    messagesRef         = "",
    messageRef          = "",

    presenceRef         = new Firebase(baseURL + "/.info/connected"),

    usersRef            = new Firebase(baseURL + "/users"),
    userRef             = usersRef.push(),

    myRef               = "",
    myKey               = "",

    newMessage          = {},
    newUser             = {},

    timer               = null,
    loginAttempts       = 0,

    notifications       = {
      "landing":        "Try to be original, your username might be taken.",
      "error":          "We have encountered an error, please reload your page and try again.",
      "invalid":        "Sorry, your password is invalid. Make sure you have everything correct. Caps matter!",
      "loggedIn":       "This user is already logged in.",
      "lockedOut":      "You have attempted to login too many times, please come back later and try again.",
      "duplicateChat":  "Sorry, there is already a chatroom with this name. Try again!"
    },

    loginButtonText = {
      "new":            "Create Account",
      "existing":       "Log In"
    };

//---------
// Components
//---------
var presence = Vue.extend({
  template: '<h3 class="usersOnline">Users Online: {{ users | usersOnline }}</h3>' +
  '<p class="users" v-for="user in users">' +
  '{{ user | isMyUsernameOrOnline }}' +
  '</p>'
  ,

  data: function() {
    return {
      newUser: newUser,
      newMessage: newMessage
    }
  },

  firebase: {
    users: usersRef
  }
});

var login = Vue.extend({
  template: '<div transition="fade">' +
  '<h2 class="login">Login, or create an account below.</h2>' + 
  '<p class="notification {{ notificationStatus }}">{{ notification }}</p>' +
  '<input class="nameInput" @keyup="isExistingUser()" @keyup.enter="goToChatrooms()" v-model="newUser.username" placeholder="Username"/>' +
  '<input class="nameInput" type="password"  @keyup.tab="isExistingUser()" @keyup.enter="goToChatrooms()" v-model="newUser.password" placeholder="Password"/>' +
  '<button @click="goToChatrooms()">{{ loginButtonText }}</button>' +
  '<presence></presence>' +
  '</div>'
  ,

  data: function() {
    return {
      newMessage:         newMessage,
      newUser:            newUser,
      loginAttempts:      loginAttempts,
      notification:       notifications.landing,
      notificationStatus: "good",
      loginButtonText:    loginButtonText.new
    }
  },

  beforeCompile: function() {
    if(myRef != "" && typeof(myRef) != "undefined") {
      myRef.update({typing: false, online: false});
      myRef = "";
      myKey = "";

      //is there a better way?
      newMessage = {
        text:           "",
        username:       "",
        timestamp:      ""
      };
      this.newMessage = newMessage;

      newUser = {
        username:       "",
        password:       ""
      };
      this.newUser =    newUser;
    }
  },

  methods: {
    isExistingUser: function() {    
      for(var i = 0; i < this.users.length; i++) {
        if(this.newUser.username == this.users[i].username) {   
          this.loginButtonText = loginButtonText.existing;
          return;
        }
      }

      this.loginButtonText = loginButtonText.new;     
    },

    goToChatrooms: function() {   
      if(this.loginAttempts < 5) {
        for(var i = 0; i < this.users.length; i++) {
          if(this.newUser.username == this.users[i].username) {    
            if(this.newUser.password != this.users[i].password) {
              this.loginAttempts++;
              this.notificationStatus = "bad";
              this.notification = notifications.invalid;
              return;
            }

            if(!!this.users[i].online) {
              this.loginAttempts++;
              this.notificationStatus = "bad";
              this.notification = notifications["loggedIn"];
              return;
            }

            myKey = this.users[i][".key"];
            myRef = new Firebase(baseURL + "/users/" + myKey);
          }
        }

        if(this.newUser.username.trim() != "" && this.newUser.password.trim() != "") {
          this.newMessage.username = this.newUser.username;
          router.go("/chatrooms");
        }

      } else {
        this.notificationStatus = "bad";
        this.notification = notifications["lockedOut"];
        return;
      }
    }
  },

  firebase: {
    users: usersRef
  }
});

var chatrooms = Vue.extend({
  template: '<div transition="fade">' +
  '<h2 class="createChatroom">Search the current chatrooms, or create a new one.</h2>' + 
  '<input @keyup.esc="resetFilter()" v-model="searchString" type="text" placeholder="Search chatrooms"/>' +
  '<p>- or -</p>' + 
  '<button @click="toggleNewChatroomModal()">Create Chatroom</button>' +
  '<div class="chatroomFlexContainer">' +
  '<div class="chatroom" v-for="chatroom in chatrooms | filterBy searchString" @click="goToMessages(chatroom)">' +
  '<i v-if="chatroom.creator == myUsername" @click.stop="removeChatroom(chatroom[\'.key\'])" class="fa fa-close"></i>' +
  '<i v-if="chatroom.creator == myUsername" @click.stop="toggleEditChatroomModal(chatroom)" class="fa fa-cog"></i>' +
  '<h3>{{ chatroom.name }}</h3>' +
  '<p>{{ chatroom.messages | messageLength }} messages</p>' +
  '</div>' +
  '</div>' +
  '<presence></presence>' + 
  '</div>' +

  '<div v-show="showNewModal" class="modalWrapper" @keyup.esc="toggleNewChatroomModal()">' +
  '<div class="overlay" @click="toggleNewChatroomModal()"></div>' +
  '<div class="modal">' +
  '<i class="fa fa-close" @click="toggleNewChatroomModal()"></i>' +
  '<h2 class="modalHeader">Name your new chatroom</h2>' + 
  '<p>{{ notification }}</p>' + 
  '<input class="modalName" @keyup.enter="createChatroom()" v-model="newChatroomName" placeholder="Chatroom name"/>' +
  '<button @click="createChatroom()">Create Chatroom</button>' +
  '</div>' +
  '</div>' +

  '<div v-show="showEditModal" class="modalWrapper" @keyup.esc="toggleEditChatroomModal()">' +
  '<div class="overlay" @click="toggleEditChatroomModal()"></div>' +
  '<div class="modal">' +
  '<i class="fa fa-close" @click="toggleEditChatroomModal()"></i>' +
  '<h2 class="modalHeader">Edit Chatroom</h2>' + 
  '<p class="notification">{{ notification }}</p>' + 
  '<input class="modalName" @keyup.enter="updateChatroom()" v-model="editChatroomName" placeholder="Chatroom name"/>' +
  '<button @click="updateChatroom()">Update Chatroom Name</button>' +
  '<p>- or -</p>' + 
  '<button @click="resetChatroom()"><i class="fa fa-rotate-left"></i> Reset Chat Messages</button>' + 
  '</div>' +
  '</div>' +
  
  '</div>' 
  ,

  beforeCompile: function() {
    if(newUser.username == "" || newUser.password == "") {
      router.go("/");
      return;
    }    
  },

  ready: function() {    
    var self = this;

    presenceRef.on("value", function(snap) {
      if (snap.val()) {
        if(myKey == "" && newUser.username != "" && newUser.password != "") {
          userRef.set({
            online:   true,
            username: newUser.username,
            password: newUser.password,
            typing:   false

          }, function() {
            myKey = self.users[self.users.length - 1][".key"];
            myRef = new Firebase(baseURL + "/users/" + myKey);
            myRef.onDisconnect().update({typing: false, online: false});
          });

        } else if(typeof(myKey) != "undefined" && myKey != "") {
          myRef.update({online: true});
          myRef.onDisconnect().update({typing: false, online: false});
        }
      }
    });
  },


  methods: {
    toggleNewChatroomModal: function() {
      this.showNewModal = !this.showNewModal;
      this.notification = "";
      this.newChatroomName = "";
    },

    toggleEditChatroomModal: function(chatroom) {
      this.showEditModal = !this.showEditModal;
      this.notification = "";
      
      if(!!chatroom) {
        this.editChatroomName = chatroom.name; 
        this.editChatroomKey = chatroom[".key"];

      } else {
        this.editChatroomName = "";
        this.editChatroomKey = "";
      }
    },

    updateChatroom: function() {
       for(var i = 0; i < this.chatrooms.length; i++) {
        if(this.editChatroomName == this.chatrooms[i].name) {   
          this.notification = notifications.duplicateChat;
          return;
        }
      }
      
      chatroomsRef.child(this.editChatroomKey).update({name: this.editChatroomName});
      this.showEditModal = false;
    },

    resetChatroom: function() {
      chatroomsRef.child(this.editChatroomKey).update({messages: {}});
      this.showEditModal = false;
    },

    removeChatroom: function(key) {
      chatroomsRef.child(key).remove();
    },

    createChatroom: function() {
      var self = this;

      for(var i = 0; i < this.chatrooms.length; i++) {
        if(this.newChatroomName == this.chatrooms[i].name) {   
          this.notification = notifications.duplicateChat;
          return;
        }
      }

      chatroomRef.set({
        name: self.newChatroomName,
        //population: 0,
        messages: {},
        creator: self.myUsername

      }, function() {
        self.toggleNewChatroomModal();
        self.newChatroomName = "";
        chatroomRef = chatroomsRef.push();
      });
    },

    goToMessages: function(chatroom) {
      chatroomKey = chatroom['.key'];
      router.go("/messenger");
    },

    resetFilter: function() {
      this.searchString = "";
    }
  },

  filters: {
    messageLength: function(messages) {
      if(messages) {
        return Object.keys(messages).length;

      } else {
        return 0;
      }
    }
  },

  firebase: {
    chatrooms: chatroomsRef,
    users: usersRef
  },

  data: function() {
    return {
      showNewModal: false,
      showEditModal: false,
      newChatroomName: "",
      editChatroomName: "",
      editChatroomKey: "",
      notification: "",
      searchString: "",
      myUsername: newUser.username
    }
  }
});

var messenger = Vue.extend({
  template: '<div transition="fade">' +
  '<div class="messagesWrapper">' +
  '<div class="message" v-for="message in messages" data-person="{{ message.username | isMyMessage }}">' +
  '<span>{{ message.username | isMyMessage }} <time class="hidden">@ {{ message.timestamp }}</time></span>' +
  '<p>{{ message.text }}</p>' +
  '<i data-person="{{ message.username | isMyMessage }}" @click="removeMessage($key)" class="fa fa-close"></i>' +
  '</div>' +
  '<p class="usersTyping" v-for="user in users">' +
  '{{ user | isTyping }}' +
  '</p>' +
  '</div>' +
  '<input class="messageInput" @keyup.enter="addMessage()" v-model="newMessage.text" @keyup="userTyping($event)"/>' +
  '<button @click="addMessage()">Send</button>' +
  '<presence></presence>' +
  '</div>'
  ,

  beforeCompile: function() {       
    var self = this;

    if(newUser.username == "" || newUser.password == "") {
      router.go("/");
      return;
    }

    messagesRef = new Firebase(baseURL + "/chatrooms/" + chatroomKey + "/messages");
    messageRef = messagesRef.push();    

    messagesRef.once("value", function(snapshot) {
      var data = snapshot.val();
      self.messages = data;
    });
  },

  ready: function() {
    var self = this;

    presenceRef.on("value", function(snap) {
      if (snap.val()) {
        myRef.update({online: true});
        myRef.onDisconnect().update({typing: false, online: false});
      }
    });

    messagesRef.on("value", function(snapshot) {
      var data = snapshot.val();
      self.messages = data;
      self.scrollToBottomOfMessages();
    });    
  },

  data: function() {
    return {
      newMessage: newMessage,
      newUser: newUser,
      messages: {}
    }
  },

  firebase: {
    users: usersRef
  },

  methods: {
    removeMessage: function(key) {
      messagesRef.child(key).remove();
    },

    addMessage: function() {
      if (this.newMessage.text.trim() != "") {
        usersRef.child(myKey).update({typing: false});

        messagesRef.push().set({
          text:       this.newMessage.text,
          username:   this.newMessage.username,
          timestamp:  this.timestamp()
        });

        this.newMessage.text      = "";
        this.newMessage.timestamp = "";
      }
    },

    scrollToBottomOfMessages: function() {
      Vue.nextTick(function() {
        var messages = document.getElementsByClassName("messagesWrapper")[0];
        
        if(!!messages) {
          messages.scrollTop = messages.scrollHeight;
        }
      })
    },

    userTyping: function(e) {
      //only numbers, letters, spaces, and backspace
      if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode == 33 || e.keyCode == 4) {
        usersRef.child(myKey).update({typing: true});

        clearTimeout(timer); 
        timer = setTimeout(function() {
          usersRef.child(myKey).update({typing: false});
        }, 1000);
      }
    },

    timestamp: function() {
      var date = new Date();

      function formatDate(date) {
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];

        var day         = date.getDate(),
            monthIndex  = date.getMonth(),
            year        = date.getFullYear();

        return monthNames[monthIndex] + " " + day + ", " +  year
      }

      function formatTime(date) {
        var hour    = date.getHours(),
            minute  = date.getMinutes(),
            amPM    = (hour > 11) ? "pm" : "am";

        if(hour > 12) {
          hour -= 12;
        } else if(hour == 0) {
          hour = "12";
        }
        if(minute < 10) {
          minute = "0" + minute;
        }

        return hour + ":" + minute + amPM;
      }


      return formatTime(date) + " " + formatDate(date)
    },

    convertImgToBase64: function(url, callback, outputFormat){
      var img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = function() {
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        canvas.height = this.height;
        canvas.width = this.width;
        ctx.drawImage(this,0,0);
        var dataURL = canvas.toDataURL(outputFormat || 'image/png');
        callback(dataURL);
        canvas = null; 
      };
      img.src = url;
    },


    encodeLocalImageFileAsURL: function(cb) {
      return function(){
        var file = this.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
          cb(reader.result);
        }
        reader.readAsDataURL(file);
      }
    }
  },

  filters: {
    isMyMessage: function(username) {
      if(username === this.newMessage.username) {
        return "Me"
      } else {
        return username
      }
    },

    isTyping: function(user) {
      var self = this;

      if(user.typing && user.username != self.newMessage.username) {
        self.scrollToBottomOfMessages();
        return user.username + " is typing..."
      }
    }
  }
});

//---------
// Global Filters
//---------
Vue.filter("isMyUsernameOrOnline", function(user) {
  if(user.username === this.newMessage.username) {
    return user.username + " (Me)"
  } else {
    if(user.online == true) {
      return user.username
    }
  }
});

Vue.filter("usersOnline", function(users) {  
  var numberOnline = 0;

  for(var i = 0; i < users.length; i++) {
    if(users[i].online == true) {
      numberOnline++;
    }
  }

  return numberOnline;
});

//---------
// Transitions
//---------
Vue.transition('fade', {
  enterClass: 'fadeIn',
  leaveClass: 'fadeOut'
})

//---------
// Register global components
//---------
Vue.component('presence', presence)

//---------
// Router
//---------
var router = new VueRouter();
router.map({
  '/': {
    component: login
  },

  '/chatrooms': {
    component: chatrooms
  },

  '/messenger': {
    component: messenger
  }
})
router.start(Vue, '#vue');