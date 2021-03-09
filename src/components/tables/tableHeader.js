import React from 'react'
import { TableHead, TableRow, TableCell } from '@material-ui/core'
export function TableHeader({columns}){
    return(
        <TableHead>
            <TableRow>
            { columns.map((column) => (
                <TableCell
                key={column.field}
                align={column.align}
                style={{ minWidth: column.width }}
                >
                {column.headerName}
                </TableCell>
            ))}
            </TableRow>
        </TableHead>
    );
}