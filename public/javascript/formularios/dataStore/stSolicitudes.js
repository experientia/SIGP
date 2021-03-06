stSolicitudes = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        stSolicitudes.superclass.constructor.call(this, Ext.apply({
            storeId: 'stSolicitudes',
            root: 'resultado',
            url: '/SIGP/solicitud/getSolicitudesTutorAcademico',
            fields: [
                {
                    name: 'id',
                    type: 'int'
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
                    name: 'departamento',
                    type: 'string'
                },
                {
                    name: 'fchSolicitud',
                    type: 'date'
                },
                {
                    name: 'fchRespuesta',
                    type: 'date'
                },
                {
                    name: 'estatus',
                    type: 'string'
                }

            ]
        }, cfg));
    }
});
var stSolicitudes = new stSolicitudes();