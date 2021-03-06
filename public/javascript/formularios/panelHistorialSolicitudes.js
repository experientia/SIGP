panelHistorialSolicitudes = Ext.extend(panelHistorialSolicitudesUi, {
    initComponent: function() {
        panelHistorialSolicitudes.superclass.initComponent.call(this);    
        Ext.getCmp('btnCancelar').on('click',this.cancelarSolicitud); 
    }
    ,
     cancelarSolicitud:function(){
     	var grid = Ext.getCmp('gridHistorialSolicitudes');
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
          	Ext.Msg.confirm('Confirmaci&oacute;n','&iquest; Est&aacute; seguro de cancelar la solicitud seleccionada ?',function(btn){  
         	        if(btn === 'yes'){  
		        	  var id = index.get('id');
		        	   Ext.Ajax.request({
			  			url: '/SIGP/solicitud/cancelar',
			  			method: 'POST',
			  			params: 'pSolicitudId=' + id,
			  			success: function(respuesta, request) {
			  				var jsonData = Ext.util.JSON.decode(respuesta.responseText);
			  				if (jsonData.success == true){
				         		Ext.Msg.alert('Operaci&oacute;n exitosa','Se ha cancelado la solicitud a: '+index.get('nombre')+', '+ index.get('apellido')+' de manera exitosa.');
				         		stSolicitudes.reload();
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