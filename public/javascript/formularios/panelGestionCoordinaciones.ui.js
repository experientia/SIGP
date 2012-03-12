panelGestionCoordinacionesUi = Ext.extend(Ext.Panel, {
			width : 741,
			height : 420,
			id : 'panelGestionCoordinaciones',
			initComponent : function() {
				this.items = [{
					xtype : 'grid',
					title : 'Gestor de Coordinaciones',
					store : 'stCoordinaciones',
					height : 418,
					titleCollapse : true,
					stripeRows : true,
					width : 739,
					loadMask : true,
					maskDisabled : false,
					id : 'gridGestionCoordinaciones',
					columns : [new Ext.grid.RowNumberer(), {
								xtype : 'numbercolumn',
								header : 'Id',
								sortable : true,
								width : 50,
								align : 'right',
								editable : false,
								dataIndex : 'id',
								hidden : true,
								hideable : false,
								format : '0',
								id : 'id'
							}, {
								xtype : 'gridcolumn',
								header : 'Nombre',
								sortable : true,
								width : 150,
								editable : false,
								dataIndex : 'descripcion',
								tooltip : 'Nombres de la coordinacion.'
							},{
								xtype : 'gridcolumn',
								header : 'Decanato',
								sortable : true,
								width : 150,
								editable : false,
								dataIndex : 'decanato',
								tooltip : 'Decanato al que pertenece'
							}, 
							{
								xtype : 'gridcolumn',
								header : 'Ubicaci&oacute;n',
								sortable : true,
								width : 100,
								editable : false,
								dataIndex : 'ubicacion',
								tooltip : 'Ubicaci&oacute;n dentro de la Universidad'
							}, {
								xtype : 'gridcolumn',
								header : 'Tel&eacute;fono',
								sortable : true,
								width : 90,
								editable : false,
								dataIndex : 'telefono',
								tooltip : 'Tel&eacute;fono actual'
							}, {
								xtype : 'gridcolumn',
								header : 'Coordinador',
								sortable : true,
								width : 150,
								editable : false,
								dataIndex : 'empleado',
								tooltip : 'coordinador'
							},{
								xtype : 'gridcolumn',
								header : 'Email',
								sortable : true,
								width : 150,
								editable : false,
								dataIndex : 'email',
								tooltip : 'Email Oficial'
							}],
					tbar : {
						xtype : 'toolbar',
						id : 'tbOpciones',
						items : [ {
						    xtype: 'button',
						    text: 'Agregar',
						    iconCls: 'sigp-agregar',
						    id: 'btnAgregar'
						},
						{
						    xtype: 'button',
						    text: 'Modificar',
						    iconCls: 'sigp-modificar',
						    id: 'btnModificar'
						},
						{
						    xtype: 'button',
						    text: 'Eliminar',
						    iconCls: 'sigp-eliminar',
						    id: 'btnEliminar'
						}]
					},

					bbar : [{
								xtype : 'paging',
								store : 'stCoordinaciones',
								displayInfo : true,
								pageSize : 10,
								id : 'ptbCoordinaciones'
							}, {
								xtype : 'tbfill'
							}, 'B&uacute;squeda: ', ' ',
							new Ext.ux.form.SearchField({
										store : stCoordinaciones,
										width : 150,
										emptyText : 'Ingrese una coordinaci&oacute;n...'
									})]
				}];
				panelGestionCoordinacionesUi.superclass.initComponent.call(this);
			}
		});
