panelSolTutorAcad = Ext.extend(panelSolTutorAcadUi, {
    initComponent: function() {
        panelSolTutorAcad.superclass.initComponent.call(this);
        Ext.getCmp('btnSolicitar').on('click',this.solicitarTutor);
      
    },
     solicitarTutor:function(){
    	var grid = Ext.getCmp('gridSolTutorAcad');
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
          	 var idTutor = 	 index.get('id');
         	  Ext.Ajax.request({
	  			url: '/SIGP/solicitud/solicitarTutorAcademico',
	  			method: 'POST',
	  			params: 'pTutorId=' + idTutor,
	  			success: function(respuesta, request) {
	  				var jsonData = Ext.util.JSON.decode(respuesta.responseText);
	  				if (jsonData.success == true){
		         		Ext.Msg.alert('Operaci&oacute;n exitosa','Se ha realizado la solicitud a: '+index.get('nombre')+', '+ index.get('apellido')+' de manera exitosa.');
	  				}else{
	  					Ext.Msg.alert('Operaci&oacute;n no completada','Se ha(n) presentado el(los) siguiente(s) error(es): <BR>' +jsonData.errorMsj);
	  				}         				
	  			},
	  			failure: function ( respuesta, request) {
	  				Ext.MessageBox.show({
	        		     title: "Operaci&oacute;n no realizada.",
	        		     msg: "No se realizar la operaci&oacute;n. Intente de nuevo.",
	        		     width:400,
	        		     buttons: Ext.MessageBox.OK,
	        		     icon: Ext.MessageBox.ERROR
	        		    });
	  			}
  			});
         	
         }
     }
});