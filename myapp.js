"use strict";
// app.js
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const { Component, VERSION } = ng.core;
let AppComponent = class AppComponent {
    constructor() {
        this.title = "hello world angular sammy";
        // TODO: Define your Angular component implementation sammysammyyy
    }
};
AppComponent = __decorate([
    Component({
        selector: 'my-app',
        template: `
   <h1>{{title}} this is my test sammy</h1>



<!DOCTYPE html>
<html>
<head>
<style>
:root {
  --blue: #1e90ff;
  --white: #ffffff; 
}

body {
  background-color: var(--blue);
}

h2 {
  border-bottom: 2px solid var(--blue);
}

.container {
  color: var(--blue);
  background-color: var(--white);
  padding: 15px;
}

.container button  {
  background-color: var(--white);
  color: var(--blue);
  border: 1px solid var(--blue);
  padding: 5px;
}
</style>

<script>
// Get the root element
var r = document.querySelector(':root');

// Create a function for getting a variable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
}

// Create a function for setting a variable value
function myFunction_set() {
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty('--blue', 'lightblue');
}
</script>
</head>
<body>

<h1>Get and Change CSS Variable With JavaScript</h1>

<div class="container">
  <h2>Lorem Ipsum</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit.</p>
  <p>
    <button>Yes</button>
    <button>No</button>
  </p>
</div>
<br>

<button type="button" onclick="myFunction_get()">Get CSS Variable with JavaScript</button>
<button type="button" onclick="myFunction_set()">Change CSS Variable with JavaScript</button>

</body>
</html>








    TODO: Define your Angular ye bhi testing hai ${VERSION.major} component.
  `
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
// main.js
const { BrowserModule } = ng.platformBrowser;
const { NgModule } = ng.core;
const { CommonModule } = ng.common;
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            CommonModule,
        ],
        declarations: [AppComponent],
        bootstrap: [AppComponent],
        providers: []
    })
], AppModule);
const { platformBrowserDynamic } = ng.platformBrowserDynamic;
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch(err => console.error(err));
console.log('hola');
