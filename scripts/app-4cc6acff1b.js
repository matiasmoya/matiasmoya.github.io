(function() {
  angular.module('matt', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ui.router']);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lm1vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE1BQWYsRUFBdUIsQ0FBQyxXQUFELEVBQWMsV0FBZCxFQUEyQixZQUEzQixFQUF5QyxXQUF6QyxDQUF2QjtBQUFBIiwiZmlsZSI6ImluZGV4Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdtYXR0JywgWyduZ0FuaW1hdGUnLCAnbmdDb29raWVzJywgJ25nU2FuaXRpemUnLCAndWkucm91dGVyJ11cbiJdfQ==
(function() {
  angular.module("matt").directive('acmeNavbar', function() {
    var NavbarController, directive;
    NavbarController = function(moment) {
      var vm;
      vm = this;
      vm.relativeDate = moment(vm.creationDate).fromNow();
    };
    return directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
        creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxNQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsWUFEYixFQUMyQixTQUFBO0FBRXZCLFFBQUE7SUFBQSxnQkFBQSxHQUFtQixTQUFDLE1BQUQ7QUFDakIsVUFBQTtNQUFBLEVBQUEsR0FBSztNQUVMLEVBQUUsQ0FBQyxZQUFILEdBQWtCLE1BQUEsQ0FBTyxFQUFFLENBQUMsWUFBVixDQUF1QixDQUFDLE9BQXhCLENBQUE7SUFIRDtXQU1uQixTQUFBLEdBQ0U7TUFBQSxRQUFBLEVBQVUsR0FBVjtNQUNBLFdBQUEsRUFBYSxtQ0FEYjtNQUVBLEtBQUEsRUFBTztRQUFBLFlBQUEsRUFBYyxHQUFkO09BRlA7TUFHQSxVQUFBLEVBQVksZ0JBSFo7TUFJQSxZQUFBLEVBQWMsSUFKZDtNQUtBLGdCQUFBLEVBQWtCLElBTGxCOztFQVRxQixDQUQzQjtBQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSBcIm1hdHRcIlxuICAuZGlyZWN0aXZlICdhY21lTmF2YmFyJywgLT5cblxuICAgIE5hdmJhckNvbnRyb2xsZXIgPSAobW9tZW50KSAtPlxuICAgICAgdm0gPSB0aGlzXG4gICAgICAjIFwidm0uY3JlYXRpb25cIiBpcyBhdmFpYmxlIGJ5IGRpcmVjdGl2ZSBvcHRpb24gXCJiaW5kVG9Db250cm9sbGVyOiB0cnVlXCJcbiAgICAgIHZtLnJlbGF0aXZlRGF0ZSA9IG1vbWVudCh2bS5jcmVhdGlvbkRhdGUpLmZyb21Ob3coKVxuICAgICAgcmV0dXJuXG5cbiAgICBkaXJlY3RpdmUgPVxuICAgICAgcmVzdHJpY3Q6ICdFJ1xuICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmh0bWwnXG4gICAgICBzY29wZTogY3JlYXRpb25EYXRlOiAnPSdcbiAgICAgIGNvbnRyb2xsZXI6IE5hdmJhckNvbnRyb2xsZXJcbiAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZVxuIl19
(function() {
  angular.module("matt").factory('githubContributor', ["$log", "$http", function($log, $http) {
    var apiHost, getContributors, service;
    apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
    getContributors = function(limit) {
      var getContributorsComplete, getContributorsFailed;
      getContributorsComplete = function(response) {
        return response.data;
      };
      getContributorsFailed = function(error) {
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      };
      if (!limit) {
        limit = 30;
      }
      return $http.get(apiHost + '/contributors?per_page=' + limit).then(getContributorsComplete)["catch"](getContributorsFailed);
    };
    return service = {
      apiHost: apiHost,
      getContributors: getContributors
    };
  }]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE1BQWYsQ0FDRSxDQUFDLE9BREgsQ0FDVyxtQkFEWCxFQUNnQyxTQUFDLElBQUQsRUFBTyxLQUFQO0FBQzVCLFFBQUE7SUFBQSxPQUFBLEdBQVU7SUFFVixlQUFBLEdBQWtCLFNBQUMsS0FBRDtBQUVoQixVQUFBO01BQUEsdUJBQUEsR0FBMEIsU0FBQyxRQUFEO2VBQ3hCLFFBQVEsQ0FBQztNQURlO01BRzFCLHFCQUFBLEdBQXdCLFNBQUMsS0FBRDtRQUN0QixJQUFJLENBQUMsS0FBTCxDQUFXLG1DQUFBLEdBQXNDLE9BQU8sQ0FBQyxNQUFSLENBQWUsS0FBSyxDQUFDLElBQXJCLEVBQTJCLElBQTNCLENBQWpEO01BRHNCO01BSXhCLElBQUcsQ0FBQyxLQUFKO1FBQ0UsS0FBQSxHQUFRLEdBRFY7O2FBRUEsS0FBSyxDQUFDLEdBQU4sQ0FBVSxPQUFBLEdBQVUseUJBQVYsR0FBc0MsS0FBaEQsQ0FBc0QsQ0FBQyxJQUF2RCxDQUE0RCx1QkFBNUQsQ0FBb0YsQ0FBQyxPQUFELENBQXBGLENBQTJGLHFCQUEzRjtJQVhnQjtXQWFsQixPQUFBLEdBQ0U7TUFBQSxPQUFBLEVBQVMsT0FBVDtNQUNBLGVBQUEsRUFBaUIsZUFEakI7O0VBakIwQixDQURoQztBQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlIFwibWF0dFwiXG4gIC5mYWN0b3J5ICdnaXRodWJDb250cmlidXRvcicsICgkbG9nLCAkaHR0cCkgLT5cbiAgICBhcGlIb3N0ID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhcidcblxuICAgIGdldENvbnRyaWJ1dG9ycyA9IChsaW1pdCkgLT5cblxuICAgICAgZ2V0Q29udHJpYnV0b3JzQ29tcGxldGUgPSAocmVzcG9uc2UpIC0+XG4gICAgICAgIHJlc3BvbnNlLmRhdGFcblxuICAgICAgZ2V0Q29udHJpYnV0b3JzRmFpbGVkID0gKGVycm9yKSAtPlxuICAgICAgICAkbG9nLmVycm9yICdYSFIgRmFpbGVkIGZvciBnZXRDb250cmlidXRvcnMuXFxuJyArIGFuZ3VsYXIudG9Kc29uKGVycm9yLmRhdGEsIHRydWUpXG4gICAgICAgIHJldHVyblxuXG4gICAgICBpZiAhbGltaXRcbiAgICAgICAgbGltaXQgPSAzMFxuICAgICAgJGh0dHAuZ2V0KGFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0nICsgbGltaXQpLnRoZW4oZ2V0Q29udHJpYnV0b3JzQ29tcGxldGUpLmNhdGNoIGdldENvbnRyaWJ1dG9yc0ZhaWxlZFxuXG4gICAgc2VydmljZSA9XG4gICAgICBhcGlIb3N0OiBhcGlIb3N0XG4gICAgICBnZXRDb250cmlidXRvcnM6IGdldENvbnRyaWJ1dG9yc1xuIl19
(function() {
  angular.module("matt").controller("MainController", ["$timeout", function($timeout) {
    var activate, vm;
    vm = this;
    vm.codesample = "<h2>Hello!</h2> <p>I didn't wrote anything yet, because i need to choose my Backend API yet :3 but... look! Syntax highlighting is already working! yay</p> <pre class='language-ruby' data-jsonp='https://api.github.com/gists/aff67cd65f4f0e1ddae5' data-filename='devise_sessions_controller.rb'> </pre> <p> There will be tons of how-to's, code snippets, and nerd stuff soon. </p>";
    activate = function() {
      $timeout((function() {
        Prism.highlightAll();
        Prism.plugins.jsonphighlight.highlight();
      }), 1000);
    };
    activate();
  }]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsTUFBZixDQUNFLENBQUMsVUFESCxDQUNjLGdCQURkLEVBQ2dDLFNBQUMsUUFBRDtBQUM1QixRQUFBO0lBQUEsRUFBQSxHQUFLO0lBQ0wsRUFBRSxDQUFDLFVBQUgsR0FBZ0I7SUFVaEIsUUFBQSxHQUFXLFNBQUE7TUFDVCxRQUFBLENBQVMsQ0FBQyxTQUFBO1FBQ1IsS0FBSyxDQUFDLFlBQU4sQ0FBQTtRQUNBLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQTdCLENBQUE7TUFGUSxDQUFELENBQVQsRUFJRyxJQUpIO0lBRFM7SUFRWCxRQUFBLENBQUE7RUFwQjRCLENBRGhDO0FBQUEiLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSBcIm1hdHRcIlxuICAuY29udHJvbGxlciBcIk1haW5Db250cm9sbGVyXCIsICgkdGltZW91dCkgLT5cbiAgICB2bSA9IHRoaXNcbiAgICB2bS5jb2Rlc2FtcGxlID0gXCI8aDI+SGVsbG8hPC9oMj5cbiAgICA8cD5JIGRpZG4ndCB3cm90ZSBhbnl0aGluZyB5ZXQsIGJlY2F1c2UgaSBuZWVkIHRvIGNob29zZSBteSBCYWNrZW5kIEFQSSB5ZXQgOjMgYnV0Li4uIGxvb2shIFN5bnRheCBoaWdobGlnaHRpbmcgaXMgYWxyZWFkeSB3b3JraW5nISB5YXk8L3A+XG4gICAgPHByZVxuICAgICAgY2xhc3M9J2xhbmd1YWdlLXJ1YnknXG4gICAgICBkYXRhLWpzb25wPSdodHRwczovL2FwaS5naXRodWIuY29tL2dpc3RzL2FmZjY3Y2Q2NWY0ZjBlMWRkYWU1J1xuICAgICAgZGF0YS1maWxlbmFtZT0nZGV2aXNlX3Nlc3Npb25zX2NvbnRyb2xsZXIucmInPlxuICAgIDwvcHJlPlxuICAgIDxwPiBUaGVyZSB3aWxsIGJlIHRvbnMgb2YgaG93LXRvJ3MsIGNvZGUgc25pcHBldHMsIGFuZCBuZXJkIHN0dWZmIHNvb24uIDwvcD5cbiAgICBcIlxuXG4gICAgYWN0aXZhdGUgPSAtPlxuICAgICAgJHRpbWVvdXQgKC0+XG4gICAgICAgIFByaXNtLmhpZ2hsaWdodEFsbCgpXG4gICAgICAgIFByaXNtLnBsdWdpbnMuanNvbnBoaWdobGlnaHQuaGlnaGxpZ2h0KClcbiAgICAgICAgcmV0dXJuXG4gICAgICApLCAxMDAwXG4gICAgICByZXR1cm5cblxuICAgIGFjdGl2YXRlKClcbiAgICByZXR1cm5cbiJdfQ==
(function() {
  angular.module("matt").filter("html_safe", [
    '$sce', function($sce) {
      return function(text) {
        return $sce.trustAsHtml(text);
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcnMvaHRtbF9zYWZlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsTUFBZixDQUNFLENBQUMsTUFESCxDQUNVLFdBRFYsRUFDdUI7SUFBQyxNQUFELEVBQVMsU0FBQyxJQUFEO2FBQzVCLFNBQUMsSUFBRDtlQUNFLElBQUksQ0FBQyxXQUFMLENBQWlCLElBQWpCO01BREY7SUFENEIsQ0FBVDtHQUR2QjtBQUFBIiwiZmlsZSI6ImZpbHRlcnMvaHRtbF9zYWZlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgXCJtYXR0XCJcbiAgLmZpbHRlciBcImh0bWxfc2FmZVwiLCBbJyRzY2UnLCAoJHNjZSkgLT5cbiAgICAodGV4dCkgLT5cbiAgICAgICRzY2UudHJ1c3RBc0h0bWwgdGV4dFxuICBdXG4iXX0=
(function() {
  angular.module("matt").run(["$log", function($log) {
    return $log.debug('runBlock end');
  }]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJ1bi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE1BQWYsQ0FDRSxDQUFDLEdBREgsQ0FDTyxTQUFDLElBQUQ7V0FDSCxJQUFJLENBQUMsS0FBTCxDQUFXLGNBQVg7RUFERyxDQURQO0FBQUEiLCJmaWxlIjoiaW5kZXgucnVuLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgXCJtYXR0XCJcbiAgLnJ1biAoJGxvZykgLT5cbiAgICAkbG9nLmRlYnVnICdydW5CbG9jayBlbmQnXG4iXX0=
(function() {
  angular.module("matt").config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("home", {
      url: "/",
      templateUrl: "app/main/main.html",
      controller: "MainController",
      controllerAs: "main"
    });
    return $urlRouterProvider.otherwise('/');
  }]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsTUFBZixDQUNFLENBQUMsTUFESCxDQUNVLFNBQUMsY0FBRCxFQUFpQixrQkFBakI7SUFDTixjQUNFLENBQUMsS0FESCxDQUNTLE1BRFQsRUFFSTtNQUFBLEdBQUEsRUFBSyxHQUFMO01BQ0EsV0FBQSxFQUFhLG9CQURiO01BRUEsVUFBQSxFQUFZLGdCQUZaO01BR0EsWUFBQSxFQUFjLE1BSGQ7S0FGSjtXQU9BLGtCQUFrQixDQUFDLFNBQW5CLENBQTZCLEdBQTdCO0VBUk0sQ0FEVjtBQUFBIiwiZmlsZSI6ImluZGV4LnJvdXRlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgXCJtYXR0XCJcbiAgLmNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikgLT5cbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlIFwiaG9tZVwiLFxuICAgICAgICB1cmw6IFwiL1wiXG4gICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC9tYWluL21haW4uaHRtbFwiXG4gICAgICAgIGNvbnRyb2xsZXI6IFwiTWFpbkNvbnRyb2xsZXJcIlxuICAgICAgICBjb250cm9sbGVyQXM6IFwibWFpblwiXG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlICcvJ1xuIl19
(function() {
  angular.module('matt').constant('malarkey', malarkey).constant('toastr', toastr).constant('moment', moment);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvbnN0YW50cy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE1BQWYsQ0FDRSxDQUFDLFFBREgsQ0FDWSxVQURaLEVBQ3dCLFFBRHhCLENBRUUsQ0FBQyxRQUZILENBRVksUUFGWixFQUVzQixNQUZ0QixDQUdFLENBQUMsUUFISCxDQUdZLFFBSFosRUFHc0IsTUFIdEI7QUFBQSIsImZpbGUiOiJpbmRleC5jb25zdGFudHMuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnbWF0dCcpXG4gIC5jb25zdGFudCAnbWFsYXJrZXknLCBtYWxhcmtleVxuICAuY29uc3RhbnQgJ3RvYXN0cicsIHRvYXN0clxuICAuY29uc3RhbnQgJ21vbWVudCcsIG1vbWVudFxuIl19
(function() {
  angular.module("matt").config(["$logProvider", "toastr", function($logProvider, toastr) {
    $logProvider.debugEnabled(true);
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-top-right';
    toastr.options.preventDuplicates = true;
    return toastr.options.progressBar = true;
  }]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvbmZpZy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLE1BQWYsQ0FDRSxDQUFDLE1BREgsQ0FDVSxTQUFDLFlBQUQsRUFBZSxNQUFmO0lBRU4sWUFBWSxDQUFDLFlBQWIsQ0FBMEIsSUFBMUI7SUFFQSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQWYsR0FBeUI7SUFDekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFmLEdBQStCO0lBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWYsR0FBbUM7V0FDbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFmLEdBQTZCO0VBUHZCLENBRFY7QUFBQSIsImZpbGUiOiJpbmRleC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSBcIm1hdHRcIlxuICAuY29uZmlnICgkbG9nUHJvdmlkZXIsIHRvYXN0cikgLT5cbiAgICAjIEVuYWJsZSBsb2dcbiAgICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkIHRydWVcbiAgICAjIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICAgIHRvYXN0ci5vcHRpb25zLnRpbWVPdXQgPSAzMDAwXG4gICAgdG9hc3RyLm9wdGlvbnMucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnXG4gICAgdG9hc3RyLm9wdGlvbnMucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlXG4gICAgdG9hc3RyLm9wdGlvbnMucHJvZ3Jlc3NCYXIgPSB0cnVlXG4iXX0=
angular.module("matt").run(["$templateCache", function($templateCache) {$templateCache.put("app/main/main.html","<div class=\"l-main\"><div><acme-navbar creationdate=\"main.creationDate\"></acme-navbar></div><div class=\"header bg-head\"><div class=\"message-wrapper\"><div class=\"welcome-message\"><h2>Captain\'s log</h2><h3>Money for nothing and devs for free</h3></div></div></div><div class=\"container\"><div class=\"posts\"><div class=\"content\" ng-bind-html=\"main.codesample | html_safe\"></div></div><div class=\"footer\"><p>This blog is powered by Angular + Github pages!</p></div></div></div>");
$templateCache.put("app/components/navbar/navbar.html","<nav class=\"navbar\"><a href=\"https://github.com/Swiip/generator-gulp-angular\">Matt Moya</a><ul><li class=\"active\"><a ng-href=\"#\">Home</a></li><li><a ng-href=\"#\">About</a></li><li><a ng-href=\"#\">Contact</a></li></ul></nav>");}]);