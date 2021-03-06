frmAceptarPostulacion = Ext.extend(frmAceptarPostulacionUi, {
    initComponent: function() {
        frmAceptarPostulacion.superclass.initComponent.call(this);
        Ext.getCmp('btnSalir').on('click',this.cancelar);
        Ext.getCmp('btnLimpiar').on('click',this.limpiar);
        Ext.getCmp('btnAceptarPost').on('click',this.aceptarPostulacion);
   },
    limpiar:function(){
		Ext.getCmp('dateFechaInicioEst').reset();
		Ext.getCmp('dateFechaCulminacionEst').reset();
		Ext.getCmp('cmbTutorEmp').reset();  
    },
    cancelar:function(){
  		Ext.getCmp('formAceptarPostulacion').getForm().reset();
  		Ext.getCmp('frmAceptarPostulacionWin').close();    
    },
     aceptarPostulacion:function(){
    // Se verifica que los campos marcados como obligatorios
	// (allowBlank:false) esten llenos
	if (Ext.getCmp('formAceptarPostulacion').getForm().isValid()  ){
	        Ext.getCmp('formAceptarPostulacion').getForm().submit({ waitMsg : 'Enviando datos...', 
			 												params:{
			 														pTutor:Ext.getCmp('cmbTutorEmp').getValue()
			 														
		 															}, 
			                                                failure: function (form, action){
			                                                	    Ext.MessageBox.show({  
		                                    	                        title: 'Operaci&oacute;n no exitosa',  
		                                    	                        msg: action.result.errorMsj,  
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
				                                    	                    	  Ext.getCmp('formAceptarPostulacion').getForm().reset();
				                                    	                    	  Ext.getCmp('frmAceptarPostulacionWin').close();    
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
}
});
