import React from 'react';
import classes from './DiscDisplay.module.css'

type DiscInfo = {
            brand:string,
            name:string,
            plastic: string,
            speed: number,
            glide: number,
            turn: number,
            fade: number,
        }

export const DiscDisplay: React.FC<{data:DiscInfo}> = (props) => {
    return (
    <div className={classes.cont}>
        <p>{props.data.brand}</p>
        <p>{props.data.name} : {props.data.plastic}</p>
        <p>{props.data.speed}/{props.data.glide}/{props.data.turn}/{props.data.fade}</p>
    </div>
)}