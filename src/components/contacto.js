import React, { useState, useEffect } from 'react';
import { LinearProgress, makeStyles } from '@material-ui/core';
import { Config } from '../lib/config'
import { ListContactos } from './Contactos/listContactos'
import { SearchForm } from './util/searchForm'
import { useHistory } from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(10),
        right: theme.spacing(2),
      },
}))

export function Contactos(){
    const history = useHistory();
    const classes = useStyles();
    const [ contactos, setContactos] = useState([])
    const [ searchValue, setSearchValue ] = useState('')
    const [ showLoading, setShowLoading] = useState(true)
    //const loaded = false;
    useEffect(() => {
        fetch(`${Config.apiUrl}Contactos?filter=${searchValue}`)
        .then(response => response.json())
        .then(contactos => {
            setContactos(contactos);
            setShowLoading(false);
        })
    }, [searchValue]) 
    
    const _handleForm = (form) => {
        setShowLoading(true)
        setSearchValue(form.formResult);
    }

    return( 
      <div style={{ height: '00%', width: '100%' }}>
        <div style={{marginLeft: '25%', width: '50%'}}>
            <SearchForm submitSearch={ _handleForm }/>
        </div>
        { showLoading ? <LinearProgress /> : '' }
        <ListContactos data={ contactos }/>
        <Fab className={classes.fab} color='primary' onClick={ (event) => { history.push('Contactos/CreateOrUpdate/0') }}>
            <AddIcon/>
        </Fab>
      </div>
     )
}