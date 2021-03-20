/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Config } from '../../lib/config'
import { Enums } from '../../lib/enums';
import { AppBar, IconButton, makeStyles, Toolbar, Tooltip, Typography } from '@material-ui/core';
import { DefaultSelect } from '../util/defaultSelect'
import { useHistory } from 'react-router-dom'
import { Paper, TextField, Button } from '@material-ui/core'
import { Add, ClearAll, Delete, Save } from '@material-ui/icons'
import { ListDirecciones } from './listDirecciones';
import Grid from '@material-ui/core/Grid'
import showAlert from '../util/showAlert';
import { Context } from '../contexts/context';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      title: {
        flexGrow: 1,
      },
    input: { width: '20em', margin: theme.spacing(1)  },
    paper: { padding:'2em', width:'100%', display:'flex', alignItems: 'center' },
    botonera: { marginLeft: '50%', padding:'1em' },
    button: { margin: theme.spacing(1)}, 
    alert : { padding: '2em', width: '45%', marginTop: '-15em', margin: theme.spacing(1) }
}));

export const CreateOrUpdate = (props) => {
    const { id } = useParams();    
    const history = useHistory();
    const { context, setContext } = useContext(Context);

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
    useEffect(() => {
        _getDirecciones();
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
              setContacto(data.created);
              showAlert('Contacto', 
              id > 0 ? 'Se ha actualizado el contacto': 'Se ha registrado el nuevo contacto',
              'success',
              () => {
                history.goBack();
                },
              );
          }).catch(error =>{
              showAlert('Error', error, 'error');
          });
    }
    
    const _getDirecciones = any => {
        setContext({...context, value : []})
    }

    const classes = useStyles();

    return(
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="left" spacing={1}>
                    <Grid item>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h6"  className={classes.title}>
                                    Datos Generales.
                                </Typography>
                                <Tooltip title='Limpiar'>
                                    <IconButton  
                                        component="span"
                                        color="inherit">
                                        <ClearAll/>
                                    </IconButton>
                                </Tooltip>
                            </Toolbar>
                        </AppBar>
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
                        </Paper>            
                    </Grid>
                    <Grid item>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h6" className={classes.title}>
                                    Direcciones
                                </Typography>
                                <Tooltip title='Añadir Dirección'>
                                    <IconButton 
                                    component="span"
                                    color="inherit"
                                    >
                                        <Add/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title='Borrar todo '>
                                    <IconButton 
                                    component="span"
                                    color="inherit"
                                    >
                                        <Delete/>
                                    </IconButton>
                                </Tooltip>
                            </Toolbar>
                        </AppBar>
                        <Paper className={classes.paper}>
                            <div style={{ width: '100%'}}>
                                <ListDirecciones data={ typeof(context.value) == typeof([]) ? context.value   : []  }/>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}