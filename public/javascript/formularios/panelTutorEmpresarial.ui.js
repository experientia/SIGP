panelTutorEmpresarialUi = Ext.extend(Ext.Panel, {
    width: 741,
    height: 420,
    id: 'panelTutorEmpresarial',
    initComponent: function() {
        this.items = [
            {
                xtype: 'grid',
                title: 'Tutores',
                store: 'stTutoresEmpresariales',
                height: 418,
                titleCollapse: true,
                stripeRows: true,
                width: 739,
				loadMask: true,
                maskDisabled: false,
                id: 'gridTutoresEmpresariales',
                columns: [
                new Ext.grid.RowNumberer(),
                    {
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
                    },
                    {
                        xtype: 'gridcolumn',
                        dataIndex: 'cedula',
                        header: 'Cédula',
                        sortable: true,
                        width: 100,
                        editable: false,
                        tooltip: 'Cédula del tutor empresarial.'
                    },
                    {
                        xtype: 'gridcolumn',
                        header: 'Nombres',
                        sortable: true,
                        width: 190,
                        editable: false,
                        dataIndex: 'nombre',
                        tooltip: 'Nombres del tutor.'
                    },
                    {
                        xtype: 'gridcolumn',
                        dataIndex: 'apellido',
                        header: 'Apellidos',
                        sortable: true,
                        width: 150,
                        editable: false,
                        tooltip: 'Apellidos tutor.'
                    },
                    {
                        xtype: 'gridcolumn',
                        dataIndex: 'cargo',
                        header: 'Cargo',
                        sortable: true,
                        width: 190,
                        editable: false,
                        tooltip: 'Cargo del tutor'
                    },
                    {
                        xtype: 'gridcolumn',
                        header: 'Estatus',
                        sortable: true,
                        width: 100,
                        dataIndex: 'estatus',
                        editable: false,
                        tooltip: 'Estatus de registro del tutor.'
                    }
                ],
                tbar: {
                    xtype: 'toolbar',
                    id: 'tbOpciones',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Nuevo',
                            iconCls: 'sigp-agregar',
                            id: 'btnNuevo'
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
                        }
                    ]
                },
                bbar: {
                    xtype: 'paging',
                    store: 'stTutoresEmpresariales',
                    displayInfo: true,
                    pageSize: 10,
                    id: 'ptbTutoresEmpresariales'
                }
            }
        ];
        panelTutorEmpresarialUi.superclass.initComponent.call(this);
    }
});
