import React from 'react';
import { Contactos }  from '../components/contacto';
import { CreateOrUpdate } from '../components/Contactos/createOrUpdate';

import ContactMail from '@material-ui/icons/ContactMail';
import Home from '@material-ui/icons/Home'
const baseUri = 'http://localhost:50099/Api/';

function Index(){
    return(
        <h1>Pagina de inicio</h1>
    )
}

export const Config = {
    apiUrl: baseUri,
    routes: [
        { 
            path: '/', 
            apiPath: '',
            exact : true, 
            text: 'Inicio', 
            component : Index,
            icon: Home,
            isRoot: true,
        },
        { 
            path: '/Contactos', 
            apiPath: '',
            exact : true, 
            text: 'Contactos', 
            component : Contactos,
            icon: ContactMail,
            isRoot: true,
        },
        { 
            path: '/Contactos/CreateOrUpdate/:id', 
            apiPath: '',
            exact : false, 
            text: 'CrearContactos', 
            component : CreateOrUpdate,
            icon: ContactMail,
            isRoot: false,
        },
    ]
}