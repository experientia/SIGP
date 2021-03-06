panelSolTutorAcadUi = Ext.extend(Ext.Panel, {
	width: 741,
	height: 300,
	id: 'panelSolTutorAcad',
	initComponent: function() {
		this.items = [{
			xtype: 'grid',
			title: 'Tutores Acad&eacute;micos ',
			store: 'stTutoresAcadLight',
			height: 300,
			titleCollapse: true,
			stripeRows: true,
			width: 739,
			loadMask: true,
			maskDisabled: false,
			id: 'gridSolTutorAcad',
			columns: [
			new Ext.grid.RowNumberer(),{
				xtype: 'numbercolumn',
				header: 'Id',
				sortable: true,
				width: 50,
				align: 'right',
				editable: false,
				dataIndex: 'id',
				hidden: true,
				hideable: false,
				format: '0',
				id: 'id'
			},{
				xtype: 'gridcolumn',
				header: 'Nombre',
				sortable: true,
				width: 160,
				editable: false,
				dataIndex: 'nombre',
				tooltip: 'Nombres del tutor.'
			},{
				xtype: 'gridcolumn',
				header: 'Apellido',
				sortable: true,
				width: 160,
				editable: false,
				dataIndex: 'apellido',
				tooltip: 'Apellidos del tutor.'
			},{
				xtype: 'gridcolumn',
				header: 'Cargo',
				sortable: true,
				width: 160,
				editable: false,
				dataIndex: 'cargo',
				tooltip: 'Cargo del tutor.'
			}  ,{
				xtype: 'gridcolumn',
				header: 'Departamento',
				sortable: true,
				width: 230,
				editable: false,
				dataIndex: 'departamento',
				tooltip: 'Departamento al que est&aacute; adscrito el tutor.'
			}
			],
			tbar: {
				xtype: 'toolbar',
				id: 'tbOpciones',
				items: [{
					xtype: 'button',
					text: 'Solicitar tutor',
					iconCls: 'sigp-user',
					id: 'btnSolicitar'
				},{
					xtype: 'tbfill'
				},
				'B&uacute;squeda: ', ' ',
				new Ext.ux.form.SearchField({
					store: stTutoresAcadLight,
					width:150,
					emptyText : 'Ingrese el nombre...'
				})
				]
			},

			bbar: {
				xtype: 'paging',
				store: 'stTutoresAcadLight',
				displayInfo: true,
				pageSize: 10,
				id: 'ptbTutores'
			}
		}
		];
		panelSolTutorAcadUi.superclass.initComponent.call(this);
	}
});