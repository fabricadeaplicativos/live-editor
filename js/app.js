angular.module('editor', ['ang-drag-drop'])

.controller('DragAndDropCtrl', ['$scope', function ($scope) {


	$scope.doSomething = function () {
		alert('123123')
	}

}])