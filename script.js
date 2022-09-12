function OrderFormController($scope){

	$scope.services = [
		{
			name: 'Infants(0-5)',
            price: 500,
            quantity:0,
			active:false
		},{
			name: 'Children(6-17)',
            price: 1000,
            quantity:0,
			active:false
		},{
			name: 'Teenagers(18-23)',
            price: 2400,
            quantity:0,
			active:false
		},{
			name: 'Adults(24-60)',
            price: 3000,
            quantity:0,
			active:false
		},{
			name: 'Old(60-80)',
            price: 800,
            quantity:0,
			active:false
		}
    ];
	
    $scope.increaseItemAmount = function(item) {
        item.quantity++;
        item.active= true;
    }

    $scope.decreaseItemAmount = function(item) {
        item.quantity--;
        if (item.quantity <= 0) {
            item.quantity = 0;
            item.active = false;
        } else {
            item.active = true;
        }
    }

	$scope.total = function(){

		var total = 0;

		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price*s.quantity;
			}
		});

		return total;
    };
    
}
