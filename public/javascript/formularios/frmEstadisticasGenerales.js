frmEstadisticasGenerales = Ext.extend(frmEstadisticasGeneralesUi, {
    initComponent: function() {
        frmEstadisticasGenerales.superclass.initComponent.call(this);
        Ext.getCmp('btnSalir').on('click',this.salir);

    },
     salir:function(){
      	 Ext.getCmp('frmEstadisticasGeneralesWin').close();    
    }
});
