frmEstadisticasGeneralesUi = Ext.extend(Ext.Window, {
	title : 'Estad&iacute;sticas Generales',
	width : 300,
	height : 350,
	modal : true,
	resizable : false,
	id : 'frmEstadisticasGeneralesWin',
	initComponent : function() {
		this.items = [{
					xtype : 'fieldset',
					title : 'Informaci&oacute;n del Lapso Acad&eacute;mico',
					items : [{
								xtype : 'textfield',
								fieldLabel : 'Pasantes Activos',
								anchor : '100%',
								allowBlank : false,
								readOnly : true,
								id : 'txtPasantesActivos'
							}, {
								xtype : 'textfield',
								fieldLabel : 'Empresas Registradas',
								anchor : '100%',
								allowBlank : false,
								readOnly : true,
								id : 'txtEmpresasRegistradas'
							}, {
								xtype : 'textfield',
								fieldLabel : 'Pasant&iacute;as Activas',
								anchor : '100%',
								allowBlank : false,
								readOnly : true,
								id : 'txtPasantiasActivas'
							}, {
								xtype : 'textfield',
								fieldLabel : 'Tutores Empresariales Registrados',
								anchor : '100%',
								allowBlank : false,
								readOnly : true,
								id : 'txtTutoresEReistrados'
							}, {
								xtype : 'textfield',
								fieldLabel : 'Tutores Acad&eacute;micos Registrados',
								anchor : '100%',
								allowBlank : false,
								readOnly : true,
								id : 'txtTutoresAReistrados'
							}, {
								xtype : 'textfield',
								fieldLabel : 'Ofertas Publicadas',
								anchor : '100%',
								allowBlank : false,
								readOnly : true,
								id : 'txtOfertasPublicadas'
							}

					]
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
								width: 90,
				                height: 30,
								iconCls : 'sigp-salir',
								id : 'btnSalir'
							}]
				}, {
					xtype : 'label',
					text : 'Para informacion detallada consulte la opcion Reportes.'
				}];
		frmEstadisticasGeneralesUi.superclass.initComponent.call(this);
	}
});
