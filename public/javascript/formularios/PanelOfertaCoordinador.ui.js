PanelOfertaCoordinadorUi = Ext.extend(Ext.Panel, {
    width: 741,
    height: 420,
    id: 'panelOfertaCoordinador',
    initComponent: function() {
        this.items = [
            {
                xtype: 'grid',
                title: 'Ofertas',
                store: 'stOfertas',
                height: 418,
                titleCollapse: true,
                stripeRows: true,
                width: 739,
				loadMask: true,
                maskDisabled: false,
                id: 'gridOfertasEmpresa',
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
                        xtype: 'numbercolumn',
                        header: 'Id Empresa',
                        sortable: true,
                        width: 50,
                        align: 'right',
                        editable: false,
                        dataIndex: 'empresaId',
                        hidden: true,
                        hideable: false,
                        format: '0'
                    },
                     {
                        xtype: 'datecolumn',
                        header: 'Fecha Creaci&oacute;n',
                        sortable: true,
                        width: 100,
                        editable: false,
                        dataIndex: 'fchCreacion',
                        tooltip: 'Fecha de creaci&oacute;n de la oferta',
                        format:'d/m/Y'
                    },
                       {
                        xtype: 'gridcolumn',
                        header: 'Empresa',
                        sortable: true,
                        width: 100,
                        editable: false,
                        
                        dataIndex: 'razonSocial',
                        tooltip: 'Raz&oacute;n Social de la empresa'
                      
                    },
                    {
                        xtype: 'gridcolumn',
                        dataIndex: 'titulo',
                        header: 'T&iacute;tulo',
                        sortable: true,
                        width: 200,
                        editable: false,
                        tooltip: 'T&iacute;tulo de la oferta'
                    },
                    {
                        xtype: 'datecolumn',
                        header: 'Fecha Publicaci&oacute;n',
                        sortable: true,
                        width: 100,
                        editable: false,
                        dataIndex: 'fchPublicacion',
                        tooltip: 'Fecha de Publicaci&oacute;n de la oferta',
                        format:'d/m/Y'
                    },
                    {
                        xtype: 'datecolumn',
                        dataIndex: 'fchCierre',
                        header: 'Fecha Cierre',
                        sortable: true,
                        width: 100,
                        editable: false,
                        tooltip: 'Fecha de cierre de la oferta',
                        format:'d/m/Y'
                    },
                    {
                        xtype: 'numbercolumn',
                        dataIndex: 'vacantes',
                        header: 'Vacantes',
                        sortable: true,
                        width: 75,
                        align: 'right',
                        editable: false,
                        tooltip: 'N&uacute;mero de puestos disponibles para la oferta',
                        format: '0',
                        id: ''
                    },
                    {
                        xtype: 'numbercolumn',
                        dataIndex: 'postulados',
                        header: 'Postulados',
                        sortable: true,
                        width: 80,
                        align: 'right',
                        editable: false,
                        tooltip: 'N&uacute;mero de postulados a la oferta',
                        format: '0'
                    },
                    {
                        xtype: 'gridcolumn',
                        header: '&Aacute;rea',
                        sortable: true,
                        width: 180,
                        dataIndex: 'area',
                        editable: false,
                        tooltip: '&Aacute;rea de la oferta'
                    }
                ],
                tbar: {
                    xtype: 'toolbar',
                    id: 'tbOpciones',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Publicar',
                            iconCls: 'sigp-publicar',
                            id: 'btnPublicar'
                        },
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
                    store: 'stOfertas',
                    displayInfo: true,
                    pageSize: 10,
                    id: 'ptbOfertas'
                }
            }
        ];
        PanelOfertaCoordinadorUi.superclass.initComponent.call(this);
    }
});
