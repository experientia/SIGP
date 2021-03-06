panelGestionEmpleadosUi = Ext.extend(Ext.Panel, {
			width : 741,
			height : 420,
			id : 'panelGestionEmpleados',
			initComponent : function() {
				this.items = [{
					xtype : 'grid',
					title : 'Gestor de Empleados',
					store : 'stEmpleados',
					height : 418,
					titleCollapse : true,
					stripeRows : true,
					width : 739,
					loadMask : true,
					maskDisabled : false,
					id : 'gridGestionEmpleados',
					columns : [new Ext.grid.RowNumberer(), {
								xtype : 'numbercolumn',
								header : 'Id',
								sortable : true,
								width : 50,
								align : 'right',
								editable : false,
								dataIndex : 'empleadoId',
								hidden : true,
								hideable : false,
								format : '0',
								id : 'id'
							},
							{
								xtype : 'gridcolumn',
								header : 'C&eacute;dula',
								sortable : true,
								width : 70,
								editable : false,
								dataIndex : 'cedula',
								tooltip : 'C&eacute;dula del empleado.'
							}, {
								xtype : 'gridcolumn',
								header : 'Nombre',
								sortable : true,
								width : 160,
								editable : false,
								dataIndex : 'nombre',
								tooltip : 'Nombres del empleado.'
							}, {
								xtype : 'gridcolumn',
								header : 'Apellido',
								sortable : true,
								width : 160,
								editable : false,
								dataIndex : 'apellido',
								tooltip : 'Apellidos del empleado.'
							}, {
								xtype : 'gridcolumn',
								header : 'Tipo',
								sortable : true,
								width : 160,
								editable : false,
								dataIndex : 'tipo',
								tooltip : 'Tipo de empleado.'
							},
								{
								xtype : 'gridcolumn',
								header : 'Decanato',
								sortable : true,
								width : 155,
								editable : false,
								dataIndex : 'decanato',
								tooltip : 'Decanato.'
							}
							, {
								xtype : 'gridcolumn',
								header : 'Estatus.',
								sortable : true,
								width : 155,
								editable : false,
								dataIndex : 'estatus',
								tooltip : 'Estatus'
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
								store : 'stEmpleados',
								displayInfo : true,
								pageSize : 10,
								id : 'ptbEmpleados'
							}, {
								xtype : 'tbfill'
							}, 'B&uacute;squeda: ', ' ',
							new Ext.ux.form.SearchField({
										store : stEmpleados,
										width : 150,
										emptyText : 'Ingrese una cedula...'
									})]
				}];
				panelGestionEmpleadosUi.superclass.initComponent.call(this);
			}
		});
