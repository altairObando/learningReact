import React from 'react'
import Button from '@material-ui/core/Button'

export const ThreeActionsButtons =  (props) => {

  const { titleDefault, titlePrimary, titleSecondary } = props.configAcciones;
  const _handleDefault = () => {
    if(props.configAcciones.eventDefault && typeof(props.configAcciones.eventDefault) ==='function')
      props.configAcciones.eventDefault(props.id);
  }
  const _handlePrimary = () => {
    if(props.configAcciones.eventPrimary && typeof(props.configAcciones.eventPrimary) ==='function')
    props.configAcciones.eventPrimary(props.id)
  }
  const _handleSecondary = () => {
    if(props.configAcciones.eventSecondary && typeof(props.configAcciones.eventSecondary) ==='function')
    props.configAcciones.eventSecondary(props.id)
  }
  return(
  <div>
    <Button variant="contained" style={{ marginRight: '1em' }} onClick={ _handleDefault }>
      { titleDefault || 'Default'} 
    </Button>
    <Button variant="contained" color="primary" style={{ marginRight: '1em' }} onClick={ _handlePrimary }>
      { titlePrimary || 'Primary'}
    </Button>
    <Button variant="contained" color="secondary" style={{ marginRight: '1em' }} onClick={ _handleSecondary }>
      { titleSecondary || 'Secondary'}
    </Button>
  </div>
)}