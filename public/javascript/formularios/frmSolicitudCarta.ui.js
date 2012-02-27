frmSolicitudCartaUi = Ext.extend(Ext.Panel, {
			width : 500,
			height : 160,
			title : 'Solicitud de Carta de Postulación',
			id : 'panelSolicitud',
			layout : 'form',
			autoScroll : true,
			initComponent : function() {
				this.items = [{
							xtype : 'textfield',
							fieldLabel : 'Clave actual*',
							anchor : '80%',
							inputType : 'password',
							maxLength : 20,
							allowBlank : false,
							minLength : 6,
							submitValue : false,
							id : 'txtClaveActual'
						}, {
							xtype : 'textfield',
							fieldLabel : 'Clave*',
							anchor : '80%',
							name : 'txtClave',
							inputType : 'password',
							maxLength : 20,
							allowBlank : false,
							minLength : 6,
							submitValue : false,
							id : 'txtClave'
						}, {
							xtype : 'textfield',
							fieldLabel : 'Reingresar clave*',
							anchor : '80%',
							name : 'txtClave2',
							inputType : 'password',
							maxLength : 20,
							allowBlank : false,
							minLength : 6,
							vtype : 'password',
							submitValue : false,
							id : 'txtClave2'
						}

						, {
							xtype : 'container',
							layout : 'hbox',
							id : 'contenedorBtns',
							layoutConfig : {
								pack : 'end'
							},
							items : [{
										xtype : 'button',
										text : 'Enviar',
										type : 'submit',
										width: 90,
		                                height: 30,
										iconCls : 'sigp-pdf',
										id : 'btnEnviar'
									}, {
										xtype : 'button',
										width: 90,
		                                height: 30,
										text : 'Restablecer',
										iconCls : 'sigp-limpiar',
										id : 'btnReset'
									}]
						}, {
							xtype : 'label',
							text : 'Campos marcados con * son obligatorios.'
						}];
				frmSolicitudCartaUi.superclass.initComponent.call(this);
			}
		});
