
panelEmpresasSinValidar = Ext.extend(panelEmpresasSinValidarUi, {
    initComponent: function() {
        panelEmpresasSinValidar.superclass.initComponent.call(this);
        Ext.getCmp('btnEliminar').on('click',this.eliminar);
        Ext.getCmp('btnAprobar').on('click',this.aprobar);
        Ext.getCmp('btnVerDetalles').on('click',this.verDetalles);
    },
      verDetalles:function(){
    	var grid = Ext.getCmp('gridEmpresas');
      	var index = grid.getSelectionModel().getSelected();
         if (!index) {
          	 Ext.MessageBox.show({
      		     title: " Seleccione una fila.",
      		     msg: "Debe seleccionar una fila antes de realizar la operaci&oacute;n.",
      		     width:400,
      		     buttons: Ext.MessageBox.OK,
      		     icon: Ext.MessageBox.WARNIRG
      		    });
          }else{
        	  var id = index.get('id');
        	  Ext.Ajax.request({
      			url: '/SIGP/empresa/ver',
      			method: 'POST',
      			params: 'pIdEmpresa=' + index.get('id'),
      			success: function(respuesta, request) {
      				var jsonData = Ext.util.JSON.decode(respuesta.responseText);
      				if (jsonData.success == true){
      					 var frmEmpresa = new frmVerEmpresa({
         	  			   renderTo: Ext.getBody()
       					 });
      					
      					var resultado= jsonData.resultado;
      					//Informacion basica
      					Ext.getCmp('txtRazonSocial').setValue(resultado.razonSocial);
      					Ext.getCmp('txtRif').setValue(resultado.rif);
      					Ext.getCmp('txtDireccion').setValue(resultado.direccion);
      					Ext.getCmp('txtTelefono').setValue(resultado.telefono);
      					Ext.getCmp('txtTelefono2').setValue(resultado.telefono2);
      					Ext.getCmp('txtDescripcion').setValue(resultado.descripcion);
      					Ext.getCmp('txtWeb').setValue(resultado.web);
      					var comboEstado = Ext.getCmp('cmbEstado');      					
      					var storeEstado = comboEstado.getStore();
      					storeEstado.load({
      					   callback: function() {
      					      comboEstado.setValue(resultado.estadoId);
      					   }
      					});
      					var comboCiudad = Ext.getCmp('cmbCiudad');      					
      				    var store = comboCiudad.getStore();
      					store.load({
      					   	 callback: function() {
      					     	 comboCiudad.setValue(resultado.ciudadId);
      					   		}
      						});
      					      
      					//Informacion de Contacto
      					Ext.getCmp('txtRepresentante').setValue(resultado.representante);
      					Ext.getCmp('txtCargo').setValue(resultado.cargo);
      					Ext.getCmp('txtCorreo').setValue(resultado.correo);
      					
  						frmEmpresa.show();
      				}else{
      					Ext.Msg.alert('Operaci&oacute;n no completada','No se han obtenido los datos.');
      				}         				
      			},
      			failure: function ( respuesta, request) {
      				Ext.MessageBox.show({
 	        		     title: "Operaci&oacute;n no realizada.",
 	        		     msg: "No se pueden obtener los datos. Intente de nuevo.",
 	        		     width:400,
 	        		     buttons: Ext.MessageBox.OK,
 	        		     icon: Ext.MessageBox.ERROR
 	        		    });
      			}
      		});

          }

     },
     eliminar:function(){
    	var grid = Ext.getCmp('gridEmpresas');
     	var index = grid.getSelectionModel().getSelected();

         if (!index) {
         	 Ext.MessageBox.show({
     		     title: " Seleccione una fila.",
     		     msg: "Debe seleccionar una fila antes de realizar la operaci&oacute;n.",
     		     width:400,
     		     buttons: Ext.MessageBox.OK,
     		     icon: Ext.MessageBox.WARNIRG
     		    });
         }else{
         		Ext.Msg.confirm('Confirmaci&oacute;n','&iquest; Est&aacute; seguro de eliminar la empresa seleccionada ?<BR>'+
         		' Con esta operaci&oacute;n se eliminar&aacute; el registro de forma permanente.',function(btn){  
         	        if(btn === 'yes'){  
         	        	Ext.Ajax.request({
                 			url: '/SIGP/empresa/eliminarEmpresa',
                 			method: 'POST',
                 			params: 'pIdEmpresa=' + index.get('id'),
                 			success: function(respuesta, request) {
                 				var jsonData = Ext.util.JSON.decode(respuesta.responseText);
                 				if (jsonData.success == true){
                 					Ext.Msg.alert('Operaci&oacute;n Exitosa','Se ha eliminado la empresa: <BR>'+index.get('razonSocial'));
                 					stEmpresasFull.reload();
                 				}else{
                 					Ext.Msg.alert('Operaci&oacute;n no completada','No se ha eliminado la empresa.');
                 				}         				
                 			},
                 			failure: function ( respuesta, request) {
                 				Ext.MessageBox.show({
            	        		     title: "Operaci&oacute;n no realizada.",
            	        		     msg: "La empresa: "+index.get('razonSocial')+" <BR> no se ha eliminado. <BR> Intente de nuevo.",
            	        		     width:400,
            	        		     buttons: Ext.MessageBox.OK,
            	        		     icon: Ext.MessageBox.ERROR
            	        		    });
                 			}
                 		});  
         	        }
         	    });  
         		
         
         }
     },
     aprobar:function(){
    	var grid = Ext.getCmp('gridEmpresas');
      	var index = grid.getSelectionModel().getSelected();

          if (!index) {
          	 Ext.MessageBox.show({
      		     title: " Seleccione una fila.",
      		     msg: "Debe seleccionar una fila antes de realizar la operaci&oacute;n.",
      		     width:400,
      		     buttons: Ext.MessageBox.OK,
      		     icon: Ext.MessageBox.WARNIRG
      		    });
          }else{
        	  var id = index.get('id');
        	 	Ext.Msg.confirm('Confirmaci&oacute;n','&iquest; Est&aacute; seguro de aprobar el registro de la empresa: '+index.get('razonSocial')+' ?',function(btn){  
         	        if(btn === 'yes'){  
         	        	Ext.Ajax.request({
                 			url: '/SIGP/empresa/aprobar',
                 			method: 'POST',
                 			params: 'pIdEmpresa=' + index.get('id'),
                 			success: function(respuesta, request) {
                 				var jsonData = Ext.util.JSON.decode(respuesta.responseText);
                 				if (jsonData.success == true){
                 					Ext.Msg.alert('Operaci&oacute;n Exitosa','Se ha aprobado el registro de la empresa:  <BR>'+index.get('razonSocial'));
                 					stEmpresasFull.reload();
                 				}else{
                 					Ext.Msg.alert('Operaci&oacute;n no completada','No se ha finalizado la operaci&oacute;n.');
                 				}         				
                 			},
                 			failure: function ( respuesta, request) {
                 				Ext.MessageBox.show({
            	        		     title: "Operaci&oacute;n no realizada.",
            	        		     msg: "La empresa: "+index.get('razonSocial')+" <BR> no se ha aprobado. <BR> Intente de nuevo.",
            	        		     width:400,
            	        		     buttons: Ext.MessageBox.OK,
            	        		     icon: Ext.MessageBox.ERROR
            	        		    });
                 			}
                 		});  
         	        }
         	    });  
         		
        	    
    	 
    	
     }}
     
});




