angular.module('toolDemo', ['ui.bootstrap'])
.controller('demoCtrl', function($scope) {
    $scope.showStatus = true;
    $scope.switchStatus = 0;
    $scope.ifValue = true;
    $scope.showIf = function() {
      return $scope.ifValue;
    };
    $scope.hideIf = function() {
      return !$scope.ifValue;
    };
  
    $scope.increment = function() {
      $scope.switchStatus = ($scope.switchStatus === 0) ? 1 : 0;
    }
  });


import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent  {
  constructor(
    router: Router
  ) {
    router.events
          .pipe(filter((routerEvent: Event) => routerEvent instanceof NavigationEnd))
          .subscribe(() => window.scrollTo(0, 0));
  }
}
