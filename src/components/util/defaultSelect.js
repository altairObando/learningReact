import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const styles = makeStyles((theme)  => ({
        formControl: {
            margin : theme.spacing(1),
            width: '20em'
        }, 
        selectEmpty :{
            marginTop: theme.spacing(1)
        }
    })
);

export const DefaultSelect = (props) => {
    const classes = styles();
    const { estado, titulo, elementos, name } = props;
    const handleChange = (event) => {
        props.onChange(event);
    }
    return (
        <FormControl className={classes.formControl}>
                <InputLabel id={`${name}-select`}>
                    { titulo }
                </InputLabel>
                <Select
                    labelId={`${name}-select-label`}
                    id={name}
                    name={name}
                    value={estado}
                    onChange={ handleChange }
                >
                    { elementos.map( item => {
                        return <MenuItem value={item.value} key={item.value}> {item.title} </MenuItem>
                    })}
                </Select>
        </FormControl>
    )
}