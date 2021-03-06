panelEmpresasUi = Ext.extend(Ext.Panel, {
    width: 741,
    height: 420,
    id: 'panelEmpresas',
    renderTo: 'panelEmpresasV',
    initComponent: function() {
        this.items = [
            {
                xtype: 'grid',
                title: 'Empresas registradas',
                store: 'stEmpresasFull',
                height: 418,
                titleCollapse: true,
                stripeRows: true,
                width: 739,
				loadMask: true,
				maskDisabled: false,
                id: 'gridEmpresas',
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
                        header: 'R.I.F.',
                        sortable: true,
                        width: 80,
                        editable: false,
                        dataIndex: 'rif',
                        tooltip: 'N&uacute;mero de registro de informaci&oacute;n fiscal.'
                    },
                     {
                        xtype: 'gridcolumn',
                        header: 'Empresa',
                        sortable: true,
                        width: 160,
                        editable: false,
                        dataIndex: 'razonSocial',
                        tooltip: 'Raz&oacute;n Social de la empresa'
                    },
                     {
                        xtype: 'gridcolumn',
                        header: 'Contacto',
                        sortable: true,
                        width: 160,
                        editable: false,
                        dataIndex: 'contacto',
                        tooltip:'Persona de contacto.'
                    },
                    {
                        xtype: 'gridcolumn',
                        dataIndex: 'telefono',
                        header: 'Tel&eacute;fono',
                        sortable: true,
                        width: 80,
                        editable: false,
                        tooltip: 'Tel&eacute;fono principal.'
                    },
                    {
                        xtype: 'gridcolumn',
                        header: 'E-mail',
                        sortable: true,
                        width: 160,
                        editable: false,
                        dataIndex: 'email',
                        tooltip: 'E-mail'
                    },
                    {
                        xtype: 'gridcolumn',
                        dataIndex: 'estatus',
                        header: 'Estatus',
                        sortable: true,
                        width: 100,
                        editable: false,
                        tooltip: 'Estatus actual.'
                    }
                ],
                tbar: {
                    xtype: 'toolbar',
                    id: 'tbOpciones',
                    items: [
                       {
                            xtype: 'button',
                            text: 'Agregar',
                            iconCls: 'sigp-agregar',
                            id: 'btnAgregar'
                       },
                        {
                            xtype: 'button',
                            text: 'Modificar',
                            iconCls: 'sigp-modificar',
                            id: 'btnModificarEmp'
                       },
                           {
                            xtype: 'button',
                            text: 'Ver detalles',
                            iconCls: 'sigp-detalles',
                            id: 'btnVerDetalles'
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
                    store: 'stEmpresasFull',
                    displayInfo: true,
                    pageSize: 10,
                    id: 'ptbEmpresas'
                }
            }
        ];
        panelEmpresasUi.superclass.initComponent.call(this);
    }
});
