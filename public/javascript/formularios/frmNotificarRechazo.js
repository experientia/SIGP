frmNotificarRechazo = Ext.extend(frmNotificarRechazoUi, {
    initComponent: function() {
        frmNotificarRechazo.superclass.initComponent.call(this);
        Ext.getCmp('btnLimpiar').on('click',this.limpiar);
        Ext.getCmp('btnAceptar').on('click',this.aceptarPostulacion);
        Ext.getCmp('btnSalir').on('click',this.salir);
    },
    limpiar:function(){
    	Ext.getCmp('txtRechazo').reset();
		
    },
     aceptarPostulacion:function(){
    
    // Se verifica que los campos marcados como obligatorios
	// (allowBlank:false) esten llenos
	if (Ext.getCmp('txtRechazo').getValue()!='' ){
	        Ext.getCmp('formNotificarRechazo').getForm().submit({ waitMsg : 'Enviando datos...', 
			 												params:{ 
		 															}, 
			                                                failure: function (form, action){
                                  	                                   Ext.MessageBox.show({  
		                                    	                        title: 'Error',  
		                                    	                        msg: 'Error al ejecutar la operaci&oacute;n.',  
		                                    	                        buttons: Ext.MessageBox.OK,  
		                                    	                        icon: Ext.MessageBox.ERROR  
		                                    	                      });  
		                                    	                     },  
		                                                    success: function (form, action){                                              
		                                    	                    		Ext.MessageBox.show({  
				                                      	                        title: 'Informaci&oacute;n',  
				                                      	                        msg: 'Operaci&oacute;n exitosa.',  
				                                      	                        buttons: Ext.MessageBox.OK,  
				                                      	                        icon: Ext.MessageBox.INFO,
				                                      	                        fn: function (){
				                                    	                  		   Ext.getCmp('formNotificarRechazo').getForm().reset();
																				  Ext.getCmp('frmNotificarRechazoWin').close();                  	                    	  
																				  stgPostulaciones.reload();
				                                    	                       	}
				                                      	                       });
		                                    	                     }  //End Success
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
salir:function(){
  Ext.getCmp('formNotificarRechazo').getForm().reset();
  Ext.getCmp('frmNotificarRechazoWin').close();    
	
}
});
