stLapsosAcademicos = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        stLapsosAcademicos.superclass.constructor.call(this, Ext.apply({
            storeId: 'stLapsosAcademicos',
            url: '/SIGP/lapsoAcademico/getLapsosAcademicos',
            baseParams: 'pEmpresa_id',
            root: 'resultado',
            fields: [
          	   {
                    name: 'id',
                    type: 'int'
                },
                {
                    name: 'estatus',
                    type: 'string'
                },
                {
                    name: 'lapso',
                    type: 'string'
                },
                {
                    name: 'fchInicio',
                    type: 'date'
                },
                {
                    name: 'fchFin',
                    type: 'date'
                }
            ]
        }, cfg));
    }
});
var stLapsosAcademicos = new stLapsosAcademicos();
