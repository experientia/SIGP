stNotas = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        stNotas.superclass.constructor.call(this, Ext.apply({
            storeId: 'stNotas',
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
                    type: 'float'
                },
                {
                    name: 'notaEmpresaTA',
                    type: 'float'
                }
                ,
                {
                    name: 'notaEmpresaTE',
                    type: 'float'
                }
                ,
                {
                    name: 'acumulado',
                    type: 'float'
                }
            ]
        }, cfg));
    }
});
var stNotas = new stNotas();
