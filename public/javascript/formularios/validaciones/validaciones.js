/**
 * @author Robert Arrieche
 */

Ext.apply(Ext.form.VTypes, {
    dateRange : function(val, field) {
        var date = field.parseDate(val);
 
        if(!date){
            return;
        }
        if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
            var start = Ext.getCmp(field.startDateField);
            start.setMaxValue(date);
            start.validate();
            this.dateRangeMax = date;
        }
        else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
            var end = Ext.getCmp(field.endDateField);
            end.setMinValue(date);
            end.validate();
            this.dateRangeMin = date;
        }
        /*
         * Always return true since we're only using this vtype to set the
         * min/max allowed values (these are tested for after the vtype test)
         */
        return true;
    }
});

Ext.apply(Ext.form.VTypes, {
	soloLetrasNumerosMask: /[a-zA-Z0-9]/,
	soloLetrasNumeros: function(value,field){  
    return true ;
},
soloLetrasNumerosText: 'Solo debe contener A-Z,a-z,0-9 .<br/>Por favor, verifiquelas.'
});

Ext.apply(Ext.form.VTypes, {
	soloNumeroMask: /[ \d\-\(\)]/,
	soloNumero: function(value,field){  
    return value.replace(/[ \-\(\)]/g,'').length == 12 ;
}

});

Ext.apply(Ext.form.VTypes, {
	password: function(val, field) {
	if (field.campoInicialClave) {
		var pwd = Ext.getCmp(field.campoInicialClave);
		return (val == pwd.getValue());
	}
	
	return true;
},
passwordText: 'Contrase\u00f1as no coinciden.<br/>Por favor, verifiquelas.'
});

Ext.apply(Ext.form.VTypes, {
	emailIguales: function(val, field) {
	if (field.campoInicial) {
		var email = Ext.getCmp(field.campoInicial);
		if  (val != email.getValue()){
			field.markInvalid(); 
			return false;
		}
	}
	return true;
},
emailIgualesText:'Cuentas de correo no coindicen.<Br/>Por favor, verifiquelas.'
});
