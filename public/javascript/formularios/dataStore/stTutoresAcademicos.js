

stTutoresAcademicos = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        stTutoresAcademicos.superclass.constructor.call(this, Ext.apply({
            storeId: 'stTutoresAcademicos',
            url: '/SIGP/tutorAcademico/getTutoresAcademicos',
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
                    name: 'departamento',
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
var stTutoresAcademicos = new stTutoresAcademicos();
