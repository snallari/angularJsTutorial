angular.module('myApp', []).controller('mycontroller', [ '$scope', '$http', function($scope, $http) {
	$scope.storeitems = {};
	$scope.kitchenitems = {};
	$scope.status = "";
	$scope.resetStore = function() {
		$scope.status = ";"
		$http.get('/reset/data').success(function(data, status, headers, config) {
			$scope.storeitems = data;
		}).error(function(data, status, headers, config) {
			$scope.status = data;
		});
	};
	$scope.buyItem = function(buyItem) {
		$http.post('/buy/item', {
			item : buyItem
		}).success(function(data, status, headers, config) {
			$scope.storeitems = data;
			if ($scope.kitchenitems.hasOwnProperty(buyItem)) {
				$scope.kitchenitems[buyItem] += 1;
			} else {
				$scope.kitchenitems[buyItem] = 1;
				$scope.status = "Purchased" + buyItem;
			}
		}).error(function(data, status, headers, config) {
			$scope.status = data.msg;
		});
	};
	$scope.useItem = function(useItem) {
		if ($scope.kitchenitems[useItem] > 0) {
			$scope.kitchenitems[useItem] -= 1;
		}
	};

} ]);