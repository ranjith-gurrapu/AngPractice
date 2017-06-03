/**
 * Created by nareshit on 6/1/2017.
 */

app.controller("home",home);

home.$inject=["$scope","$stateParams"]

function home($scope,$stateParams){
    $scope.var_home=$stateParams.param1+"..."+$stateParams.param2+".."+
        $stateParams.param3;
}
