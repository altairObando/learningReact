import React from 'react';
import TableBody  from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export function CTableBody ( props ){
    const { rows, columns, page, rowsPerPage} = props;
    const { configAcciones } = props;
    return(
        <TableBody>
            { 
            rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return ( 
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    { columns.map((column) => {
                      const value =  row[column.field];
                      return (
                        <TableCell key={column.key} align={column.align}>
                            { column.isComponent && props.Acciones ? <props.Acciones id={value} configAcciones={ configAcciones }/> : value }
                        </TableCell>
                      );
                    })
                    }
                  </TableRow>
                );
            })
        }
        </TableBody>
    )
}