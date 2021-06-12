// data
const products = [
  { id: 1, description: "Quarz Luxe", price: 200, img: "https://i.ibb.co/B4grBGR/quarz-luxe.jpg"},
  { id: 2, description: 'Curren Business', price: 20, img: "https://i.ibb.co/n6GFgv6/curren-business.jpg"},
  { id: 3, description: 'Curren Sport', price: 5, img: "https://i.ibb.co/Y74GB7y/curren-sport.jpg" },
  { id: 4, description: 'Jaragar Racing', price: 8, img: "https://i.ibb.co/XXwP7cb/jaragar-racing.jpg" },
  { id: 5, description: 'Liges Hommes', price: 3, img: "https://i.ibb.co/x5ZnVwj/liges-hommes.jpg"},
  { id: 6, description: 'Maserati Mechanical', price: 65, img: "https://i.ibb.co/NSWnpjS/maserati-mechanical.jpg"},
  { id: 7, description: 'Montre Mecanique', price: 25, img: "https://i.ibb.co/cN8B3rm/montre-mecanique.jpg" },
  { id: 8, description: 'Brand Designer', price: 28, img: 'https://i.ibb.co/Pmtyp6R/brand-designer.jpg'},
  { id: 9, description: 'Relogio Masculino', price: 4, img: "https://i.ibb.co/WnS3d6h/relogio-masculino.jpg"},
  { id: 10, description: 'Tissot Multifunction', price: 29, img: "https://i.ibb.co/FD6wb7p/tissot-multifunction.jpg"},
  { id: 11, description: 'Hip Hop Gold', price: 87, img: "https://i.ibb.co/WvVw5W7/hiphop-gold.jpg"},
  { id: 12, description: 'Mesh Genova', price: 6, img: "https://i.ibb.co/qdHmbWJ/mesh-genova.jpg" },
];
 
// component 
const Home = {
  template: '#home', 
  name: 'Home',
  data: () => {
    return {
      products, 
      searchKey: '',
      liked: [],
      cart: []
    }
  },
  computed: {
    filteredList() {
      return this.products.filter((product) => {
        return product.description.toLowerCase().includes(this.searchKey.toLowerCase());
      });
    },
    getLikeCookie() {
      let cookieValue = JSON.parse($cookies.get('like'));
      cookieValue == null ? this.liked = [] : this.liked = cookieValue; 
    },
    cartTotalAmount() {     
      let total = 0;
      for (let item in this.cart) {
        total = total + (this.cart[item].quantity * this.cart[item].price);
      }
      return total;
    },
    itemTotalAmount(){
      let itemTotal = 0;
      for (let item in this.cart) {
        itemTotal = itemTotal + (this.cart[item].quantity);
      }
      return itemTotal;
    }
  },
  methods: {
    setLikeCookie() {
      document.addEventListener('input', () => {
        setTimeout(() => {
          let cookieValue = this.liked;
          cookieValue = JSON.stringify(cookieValue)
          $cookies.set('like', cookieValue); 
        }, 300);
      })
    },
    addToCart(product) {
      // check if already in array
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === product.id) {
          return this.cart[i].quantity++ 
        }
      }
      this.cart.push({
        id: product.id,
        img: product.img,
        description: product.description,
        price: product.price,
        quantity: 1
      })
    },
    cartPlusOne(product) {
      product.quantity = product.quantity + 1;
    },
    cartMinusOne(product, id) {
      if (product.quantity == 1) {
        this.cartRemoveItem(id);
      } else {
        product.quantity = product.quantity - 1;
      }
    },
    cartRemoveItem(id) {
      this.$delete(this.cart, id)   
    }
  },
  mounted: function(){
    this.getLikeCookie;
  }
}

const WishList = {
  template: '<h1>Wish List</h1>',
  name: 'WishList',
}
const UserSettings = {
  template: '<h1>User Settings</h1>',
  name: 'UserSettings'
}
const ShoppingCart = {
  template: '<h1>Shopping Cart</h1>',
  name: 'ShoppingCart'
}

// router
const router = new VueRouter({
  routes: [   
    { path: '/', component: Home, name:'Home' },
    { path: '/user-settings', component: UserSettings, name:'UserSettings' },
    { path: '/wish-list', component: WishList, name:'WishList' },
    { path: '/shopping-cart', component: ShoppingCart, name:'ShoppingCart'}
  ]
})

const vue = new Vue({
  router
}).$mount('#app');