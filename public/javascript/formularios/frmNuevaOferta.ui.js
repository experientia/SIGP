frmNuevaOfertaUi = Ext.extend(Ext.Window, {
	title : 'Oferta',
	width : 674,
	height : 515,
	modal : true,
	resizable : false,
	id : 'frmNuevaOfertaWin',
	initComponent : function() {
		this.items = [{
			xtype : 'form',
			width : 660,
			height : 482,
			id : 'formNuevaOferta',
			method : 'POST',
			waitTitle : 'Por favor espere...',
			url : '/SIGP/oferta/registrar',
			items : [{
				xtype : 'fieldset',
				title : 'Informaci&oacute;n Oferta',
				width : 654,
				items : [{
					xtype : 'textfield',
					fieldLabel : 'T&iacute;tulo*',
					anchor : '100%',
					maxLength : 40,
					allowBlank : false,
					id : 'txtTitulo'
				}, {
					xtype : 'combo',
					fieldLabel : '&Aacute;rea*',
					anchor : '50%',
					editable : false,
					store : 'stAreas',
					valueField : 'id',
					emptyText : '-Seleccione-',
					displayField : 'nombre',
					triggerAction : 'all',
					allowBlank : false,
					forceSelection : true,
					submitValue : false,
					id : 'cmbArea'
				}, {
					xtype : 'htmleditor',
					anchor : '100%',
					height : 150,
					fieldLabel : 'Descripci&oacute;n*',
					width : 572,
					enableSourceEdit : false,
					enableFont : false,
					id : 'txtDescripcion'
				}, {
					xtype : 'combo',
					fieldLabel : 'Tipo*',
					anchor : '50%',
					editable : false,
					store : 'stTipoOferta',
					displayField : 'nombre',
					valueField : 'id',
					triggerAction : 'all',
					allowBlank : false,
					forceSelection : true,
					submitValue : false,
					emptyText : '-Seleccione-',
					mode : 'local',
					id : 'cmbTipo'
				}, {
					xtype : 'numberfield',
					fieldLabel : 'Vacantes*',
					anchor : '50%',
					maxValue : 100,
					minValue : 1,
					allowDecimals : false,
					decimalPrecision : 0,
					allowNegative : false,
					allowBlank : false,
					id : 'txtVacantes'
				}, {
					xtype : 'numberfield',
					fieldLabel : 'N&uacute;mero m&aacute;ximo de postulantes',
					anchor : '50%',
					allowDecimals : false,
					allowNegative : false,
					maxValue : 100,
					id : 'txtCupos'
				}, {
					xtype : 'datefield',
					fieldLabel : 'Fecha de cierre*',
					anchor : '50%',
					editable : false,
					allowBlank : false,
					id : 'dateFechaCierre',
					format : 'd/m/Y',
					minValue : new Date()
				}, {
					xtype : 'datefield',
					fieldLabel : 'Fecha de Inicio*',
					anchor : '50%',
					editable : false,
					allowBlank : false,
					id : 'dateFechaInicioEst',
					vtype : 'dateRange',
					endDateField : 'dateFechaCulminacionEst',
					format : 'd/m/Y'
				}, {
					xtype : 'datefield',
					fieldLabel : 'Fecha de culminaci&oacute;n*',
					anchor : '50%',
					editable : false,
					allowBlank : false,
					vtype : 'dateRange',
					startDateField : 'dateFechaInicioEst',
					id : 'dateFechaCulminacionEst',
					format : 'd/m/Y'
				}, {
					xtype : 'textfield',
					id : 'txtIdOfertaHidden',
					hidden : true
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
					text : 'Guardar',
					type : 'submit',
					width: 90,
	                height: 30,
					iconCls : 'sigp-guardar',
					id : 'btnGuardar'
				}, {
					xtype : 'button',
					text : 'Publicar',
					width: 90,
	                height: 30,
					iconCls : 'sigp-publicar',
					id : 'btnGuardarPublicar'
				}, {
					xtype : 'button',
					text : 'Actualizar',
					width: 90,
	                height: 30,
					iconCls : 'sigp-publicar',
					hidden : true,
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
			}]
		}];
		frmNuevaOfertaUi.superclass.initComponent.call(this);
	}
});
