frmUniversidadUi = Ext.extend(Ext.Window, {
	title : 'Universidad',
	width : 500,
	height : 280,
	layout : 'form',
	id : 'frmUniversidadWin',
	modal : true,
	resizable : false,
	initComponent : function() {
		this.items = [{
			xtype : 'form',
			title : 'Formulario de registro',
			headerAsText : false,
			unstyled : true,
			method : 'POST',
			waitTitle : 'Por favor espere...',
			url : '/SIGP/configuracion/registrarUniversidad',
			id : 'frmUniversidadForm',
			items : [{

						xtype : 'fieldset',
						title : 'Informaci&oacute;n b&aacute;sica',
						autoHeight : true,
						items : [
								{
									xtype : 'textfield',
									maxLength : 150,
									anchor : '100%',
									fieldLabel : 'Nombre*',
									allowBlank : false,
									id : 'txtNombre'
									
								}, {
									xtype : 'combo',
//									x : 130,
//									y : 65,
									name : 'cmbEstado',
									fieldLabel : 'Estado*',
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
//									x : 130,
//									y : 95,
									name : 'cmbCiudad',
									fieldLabel : 'Ciudad*',
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
								},{
									xtype : 'textfield',
									name : 'txtDireccion',
									anchor : '100%',
									fieldLabel : 'Direcci&oacute;n*',
									allowBlank : false,
									maxLength : 250,
									id : 'txtDireccion'
								},
								{
									xtype : 'textfield',
									name : 'txtTelefono',
									anchor : '50%',
									fieldLabel : 'Tel&eacute;fono',
									maxLength : 45,
									id : 'txtTelefono'
								},
								 {
									xtype : 'textfield',
									fieldLabel : 'Logo',
									anchor : '50%',
									name : 'txtLogo',
									maxLength : 40,
									id : 'txtLogo'
								},
								{
									xtype : 'textfield',
									id : 'txtId',
									hidden : true
								}]

					}]
		}, {
			xtype : 'label',
			text : 'Campos marcados con * son obligatorios.'
		}, {
			xtype : 'container',
			layout : 'hbox',
			id : 'contenedorBtns',
			layoutConfig : {
				pack : 'end'
			},
			items : [{
						xtype : 'button',
						text : 'Registrar',
						type : 'submit',
						width: 90,
                        height: 30,
						iconCls : 'sigp-guardar',
						id : 'btnRegistrar'
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
		}];
		frmUniversidadUi.superclass.initComponent.call(this);
	}
});
