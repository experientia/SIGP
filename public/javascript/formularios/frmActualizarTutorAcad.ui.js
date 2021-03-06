frmActualizarTutorAcadUi = Ext
		.extend(
				Ext.Panel,
				{
					title : 'Tutor Académico',
					width : 448,
					height : 411,
					layout : 'absolute',
					resizable : false,
					activeItem : 1,
					id : 'frmActualizarTutorAcadWin',

					initComponent : function() {
						this.items = [ {
							xtype : 'form',
							layout : 'absolute',
							width : 440,
							height : 380,

							title : 'Formulario de Registro',
							headerAsText : false,
							unstyled : true,
							method : 'POST',
							waitTitle : 'Por favor espere...',
							url : '/SIGP/tutorAcademico/registrarTutorA',
							fieldLabel : '',
							id : 'registroTutorForm',

							items : [ {
								xtype : 'fieldset',
								title : 'Información del Tutor',
								layout : 'absolute',
								height : 360,
								x : 2,
								y : 10,
								width : 438,
								items : [
										{
											xtype : 'label',
											text : 'Cédula*:',
											x : 5,
											y : 10,
											width : 75
										},
										{
											xtype : 'label',
											text : 'Nombre(s)*:',
											x : 5,
											y : 40,
											width : 75
										},
										{
											xtype : 'label',
											text : 'Apellido(s)*:',
											x : 5,
											y : 70,
											width : 75
										},
										{
											xtype : 'label',
											text : 'Decanato*:',
											x : 5,
											y : 100,
											width : 75
										},
										{
											xtype : 'label',
											text : 'Departamento*:',
											x : 5,
											y : 130,
											width : 75
										},
										{
											xtype : 'label',
											text : 'Cargo*:',
											x : 5,
											y : 160,
											width : 75
										},
										{
											xtype : 'label',
											text : 'Correo eletrónico*:',
											x : 5,
											y : 190,
											width : 75
										},
										{
											xtype : 'label',
											text : 'Repetir correo*:',
											x : 5,
											y : 225,
											width : 95
										},
										{
											xtype : 'label',
											text : 'Teléfono:',
											x : 5,
											y : 250,
											width : 75
										},
										{
											xtype : 'button',
											text : 'Actualizar',
											x : 220,
											y : 290,
											width : 90,
											height : 30,
											iconCls : 'sigp-guardar',
											id : 'btnGuardar'
										},
										{
											xtype : 'button',
											text : 'Salir',
											x : 310,
											y : 290,
											width : 90,
											height : 30,
											iconCls : 'sigp-salir',
											id : 'btnSalir'
										},
										{
											xtype : 'textfield',
											x : 105,
											y : 10,
											width : 145,
											enableKeyEvents : true,
											readOnly : true,
											name : 'txtCedula',
											id : 'txtCedula',
											listeners : {
												specialKey : function(field, el) {
													if (el.getKey() == Ext.EventObject.ENTER
															|| el.getKey() == Ext.EventObject.TAB) {
														Ext
																.getCmp(
																		'txtCedula')
																.fireEvent(
																		'submit');
													}
												}
											}
										},
										{
											xtype : 'textfield',
											x : 105,
											y : 40,
											width : 255,
											name : 'txtNombre',
											id : 'txtNombre'
										},
										{
											xtype : 'textfield',
											x : 105,
											y : 70,
											width : 255,
											name : 'txtApellido',
											id : 'txtApellido'
										},
										{
											xtype : 'combo',
											x : 105,
											y : 100,
											width : 305,
											name : 'cmbDecanato',
											id : 'cmbDecanato',
											store : 'stDecanato',
											editable : false,
											displayField : 'nombre',
											valueField : 'id',
											emptyText : '-Seleccione-',
											triggerAction : 'all',
											allowBlank : false,
											forceSelection : true,
											loadingText : 'Cargando...',
											blankText : 'Seleccione un Departamento'

										},
										{
											xtype : 'combo',
											x : 105,
											y : 130,
											width : 305,
											name : 'cmbDepartamento',
											id : 'cmbDepartamento',
											store : 'stDepartamento',
											editable : false,
											displayField : 'descripcion',
											valueField : 'id',
											emptyText : '-Seleccione-',
											triggerAction : 'all',
											queryParam : 'decanato_id',
											allowBlank : false,
											forceSelection : true,
											loadingText : 'Cargando...',
											mode : 'local',
											submitValue : false,
											blankText : 'Seleccione un Departamento'
										}, {
											xtype : 'textfield',
											x : 105,
											y : 160,
											width : 305,
											name : 'txtCargo',
											id : 'txtCargo'
										}, {
											xtype : 'textfield',
											x : 105,
											y : 190,
											width : 305,
											name : 'txtCorreo',
											id : 'txtCorreo'
										}, {
											xtype : 'textfield',
											x : 105,
											y : 220,
											width : 305,
											name : 'txtRepetirCorreo',
											allowBlank : false,
											vtype : 'emailIguales',
											campoInicial : 'txtCorreo',
											id : 'txtRepetirCorreo'
										}, {
											xtype : 'textfield',
											x : 105,
											y : 250,
											width : 145,
											name : 'txtTelefono',
											id : 'txtTelefono'
										} ]
							} ]
						} ];
						frmActualizarTutorAcadUi.superclass.initComponent
								.call(this);
					}
				});
