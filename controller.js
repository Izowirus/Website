var app = angular.module('app', []);
app.controller("controller", function ($scope) {
    $scope.parameter = {
        name: '',
        age: '',
        color: 'red',
        size: 'S'
    };
    $scope.myStyle = {
        width: '0px',
        height: '0px',
	    background: 'white'
    };
    $scope.parameters = [];
    $scope.colors = ['red', 'green', 'blue'];  
    $scope.nameRegex = /^[A-Z][a-z]+$/;
    $scope.sizeForSq = {S:'25px', M:'50px', L:'75px', XL:'100px'};
    var sizeColor = {red: createSizes(0,2,5,3),
                        green:  createSizes(2,4,1,6),
                        blue:  createSizes(3,4,0,3)
                    };
    function createSizes(S, M, L, XL) {
        return {S:S, M:M, L:L, XL:XL};
    }
    
    $scope.submitForm = function() {
        $scope.parameters.push(angular.copy($scope.parameter));
        sizeColor[$scope.parameter.color][$scope.parameter.size] -= 1;
        $scope.myForm.$setUntouched();
        $scope.myForm.$setPristine();
        $scope.parameter={};
    };
    $scope.change = function() {
        var stock = sizeColor[$scope.parameter.color][$scope.parameter.size];
        if(stock!==0){
            $scope.notInStock = false;
        } else {
            $scope.notInStock = true;
        }        
        drawSquare();
    }
     function drawSquare(){
        $scope.myStyle.width = $scope.sizeForSq[$scope.parameter.size];
        $scope.myStyle.height = $scope.myStyle.width;
        $scope.myStyle.background = $scope.parameter.color;
    }
    $scope.change();

});