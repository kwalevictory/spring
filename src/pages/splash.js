import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Splash = ({classes})=>{
    return(
        <div className={classes.container}>
            <CircularProgress />
        </div>
    )
}
const styles = ({
    container:{
        height:'100vh',
        width:'100%',
        background:'#fff',
        alignItems:'center',
        justifyContent:'center',
        display:'flex'
    }
})
export default withStyles(styles)(Splash);