stCiudades = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        stCiudades.superclass.constructor.call(this, Ext.apply({
            storeId: 'stCiudades',
            url: '/SIGP/ciudad/getCiudades',
            fields: [
                {
                    name: 'id',
                    type: 'int',
                    mapping: 'id'
                },
                {
                    name: 'nombre',
                    type: 'string',
                    mapping: 'nombre'
                }
            ]
        }, cfg));
    }
});
new stCiudades();