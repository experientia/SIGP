
Ext.QuickTips.init(); 
frmVerPasante = Ext.extend(frmVerPasanteUi, {
    initComponent: function() {
        frmVerPasante.superclass.initComponent.call(this);
        Ext.getCmp('btnSalir').on('click',this.salir);
	}
	,
     salir:function(){
    	 Ext.getCmp('frmPasanteWin').close();  
    }
});
