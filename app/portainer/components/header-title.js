angular.module('portainer.app')
.directive('rdHeaderTitle', ['Authentication', 'StateManager', function rdHeaderTitle(Authentication, StateManager) {
  var directive = {
    requires: '^rdHeader',
    scope: {
      titleText: '@'
    },
    link: function (scope, iElement, iAttrs) {
      scope.username = Authentication.getUserDetails().username;
    },
    transclude: true,
    // template: '<div class="page white-space-normal">{{titleText}}<span class="header_title_content" ng-transclude></span><span class="pull-right user-box" ng-if="username"><i class="fa fa-user-circle" aria-hidden="true"></i> {{username}}</span><a ui-sref="portainer.support" class="pull-right" style="font-size:14px;margin-right:15px;margin-top:2px;"><span class="fa fa-life-ring fa-fw red-icon"></span>  Portainer support</a></div>',
    template: '<div class="page white-space-normal">{{titleText}}<span class="header_title_content" ng-transclude></span><span class="pull-right user-box" ng-if="username"><i class="fa fa-user-circle" aria-hidden="true"></i> {{username}}</span></div>',
    restrict: 'E'
  };
  return directive;
}]);
