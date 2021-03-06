panelLapso = Ext.extend(panelLapsoUi, {
    initComponent: function() {
		panelLapso.superclass.initComponent.call(this);
       	Ext.getCmp('btnAgregar').on('click',this.agregar);
       	Ext.getCmp('btnActivar').on('click',this.activarLapso);
        Ext.getCmp('btnModificar').on('click',this.modificarLapso);
        Ext.getCmp('btnEliminar').on('click',this.eliminarLapso);
        Ext.getCmp('btnEstadisticas').on('click',this.estadisticas);
        Ext.getCmp('btnFinalizar').on('click',this.finalizar);

    },
    agregar:function(){
    	var frmLapso = new frmLapsoAcademico({
        	renderTo: Ext.getBody()
        });
        
    	 frmLapso.show();
    },
    estadisticas:function(){
    	var frmResumen = new frmEstadisticasGenerales({
        	renderTo: Ext.getBody()
        });
    	
    	 
    	var grid = Ext.getCmp('gridLapsos');
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
    		 Ext.Ajax.request({
	      			url: '/SIGP/lapsoAcademico/obtenerEstadisticas',
	      			method: 'POST',
	      			params: {pLapsoId:index.get('id')},
	      			success: function(respuesta, request) {
	      				var jsonData = Ext.util.JSON.decode(respuesta.responseText);
	      				if ((jsonData.success ==true)){
	      					var resultado= jsonData.resultado;
      						//Mostramos los valores obtenidos
      						Ext.getCmp('txtPasantesActivos').setValue(resultado.pasantesActivos);
      						Ext.getCmp('txtEmpresasRegistradas').setValue(resultado.empresasRegistradas);
      						Ext.getCmp('txtPasantiasActivas').setValue(resultado.pasantiasActivas);
      						Ext.getCmp('txtTutoresEReistrados').setValue(resultado.tutoresEReistrados);
      						Ext.getCmp('txtTutoresAReistrados').setValue(resultado.tutoresAReistrados);
      						Ext.getCmp('txtOfertasPublicadas').setValue(resultado.ofertasPublicadas);
	      				}else{
	      				  Ext.MessageBox.show({  
	      	                title: 'Error.',  
	      	                msg: 'No se han obtenido todas las estad&iacute;sticas.<BR>'+jsonData.errorMsj,  
	      	                buttons: Ext.MessageBox.OK,  
	      	                icon: Ext.MessageBox.ERROR
	      	               });	
	      				}         				
	      			},
	      			failure: function ( respuesta, request) {
	      				Ext.MessageBox.show({
	 	        		     title: "Operaci&oacute;n no realizada.",
	 	        		     msg: "No se han obtenido todas las estad&iacute;sticas. Intente de nuevo.",
	 	        		     width:400,
	 	        		     buttons: Ext.MessageBox.OK,
	 	        		     icon: Ext.MessageBox.ERROR
	 	        		    });
	      			}
	      		});
	      		  frmResumen.show();
	      		}
    	
    },
    activarLapso:function(){
       	var grid = Ext.getCmp('gridLapsos');
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
    		 Ext.Ajax.request({
	      			url: '/SIGP/lapsoAcademico/activarLapso',
	      			method: 'POST',
	      			params: {idLapso:index.get('id')},
	      			success: function(respuesta, request) {
	      				var jsonData = Ext.util.JSON.decode(respuesta.responseText);
	      				if ((jsonData.success ==true)){
	      					stLapsosAcademicos.reload();
	      					Ext.Msg.alert('Operaci&oacute;n exitosa','Se ha activado el lapso: '+index.get('lapso'));
	      					
	      				}else{
	      				  Ext.MessageBox.show({  
	      	                title: 'Error.',  
	      	                msg: 'No ha activado el lapso:<BR>'+jsonData.errorMsj+'<BR>Por favor, intente de nuevo.',  
	      	                buttons: Ext.MessageBox.OK,  
	      	                icon: Ext.MessageBox.ERROR
	      	               });	
	      				}         				
	      			},
	      			failure: function ( respuesta, request) {
	      				Ext.MessageBox.show({
	 	        		     title: "Operaci&oacute;n no realizada.",
	 	        		     msg: "No se ha activado el lapso seleccionado. Intente de nuevo.",
	 	        		     width:400,
	 	        		     buttons: Ext.MessageBox.OK,
	 	        		     icon: Ext.MessageBox.ERROR
	 	        		    });
	      			}
	      		});
	      		}
    	
    },
     modificarLapso:function(){
    	var grid = Ext.getCmp('gridLapsos');
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
        	 var frmLapso = new frmLapsoAcademico({
        		renderTo: Ext.getBody()
        	});
        	  
        	  Ext.Ajax.request({
      			url: '/SIGP/lapsoAcademico/getLapsoById',
      			method: 'POST',
      			params: 'pLapsoId=' + index.get('id'),
      			success: function(respuesta, request) {
      				var jsonData = Ext.util.JSON.decode(respuesta.responseText);
      				if (jsonData.success == true){
      					var resultado= jsonData.resultado;
      					//Mostramos los valores obtenidos
      					Ext.getCmp('txtLapso').setValue(resultado.lapso);
      					Ext.getCmp('dateFechaInicio').setValue(resultado.fchInicio);
      					Ext.getCmp('dateFechaFin').setValue(resultado.fchFin);
      					Ext.getCmp('txtIdLapso').setValue(resultado.id);
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
        	  Ext.getCmp('btnActualizar').show();
        	  Ext.getCmp('btnGuardar').hide();
        	 frmLapso.show();
          }
     }
     , eliminarLapso:function(){
    	var grid = Ext.getCmp('gridLapsos');
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
        	 Ext.Msg.confirm('Confirmaci&oacute;n','&iquest; Est&aacute; seguro de eliminar el lapso seleccionado?',function(btn){  
         	        if(btn === 'yes'){  
			        	  Ext.Ajax.request({
			      			url: '/SIGP/lapsoAcademico/eliminar',
			      			method: 'POST',
			      			params: 'pLapsoId=' + index.get('id'),
			      			success: function(respuesta, request) {
			      				var jsonData = Ext.util.JSON.decode(respuesta.responseText);
			      				if (jsonData.success == true){
			      					stLapsosAcademicos.reload();
				      				Ext.Msg.alert('Operaci&oacute;n exitosa','Se ha eliminado el lapso: '+index.get('lapso'));
			      				}else{
			      					 Ext.MessageBox.show({  
				      	                title: 'Error.',  
				      	                msg: 'No se ha eliminado el lapso:<BR>'+jsonData.errorMsj+'<BR>S&oacute;lo  se permite modificar el lapso.',  
				      	                buttons: Ext.MessageBox.OK,  
				      	                icon: Ext.MessageBox.ERROR
				      	               });	
			      				}         				
			      			},
			      			failure: function ( respuesta, request) {
			      				Ext.MessageBox.show({
			 	        		     title: "Operaci&oacute;n no realizada.",
			 	        		     msg: "No se puede eliminar el lapso. Intente de nuevo.",
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
   ,
    finalizar:function(){
    	var grid = Ext.getCmp('gridLapsos');
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
          	if(index.get('estatus')== 'Activo') {
	          	var id = index.get('id');
		    	var frmLapso = new frmFinalizarLapso({
		        	renderTo: Ext.getBody()
		        });
		        Ext.getCmp('txtLapsoId').setValue(id);
		        Ext.getCmp('txtLapso').setValue(index.get('lapso'));
		    	frmLapso.show();
	    	
	    	} else {
				Ext.MessageBox.show({
					title : "Error",
					msg : "S&oacute;lo se puede finalizar un lapso activo.",
					width : 400,
					buttons : Ext.MessageBox.OK,
					icon : Ext.MessageBox.ERROR
				});
			}
    	  }
    }
});