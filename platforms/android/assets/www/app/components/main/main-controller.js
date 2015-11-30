"use strict";

angular.module("ngapp").controller("MainController", function(shared, $state, $scope){

    var ctrl = this;

    this.sideMenuType = 'right-drawer';

    this.sideMenu = document.getElementById('sideMenu');

    this.flipMenu = function() {
      if (ctrl.sideMenu.hasAttribute(ctrl.sideMenuType)) {
        ctrl.sideMenu.removeAttribute(ctrl.sideMenuType);
      } else {
        ctrl.sideMenu.setAttribute(ctrl.sideMenuType, '');
      }
    }

    this.test = function(){
      ctrl.flipMenu();
    }

});
