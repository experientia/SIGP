panelNotasTEUi = Ext.extend(Ext.Panel, {
    width: 741,
    height: 420,
    id: 'panelNotasTE',
    initComponent: function() {
        this.items = [
            {
                xtype: 'grid',
                title: 'Calificaciones pasantes',
                store: 'stNotasTE',
                height: 418,
                titleCollapse: true,
                stripeRows: true,
                width: 739,
				loadMask: true,
                maskDisabled: false,
                id: 'gridNotasTE',
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
                        header: 'C&eacute;dula',
                        sortable: true,
                        width: 80,
                        editable: false,
                        dataIndex: 'cedula',
                        tooltip: 'C&eacute;dula del pasante.'
                    },
                         {
                        xtype: 'gridcolumn',
                        header: 'Nombre',
                        sortable: true,
                        width: 160,
                        editable: false,
                        dataIndex: 'nombre',
                        tooltip: 'Nombres del pasante.'
                    },
                         {
                        xtype: 'gridcolumn',
                        header: 'Apellido',
                        sortable: true,
                        width: 160,
                        editable: false,
                        dataIndex: 'apellido',
                        tooltip: 'Apellidos del pasante.'
                    },
                     {
                        xtype: 'gridcolumn',
                        header: 'Empresa',
                        sortable: true,
                        width: 155,
                        editable: false,
                        dataIndex: 'razonSocial',
                        tooltip: 'Raz&oacute;n Social de la empresa.'
                    },
                      {
                        xtype: 'numbercolumn',
                        header: 'Nota Empresa',
                        sortable: true,
                        width: 78,
                        align: 'right',
                        editable: false,
                        dataIndex: 'notaEmpresaTE',
                        format: '0.00',
                        tooltip: 'Nota del desempe&ntilde;o del pasante en la empresa. Sobre  40% de la calificaci&oacute;n total.'
                    }
                   
                ],
                tbar: {
                    xtype: 'toolbar',
                    id: 'tbOpciones',
                    items: [
                       {
                            xtype: 'button',
                            text: 'Registrar calificaci&oacute;n',
                            iconCls: 'sigp-notas',
                            id: 'btnNotas'
                       },
                        {
                            xtype: 'button',
                            text: 'Ver perfil',
                            iconCls: 'sigp-perfil',
                            id: 'btnVerPerfil'
                        }     
                        ,
                        {
                            xtype: 'button',
                            text: 'Reporte calificaciones',
                            iconCls: 'sigp-reporte',
                            id: 'btnReporteCalif'
                        }                    
                    ]
                },
                bbar: {
                    xtype: 'paging',
                    store: 'stNotasTE',
                    displayInfo: true,
                    pageSize: 10,
                    id: 'ptbNotasTE'
                }
            }
        ];
        panelNotasTEUi.superclass.initComponent.call(this);
    }
});
