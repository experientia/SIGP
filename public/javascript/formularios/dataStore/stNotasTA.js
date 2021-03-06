stNotasTA = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        stNotasTA.superclass.constructor.call(this, Ext.apply({
            storeId: 'stNotasTA',
            url: '/SIGP/pasante/getNotasParciales',
            root: 'resultado',
            fields: [
          	   {
                    name: 'id',
                    type: 'int'
                },
                {
                    name: 'cedula',
                    type: 'string'
                },
                {
                    name: 'nombre',
                    type: 'string'
                },
                {
                    name: 'apellido',
                    type: 'string'
                },
                {
                    name: 'razonSocial',
                    type: 'string'
                },
                {
                    name: 'notaInforme',
                    type: 'string'
                },
                {
                    name: 'notaEmpresaTA',
                    type: 'string'
                }
            ]
        }, cfg));
    }
});
var stNotasTA = new stNotasTA();
