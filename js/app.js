(function(){
  var app = angular.module('slackBook', []);

  app.controller("TabController", function() {
    this.tab = 1;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
      this.tab = setTab;
    };
  });

  app.directive("home",function(){
    return {
      restrict: "E",
      templateUrl: "views/home.html"
    }
  });

  app.directive("findSession",function(){
    return {
      restrict: "E",
      templateUrl: "views/find-session.html"
    }
  });

  app.directive("openSession",function(){
    return {
      restrict: "E",
      templateUrl: "views/open-session.html"
    }
  });

})();
