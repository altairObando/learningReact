import React from 'react';
import TableBody  from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'

function Acciones ({id}){
  return(
  <div>
    <Button variant="contained" style={{ marginRight: '1em' }} >
      Default {id}
    </Button>

      <Button variant="contained" color="primary" style={{ marginRight: '1em' }}>
      Primary {id}
    </Button>

    <Button variant="contained" color="secondary" style={{ marginRight: '1em' }}>
      Secondary {id}
    </Button>

  </div>
)}


export function CTableBody (fullData ){
    const { rows, columns, page, rowsPerPage} = fullData;
    
    return(
        <TableBody>
            { 
            rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return ( 
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.key}>
                    { columns.map((column) => {
                      const value =  row[column.field];
                      return (
                        <TableCell key={column.key} align={column.align}>
                            { column.isComponent ? <Acciones id={value} /> : value }
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
            })
        }
        </TableBody>
    )
}