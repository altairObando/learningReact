import React from 'react';
import { useParams } from 'react-router-dom';

export const CreateOrUpdate = (props) => {
    const {id} = useParams();
    console.log(id)

    return(
        <h1>Formulario de contactos</h1>
    )
}