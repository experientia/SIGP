var readerPostulaciones = new Ext.data.JsonReader({   
        totalProperty   : 'total',  
        successProperty : 'success',  
        messageProperty : 'message',  
        idProperty  : 'id',  
        root        : 'resultado'  
        },[  
            {
                    name: 'titulo',
                    type: 'string'
                },
                {
                    name: 'id',
                    type: 'int'
                },
                {
                    name: 'pasanteId',
                    type: 'int'
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
                    name: 'carrera',
                    type: 'string'
                },
                {
                    name: 'fchPostulacion',
                    type: 'string'
                }
        ]  
    );  
