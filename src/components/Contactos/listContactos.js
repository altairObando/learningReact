import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import { TableHeader } from '../tables/tableHeader';
import { columns } from './columnsContacts';
import { CTableBody } from '../tables/tableBody';
import { ThreeActionsButtons } from '../util/threeActionsButtons'
import { useHistory } from 'react-router-dom'
import showAlert from '../util/showAlert';
import { Config } from '../../lib/config'
import {Context} from '../contexts/context'

export function ListContactos({data}) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const history = useHistory();
    const { context } = useContext(Context)
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    // const _handleDetails = (props) => {
    //   alert(`Detalles de:${props}`)
    // }
    const _handlePrimary = (props) => {
      history.push(`Contactos/CreateOrUpdate/${props}`)
    }
    const _handleDelete = (id) => {
      showAlert('Eliminar Contacto', `¿Esta seguro de eliminar el contacto con id: ${id}?`, 'question', () => {
        const url = `${Config.apiUrl}Contactos/${id}`;
        fetch(url, {
          method: 'DELETE'})
          .then(resp => resp.json())
          .then(resp => {
            context.updateValues();
          }).catch(err => {
            showAlert('Tarea no completada', 'Error al eliminar el contacto: ' + err, 'error')
          });
      },true, 'Confirmar eliminado', true
      )
    }
    const buttonConfig = {      
        //titleDefault   : 'Detalles',
        titlePrimary   : 'Editar',
        titleSecondary : 'Eliminar',
        //eventDefault   :  _handleDetails,
        eventPrimary   :  _handlePrimary,
        eventSecondary : _handleDelete
    }
    return (
    <Paper >
        <TableContainer style={{ height : '40em' }}>
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
      </Paper>
);
}
