frmActualizarEmpleadoUi = Ext.extend(Ext.Panel, {
	title : 'Empleado',
	width : 500,
	height : 310,
	layout : 'form',
	id : 'frmActualizarEmpleadoWin',
	resizable : false,
	initComponent : function() {
		this.items = [{
			xtype : 'form',
			title : 'Formulario de registro',
			headerAsText : false,
			unstyled : true,
			method : 'POST',
			waitTitle : 'Por favor espere...',
			url : '/SIGP/empleado/actualizarEmpleados',
			id : 'frmActualizarEmpleadoForm',
			items : [{

						xtype : 'fieldset',
						title : 'Informaci&oacute;n b&aacute;sica',
						autoHeight : true,
						items : [{
									xtype : 'textfield',
									name : 'txtCedula',
									fieldLabel : 'C&eacute;dula*',
									anchor : '50%',
									maxLength : 45,
									allowBlank : false,
									id : 'txtCedula'
								},new Ext.form.RadioGroup({
										fieldLabel : 'Tipo*',
										columns : 3,
										id:'radioTipo',
										items : [{
													boxLabel : 'Administrador',
													name : 'rTipo',
													id: 'radioA'
												},{
													boxLabel : 'Coordinador',
													name : 'rTipo',
													id: 'radioC'
												}, {
													boxLabel : 'Analista',
													name : 'rTipo',
													id: 'radioS'
												}],
												disabled:true
									}),
								{
									xtype : 'textfield',
									maxLength : 12,
									anchor : '100%',
									fieldLabel : 'Nombre*',
									allowBlank : false,
									id : 'txtNombre',
									disabled:true
								}, {
									xtype : 'textfield',
									name : 'txtApellido',
									width : 284,
									anchor : '100%',
									fieldLabel : 'Apellido*',
									maxLength : 45,
									allowBlank : false,
									id : 'txtApellido',
									disabled:true
								},
								 {
									xtype : 'textfield',
									fieldLabel : 'Correo electr&oacute;nico*',
									anchor : '100%',
									name : 'txtCorreo',
									maxLength : 40,
									allowBlank : false,
									vtype : 'email',
									id : 'txtCorreo',
									disabled:true
								}, {
									xtype : 'textfield',
									fieldLabel : 'Repetir correo electr&oacute;nico*',
									anchor : '100%',
									width : 420,
									maxLength : 40,
									name : 'txtCorreoRepetir',
									allowBlank : false,
									vtype : 'emailIguales',
									campoInicial : 'txtCorreo',
									id : 'txtCorreoRepetir',
									disabled:true
								},
									{
									xtype : 'textfield',
									id : 'txtIdEmpleado',
									hidden : true
								}]

					}]
		}, {
			xtype : 'container',
			layout : 'hbox',
			id : 'contenedorBtns',
			layoutConfig : {
				pack : 'end'
			},
			items : [{
						xtype : 'button',
						text : 'Actualizar',
						width: 90,
                        height: 30,
						iconCls : 'sigp-publicar',
						id : 'btnActualizar'
					}, {
						xtype : 'button',
						text : 'Limpiar',
						width: 90,
                        height: 30,
						iconCls : 'sigp-limpiar',
						id : 'btnLimpiar'
					}, {
						xtype : 'button',
						text : 'Salir',
						width: 90,
                        height: 30,
						iconCls : 'sigp-salir',
						id : 'btnSalir'
					}]
		}, {
			xtype : 'label',
			text : 'Campos marcados con * son obligatorios.'
		}];
		frmActualizarEmpleadoUi.superclass.initComponent.call(this);
	}
});
