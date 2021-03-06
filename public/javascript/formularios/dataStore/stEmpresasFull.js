/**
 * 
 */

stEmpresasFull = Ext.extend(Ext.data.JsonStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        stEmpresasFull.superclass.constructor.call(this, Ext.apply({
            storeId: 'stEmpresasFull',
            url: '/SIGP/empresa/getEmpresasbyEstatus',
            baseParams: 'pEstatus',
            root: 'resultado',
            fields: [
          	   {
                    name: 'id',
                    type: 'int'
                },
                {
                    name: 'razonSocial',
                    type: 'string'
                },
                {
                    name: 'rif',
                    type: 'string'
                },
                {
                    name: 'telefono',
                    type: 'string'
                },
                {
                    name: 'contacto',
                    type: 'string'
                },
                {
                    name: 'email',
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
var stEmpresasFull = new stEmpresasFull();
