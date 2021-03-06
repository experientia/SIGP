

stTutoresEmpresariales = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        stTutoresEmpresariales.superclass.constructor.call(this, Ext.apply({
            storeId: 'stTutoresEmpresariales',
            url: '/SIGP/tutorEmpresarial/getTutoresEmpresariales',
            baseParams: 'pEmpresa_id',
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
                    name: 'cargo',
                    type: 'string'
                },
                {
                    name: 'estatus',
                    type: 'string'
                }
            ]
        }, cfg));
    }
});
var stTutoresEmpresariales = new stTutoresEmpresariales();
