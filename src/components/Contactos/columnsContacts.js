
export const columns = [
    { key: 'id',        field: 'id',                headerName: 'Codigo',               width: 70,  align:'center' },
    { key: 'nombre',    field: 'Nombre',            headerName: 'Nombre',               width: 150, align:'left' },
    { key: 'snombre',   field: 'SNombre',           headerName: 'Segundo Nombre',       width: 150, align:'left' },
    { key: 'apellido',  field: 'Apellido',          headerName: 'Apellido',             width: 150, align:'left' },
    { key: 'sapellido', field: 'SApellido',         headerName: 'Segundo Apellido',     width: 150, align:'left' },
    { key: 'sexo',      field: 'Sexo',              headerName: 'Sexo',                 width: 150, align:'left' },
    { key: 'mail',      field: 'Email',             headerName: 'Correo Electronico',   width: 150, align:'left' },
    { key: 'tel',       field: 'Telefono',          headerName: 'Telefono',             width: 150, align:'left' },
    { key: 'fnac',      field: 'FechaNacimiento',   headerName: 'F. Nacimiento',        width: 150, align:'left' },
    { key: 'acciones',  field: 'id',                headerName: 'Acciones',             width: 200, align: 'center', isComponent: true }
]
