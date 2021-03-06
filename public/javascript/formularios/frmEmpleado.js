Ext.QuickTips.init();
frmEmpleado = Ext.extend(frmEmpleadoUi, {
	initComponent : function() {
		frmEmpleado.superclass.initComponent.call(this);
		Ext.getCmp('btnRegistrar').on('click', this.registrar);
		Ext.getCmp('btnActualizar').on('click', this.actualizar);
		Ext.getCmp('btnLimpiar').on('click', this.limpiar);
		Ext.getCmp('btnSalir').on('click', this.salir);
		Ext.getCmp('txtCedula').on('blur', this.buscar);
	},
	buscar : function() {

		var cedula = Ext.getCmp('txtCedula');
		if (cedula.getRawValue().length > 0) {
			Ext.Ajax.request({
				url : '/SIGP/empleado/buscar',
				method : 'POST',
				params : 'pCedula=' + cedula.getValue(),
				success : function(respuesta, request) {
					var jsonData = Ext.util.JSON.decode(respuesta.responseText);
					if ((jsonData.success == true) && (jsonData.errorMsj == '')) {
						Ext.getCmp('txtCedula').disable();
						habilitarCampos(true);
					} else if ((jsonData.success == true)
							&& (jsonData.errorMsj != '')) {
						Ext.Msg
								.confirm(
										'Registro encontrado.',
										'La c&eacute;dula: '
												+ cedula.getValue()
												+ ', ya est&aacute registrada.<BR>&iquest; Quiere actualizar sus campos ?',
										function(btn) {
											if (btn === 'yes') {
												var datos = jsonData.datos;
												var comboDecanato = Ext
														.getCmp('cmbDecanato');
												var storeDecanato = comboDecanato
														.getStore();
												storeDecanato.load({
													callback : function() {
														comboDecanato
																.setValue(datos.decanatoId);
													}
												});
												Ext.getCmp('txtNombre')
														.setValue(datos.nombre);
												Ext
														.getCmp('txtApellido')
														.setValue(datos.apellido);
												Ext.getCmp('txtCorreo')
														.setValue(datos.email);
												Ext.getCmp('txtCorreoRepetir')
														.setValue(datos.email);
												if (jsonData.datos.tipo == 'A') {
													Ext.getCmp('radioTipo')
															.setValue('radioA',
																	true);
												} else if (jsonData.tipo == 'C') {
													Ext.getCmp('radioTipo')
															.setValue('radioC',
																	true);
												} else {
													Ext.getCmp('radioTipo')
															.setValue('radioS',
																	true);
												}
												Ext.getCmp('txtCedula')
														.disable();
												habilitarCampos(true);
											} else {
												Ext.getCmp('txtCedula')
														.setValue('');
												Ext.getCmp('txtCedula').focus();

											}
										});
					}
				}
			});
		}
	},
	registrar : function() {
		// Se verifica que los campos marcados como obligatorios
		// (allowBlank:false) esten llenos
		if (Ext.getCmp('frmEmpleadoForm').getForm().isValid()) {
			Ext.getCmp('frmEmpleadoForm').getForm().submit({
				waitMsg : 'Enviando datos...',
				params : {
					pRadioTipo : Ext.getCmp('radioTipo').getValue().getId() == 'radioA'
							? 'A'
							: Ext.getCmp('radioTipo').getValue().getId() == 'radioC'
									? 'C'
									: 'S',
					txtCedula : Ext.getCmp('txtCedula').getValue(),
					pDecanato :Ext.getCmp('cmbDecanato').getValue()
				},
				failure : function(form, action) {
					Ext.MessageBox.show({
								title : 'Error',
								msg : 'Error al registrar.',
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.ERROR
							});
				},
				success : function(form, request) {
					Ext.MessageBox.show({
								title : 'Informaci&oacute;n',
								msg : 'Registro exitoso.',
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.INFO,
								fn : function() {
									stEmpleados.reload();
									Ext.getCmp('frmEmpleadoForm').getForm()
											.reset();
									Ext.getCmp('frmEmpleadoWin').close();

								}
							});
				}
			});
		} else {
			Ext.MessageBox.show({
				title : "Error",
				msg : "Datos incompletos o no v&aacute;lidos, por favor verifique.",
				width : 400,
				buttons : Ext.MessageBox.OK,
				icon : Ext.MessageBox.ERROR
			});
		}
	},
	limpiar : function() {
		Ext.getCmp('txtCedula').enable();
		Ext.getCmp('txtCedula').reset();
		Ext.getCmp('txtNombre').reset();
		Ext.getCmp('txtApellido').reset();
		Ext.getCmp('txtCorreo').reset();
		Ext.getCmp('txtCorreoRepetir').reset();
		Ext.getCmp('radioTipo').reset();
	},
	salir : function() {
		Ext.getCmp('frmEmpleadoForm').getForm().reset();
		Ext.getCmp('frmEmpleadoWin').close();

	},
	actualizar : function() {
		if (Ext.getCmp('frmEmpleadoForm').getForm().isValid()) {
			Ext.Ajax.request({
				url : '/SIGP/empleado/actualizar',
				method : 'POST',
				params : {
					pRadioTipo : Ext.getCmp('radioTipo').getValue().getId() == 'radioA'
							? 'A'
							: Ext.getCmp('radioTipo').getValue().getId() == 'radioC'
									? 'C'
									: 'S',
					txtCedula : Ext.getCmp('txtCedula').getValue(),
					txtNombre : Ext.getCmp('txtNombre').getValue(),
					txtApellido : Ext.getCmp('txtApellido').getValue(),
					txtCorreo : Ext.getCmp('txtCorreo').getValue(),
					txtIdEmpleado : Ext.getCmp('txtIdEmpleado').getValue(),
					pDecanato :Ext.getCmp('cmbDecanato').getValue()
					
					
				},
				success : function(respuesta, request) {
					var jsonData = Ext.util.JSON.decode(respuesta.responseText);
					if ((jsonData.success == true)) {
						Ext.MessageBox.show({
									title : 'Informaci&oacute;n',
									msg : 'Actualizaci&oacute;n exitosa.',
									buttons : Ext.MessageBox.OK,
									icon : Ext.MessageBox.INFO,
									fn : function() {
										stEmpleados.reload();
									}
								});
					} else {
						Ext.MessageBox.show({
									title : 'Actualizaci&oacute;n no completada.',
									msg : 'No se  actualizaron los  campos.<BR>'+jsonData.errorMsj,
									buttons : Ext.MessageBox.OK,
									icon : Ext.MessageBox.ERROR
								});
					}
				},
				failure : function(respuesta, request) {
					Ext.MessageBox.show({
								title : "Operaci&oacute;n no realizada.",
								msg : "No se ha podido actualizar. Intente de nuevo.",
								width : 400,
								buttons : Ext.MessageBox.OK,
								icon : Ext.MessageBox.ERROR
							});
				}
			});
		} else {
			Ext.MessageBox.show({
				title : "Error",
				msg : "Datos incompletos o no v&aacute;lidos, por favor verifique.",
				width : 400,
				buttons : Ext.MessageBox.OK,
				icon : Ext.MessageBox.ERROR
			});
		}

	}

});

function habilitarCampos(flag) {
	if (flag == true) {
		Ext.getCmp('txtNombre').enable();
		Ext.getCmp('txtApellido').enable();
		Ext.getCmp('txtCorreo').enable();
		Ext.getCmp('txtCorreoRepetir').enable();
		Ext.getCmp('radioTipo').enable();
		Ext.getCmp('cmbDecanato').enable();
	} else {
		Ext.getCmp('txtNombre').disable();
		Ext.getCmp('txtApellido').disable();
		Ext.getCmp('txtCorreo').disable();
		Ext.getCmp('txtCorreoRepetir').disable();
		Ext.getCmp('radioTipo').disable();
		Ext.getCmp('cmbDecanato').disable();

	}

}
