import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function showAlert(title, content, icon = 'success', confirmAction, showConfirm=true, confirmButton='Aceptar', showCancel=false, cancelButton='Cancelar'){
    const MySwal = withReactContent(Swal);
    MySwal.fire({
    title: <p>{title}</p>,
    icon: icon,
    confirmButtonText: confirmButton,
    cancelButtonText: cancelButton,
    showConfirmButton: showConfirm,
    showCancelButton: showCancel,
    text: content
        // didOpen: () => {
        //     // `MySwal` is a subclass of `Swal`
        //     //   with all the same instance & static methods
        //     MySwal.clickConfirm()
        // }
        }).then((action) => {
           if(action.isConfirmed){
               confirmAction();
           }
    })
}