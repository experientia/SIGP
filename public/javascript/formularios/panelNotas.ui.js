panelNotasUi = Ext.extend(Ext.Panel, {
    width: 741,
    height: 420,
    id: 'panelNotas',
    initComponent: function() {
        this.items = [
            {
                xtype: 'grid',
                title: 'Calificaciones pasantes',
                store: 'stNotas',
                height: 418,
                titleCollapse: true,
                stripeRows: true,
                width: 739,
				loadMask: true,
                maskDisabled: false,
                id: 'gridNotas',
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
                        width: 70,
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
                        xtype: 'numbercolumn',
                        header: 'Nota Informe',
                        sortable: true,
                        width: 78,
                        align: 'right',
                        editable: false,
                        dataIndex: 'notaInforme',
                        format: '0.00',
                        tooltip: 'Nota del informe de pasant&iacute;as. Sobre 30% de la calificaci&oacute;n total.'
                    },
                    {
                        xtype: 'numbercolumn',
                        header: 'Nota Empresa T.A.',
                        sortable: true,
                        width: 90,
                        align: 'right',
                        editable: false,
                        dataIndex: 'notaEmpresaTA',
                        format: '0.00',
                        tooltip: 'Nota del desempe&ntilde;o del pasante en la empresa. Sobre  30% de la calificaci&oacute;n total.'
                    },
                     {
                        xtype: 'numbercolumn',
                        header: 'Nota Empresa T.E.',
                        sortable: true,
                        width: 90,
                        align: 'right',
                        editable: false,
                        dataIndex: 'notaEmpresaTE',
                        format: '0.00',
                        tooltip: 'Nota del desempe&ntilde;o del pasante en la empresa. Sobre  40% de la calificaci&oacute;n total.'
                    },
                     {
                        xtype: 'gridcolumn',
                        header: 'Total',
                        sortable: true,
                        width: 50,
                        align: 'right',
                        editable: false,
                        dataIndex: 'acumulado',
                        format: '0.00',
                        tooltip: 'Nota en base al 100 % del pasante.',
                        renderer: function(value, cell){     
    								var str = '';  
    								if (value>=47.5) {      
        								str = "<font color='blue'>"+value+"</font>" ;    
            						}  
								    else {        
								        str = "<font color='red'>"+value+"</font>";       
								    }  
								    return str;          
								}  	
                   	 },
                   	 {
                        xtype: 'gridcolumn',
                        header: 'Empresa',
                        sortable: true,
                        width: 155,
                        editable: false,
                        dataIndex: 'razonSocial',
                        tooltip: 'Raz&oacute;n Social de la empresa.'
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
                        },
                        { xtype: 'tbfill'},  
                         'B&uacute;squeda: ', ' ',
            new Ext.ux.form.SearchField({
                store: stNotas,
                width:150,
                emptyText : 'Ingrese una cedula...'
            })
                    ]
                },     
		
                bbar: {
                    xtype: 'paging',
                    store: 'stNotas',
                    displayInfo: true,
                    pageSize: 10,
                    id: 'ptbNotas'
                }
            }
        ];
        panelNotasUi.superclass.initComponent.call(this);
    }
});
