import { Button, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


export function Generator(){
    
    return (
        <div className='Generator'>
            <div className='col-xs-12 col-md-offset-3 text-dark' style={{ padding: 40,textAlign:"center", minHeight:"100vh"}}>
                <h1 className='Generator__tittle'>NUPY</h1>
                <h2 className='Generator__waiting'>cargando</h2>
                <p className='Generator__info'>Seleccione el tipo de boleta que desea generar</p>
                <Grid m={3} >
                    <Button  variant="contained" component={Link} to="/generator/ticket-simple">Boleta simple</Button>
                </Grid>
                <Grid m={3}>
                <Button variant="contained">Boleta con detalle</Button>
                </Grid>
            </div>
        </div>
        
        
    );
}

