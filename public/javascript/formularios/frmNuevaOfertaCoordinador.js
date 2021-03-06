frmNuevaOfertaCoordinador = Ext.extend(frmNuevaOfertaUi, {
    initComponent: function() {
        frmNuevaOfertaCoordinador.superclass.initComponent.call(this);
        Ext.getCmp('btnLimpiar').on('click',this.limpiar);
        Ext.getCmp('btnSalir').on('click',this.salir);
        Ext.getCmp('btnGuardar').on('click',this.grabarOferta);
        Ext.getCmp('btnGuardarPublicar').on('click',this.grabarOferta);
        Ext.getCmp('btnActualizar').on('click',this.actualizarOferta);
    },
     salir:function(){
  		Ext.getCmp('formNuevaOferta').getForm().reset();
  	 	Ext.getCmp('frmNuevaOfertaWin').close();    
    },
    limpiar:function(){
    	// Ext.getCmp('formNuevaOferta').getForm().reset();
    	Ext.getCmp('txtTitulo').reset();
		Ext.getCmp('txtDescripcion').reset();
		Ext.getCmp('txtVacantes').reset();
		Ext.getCmp('txtCupos').reset();
		Ext.getCmp('dateFechaCierre').reset();
		Ext.getCmp('dateFechaCulminacionEst').reset();
		Ext.getCmp('dateFechaInicioEst').reset();
		Ext.getCmp('cmbArea').reset();
		Ext.getCmp('cmbTipo').reset();  
    },
     grabarOferta:function(){
    	var tipoEvento=' ';
    	if (this.id=='btnGuardar'){
    		tipoEvento='save';
    	}else if (this.id=='btnGuardarPublicar'){
    		tipoEvento='saveAndPublish';
    		}
    // Se verifica que los campos marcados como obligatorios
	// (allowBlank:false) esten llenos
	if (Ext.getCmp('formNuevaOferta').getForm().isValid() && Ext.getCmp('txtDescripcion').getValue()!='' ){
		if(Ext.getCmp('txtCupos').getValue()==0 || (Ext.getCmp('txtVacantes').getValue()<=Ext.getCmp('txtCupos').getValue())){
		        Ext.getCmp('formNuevaOferta').getForm().submit({ waitMsg : 'Enviando datos...', 
			 												params:{ pTipoEvento:tipoEvento,
			 														pArea:Ext.getCmp('cmbArea').getValue(),
			 														pTipoOferta:Ext.getCmp('cmbTipo').getValue(),
			 														pEmpresaId:Ext.getCmp('cmbEmpresa').getValue()   
		 															}, 
			                                                failure: function (form, action){
                                  	                                   Ext.MessageBox.show({  
		                                    	                        title: 'Error',  
		                                    	                        msg: 'Error al registrar.',  
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
				                                    	                    	  Ext.getCmp('formNuevaOferta').getForm().reset();
				                                    	                    	  Ext.getCmp('frmNuevaOfertaWin').close();    
				                                    	                    	  stOfertas.reload();
				                                    	                       	}
				                                      	                       });
		                                    	                     }  //End Success
			                                                    }); 
	} else {
			Ext.MessageBox.show({
			     title: "Informaci&oacute;n",
			     msg: "La cantidad de vacantes no puede ser mayor que el n&uacute;mero m&aacuteximo de postulantes.",
			     width:400,
			     buttons: Ext.MessageBox.OK,
			     icon: Ext.MessageBox.ERROR
			    });
		}
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
actualizarOferta:function(){
	if (Ext.getCmp('formNuevaOferta').getForm().isValid() && Ext.getCmp('txtDescripcion').getValue()!='' ){
		if(Ext.getCmp('txtCupos').getValue()==0 || (Ext.getCmp('txtVacantes').getValue()<=Ext.getCmp('txtCupos').getValue())){
		
			 Ext.Ajax.request({
	      			url: '/SIGP/oferta/registrar',
	      			method: 'POST',
	      			params: {txtIdOfertaHidden:Ext.getCmp('txtIdOfertaHidden').getValue(),
      					txtTitulo:Ext.getCmp('txtTitulo').getValue(),
	  					txtDescripcion:Ext.getCmp('txtDescripcion').getValue(),
	  					txtVacantes:Ext.getCmp('txtVacantes').getValue(),
	  					txtCupos:Ext.getCmp('txtCupos').getValue(),
	  					dateFechaCierre:Ext.getCmp('dateFechaCierre').getRawValue(),
	  					dateFechaCulminacionEst:Ext.getCmp('dateFechaCulminacionEst').getRawValue(),
	  					dateFechaInicioEst:Ext.getCmp('dateFechaInicioEst').getRawValue(),
	  					pTipoEvento:'update',
						pArea:Ext.getCmp('cmbArea').getValue(),
						pTipoOferta:Ext.getCmp('cmbTipo').getValue()
				   	
	      				},
	      			success: function(respuesta, request) {
	      				var jsonData = Ext.util.JSON.decode(respuesta.responseText);
	      				if ((jsonData.success ==true) && (jsonData.errorMsj=='')){
	      					 Ext.MessageBox.show({  
	      			           title: 'Informaci&oacute;n',  
	      			           msg: 'Registro exitoso.',  
	      			           buttons: Ext.MessageBox.OK,  
	      			           icon: Ext.MessageBox.INFO,
	      			           fn: function (){
	      			     	//  Ext.getCmp('formNuevaOferta').getForm().reset();
	      			     	//  Ext.getCmp('frmNuevaOfertaWin').close();    
	      			     	  stOfertas.reload();
	      			        	}
	      			          });
	      				}else{
	      				  Ext.MessageBox.show({  
	      	                title: 'Actualizaci&oacute;n no completada.',  
	      	                msg: 'No se  actualizaron los siguientes campos: <BR>'+jsonData.errorMsj+'<BR>Por favor, verifique.',  
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
		
		} else {
			Ext.MessageBox.show({
			     title: "Informaci&oacute;n",
			     msg: "La cantidad de vacantes no puede ser mayor que el n&uacute;mero m&aacuteximo de postulantes.",
			     width:400,
			     buttons: Ext.MessageBox.OK,
			     icon: Ext.MessageBox.ERROR
			    });
		}
		}else{
			Ext.MessageBox.show({
		     title: "Error",
		     msg: "Datos incompletados o no v&aacute;lidos, por favor verifique.",
		     width:400,
		     buttons: Ext.MessageBox.OK,
		     icon: Ext.MessageBox.ERROR
		    });
	  }

}
});
