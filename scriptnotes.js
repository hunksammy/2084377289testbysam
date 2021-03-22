var config = {
  apiKey: "AIzaSyAMFjDnZaszneoR6nO8bmXUxwZJplLvNfU",
  authDomain: "notes-12519.firebaseapp.com",
  databaseURL: "https://notes-12519-default-rtdb.firebaseio.com",
};

// requires access to be set to public, or have user logged in
// to set firebase database to public use these permissions:
// {
//   "rules": {
//     ".read": true,
//     ".write": true
//   }
// }

var firebaseApp = firebase.initializeApp(config)
var db = firebaseApp.database()

var vm = new Vue({
  el: '#app',
  data: {
    tempItem: '',
  },
  firebase: {
    items: db.ref('db/items'),
  },
  methods: {
    addItem: function (value) {
      var ts = Date.now() // generate timestamp
      // send value and timestamp to firebase
      this.$firebaseRefs.items.push({value: value, ts: ts})
    },
    removeItem: function (item) {
      this.$firebaseRefs.items.child(item['.key']).remove()
    }
  }
})
