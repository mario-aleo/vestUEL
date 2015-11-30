"use strict";

angular.module("ngapp", [ "ngTouch", "ui.router", "ngCordova", "ngStorage" ])

.run(function($rootScope, $cordovaDevice, $cordovaStatusbar){
    document.addEventListener("deviceready", function () {
      //StatusBar.overlaysWebView(false);
      $cordovaStatusbar.overlaysWebView(false);
      //StatusBar.backgroundColorByName("black");
      $cordovaStatusbar.styleColor('black');
    }, false);

});
