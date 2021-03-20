import { Index } from '../components/index';
import { Contactos }  from '../components/contacto';
import { CreateOrUpdate } from '../components/Contactos/createOrUpdate';

import Contacts from '@material-ui/icons/Contacts';
import Home from '@material-ui/icons/Home'
const baseUri = 'http://reactapi.somee.com/Api/';


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
            icon: Contacts,
            isRoot: true,
        },
        { 
            path: '/Contactos/CreateOrUpdate/:id', 
            apiPath: '',
            exact : false, 
            text: 'CrearContactos', 
            component : CreateOrUpdate,
            icon: '',
            isRoot: false,
        },
    ]
}