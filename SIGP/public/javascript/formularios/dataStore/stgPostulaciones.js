stgPostulaciones = Ext.extend(Ext.data.GroupingStore, {
    constructor: function(cfg) {
        cfg = cfg || {};
        stgPostulaciones.superclass.constructor.call(this, Ext.apply({
            storeId: 'stgPostulaciones',
            url: '/SIGP/postulacion/getPostulaciones',
            reader: readerPostulaciones,
            root: 'resultado',
            groupField  : 'titulo'
        }, cfg));
    }
});
var stgPostulaciones = new stgPostulaciones();
