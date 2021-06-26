import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { 
  Button, Toolbar, 
  IconButton, AppBar
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  TextField: {
    margin: "0 auto"
  }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Button color="inherit" href='./mypage'>MyPage</Button>
                <Button color="inherit" href='./login'>Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;