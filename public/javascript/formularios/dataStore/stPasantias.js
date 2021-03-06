

stPasantias = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        stPasantias.superclass.constructor.call(this, Ext.apply({
            storeId: 'stPasantias',
            url: '/SIGP/pasantia/getPasantias',
            baseParams: 'pEmpresa_id',
            root: 'resultado',
            fields: [
          	   {
                    name: 'id',
                    type: 'int'
                },
                {
                    name: 'titulo',
                    type: 'string'
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
                    name: 'fchInicioEst',
                    type: 'date'
                },
                   {
                    name: 'fchFinEst',
                    type: 'date'
                },
				{
                    name: 'modalidad',
                    type: 'string'
                },
                {
                    name: 'tipoPasantia',
                    type: 'string'
                },
               
            ]
        }, cfg));
    }
});
var stPasantias = new stPasantias();
