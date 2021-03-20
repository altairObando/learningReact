import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import { TableHeader } from '../tables/tableHeader';
import { columns } from './columnsDirecciones';
import { CTableBody } from '../tables/tableBody';
import { ThreeActionsButtons } from '../util/threeActionsButtons'
export const ListDirecciones =  ({data})  => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const buttonConfig = {      
        //titleDefault   : 'Detalles',
        titlePrimary   : 'Editar',
        titleSecondary : 'Eliminar',
        //eventDefault   :  _handleDetails,
        eventPrimary   :  undefined,
        eventSecondary :  undefined
    }
    return (
        <>
            <TableContainer style={{ maxHeight : '25em', height: '25em' }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHeader  columns={columns} />
                <CTableBody columns={columns} rows={data} page={page} rowsPerPage={rowsPerPage} Acciones={ThreeActionsButtons} configAcciones={ buttonConfig }/>
            </Table>
            </TableContainer>
            <TablePagination
            rowsPerPageOptions={[10,25, 50, 100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </>
    )
}