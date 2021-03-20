import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Config } from '../../lib/config'
import Tooltip from '@material-ui/core/Tooltip';
export function ListRoute(){
    return(
        <List>
          { Config.routes
              .filter(root => root.isRoot)
              .map(item => (
                <Tooltip title={item.text} key={ item.text }>
                  <ListItem button  component={ Link } to={ item.path }>
                      <ListItemIcon>
                          <item.icon/>
                          </ListItemIcon>
                      <ListItemText primary={item.text} />
                  </ListItem>
                </Tooltip>
          ))}
        </List>
    )
}