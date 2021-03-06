frmNoticia = Ext.extend(frmNoticiaUi, {
    initComponent: function() {
        frmNoticia.superclass.initComponent.call(this);
        Ext.getCmp('btnLimpiar').on('click',this.cancelar);
        Ext.getCmp('btnSalir').on('click',this.salir);
        Ext.getCmp('btnGuardar').on('click',this.grabar);
        Ext.getCmp('btnActualizar').on('click',this.actualizar);
    },
    cancelar:function(){
    	Ext.getCmp('txtTitulo').reset();
		Ext.getCmp('txtContenido').reset();
    }, 
    salir:function(){
    	 Ext.getCmp('formNoticia').getForm().reset();
		 Ext.getCmp('frmNoticia').close();   
    },
     grabar:function(){
    // Se verifica que los campos marcados como obligatorios
	// (allowBlank:false) esten llenos
	if (Ext.getCmp('formNoticia').getForm().isValid() && Ext.getCmp('txtContenido').getValue()!='' ){
	        Ext.getCmp('formNoticia').getForm().submit({ waitMsg : 'Enviando datos...', 
			 												params:{ 
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
				                                      	                        msg: 'La noticia se ha regristrado de manera exitosa.',  
				                                      	                        buttons: Ext.MessageBox.OK,  
				                                      	                        icon: Ext.MessageBox.INFO,
				                                      	                        fn: function (){
				                                    	                    	  Ext.getCmp('formNoticia').getForm().reset();
				                                    	                    	  Ext.getCmp('frmNoticia').close();    
				                                    	                    	  stNoticias.reload();
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
actualizar:function(){
	if (Ext.getCmp('formNoticia').getForm().isValid() && Ext.getCmp('txtContenido').getValue()!='' ){
			 Ext.Ajax.request({
	      			url: '/SIGP/noticia/actualizar',
	      			method: 'POST',
	      			params: {pNoticiaId:Ext.getCmp('txtIdNoticia').getValue(),
      					txtTitulo:Ext.getCmp('txtTitulo').getValue(),
	  					txtContenido:Ext.getCmp('txtContenido').getValue()
					},
	      			success: function(respuesta, request) {
	      				var jsonData = Ext.util.JSON.decode(respuesta.responseText);
	      				if ((jsonData.success ==true) && (jsonData.errorMsj=='')){
	      					 Ext.MessageBox.show({  
	      			           title: 'Informaci&oacute;n',  
	      			           msg: 'Actualizaci&oacute;n exitosa.',  
	      			           buttons: Ext.MessageBox.OK,  
	      			           icon: Ext.MessageBox.INFO,
	      			           fn: function (){
	      			     	//  Ext.getCmp('formNuevaOferta').getForm().reset();
	      			     	//  Ext.getCmp('frmNuevaOfertaWin').close();    
	      			     	  stNoticias.reload();
	      			        	}
	      			          });
	      				}else{
	      				  Ext.MessageBox.show({  
	      	                title: 'Actualizaci&oacute;n no completada.',  
	      	                msg: jsonData.errorMsj,  
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
