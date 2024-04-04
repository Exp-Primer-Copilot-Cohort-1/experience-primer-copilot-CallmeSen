function skillsMember() {
  return {
    restrict: 'E',
    scope: {
      skills: '='
    },
    template: '<div ng-repeat="skill in skills">{{ skill }}</div>'
  };
}