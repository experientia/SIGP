frmNotificarRechazoUi = Ext.extend(Ext.Window, {
    title: 'Rechazo',
    width: 674,
    height: 415,
    modal: true,
    resizable : false,
    id: 'frmNotificarRechazoWin',
    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                width: 660,
                height: 412,
                id: 'formNotificarRechazo',
                method: 'POST',
                waitTitle: 'Por favor espere...',
                url: '/SIGP/postulacion/rechazar',
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Informaci&oacute;n de Postulaci&oacute;n',
                        width: 654,
                        items: [
                            {
                                xtype: 'textfield',
                                fieldLabel: 'T&iacute;tulo',
                                anchor: '100%',
                                maxLength: 40,
                                allowBlank: false,
                                submitValue: false,
                                disabled: true,
                                id: 'txtTitulo'
                            },
                             {
                                xtype: 'textfield',
                                id: 'txtIdPostulacion',
                                hidden: true
                            },
                              {
                                xtype: 'textfield',
                                fieldLabel: 'Nombres y Apelldidos',
                                anchor: '100%',
                                maxLength: 40,
                                allowBlank: false,
                                submitValue: false,
                                disabled: true,
                                id: 'txtNombreApellido'
                            },
                              {
                                xtype: 'textfield',
                                fieldLabel: 'Carrera',
                                anchor: '100%',
                                submitValue: false,
                                maxLength: 40,
								disabled: true,
                                allowBlank: false,
                                id: 'txtCarrera'
                            }                          
                        ]
                    },
                       {
                        xtype: 'fieldset',
                        title: 'Informaci&oacute;n de Rechazo',
                        width: 654,
                        items: [                          
                            {   xtype: 'htmleditor',
                                anchor: '100%',
                                height: 150,
                                fieldLabel: 'Motivo*',
                                width: 572,
                                enableSourceEdit: false,
                                enableFont: false,
                                id: 'txtRechazo'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        id: 'contenedorBtns',
                        layoutConfig: {
                            pack: 'end'
                        },
                        items: [
                            {
                                xtype: 'button',
                                text: 'Aceptar',
                                type: 'submit',
                                iconCls: 'sigp-aceptar',
                                id: 'btnAceptar'
                            },
                            {
                                xtype: 'button',
                                text: 'Limpiar',
                                iconCls: 'sigp-limpiar',
                                id: 'btnLimpiar'
                            },
                            {
                                xtype: 'button',
                                text: 'Salir',
                                type: 'reset',
                                iconCls: 'sigp-salir',
                                id: 'btnSalir'
                            }
                        ]
                    },
                     {
                        xtype: 'label',
                        text: 'Campos marcados con * son obligatorios.'
                    }
                ]
            }
        ];
        frmNotificarRechazoUi.superclass.initComponent.call(this);
    }
});
