






$(document).ready(function(){
	
	
	 $('input[type="file"]').change(function(){
                if ($(this).val()) {
                    $('input[type="button"]').removeAttr('disabled');
                    // or, as has been pointed out elsewhere:
                    // $('input:submit').removeAttr('disabled'); 
                }				
            });
    
	
	impresora = window.localStorage.getItem("impresora");	
	if (impresora === "impresora_1"){
		$("#tipo").css("background", "#fffb00");
	}
	else if (impresora === "impresora_2"){
		$("#tipo").css("background", "#d11717");
	}
	
	
	
	var rut = window.localStorage.getItem("rut");
	//$(this).attr("action") = ;
	
	//$('#enviar').attr('action', 'http://192.168.1.143:5000/usuario/imprimir/'+rut+'');
	
	
	
	
	
	$("#item").click(function(){	
		
		
		//var dir = $(this).attr("action"); //recibe la url
		
	
		
		var datos = $('input[type=file]')[0].files[0];
		console.log(datos)
		var formData = new FormData()
		formData.append("impresora", window.localStorage.getItem("impresora"))
		formData.append('file',datos)
		//jQuery.each(jQuery('#file')[0].files, function(i, file) {			
		//	formData.append('file-'+i, file);
		//});
		
		
		
		
		console.log(formData)
		$.ajax({
			url: "http://192.168.1.143:5000/usuario/imprimir/"+rut+"",
			type: 'POST',			
			data: formData,
			contentType: 'multipart/form-data',
			cache: false,
			contentType: false,
			processData: false,			
			}).done(function(res){				
				alert(res)
				window.location="escanear.html";;
			});
			
		});	



});	
	
	



