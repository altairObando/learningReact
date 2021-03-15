import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Config } from '../../lib/config'
import { Enums } from '../../lib/enums';
import { makeStyles } from '@material-ui/core';
import { DefaultSelect } from '../util/defaultSelect'
import { useHistory } from 'react-router-dom'
import { Alert, AlertTitle } from '@material-ui/lab';
import { Paper, TextField, Button } from '@material-ui/core'
import { Save } from '@material-ui/icons'
const useStyles = makeStyles((theme) => ({
    input: { width: '20em', margin: theme.spacing(1)  },
    paper: { margin: '2em', padding:'2em', width:'75%', display:'flex', alignItems: 'center' },
    botonera: { marginLeft: '50%', padding:'1em' },
    button: { margin: theme.spacing(1)}, 
    alert : { padding: '2em', width: '45%', marginTop: '-15em', margin: theme.spacing(1) }
}));


export const CreateOrUpdate = (props) => {
    const { id } = useParams();    
    const history = useHistory();
    const [contacto, setContacto] = useState({
        Nombre: '',
        Apellido: '',
        SNombre: '',
        SApellido:'',
        FechaNacimiento:'',
        GetEdad: '0',
        Email: '@',
        EstadoCivil:0,
        Telefono: '',
        Sexo:0
    });    
    const [response, setResponse] = useState({
        open: false,
        success: false,
        messages: '',
        severity: 'success'
    });
    useEffect(() => {
        if(id !== '0')
            fetch(`${Config.apiUrl}Contactos/${id}`)
            .then(response => response.json())
            .then(contacto => {
                setContacto(contacto)
            }).catch(x => {
                alert(x)
            });
    }, [id]) 

    const _handleInputChange = (e) => {
        setContacto({
            ...contacto, [e.target.name]: e.target.value
        })
    }
    const _handleCancel = (e) => {
        history.goBack();
    }

    const _handleSubmit = (event) => {
        event.preventDefault();
        var contactMethod = id > 0 ? 'PUT' : 'POST';
        var uri = id > 0 ? `${Config.apiUrl}Contactos/${id}` : `${Config.apiUrl}Contactos/`;
        fetch(uri,{
            method: contactMethod,
            body: JSON.stringify(contacto),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
               },
        }).then(response => response.json())
          .then(data => {

              setResponse({
                  ...response, success : data.success, messages: data.messages, open: true, severity: data.success ? 'success' : 'error'
              });
              setContacto(data.created);
              
          });
    }
    
    const classes = useStyles();

    return(
        <Paper className={classes.paper}>            
            <form onSubmit={ _handleSubmit }>
                <div>
                    <TextField required name='Nombre' label='Primer Nombre' className={ classes.input } onChange={ _handleInputChange } value={contacto.Nombre} />
                    <TextField required name='SNombre' label='Segundo Nombre' className={ classes.input } onChange={ _handleInputChange } value={contacto.SNombre} />
                </div>
                <div>
                    <TextField required name='Apellido' label='Primer Apellido' className={ classes.input } onChange={ _handleInputChange } value={contacto.Apellido}/>
                    <TextField required name='SApellido' label='Segundo Apellido' className={ classes.input } onChange={ _handleInputChange } value={contacto.SApellido}/>
                </div>
                <div>
                    <TextField required name='FechaNacimiento' label='Fecha de Nacimiento' className={ classes.input } onChange={ _handleInputChange } value={contacto.FechaNacimiento}/>
                    <TextField required name='GetEdad' label='Edad' className={ classes.input } onChange={ _handleInputChange } value={contacto.GetEdad} InputProps={{
                        readOnly: true,
                    }}/>
                </div>
                <div>
                    <TextField required name='Email' label='Email' className={ classes.input } onChange={ _handleInputChange } value={contacto.Email}/>
                    <TextField required name='Telefono' label='Telefono' className={ classes.input } onChange={ _handleInputChange } value={contacto.Telefono}/>
                </div>
                <div>
                    <DefaultSelect onChange={ _handleInputChange } estado={contacto.EstadoCivil} titulo='Estado Civil' elementos={ Enums.estadoCivil } name='EstadoCivil'/>
                    <DefaultSelect onChange={ _handleInputChange } estado={contacto.Sexo} titulo='Sexo' elementos={ Enums.sexo } name='Sexo'/>
                </div>   
                <div className={classes.botonera}>
                    <Button variant="contained" className={ classes.button } onClick={ _handleCancel }> Cancelar</Button>
                    <Button variant="contained" color="primary" className={ classes.button } type='submit'>
                        Guardar <Save />
                    </Button>
                </div>             
            </form>
            <div className={ classes.alert }>
                {
                    response.open ? (
                    <Alert variant="filled" severity={response.severity}>
                        <AlertTitle>{response.success ? 'Tarea Completada': 'Error' }</AlertTitle>
                        {response.messages}
                    </Alert>
                    ) : <span></span>
                }
            </div>
        </Paper>
    )
}