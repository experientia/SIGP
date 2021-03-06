panelGestionPasantesTE = Ext.extend(panelGestionPasantesTEUi, {
	initComponent : function() {
		panelGestionPasantesTE.superclass.initComponent.call(this);
		Ext.getCmp('btnLimpiarFiltro').on('click', this.limpiarFiltro);
		Ext.getCmp('cmbCarrera').on('select', this.actualizarParametro);
		Ext.getCmp('btnVerPerfil').on('click', this.verPerfil);
		Ext.getCmp('btnVerPasantia').on('click', this.verPasantia);
		Ext.getCmp('btnDetalleTutor').on('click', this.verTutor);
	},
	
	limpiarFiltro : function() {
		Ext.getCmp('cmbCarrera').reset();
		stPasantesTE.setBaseParam('pCarreraId', '*');
		stPasantesTE.load();
	},
	actualizarParametro : function() {
		id = Ext.getCmp('cmbCarrera').getValue();
		stPasantesTE.setBaseParam('pCarreraId', id);
		stPasantesTE.load();
	},
	verPerfil : function() {
		var grid = Ext.getCmp('gridGestionPasantes');
		var index = grid.getSelectionModel().getSelected();

		if (!index) {
			Ext.MessageBox.show({
				title : " Seleccione una fila.",
				msg : "Debe seleccionar una fila antes de realizar la operaci&oacute;n.",
				width : 400,
				buttons : Ext.MessageBox.OK,
				icon : Ext.MessageBox.WARNIRG
			});
		} else {
			var id = index.get('pasanteId');
			var frmVerP = new frmVerPasante({
						renderTo : Ext.getBody()
					});
			Ext.getCmp('txtCedula').setValue(index.get('cedulaPasante'));
			Ext.getCmp('txtNombreApellido').setValue(index.get('nombrePasante')
					+ ', ' + index.get('apellidoPasante'));

			Ext.Ajax.request({
				url : '/SIGP/pasante/getDetallePasante',
				method : 'POST',
				params : 'pPasanteId=' + id,
				success : function(respuesta, request) {
					var jsonData = Ext.util.JSON.decode(respuesta.responseText);
					if (jsonData.success == true) {
						Ext.getCmp('txtCarrera')
								.setValue(jsonData.datos.carrera);
						Ext.getCmp('txtSemestre')
								.setValue(jsonData.datos.semestre);
						Ext.getCmp('txtTelefono')
								.setValue(jsonData.datos.telefono);
						Ext.getCmp('txtCorreo').setValue(jsonData.datos.email);
						Ext.getCmp('txtDescripcion')
								.setValue(jsonData.datos.descripcion == ''
										? 'Sin detalles.'
										: jsonData.datos.descripcion);
						Ext.getCmp('txtExperiencia')
								.setValue(jsonData.datos.experiencia == ''
										? 'Sin detalles.'
										: jsonData.datos.experiencia);
						Ext.getCmp('txtCursos')
								.setValue(jsonData.datos.cursos == ''
										? 'Sin detalles.'
										: jsonData.datos.cursos);
					} else {
						Ext.Msg
								.alert('Operaci&oacute;n no completada',
										'No se ha podido recuperar el resto de los datos. Intente de nuevo.');
					}
				},
				failure : function(respuesta, request) {
					Ext.MessageBox.show({
						title : "Operaci&oacute;n no realizada.",
						msg : "No se puede realizar la operaci&oacute;n. Intente de nuevo.",
						width : 400,
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.ERROR
					});
				}
			});

			frmVerP.show();

		}
	},
	verPasantia : function() {
		var grid = Ext.getCmp('gridGestionPasantes');
		var index = grid.getSelectionModel().getSelected();

		if (!index) {
			Ext.MessageBox.show({
				title : " Seleccione una fila.",
				msg : "Debe seleccionar una fila antes de realizar la operaci&oacute;n.",
				width : 400,
				buttons : Ext.MessageBox.OK,
				icon : Ext.MessageBox.WARNIRG
			});
		} else {
			var id = index.get('pasantiaId');
			var frmVerP = new frmVerPasantia({
						renderTo : Ext.getBody()
					});
			Ext.getCmp('txtCedula').setValue(index.get('cedulaPasante'));
			Ext.getCmp('txtNombreApellido').setValue(index.get('nombrePasante')
					+ ', ' + index.get('apellidoPasante'));

			Ext.Ajax.request({
				url : '/SIGP/pasantia/getDetallePasantia',
				method : 'POST',
				params : 'pPasantiaId=' + id,
				success : function(respuesta, request) {
					var jsonData = Ext.util.JSON.decode(respuesta.responseText);
					if (jsonData.success == true) {
						Ext.getCmp('txtLapso')
								.setValue(jsonData.resultado.lapso);
						Ext.getCmp('txtTipoPasantia')
								.setValue(jsonData.resultado.tipoPasantia);
						Ext.getCmp('txtModalidadPasantia')
								.setValue(jsonData.resultado.modalidad);
						Ext.getCmp('txtFchInicio')
								.setValue(jsonData.resultado.fchInicioEst);
						Ext.getCmp('txtFchFin')
								.setValue(jsonData.resultado.fchFinEst);
						Ext.getCmp('txtTitulo')
								.setValue(jsonData.resultado.titulo);
						Ext.getCmp('txtRazonSocial')
								.setValue(jsonData.resultado.razonSocial);
					} else {
						Ext.Msg
								.alert('Operaci&oacute;n no completada',
										'No se ha podido recuperar el resto de los datos. Intente de nuevo.');
					}
				},
				failure : function(respuesta, request) {
					Ext.MessageBox.show({
						title : "Operaci&oacute;n no realizada.",
						msg : "No se puede realizar la operaci&oacute;n. Intente de nuevo.",
						width : 400,
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.ERROR
					});
				}
			});

			frmVerP.show();

		}
	}
	,
	verTutor : function() {
		var grid = Ext.getCmp('gridGestionPasantes');
		var index = grid.getSelectionModel().getSelected();

		if (!index) {
			Ext.MessageBox.show({
				title : " Seleccione una fila.",
				msg : "Debe seleccionar una fila antes de realizar la operaci&oacute;n.",
				width : 400,
				buttons : Ext.MessageBox.OK,
				icon : Ext.MessageBox.WARNIRG
			});
		} else {
			var id = index.get('tutorId');
			var frmVerP = new frmVerDetalleTA({
						renderTo : Ext.getBody()
					});
			Ext.Ajax.request({
				url : '/SIGP/tutorAcademico/getTutorAcademicoById',
				method : 'POST',
				params : 'pTutorAcademicoId=' + id,
				success : function(respuesta, request) {
					var jsonData = Ext.util.JSON.decode(respuesta.responseText);
					if (jsonData.success == true) {
						Ext.getCmp('txtDepartamento')
								.setValue(jsonData.resultado.datos.departamento);
						Ext.getCmp('txtNombreApellido').setValue(jsonData.resultado.nombre
					+ ', ' + jsonData.resultado.apellido);
						Ext.getCmp('txtTelefono')
								.setValue(jsonData.resultado.telefono);
						Ext.getCmp('txtCorreo')
								.setValue(jsonData.resultado.correo);
					} else {
						Ext.Msg
								.alert('Operaci&oacute;n no completada',
										'No se ha podido recuperar el resto de los datos. Intente de nuevo.');
					}
				},
				failure : function(respuesta, request) {
					Ext.MessageBox.show({
						title : "Operaci&oacute;n no realizada.",
						msg : "No se puede realizar la operaci&oacute;n. Intente de nuevo.",
						width : 400,
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.ERROR
					});
				}
			});

			frmVerP.show();

		}
	}
});