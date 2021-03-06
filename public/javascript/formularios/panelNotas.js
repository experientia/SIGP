panelNotas = Ext.extend(panelNotasUi, {
    initComponent: function() {
        panelNotas.superclass.initComponent.call(this);
        Ext.getCmp('btnNotas').on('click',this.registrarNotas);
        Ext.getCmp('btnVerPerfil').on('click',this.verPerfil);
        Ext.getCmp('btnReporteCalif').on('click',this.generarReporte);
    },
     verPerfil:function(){
    	var grid = Ext.getCmp('gridNotas');
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
        	   var frmVerP = new frmVerPasante({
         	     		renderTo: Ext.getBody()
         	 	});
         	 Ext.getCmp('txtCedula').setValue(index.get('cedula'));
         	 Ext.getCmp('txtNombreApellido').setValue(index.get('nombre')+ ', ' +index.get('apellido'));
      		 
          Ext.Ajax.request({
	  			url: '/SIGP/pasante/getDetallePasante',
	  			method: 'POST',
	  			params: 'pPasanteId=' + id,
	  			success: function(respuesta, request) {
	  				var jsonData = Ext.util.JSON.decode(respuesta.responseText);
	  				if (jsonData.success == true){
	  					Ext.getCmp('txtCarrera').setValue(jsonData.datos.carrera);
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
     }   ,
     generarReporte:function(){
        // Llamar a una interfaz previa que pida parametros basicos de configuracion
        window.open('/SIGP/reporte/reporteCalificaciones');
     
     },
     registrarNotas:function(){
    	var grid = Ext.getCmp('gridNotas');
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
         
         	var frmNotas = new frmDetalleNotas({
         	     renderTo: Ext.getBody()
         	         	 });
         	 Ext.getCmp('txtIdPasante').setValue(index.get('id'));
         	 Ext.getCmp('txtCedula').setValue(index.get('cedula'));
         	 Ext.getCmp('txtNombre').setValue(index.get('nombre'));
         	 Ext.getCmp('txtApellido').setValue(index.get('apellido'));
        	 frmNotas.show();
        	 stgDetalleNotas.setBaseParam('pPasanteId',index.get('id'));
        	 stgDetalleNotas.load();
         	
         }
     }
});