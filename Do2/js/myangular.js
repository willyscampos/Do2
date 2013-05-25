var app = angular.module('lgapp', ['mongolabResourceHttp']);

app.constant('MONGOLAB_CONFIG', {
	API_KEY: '-C2VHsm14UZLMS7aP-ZBGJjN-C-er-Qp',
	DB_NAME: 'mysocial'
});

app.factory('Usuario', function ($mongolabResourceHttp) {
	return $mongolabResourceHttp('Usuario');
});

app.controller('LoginController', function ($scope, $location, Usuario) {
	ng = $scope;
	ng.objeto = { Email: '', Senha: '' };    		

	// functions
	$scope.doLogin = function () {
		$scope.qtd = Usuario.count({
			Email: ng.objeto.Email,
			Senha: ng.objeto.Senha
		}, retorno);                				
	}
    
	function retorno(result) {
		console.log(result);
		if (result == 0) {
			window.location = "index.html#home";
		}
		else {
			window.location = "index.html#inside";
		}
	}
	// end functions
});