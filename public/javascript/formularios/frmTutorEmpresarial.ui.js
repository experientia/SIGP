frmTutorEmpresarialUi = Ext.extend(Ext.Window, {
    title: 'Tutor Empresarial',
    width: 459,
    height: 330,
    modal: true,
    resizable : false,
    id: 'frmTutorEmpresarial',
    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                width: 445,
                height: 300,
                id: 'formTutorEmpresarial',
                method: 'POST',
                waitTitle: 'Por favor espere...',
                url: '/SIGP/tutorEmpresarial/registrar',
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Informaci&oacute;n Tutor ',
                        width: 440,
                        items: [
                            {
                                xtype: 'textfield',
                                fieldLabel: 'C&eacute;dula*',
                                anchor: '50%',
                                maxLength: 12,
                                allowBlank: false,
                                id: 'txtCedula',
                                vtype: 'soloNumero'
                             },
                             {
                                 xtype: 'textfield',
                                 fieldLabel: 'Nombre*',
                                 anchor: '100%',
                                 maxLength: 45,
                                 allowBlank: false,
                                 id: 'txtNombre'
                             },
                             {
                                 xtype: 'textfield',
                                 fieldLabel: 'Apellido*',
                                 anchor: '100%',
                                 maxLength: 45,
                                 allowBlank: false,
                                 id: 'txtApellido'
                             },
                             {
                                 xtype: 'textfield',
                                 fieldLabel: 'Cargo*',
                                 anchor: '100%',
                                 maxLength: 45,
                                 allowBlank: false,
                                 id: 'txtCargo'
                             },
                             {
                                 xtype: 'textfield',
                                 fieldLabel: 'Correo electr&oacute;nico*',
                                 anchor: '100%',
                                 name: 'txtCorreo',
                                 maxLength: 40,
                                 allowBlank: false,
                                 vtype: 'email',
                                 id: 'txtCorreo'
                             },
                             {
                                 xtype: 'textfield',
                                 fieldLabel: 'Repetir correo electr&oacute;nico*',
                                 anchor: '100%',
                                 width: 420,
                                 maxLength: 40,
                                 name: 'txtCorreoRepetir',
                                 allowBlank: false,
                                 vtype: 'emailIguales',
                                 campoInicial: 'txtCorreo',
                                 id: 'txtCorreoRepetir'
                             },
                             {
                                 xtype: 'textfield',
                                 fieldLabel: 'Tel&eacute;fono',
                                 name: 'txtTelefono',
                                 anchor: '50%',
                                 maxLength: 12,
                                 vtype: 'soloNumero',
                                 id: 'txtTelefono'
                             },
                            {
                                xtype: 'textfield',
                                id: 'txtIdTutorEHidden',
                                hidden: true
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
                                text: 'Guardar',
                                width: 90,
                                height: 30,
                                type: 'submit',
                                iconCls: 'sigp-guardar',
                                id: 'btnGuardar'
                            },
                            {
                                xtype: 'button',
                                text: 'Limpiar',
                                width: 90,
                                height: 30,
                                type: 'reset',
                                iconCls: 'sigp-limpiar',
                                id: 'btnLimpiar'
                            }
                            ,
                            {
                                xtype: 'button',
                                text: 'Salir',
                                width: 90,
                                height: 30,
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
        frmTutorEmpresarialUi.superclass.initComponent.call(this);
    }
});
