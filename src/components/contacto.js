import { LinearProgress } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Config } from '../lib/config'
import { ListContactos } from './Contactos/listContactos'
import { SearchForm } from './util/searchForm'
export function Contactos(){
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
        setSearchValue(form.formResult);
    }

    return( 
      <div style={{ height: '00%', width: '100%' }}>
        <div style={{marginLeft: '25%', width: '50%'}}>
            <SearchForm submitSearch={ _handleForm }/>
        </div>
        <div style={{ height: 400, width: '100%' }}>
            { showLoading ? <LinearProgress /> : '' }
            <ListContactos data={ contactos }/>
        </div>
      </div>
     )
}