
Ext.QuickTips.init(); 
frmVerPasantia = Ext.extend(frmVerPasantiaUi, {
    initComponent: function() {
        frmVerPasantia.superclass.initComponent.call(this);
        Ext.getCmp('btnSalir').on('click',this.salir);
	}
	,
     salir:function(){
    	 Ext.getCmp('frmPasantiaWin').close();  
    }
});
