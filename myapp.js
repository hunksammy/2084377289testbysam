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
<title>W3.CSS</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<body>

<div class="w3-container w3-center w3-animate-top">
  <h1>Animation is Fun!</h1>
  <p>The w3-animate-top class slides in an element from the top.</p>
</div>

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
