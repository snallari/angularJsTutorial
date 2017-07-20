/**
 * 
 */
angular.module('myapp',[ ]).controller('LevelA',function($scopr){
	$scope.title="level a"
		$scope.valueA=1;
	$scope.inc=function(){
		$scope.valueA++;
	};
}).
controller('Level B', function($scope){
	$scope.title="Level B"
	$scope.valueB=1;
	$scope.inc=function(){
		$scope.valueB++;
	};
}).
controller('LevelC',function($scope){
	$scope.title="Level c"
	$scope.valueC=1;
	$scope.inc=function(){
		$scope.valueC++;
	}
})