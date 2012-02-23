/*
 * File: stCarrera.js
 * Date: Fri May 28 2010 20:20:44 GMT-0430 (Hora estándar de Venezuela)
 * 
 * This file was generated by Ext Designer version 1.1.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

stCarrera = Ext.extend(Ext.data.JsonStore, {
	constructor : function(cfg) {
		cfg = cfg || {};
		stCarrera.superclass.constructor.call(this, Ext.apply( {
			storeId : 'stCarrera',
			url : '/SIGP/carrera/getCarrerasbyDecanato',
			paramNames : {
				idDecanato : "idDecanato"
			},
			fields : [ {
				name : 'id',
				type : 'int',
				mapping : 'id'
			}, {
				name : 'nombre',
				type : 'string',
				mapping : 'nombre'
			}, {
				name : 'duracion',
				type : 'int',
				mapping : 'duracion'
			} ]
		}, cfg));
	}
});
new stCarrera();