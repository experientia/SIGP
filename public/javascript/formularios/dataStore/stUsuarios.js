stUsuarios = Ext.extend(Ext.data.JsonStore, {
			constructor : function(cfg) {
				cfg = cfg || {};
				stUsuarios.superclass.constructor.call(this, Ext.apply({
									storeId : 'stUsuarios',
									url : '/SIGP/usuario/consultarUsuarios',
									root : 'resultado',
									fields : [{
												name : 'usuarioId',
												type : 'int'
											}, {
												name : 'nombreUsuario',
												type : 'string'
											}, {
												name : 'categoria',
												type : 'string'
											}, {
												name : 'estatus',
												type : 'string'
											}]
								}, cfg));
			}
		});
var stUsuarios = new stUsuarios();
