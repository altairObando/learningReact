import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Config } from '../../lib/config'

export function ListRoute(){
    return(
        <List>
          { Config.routes
              .filter(root => root.isRoot)
              .map(item => (
            <ListItem button key={ item.text } component={ Link } to={ item.path }>
              <ListItemIcon><item.icon/></ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
    )
}