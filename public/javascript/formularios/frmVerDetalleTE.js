
Ext.QuickTips.init(); 
frmVerDetalleTE = Ext.extend(frmVerDetalleTEUi, {
    initComponent: function() {
        frmVerDetalleTE.superclass.initComponent.call(this);
        Ext.getCmp('btnSalir').on('click',this.salir);
	}
	,
     salir:function(){
    	 Ext.getCmp('frmVerDetalleTEWin').close();  
    }
});
