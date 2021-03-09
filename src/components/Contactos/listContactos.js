import React  from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import { TableHeader } from '../tables/tableHeader';
import { columns } from './columnsContacts';
import { CTableBody } from '../tables/tableBody';
import { ThreeActionsButtons } from '../util/threeActionsButtons'
import { useHistory } from 'react-router-dom'

export function ListContactos({data}) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const history = useHistory();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const _handleDetails = (props) => {
      history.push(`Contactos/CreateOrUpdate/${props}`)
    }
    const buttonConfig = {      
        titleDefault   : 'Detalles',
        titlePrimary   : 'Editar',
        titleSecondary : 'Eliminar',
        eventDefault   :  _handleDetails 
    }
    return (
    <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
              <TableHeader  columns={columns} />
              <CTableBody columns={columns} rows={data} page={page} rowsPerPage={rowsPerPage} Acciones={ThreeActionsButtons} configAcciones={ buttonConfig }/>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
);
}
