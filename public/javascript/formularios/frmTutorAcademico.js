/*
 * File: frmTutorAcademico.js
 * Date: Sun Jul 04 2011 22:40:39 GMT-0430 (Hora estándar de Venezuela)
 * 
 * This file was generated by Ext Designer version 1.1.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be generated the first time you export.
 *
 * You should implement event handling and custom methods in this
 * class.
 */


Ext.apply(Ext.form.VTypes, {
	soloNumeroMask: /[ \d\-\(\)]/,
	soloNumero: function(value,field){  
    return value.replace(/[ \-\(\)]/g,'').length == 12 ;
}
});

Ext.apply(Ext.form.VTypes, {
	emailIguales: function(val, field) {
	if (field.campoInicial) {
		var email = Ext.getCmp(field.campoInicial);
		if  (val != email.getValue()){
			field.markInvalid(); 
			return false;
		}
	}
	return true;
},
emailIgualesText:'Cuentas de correo no coindicen.<Br/>Por favor, verifiquelas.'
});



var evento = "";
frmTutorAcademico = Ext.extend(frmTutorAcademicoUi, {
    initComponent: function() {
    	frmTutorAcademico.superclass.initComponent.call(this);
        Ext.getCmp('btnCancelar').on('click',this.cancelar);
        Ext.getCmp('btnGuardar').on('click',this.guardarTutor);
        Ext.getCmp('btnSalir').on('click',this.salir);
        Ext.getCmp('cmbDecanato').on('select',this.cargarDepartamentos);
        //Ext.getCmp('txtCedula').on('submit',this.buscarTutor);
       Ext.getCmp('txtCedula').on('blur',this.buscarTutor);
        Ext.getCmp('txtCedula').enable();
		Ext.getCmp('txtCedula').focus();
        //Ext.getCmp('txtCedula').on('keypress',this.teclaEnter);
    },
    
    salir:function(){
    	Ext.getCmp('frmTutorAcademicoWin').close();   
   	
   },
   
    cancelar:function(){
    	 Ext.getCmp('registroTutorForm').getForm().reset();
    	 Ext.getCmp('txtCedula').enable();
    	 habilitarCampos(true);
    },
    
    cargarDepartamentos:function(){
    	Ext.getCmp('cmbDepartamento').clearValue();
  	  	Ext.getCmp('cmbDepartamento').store.reload({params: {decanato_id: Ext.getCmp('cmbDecanato').getValue()}});
    },
    
    guardarTutor:function(){
    		if (Ext.getCmp('registroTutorForm').getForm().isValid()){
    			Ext.getCmp('registroTutorForm').getForm().submit({
    				waitMsg : 'Enviando datos...', 
			 											
    				params:{txtCedula:  Ext.getCmp('txtCedula').getValue(),
							departamento: Ext.getCmp('cmbDepartamento').getValue(),
							decanato: Ext.getCmp('cmbDecanato').getValue(),
							tipoevento: evento
						}, 
			                                                
						failure: function (form, action){          	                                 
							Ext.MessageBox.show({  
								title: 'Error',  
								msg: 'Error al guardar.',  
								buttons: Ext.MessageBox.OK,  
								icon: Ext.MessageBox.ERROR  
							});  
						},  
		                                                    
						success: function (form, action){                                              
							Ext.MessageBox.show({  
								title: 'Informaci&oacute;n',  
								msg: 'Registro exitoso.',  
								buttons: Ext.MessageBox.OK,  
								icon: Ext.MessageBox.INFO,
								fn: function (){
									Ext.getCmp('registroTutorForm').getForm().reset();
									Ext.getCmp('frmTutorAcademicoWin').close();    
							}
							});
						}
    			}); 
	
    		}else{
    			Ext.MessageBox.show({
    				title: "Error",
    				msg: "Datos incompletos o no v&aacute;lidos, por favor verifique.",
    				width:400,
    				buttons: Ext.MessageBox.OK,
    				icon: Ext.MessageBox.ERROR
    			});
    		}
    },	
    
	buscarTutor:function(){
		var cedula = Ext.getCmp('txtCedula');
		if (cedula.getRawValue().length >= 6){
			Ext.Ajax.request({
				url: '/SIGP/tutorAcademico/buscarTutorAcad',
				method: 'POST',
				params: {cedula: cedula.getValue()},
				success: function(respuesta, request) {
	      			var jsonData = Ext.util.JSON.decode(respuesta.responseText);
	      				if ((jsonData.success == false)){
	      					habilitarCampos(true);
	      					evento = "registrar";
	      				}else if((jsonData.success == true)){
	      					Ext.getCmp('txtCedula').disable();
	      					Ext.MessageBox.show({
	      	    				title: "Error",
	      	    				msg: 'La c&eacute;dula: '+cedula.getValue()+', ya est&aacute registrada.<BR> Verifique sus datos.',
	      	    				width:400,
	      	    				buttons: Ext.MessageBox.OK,
	      	    				icon: Ext.MessageBox.ERROR
	      	    			});
	      					Ext.getCmp('txtCedula').setValue('');
	      					Ext.getCmp('txtCedula').enable();
	      					Ext.getCmp('txtCedula').focus();
	      				}
				}
		});
	}
}

});

 function habilitarCampos(flag){
	if (flag==true){
		Ext.getCmp('txtNombre').enable();
		Ext.getCmp('txtApellido').enable();
		Ext.getCmp('txtTelefono').enable();
		Ext.getCmp('txtCorreo').enable();
		Ext.getCmp('txtRepetirCorreo').enable();
     	Ext.getCmp('txtCargo').enable();
     	Ext.getCmp('cmbDecanato').enable();
     	Ext.getCmp('cmbDepartamento').enable();
	}else{
		Ext.getCmp('txtNombre').disable();
		Ext.getCmp('txtApellido').disable();
		Ext.getCmp('txtTelefono').disable();
		Ext.getCmp('txtCorreo').disable();
		Ext.getCmp('txtRepetirCorreo').disable();
     	Ext.getCmp('txtCargo').disable();
     	Ext.getCmp('cmbDecanato').disable();
     	Ext.getCmp('cmbDepartamento').disable();
		
	}
	
}