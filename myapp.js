const Employees = [
  {name:'John Doe', department:'Tech', age:30},
  {name:'Jane Doe', department:'Mech', age:26},
  {name:'William Elliott', department:'Prod', age:33},
  {name:'Carl Ross', department:'Tech', age:20},
  {name:'Jeremy Scott', department:'Mech', age:36},
  {name:'Monica Geller', department:'Prod', age:23}, 
]

function Row (props){
  return(
    <tr>
      <td>{props.employee.name}</td>  
      <td>{props.employee.department}</td>
      <td>{props.employee.age}</td>
    </tr>
  );
}


class App extends React.Component {  
  constructor(props){
    super(props);
    this.state = {
      employees : Employees      
    }  
    this.handleSelectChnage = this.handleSelectChnage.bind(this);






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
        this.title = "hello world angular 6";
        // TODO: Define your Angular component implementation
    }
};
AppComponent = __decorate([
    Component({
        selector: 'my-app',
        template: `
   <h1>{{title}} </h1>
    TODO: Define your Angular ${VERSION.major} component.
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
