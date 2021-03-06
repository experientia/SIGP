panelLapsoUi = Ext.extend(Ext.Panel, {
    width: 741,
    height: 420,
    id: 'panelLapso',
    initComponent: function() {
        this.items = [
            {
                xtype: 'grid',
                title: 'Lapsos Acad&eacute;micos',
                store: 'stLapsosAcademicos',
                height: 418,
                titleCollapse: true,
                stripeRows: true,
                width: 739,
				loadMask: true,
                maskDisabled: false,
                id: 'gridLapsos',
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
                    header: 'Lapso',
                    width: 100,
                    editable: false,
                    dataIndex: 'lapso',
                    tooltip: 'Lapso Acad&eacute;mico'
                },
                {
                        xtype: 'datecolumn',
                        header: 'Fecha Inicio',
                        sortable: true,
                        width: 120,
                        editable: false,
                        dataIndex: 'fchInicio',
                        tooltip: 'Fecha de Inicio',
                        format:'d/m/Y'
                    },
                    {
                        xtype: 'datecolumn',
                        dataIndex: 'fchFin',
                        header: 'Fecha Finalizaci&oacute;n',
                        sortable: true,
                        width: 120,
                        editable: false,
                        tooltip: 'Fecha Finalizaci&oacute;n del lapso.',
                        format:'d/m/Y'
                    },
                    {
                        xtype: 'gridcolumn',
                        dataIndex: 'estatus',
                        header: 'Estatus',
                        width: 100,
                        editable: false,
                        tooltip: 'Estatus del lapso.'
                    }                                
                ],
                tbar: {
                    xtype: 'toolbar',
                    id: 'tbOpciones',
                    items: [
                        {
						    xtype: 'button',
						    text: 'Iniciar',
						    iconCls: 'sigp-play',
						    id: 'btnActivar'
						},
						  {
						    xtype: 'button',
						    text: 'Finalizar',
						    iconCls: 'sigp-pause',
						    id: 'btnFinalizar'
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
						},
                        {
                            xtype: 'button',
                            text: 'Estad&iacute;sticas',
                            iconCls: 'sigp-info',
                            id: 'btnEstadisticas'
                        }                        
                    ]
                },
                bbar: {
                    xtype: 'paging',
                    store: 'stLapsosAcademicos',
                    displayInfo: true,
                    pageSize: 10
                }
            }
        ];
        panelLapsoUi.superclass.initComponent.call(this);
    }
});
