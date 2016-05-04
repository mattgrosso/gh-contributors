(function() {
  'use strict';

  angular
    .module('gh')
    .directive('userData', UserData);

  function UserData() {
    return {
      restrict: 'EA',
      templateUrl: 'users/user.template.html',
      scope: {
        user: "=user"
      }
    };
  }

})();
