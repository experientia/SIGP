stPasantesTA = Ext.extend(Ext.data.JsonStore, {
			constructor : function(cfg) {
				cfg = cfg || {};
				stPasantesTA.superclass.constructor.call(this, Ext.apply({
									storeId : 'stPasantesTA',
									url : '/SIGP/pasante/consultarPasantiasTA',
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
												name : 'tutorEmp',
												type : 'string'
											}, {
												name : 'estatusPasantia',
												type : 'string'
											}]
								}, cfg));
			}
		});
var stPasantesTA = new stPasantesTA();
