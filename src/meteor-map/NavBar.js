import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function NavBar() {
    const css = useStyles();
    return (
        <React.Fragment>
            <AppBar position="fixed">
                <Toolbar>
                    <Button variant="contained" color="secondary" className={css.menuButton}>Table</Button>
                    <Button variant="contained" color="secondary" >Map</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}
