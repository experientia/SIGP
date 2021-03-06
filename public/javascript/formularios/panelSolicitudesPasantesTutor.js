panelSolicitudesPasantesTutor = Ext.extend(panelSolicitudesPasantesTutorUi, {
    initComponent: function() {
        panelSolicitudesPasantesTutor.superclass.initComponent.call(this);     
        Ext.getCmp('btnVerPerfil').on('click',this.verPerfil);
        Ext.getCmp('btnAceptar').on('click',this.aceptarSolicitud);
        Ext.getCmp('btnRechazar').on('click',this.rechazarSolicitud);
 
    },
     verPerfil:function(){
     	var grid = Ext.getCmp('gridSolicitudes');
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
        	  var id = index.get('idPasante');
        	   var frmVerP = new frmVerPasante({
         	     		renderTo: Ext.getBody()
         	 	});
         	 Ext.getCmp('txtCedula').setValue(index.get('cedula'));
         	 Ext.getCmp('txtNombreApellido').setValue(index.get('nombre')+ ', ' +index.get('apellido'));
      		 Ext.getCmp('txtCarrera').setValue(index.get('carrera'));

          Ext.Ajax.request({
	  			url: '/SIGP/pasante/getDetallePasante',
	  			method: 'POST',
	  			params: 'pPasanteId=' + id,
	  			success: function(respuesta, request) {
	  				var jsonData = Ext.util.JSON.decode(respuesta.responseText);
	  				if (jsonData.success == true){
		         		Ext.getCmp('txtSemestre').setValue(jsonData.datos.semestre);
		         		Ext.getCmp('txtTelefono').setValue(jsonData.datos.telefono);
		         		Ext.getCmp('txtCorreo').setValue(jsonData.datos.email);
		         		Ext.getCmp('txtDescripcion').setValue(jsonData.datos.descripcion==''?'Sin detalles.':jsonData.datos.descripcion);
		         		Ext.getCmp('txtExperiencia').setValue(jsonData.datos.experiencia==''?'Sin detalles.':jsonData.datos.experiencia);
		         		Ext.getCmp('txtCursos').setValue(jsonData.datos.cursos==''?'Sin detalles.':jsonData.datos.cursos);
	  				}else{
	  					Ext.Msg.alert('Operaci&oacute;n no completada','No se ha podido recuperar el resto de los datos. Intente de nuevo.');
	  				}         				
	  			},
	  			failure: function ( respuesta, request) {
	  				Ext.MessageBox.show({
	        		     title: "Operaci&oacute;n no realizada.",
	        		     msg: "No se puede realizar la operaci&oacute;n. Intente de nuevo.",
	        		     width:400,
	        		     buttons: Ext.MessageBox.OK,
	        		     icon: Ext.MessageBox.ERROR
	        		    });
	  			}
  			});
        	  
        	 frmVerP.show();
          }
     	
     } ,
     aceptarSolicitud:function(){
     	var grid = Ext.getCmp('gridSolicitudes');
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
  			url: '/SIGP/solicitud/aceptar',
  			method: 'POST',
  			params: 'pSolicitudId=' + id,
  			success: function(respuesta, request) {
  				var jsonData = Ext.util.JSON.decode(respuesta.responseText);
  				if (jsonData.success == true){
	         		Ext.Msg.alert('Operaci&oacute;n exitosa','Se ha aceptado la solicitud de: '+index.get('nombre')+', '+ index.get('apellido')+' de manera exitosa.');
	         		stSolicitudesPasanteTutor.reload();
  				}else{
  					Ext.Msg.alert('Operaci&oacute;n no completada','Se ha(n) presentado el(los) siguiente(s) error(es): <BR>' +jsonData.errorMsj);
  				}        				
  			},
  			failure: function ( respuesta, request) {
  				Ext.MessageBox.show({
        		     title: "Operaci&oacute;n no realizada.",
        		     msg: "No se puede realizar la operaci&oacute;n. Intente de nuevo.",
        		     width:400,
        		     buttons: Ext.MessageBox.OK,
        		     icon: Ext.MessageBox.ERROR
        		    });
  			}
		});
    	  
        	   
     }
     }
     ,
     rechazarSolicitud:function(){
     	var grid = Ext.getCmp('gridSolicitudes');
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
          	Ext.Msg.confirm('Confirmaci&oacute;n','&iquest; Est&aacute; seguro de rechazar la solicitud seleccionada ?',function(btn){  
         	        if(btn === 'yes'){  
		        	  var id = index.get('id');
		        	   Ext.Ajax.request({
			  			url: '/SIGP/solicitud/rechazar',
			  			method: 'POST',
			  			params: 'pSolicitudId=' + id,
			  			success: function(respuesta, request) {
			  				var jsonData = Ext.util.JSON.decode(respuesta.responseText);
			  				if (jsonData.success == true){
				         		Ext.Msg.alert('Operaci&oacute;n exitosa','Se ha rechazado la solicitud de: '+index.get('nombre')+', '+ index.get('apellido')+' de manera exitosa.');
				         		stSolicitudesPasanteTutor.reload();
			  				}else{
			  					Ext.Msg.alert('Operaci&oacute;n no completada','Se ha(n) presentado el(los) siguiente(s) error(es): <BR>' +jsonData.errorMsj);
			  				}        				
			  			},
			  			failure: function ( respuesta, request) {
			  				Ext.MessageBox.show({
			        		     title: "Operaci&oacute;n no realizada.",
			        		     msg: "No se puede realizar la operaci&oacute;n. Intente de nuevo.",
			        		     width:400,
			        		     buttons: Ext.MessageBox.OK,
			        		     icon: Ext.MessageBox.ERROR
			        		    });
			  			}
		  			});
		        	  
        	     }
         	    });  
         		
          }
     	
     	
     }
});