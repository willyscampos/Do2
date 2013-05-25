// JavaScript Document
// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
}

// Put your custom code here
$(document).ready(function (e) {
	$("#frmLogin").submit(function (e) {
        
        
		var lData = new Date();
        console.log(lData);

		var formCadastro = {
			'Nome': $('#Nome').val(),
			'Senha': $('#Senha').val(),
			'Email': $('#Email').val(),
			'DataRegisro': lData
		};
        
		var form_data = JSON.stringify(formCadastro);
		var form_url = "https://api.mongolab.com/api/1/databases/mysocial/collections/Usuario?apiKey=-C2VHsm14UZLMS7aP-ZBGJjN-C-er-Qp";
		var form_method = $(this).attr("method").toUpperCase();

		$.ajax({
			url: form_url,
			type: form_method,
			data: form_data,
			contentType: 'application/json',
			cache: false,
			dataType: 'json',
			success: function (returnhtml) {                                
				window.location = "index.html#home";
			}
		});
	});
	
});