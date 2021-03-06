stSolicitudesPasanteTutor = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        stSolicitudesPasanteTutor.superclass.constructor.call(this, Ext.apply({
            storeId: 'stSolicitudesPasanteTutor',
            root: 'resultado',
            url: '/SIGP/solicitud/getSolicitudesPasanteTutorAcademico',
            fields: [
                {
                    name: 'id',
                    type: 'int'
                },
                  {
                    name: 'idPasante',
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
                    name: 'carrera',
                    type: 'string'
                },
                {
                    name: 'fchSolicitud',
                    type: 'date'
                }
            ]
        }, cfg));
    }
});
var stSolicitudesPasanteTutor = new stSolicitudesPasanteTutor();