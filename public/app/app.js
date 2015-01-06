angular.module('app', []);

angular.module('app').controller('testCtrl', function($scope) {
    $scope.jobs = [{
        title: 'Sales Pearson',
        description: 'you will find dragons'
    }, {
        title: 'Accountant',
        description: 'you will use the keyboard'
    }];
});