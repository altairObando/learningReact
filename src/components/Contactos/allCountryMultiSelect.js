import React, { useEffect, useState } from 'react';
import Cities from '../lib/world-cities_json.json';
import { DefaultSelect } from '../util/defaultSelect';


export const AllCountryMultiSelect = (props) => {
    const { _handleInputChange } = props;
    const { pais, departamento, municipio } = props;
    const [listPais, setListPais] = useState([]);
    const [listDepartamento, setListDepartamento] = useState([]);
    const [listMunicipio, setListMunicipio] = useState([]);

    // Load paises
    useEffect( () => {
        setListPais(Cities.map(item => { return item.Country  }))
    },[])
    // load Departamentos
    useEffect( () => {
        setListDepartamento(
            Cities.filter( p => (p.Country === pais)
            .map(d => ( d.subcountry ))))
    },[ pais ])
    // load municipio
    useEffect( () => {
        setListMunicipio(
            Cities.filter( p => (p.subcountry === departamento)
            .map(d => ( d.name ))))
    }, [departamento])

    return <div>
        <DefaultSelect elementos={listPais} _handleInputChange={_handleInputChange} estado={pais} name='pais'/>
        <DefaultSelect elementos={listDepartamento} _handleInputChange={_handleInputChange} estado={departamento} name='departamento'/>
        <DefaultSelect elementos={listMunicipio} _handleInputChange={_handleInputChange} estado={municipio} name='municipio' />
    </div>
}