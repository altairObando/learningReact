import React, { useState, useEffect, useContext } from 'react';
import { LinearProgress, makeStyles } from '@material-ui/core';
import { Config } from '../lib/config'
import { ListContactos } from './Contactos/listContactos'
import { SearchForm } from './util/searchForm'
import { useHistory } from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Context} from './contexts/context'
const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(10),
        right: theme.spacing(5),
      },
}))

export function Contactos(){
    const history = useHistory();
    const classes = useStyles();
    const [ contactos, setContactos ] = useState([])
    const [ searchValue, setSearchValue ] = useState('')
    const [ showLoading, setShowLoading ] = useState(true);
    const { context, setContext }  = useContext(Context);
    //const loaded = false;
    useEffect(() => {
        loadContacts();        
        setContext({...context, updateValues: loadContacts })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]) 
    
    const loadContacts = () => {
        fetch(`${Config.apiUrl}Contactos?filter=${searchValue}`)
        .then(response => response.json())
        .then(contactos => {
            setContactos(contactos);
            setShowLoading(false);
        })
    }

    const _handleForm = (form) => {
        setShowLoading(true)
        setSearchValue(form.formResult);
    }

    return( 
        <>
            <div style={{marginLeft: '25%', width: '50%'}}>
                <SearchForm submitSearch={ _handleForm }/>
            </div>
            { showLoading ? <LinearProgress /> : '' }
            <ListContactos data={ contactos }/>
            <Fab className={classes.fab} color='primary' onClick={ () => { history.push('Contactos/CreateOrUpdate/0'); }}>
                <AddIcon/>
            </Fab>
        </>
     )
}