panelTutorEmpresarial = Ext.extend(panelTutorEmpresarialUi, {
    initComponent: function() {
        panelTutorEmpresarial.superclass.initComponent.call(this);
        Ext.getCmp('btnNuevo').on('click',this.nuevoTutor);
        Ext.getCmp('btnEliminar').on('click',this.eliminarTutor);
        Ext.getCmp('btnModificar').on('click',this.modificarTutor);

    },
     
     eliminarTutor:function(){
    	var grid = Ext.getCmp('gridTutoresEmpresariales');
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
       		Ext.Msg.confirm('Confirmaci&oacute;n','&iquest; Est&aacute; seguro de eliminar al tutor seleccionada ?',function(btn){  
         	        if(btn === 'yes'){  
         	        	Ext.Ajax.request({
                 			url: '/SIGP/tutorEmpresarial/eliminarTutor',
                 			method: 'POST',
                 			params: 'pTutor=' + index.get('id'),
                 			success: function(respuesta, request) {
                 				var jsonData = Ext.util.JSON.decode(respuesta.responseText);
                 				if (jsonData.success == true){
                 					Ext.Msg.alert(jsonData.errorMsj+'Operaci&oacute;n Exitosa','Se ha eliminado el tutor: <BR>'+index.get('nombre')+' '+index.get('apellido'));
                 					stTutoresEmpresariales.reload();
                 				}else {
                 					Ext.Msg.alert('Operaci&oacute;n no completada',jsonData.errorMsj);
                 				}         				
                 			},
                 			failure: function ( respuesta, request) {
                 				Ext.MessageBox.show({
            	        		     title: "Operaci&oacute;n no realizada.",
            	        		     msg: "El tutor: "+index.get('nombre')+" "+index.get('apellido')+"<BR> no se ha eliminado. <BR> Intente de nuevo.",
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
     nuevoTutor:function(){
    	 var frmTutorE = new frmTutorEmpresarial({
    	     renderTo: Ext.getBody()
    		 
    	 });
    	 frmTutorE.show();
    	
     },
     modificarTutor:function(){
    	var grid = Ext.getCmp('gridTutoresEmpresariales');
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
        	  var frmTutorE = new frmTutorEmpresarial({
         	     renderTo: Ext.getBody()
         		 
         	 });
        	  
        	  Ext.Ajax.request({
      			url: '/SIGP/tutorEmpresarial/getTutorEmpresarialById',
      			method: 'POST',
      			params: 'pTutorEmpresarialId=' + index.get('id'),
      			success: function(respuesta, request) {
      				var jsonData = Ext.util.JSON.decode(respuesta.responseText);
      				if (jsonData.success == true){
      					var resultado= jsonData.resultado;
      					//Mostramos los valores obtenidos
      					Ext.getCmp('txtCedula').setValue(index.get('cedula'));
      					Ext.getCmp('txtCedula').disable();
      					Ext.getCmp('txtNombre').setValue(resultado.nombre);
      					Ext.getCmp('txtApellido').setValue(resultado.apellido);
      					Ext.getCmp('txtCargo').setValue(resultado.cargo);
      					Ext.getCmp('txtCorreo').setValue(resultado.correo);
      					Ext.getCmp('txtCorreoRepetir').setValue(resultado.correo);
      					Ext.getCmp('txtTelefono').setValue(resultado.telefono);
      					Ext.getCmp('txtIdTutorEHidden').setValue(resultado.id);
      				}else{
      					Ext.Msg.alert('Operaci&oacute;n no completada','No se pudo obtener los datos.');
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
      		  habilitarCampos(true);
      		  Ext.getCmp('txtNombre').focus();
        	  frmTutorE.show();
          }
    
    	 
    	
     }
     
});




