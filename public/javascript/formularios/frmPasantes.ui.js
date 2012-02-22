/*
 * File: frmPasantes.ui.js
 * Date: Sun Jun 27 2010 13:16:52 GMT-0430 (Hora estándar de Venezuela)
 * 
 * This file was generated by Ext Designer version 1.1.1.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

frmPasantesUi = Ext
		.extend(
				Ext.Window,
				{
					title : 'Pasante',
					width : 460,
					height : 425,
					closable: true,
					layout : 'absolute',
					modal : true,
					resizable : false,
					activeItem : 1,
					id : 'frmPasantesWin',

					initComponent : function() {
						this.items = [ {
							xtype : 'form',
							layout : 'anchor',
							width : 500,
							height : 450,
							title : 'Formulario de Registro',
							headerAsText : false,
							unstyled : true,
							method : 'POST',
							waitTitle : 'Por favor espere...',
							url : '/SIGP/pasante/registrarPasante',
							fieldLabel : '',
							id : 'registroPasanteForm',

							items : [ {
								xtype : 'tabpanel',
								activeTab : 0,
								height : 450,
								id : 'panelPasante',
								items : [
										{
											xtype : 'panel',
											title : 'Identificación',
											height : 150,
											width : 441,
											layout : 'absolute',
											id : 'ptnIdentificacion',
											items : [ {
												xtype : 'fieldset',
												title : 'Información Escencial',
												height : 150,
												layout : 'absolute',
												width : 441,
												x : 2,
												y : 50,
												items : [
														{
															xtype : 'label',
															text : 'Cédula de Identidad*:',
															width : 120,
															x : 50,
															y : 35
														},
														{
															xtype : 'textfield',
															x : 180,
															y : 35,
															name : 'txtCedula',
															vtype : 'soloNumero',
															id : 'txtCedula'
														},
														{
															xtype : 'button',
															text : 'Buscar',
															width : 75,
															height : 30,
															x : 325,
															y : 35,
															id : 'btnBuscar'
														},
														{
															xtype : 'label',
															text : '(*) Campos obligatorios para buscar datos.',
															x : 2,
															y : 100,
															width : 300
														} ]
											} ]
										},
										{
											xtype : 'panel',
											title : 'Básica',
											height : 300,
											disabled : true,
											layout : 'absolute',
											id : 'ptnPersonal',
											items : [
													{
														xtype : 'fieldset',
														title : 'Información Personal',
														layout : 'absolute',
														x : 2,
														y : 5,
														height : 325,
														width : 441,
														items : [
																{
																	xtype : 'label',
																	text : 'Nombre(s)*:',
																	width : 80,
																	x : 5,
																	y : 5
																},
																{
																	xtype : 'textfield',
																	width : 280,
																	name : 'txtNombre',
																	x : 130,
																	y : 5,
																	disabled : true,
																	// submitValue
																	// : false,
																	id : 'txtNombre'
																},
																{
																	xtype : 'label',
																	text : 'Apellido(s)*:',
																	width : 120,
																	x : 5,
																	y : 35
																},
																{
																	xtype : 'textfield',
																	width : 280,
																	name : 'txtApellido',
																	disabled : true,
																	// submitValue
																	// : false,
																	x : 130,
																	y : 35,
																	id : 'txtApellido'
																},
																{
																	xtype : 'label',
																	text : 'Fecha de Nacimiento*:',
																	width : 120,
																	x : 5,
																	y : 65
																},
																{
																	xtype : 'datefield',
																	x : 130,
																	y : 65,
																	width : 130,
																	name : 'dataFecha',
																	id : 'dataFecha'
																},
																{
																	xtype : 'label',
																	text : 'Sexo*:',
																	width : 120,
																	x : 5,
																	y : 90
																},
																{
																	xtype : 'radio',
																	boxLabel : 'Femenino',
																	name : 'opcSexo',
																	// editable:
																	// false,
																	x : 140,
																	y : 90,
																	// submitValue
																	// : false,
																	id : 'opcFemenino'
																},
																{
																	xtype : 'radio',
																	x : 230,
																	y : 90,
																	boxLabel : 'Masculino',
																	name : 'opcSexo',
																	// submitValue
																	// : false,
																	id : 'opcMasculino'
																},
																{
																	xtype : 'label',
																	text : 'Decanato*:',
																	x : 5,
																	y : 115,
																	width : 95
																},
																{
																	xtype : 'combo',
																	width : 280,
																	name : 'cmbDecanato',
																	triggerAction : 'all',
																	disabled : true,
																	editable : false,
																	store : 'stDecanato',
																	displayField : 'nombre',
																	valueField : 'id',
																	submitValue : false,
																	allowBlank : false,
																	loadingText : 'Cargando...',
																	emptyText : '-Seleccione-',
																	blankText : 'Seleccione un decanato.',
																	x : 130,
																	y : 115,
																	id : 'cmbDecanato'
																},
																{
																	xtype : 'label',
																	text : 'Carrera*:',
																	x : 5,
																	y : 145,
																	width : 95
																},
																{
																	xtype : 'combo',
																	x : 130,
																	y : 145,
																	width : 280,
																	id : 'cmbCarrera',
																	editable : false,
																	store : 'stCarrera',
																	displayField : 'nombre',
																	valueField : 'id',
																	triggerAction : 'all',
																	queryParam : 'idDecanato',
																	allowBlank : false,
																	loadingText : 'Cargando...',
																	// forceSelection
																	// : true,
																	emptyText : '-Seleccione-',
																	blankText : 'Seleccione una carrera.',
																	mode : 'local',
																	submitValue : false
																},
																{
																	xtype : 'label',
																	text : 'Semestre*:',
																	x : 5,
																	y : 175,
																	width : 95
																},
																{
																	xtype : 'combo',
																	x : 130,
																	y : 175,
																	//readonly : true,
																	width : 80,
																	name : 'cmbSemestre',
																	//editable : false,
																	blankText : 'Seleccione un Semestre.',
																	id : 'cmbSemestre',
																	store : 'stSemestre',
																	displayField : 'duracion',
																	valueField : 'duracion',
																	//triggerAction : 'all',
																	queryParam : 'idCarrera',
																	allowBlank : false,
																	loadingText : 'Cargando...',
																	blankText : 'Seleccione una carrera.',
																	mode : 'local',
																	//submitValue : false
																},
																{
																	xtype : 'label',
																	text : 'Indice Académico*:',
																	x : 5,
																	y : 205,
																	width : 80
																},
																{
																	xtype : 'textfield',
																	x : 130,
																	y : 205,
																	width : 60,
																	// submitValue
																	// : false,
																	name : 'txtIndice',
																	vtype : 'soloNumero',
																	disabled : true,
																	id : 'txtIndice'
																},
																{
																	xtype : 'label',
																	text : 'Tipo de Pasantía*:',
																	x : 5,
																	y : 235,
																	width : 125
																},
																{
																	xtype : 'combo',
																	width : 280,
																	name : 'cmbTipoPasantia',
																	editable : false,
																	store : 'stTipoPasantia',
																	displayField : 'descripcion',
																	valueField : 'id',
																	submitValue : false,
																	allowBlank : false,
																	loadingText : 'Cargando...',
																	emptyText : '-Seleccione-',
																	triggerAction : 'all',
																	blankText : 'Seleccione el Tipo de Pasantía que desea realizar.',
																	x : 130,
																	y : 235,

																	id : 'cmbTipoPasantia'
																},
																{
																	xtype : 'label',
																	text : 'Modalidad de Pasantía*:',
																	x : 5,
																	y : 265,
																	width : 125
																},
																{
																	xtype : 'combo',
																	width : 280,
																	name : 'cmbModalidadPasantia',
																	editable : false,
																	store : 'stModalidadPasantia',
																	displayField : 'descripcion',
																	valueField : 'id',
																	submitValue : false,
																	allowBlank : false,
																	loadingText : 'Cargando...',
																	emptyText : '-Seleccione-',
																	blankText : 'Seleccione la Modalidad que desea para su pasantía.',
																	triggerAction : 'all',
																	x : 130,
																	y : 265,
																	id : 'cmbModalidadPasantia'
																} ]
													},
													{
														xtype : 'button',
														text : 'Atrás',
														x : 245,
														y : 335,
														width : 90,
														height : 30,
														id : 'btnAtrasPersonal'
													},
													{
														xtype : 'button',
														text : 'Adelante',
														x : 335,
														y : 335,
														width : 90,
														height : 30,
														id : 'btnAdelantePersonal'
													},
													{
														xtype : 'label',
														text : '(*) Campos obligatorios',
														x : 10,
														y : 345,
														width : 145
													} ]
										},
										{
											xtype : 'panel',
											title : 'Contacto',
											height : 250,
											width : 441,
											disabled : true,
											layout : 'absolute',
											id : 'ptnContacto',
											items : [
													{
														xtype : 'fieldset',
														title : 'Información de Contacto',
														layout : 'absolute',
														height : 250,
														width : 441,
														x : 2,
														y : 5,
														items : [
																{
																	xtype : 'label',
																	text : 'Dirección*:',
																	x : 5,
																	y : 5,
																	width : 115
																},
																{
																	xtype : 'label',
																	text : 'Estado*:',
																	x : 5,
																	y : 65,
																	width : 115
																},
																{
																	xtype : 'label',
																	text : 'Ciudad*:',
																	x : 5,
																	y : 95,
																	width : 115
																},
																{
																	xtype : 'label',
																	text : 'Teléfono:',
																	x : 5,
																	y : 125,
																	width : 115
																},
																{
																	xtype : 'label',
																	text : 'Correo eletcrónico*:',
																	x : 5,
																	y : 155,
																	width : 115
																},
																{
																	xtype : 'label',
																	text : 'Repetir correo eletcrónico*:',
																	x : 5,
																	y : 180,
																	width : 115
																},
																{
																	xtype : 'textarea',
																	anchor : '',
																	x : 130,
																	y : 5,
																	height : 50,
																	width : 280,
																	name : 'txtDireccion',
																	id : 'txtDireccion'
																},
																{
																	xtype : 'combo',
																	x : 130,
																	y : 65,
																	name : 'cmbEstado',
																	id : 'cmbEstado',
																	store : 'stEstado',
																	editable : false,
																	displayField : 'nombre',
																	valueField : 'id',
																	emptyText : '-Seleccione-',
																	triggerAction : 'all',
																	allowBlank : false,
																	forceSelection : true,
																	submitValue : false,
																	loadingText : 'Cargando...',
																	blankText : 'Seleccione un estado'
																},
																{
																	xtype : 'combo',
																	x : 130,
																	y : 95,
																	name : 'cmbCiudad',
																	id : 'cmbCiudad',
																	editable : false,
																	store : 'stCiudad',
																	displayField : 'nombre',
																	valueField : 'id',
																	triggerAction : 'all',
																	queryParam : 'idEstado',
																	allowBlank : false,
																	loadingText : 'Cargando...',
																	forceSelection : true,
																	emptyText : '-Seleccione-',
																	blankText : 'Seleccione una ciudad.',
																	mode : 'local',
																	submitValue : false
																},
																{
																	xtype : 'textfield',
																	x : 130,
																	y : 125,
																	width : 165,
																	vtype : 'soloNumero',
																	id : 'txtTelefono'
																},
																{
																	xtype : 'textfield',
																	x : 130,
																	y : 155,
																	width : 280,
																	name : 'txtCorreo',
																	id : 'txtCorreo'
																},
																{
																	xtype : 'textfield',
																	x : 130,
																	y : 185,
																	width : 280,
																	name : 'txtRepetirCorreo',
																	id : 'txtRepetirCorreo'
																} ]
													},
													{
														xtype : 'button',
														text : 'Atrás',
														x : 245,
														y : 335,
														width : 90,
														height : 30,
														id : 'btnAtrasContacto'
													},
													{
														xtype : 'button',
														text : 'Adelante',
														x : 335,
														y : 335,
														width : 90,
														height : 30,
														id : 'btnAdelanteContacto'
													},
													{
														xtype : 'label',
														text : '(*) Campos obligatorios',
														x : 10,
														y : 345,
														width : 145
													} ]
										},
										{
											xtype : 'panel',
											title : 'Acceso',
											height : 140,
											disabled : true,
											layout : 'absolute',
											id : 'ptnAcceso',
											items : [
													{
														xtype : 'fieldset',
														title : 'Información de Acceso al Sistema',
														layout : 'absolute',
														height : 140,
														width : 441,
														x : 2,
														y : 5,
														items : [
																{
																	xtype : 'label',
																	text : 'Usuario*:',
																	x : 5,
																	y : 10,
																	width : 75
																},
																{
																	xtype : 'label',
																	text : 'Clave*:',
																	x : 5,
																	y : 40,
																	width : 75
																},
																{
																	xtype : 'label',
																	text : 'Repetir clave*:',
																	x : 5,
																	y : 70,
																	width : 75
																},
																{
																	xtype : 'textfield',
																	x : 100,
																	y : 10,
																	width : 190,
																	vtype : 'soloLetrasNumeros',
																	name : 'txtUsuario',
																	id : 'txtUsuario'
																},
																{
																	xtype : 'textfield',
																	x : 100,
																	y : 40,
																	width : 310,
																	inputType : 'password',
																	allowBlank : false,
																	minLength : 6,
																	submitValue : false,
																	name : 'txtClave',
																	id : 'txtClave'
																},
																{
																	xtype : 'textfield',
																	x : 100,
																	y : 70,
																	width : 310,
																	inputType : 'password',
																	allowBlank : false,
																	minLength : 6,
																	vtype : 'password',
																	campoInicialClave : 'txtClave',
																	submitValue : false,
																	name : 'txtRepetirClave',
																	id : 'txtRepetirClave'
																} ]
													},
													{
														xtype : 'button',
														text : 'Atrás',
														x : 245,
														y : 335,
														width : 90,
														height : 30,
														id : 'btnAtrasAcceso'
													},
													{
														xtype : 'button',
														text : 'Guardar',
														iconCls: 'sigp-guardar',
														width : 90,
														height : 30,
														x : 335,
														y : 335,
														id : 'btnGuardar'
													},
													{
														xtype : 'label',
														text : '(*) Campos obligatorios',
														x : 10,
														y : 345,
														width : 145
													} ]
										} ]
							} ]
						} ];
						frmPasantesUi.superclass.initComponent.call(this);
					}
				});
