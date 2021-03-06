Ext.QuickTips.init(); 
frmEmpresaCoord = Ext.extend(frmEmpresaCoordUi, {
    initComponent: function() {
        frmEmpresaCoord.superclass.initComponent.call(this);
		Ext.getCmp('cmbEstado').on('select',this.actualizarCiudades);
		Ext.getCmp('btnRegistrar').on('click',this.registrarEmpresa);
		Ext.getCmp('btnActualizar').on('click',this.actualizarEmpresa);
		Ext.getCmp('btnLimpiar').on('click',this.limpiar);
		Ext.getCmp('btnSalir').on('click',this.salir);
	    },
	actualizarCiudades:function(){
	  Ext.getCmp('cmbCiudad').clearValue();
	  Ext.getCmp('cmbCiudad').store.reload({params: {idEstado: Ext.getCmp('cmbEstado').getValue()}});
	},
	registrarEmpresa:function(){
		// Se verifica que los campos marcados como obligatorios
		// (allowBlank:false) esten llenos
		if (Ext.getCmp('registroEmpresaForm').getForm().isValid() ){
			 Ext.getCmp('registroEmpresaForm').getForm().submit({ waitMsg : 'Enviando datos...', 
				 													params:{estado:Ext.getCmp('cmbEstado').getValue(),
				                                                        ciudad:Ext.getCmp('cmbCiudad').getValue()
				                                                        },
				                                                failure: function (form, action){
                                      	                                   Ext.MessageBox.show({  
			                                    	                        title: 'Error',  
			                                    	                        msg: 'Error al registrar.',  
			                                    	                        buttons: Ext.MessageBox.OK,  
			                                    	                        icon: Ext.MessageBox.ERROR  
			                                    	                      });  
			                                    	                     },  
			                                                    success: function (form, request){   
			                                    	                       Ext.MessageBox.show({  
			                                      	                        title: 'Informaci&oacute;n',  
			                                      	                        msg: 'Registro exitoso.<BR>Antes de continuar confirme su registro accediendo a la cuenta de correo ingresada.',  
			                                      	                        buttons: Ext.MessageBox.OK,  
			                                      	                        icon: Ext.MessageBox.INFO,
			                                      	                        fn: function (){
			                                      	                           stEmpresasFull.reload();
			                                    	                    	   Ext.getCmp('registroEmpresaForm').getForm().reset();
			                                    	                    	   Ext.getCmp('frmEmpresaWin').close();                                    	                           

			                                    	                       }
			                                      	                       });
			                                    	                      }  
				                                                    }); 
		} else {
		   Ext.MessageBox.show({
		     title: "Error",
		     msg: "Datos incompletos o no v&aacute;lidos, por favor verifique.",
		     width:400,
		     buttons: Ext.MessageBox.OK,
		     icon: Ext.MessageBox.ERROR
		    });
	}},
	limpiar:function(){
		 Ext.getCmp('registroEmpresaForm').getForm().reset();
	},
	salir:function(){
        Ext.getCmp('registroEmpresaForm').getForm().reset();
        Ext.getCmp('frmEmpresaWin').close();                                    	                           

	},
	actualizarEmpresa:function(){
		if (Ext.getCmp('registroEmpresaForm').getForm().isValid()){
					 Ext.Ajax.request({
	      			url: '/SIGP/empresa/actualizarEmpresa',
	      			method: 'POST',
	      			params: {pEmpresaId:Ext.getCmp('txtIdEmpresa').getValue(),
      					pRazonSocial:Ext.getCmp('txtRazonSocial').getValue(),
	  					pDireccion:Ext.getCmp('txtDireccion').getValue(),
	  					pCiudad:Ext.getCmp('cmbCiudad').getValue(),
	  					pEstado:Ext.getCmp('cmbEstado').getValue(),
	  					pTelefono:Ext.getCmp('txtTelefono').getValue(),
	  					pTelefono2:Ext.getCmp('txtTelefono2').getValue(),
	  					pDescripcion:Ext.getCmp('txtDescripcion').getValue(),
						pWeb:Ext.getCmp('txtWeb').getValue(),
						pRepresentante:Ext.getCmp('txtRepresentante').getValue(),
						pCargo:Ext.getCmp('txtCargo').getValue(),
						pCorreo: ''
	      				},
	      			success: function(respuesta, request) {
	      				var jsonData = Ext.util.JSON.decode(respuesta.responseText);
	      				if ((jsonData.success ==true)){
	      					 Ext.MessageBox.show({  
	      			           title: 'Informaci&oacute;n',  
	      			           msg: 'Actualizaci&oacute;n exitosa.',  
	      			           buttons: Ext.MessageBox.OK,  
	      			           icon: Ext.MessageBox.INFO,
	      			           fn: function (){
	      			     	 	 stEmpresasFull.reload();
	      			        	}
	      			          });
	      				}else{
	      				  Ext.MessageBox.show({  
	      	                title: 'Actualizaci&oacute;n no completada.',  
	      	                msg: 'No se  actualizaron los  campos.',  
	      	                buttons: Ext.MessageBox.OK,  
	      	                icon: Ext.MessageBox.ERROR
	      	               });	
	      				}         				
	      			},
	      			failure: function ( respuesta, request) {
	      				Ext.MessageBox.show({
	 	        		     title: "Operaci&oacute;n no realizada.",
	 	        		     msg: "No se ha podido actualizar. Intente de nuevo.",
	 	        		     width:400,
	 	        		     buttons: Ext.MessageBox.OK,
	 	        		     icon: Ext.MessageBox.ERROR
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

}

});
