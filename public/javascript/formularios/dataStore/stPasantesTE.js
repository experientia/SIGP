stPasantesTE = Ext.extend(Ext.data.JsonStore, {
			constructor : function(cfg) {
				cfg = cfg || {};
				stPasantesTE.superclass.constructor.call(this, Ext.apply({
									storeId : 'stPasantesTE',
									url : '/SIGP/pasante/consultarPasantiasTE',
									paramNames : {
										pCarreraId : "pCarreraId"
									},
									root : 'resultado',
									fields : [{
												name : 'pasanteId',
												type : 'int'
											}, {
												name : 'pasantiaId',
												type : 'int'
											},  {
												name : 'tutorId',
												type : 'int'
											},{
												name : 'cedulaPasante',
												type : 'string'
											}, {
												name : 'nombrePasante',
												type : 'string'
											}, {
												name : 'apellidoPasante',
												type : 'string'
											}, {
												name : 'carrera',
												type : 'string'
											}, {
												name : 'razonSocial',
												type : 'string'
											}, {
												name : 'tutorAcad',
												type : 'string'
											}, {
												name : 'estatusPasantia',
												type : 'string'
											}]
								}, cfg));
			}
		});
var stPasantesTE = new stPasantesTE();
