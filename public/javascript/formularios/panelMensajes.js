panelMensajes = Ext.extend(panelMensajesUi, {
    initComponent: function() {
        panelMensajes.superclass.initComponent.call(this);
        Ext.getCmp('btnEliminar').on('click',this.eliminar);

    },
     eliminar:function(){
    	var grid = Ext.getCmp('gridNotificaciones');
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
          		Ext.Msg.confirm('Confirmaci&oacute;n','&iquest; Est&aacute; seguro de eliminar la notificaci&oacute;n seleccionada ?',function(btn){  
         	        if(btn === 'yes'){  
         	        	Ext.Ajax.request({
                 			url: '/SIGP/notificacion/eliminar',
                 			method: 'POST',
                 			params: 'pId=' + index.get('id'),
                 			success: function(respuesta, request) {
                 				var jsonData = Ext.util.JSON.decode(respuesta.responseText);
                 				if (jsonData.success == true){
                 					Ext.Msg.alert('Operaci&oacute;n Exitosa','Se ha eliminado la notificaci&oacute;n');
                 					stNotificaciones.reload();
                 				}else{
                 					Ext.Msg.alert('Operaci&oacute;n no completada',jsonData.errorMsj);
                 				}         				
                 			},
                 			failure: function ( respuesta, request) {
                 				Ext.MessageBox.show({
            	        		     title: "Operaci&oacute;n no realizada.",
            	        		     msg: "La notificaci&oacute;n no se ha eliminado. <BR> Intente de nuevo.",
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




