frmVerPasantiaUi = Ext.extend(Ext.Window, {
	title : 'Detalle de la pasant&iacute;a',
	width : 500,
	height : 400,
	layout : 'form',
	id : 'frmPasantiaWin',
	modal : true,
	resizable : false,
	initComponent : function() {
		this.items = [{

					xtype : 'fieldset',
					title : 'Informaci&oacute;n b&aacute;sica',
					autoHeight : true,
					items : [{
								xtype : 'textfield',
								fieldLabel : 'C&eacute;dula',
								anchor : '50%',
								allowBlank : false,
								disabled : true,
								id : 'txtCedula'
							}, {
								xtype : 'textfield',
								width : 320,
								anchor : '100%',
								disabled : true,
								fieldLabel : 'Nombre y Apellido',
								allowBlank : false,
								id : 'txtNombreApellido'
							}, {
								xtype : 'textfield',
								width : 284,
								anchor : '50%',
								disabled : true,
								fieldLabel : 'Lapso',
								allowBlank : false,
								id : 'txtLapso'
							}, {
								xtype : 'textfield',
								fieldLabel : 'Raz&oacute;n Social',
								anchor : '100%',
								disabled : true,
								allowBlank : false,
								id : 'txtRazonSocial'
							}, {
								xtype : 'textfield',
								fieldLabel : 'T&iacute;tulo',
								anchor : '100%',
								disabled : true,
								id : 'txtTitulo'
							}, {
								xtype : 'textfield',
								fieldLabel : 'Tipo Pasant&iacute;a',
								anchor : '50%',
								disabled : true,
								id : 'txtTipoPasantia'
							}, {
								xtype : 'textfield',
								fieldLabel : 'Modalidad Pasant&iacute;a',
								anchor : '50%',
								disabled : true,
								id : 'txtModalidadPasantia'
							}, {
								xtype : 'textfield',
								fieldLabel : 'Fecha de inicio estimada',
								anchor : '50%',
								disabled : true,
								id : 'txtFchInicio'
							}, {
								xtype : 'textfield',
								fieldLabel : 'Fecha culminaci&oacute;n estimada',
								anchor : '50%',
								disabled : true,
								id : 'txtFchFin'
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
								text : 'Salir',
								iconCls : 'sigp-salir',
								id : 'btnSalir'
							}]
				}];
		frmVerPasantiaUi.superclass.initComponent.call(this);
	}
});
