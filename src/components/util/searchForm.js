import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Search from '@material-ui/icons/Search'
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));


export function SearchForm(props){
    const classes = useStyles();
    const [formResult, setformResult] = React.useState('');
    const _handleSearchChange = (e) => {
        setformResult(e.target.value)
    }
    const _handleSubmitForm = (e) => {
        e.preventDefault();
        props.submitSearch({formResult});
    }


    return (
        <form onSubmit={ _handleSubmitForm }>
            <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-search" >Búsqueda </InputLabel>
            <OutlinedInput
                id="outlined-adornment-search"
                value={formResult}
                onChange={_handleSearchChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton type='submit' >
                            <Search />
                        </IconButton>
                    </InputAdornment>
                }
                labelWidth={70}
            />
            </FormControl>
        </form>
    )
}