import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faPlus} from "@fortawesome/free-solid-svg-icons";
import classes from './Discs.module.css'
import { NewDiscForm } from './NewDiscForm';
import { MyDiscs } from './MyDiscs';

export const Discs = () => {
    const [addDisc, setAddDisc] = React.useState(false);
    const [showDiscs, setShowDiscs] = React.useState(false)

    return <>
    <div className={classes.cont}>
    <h3>My Discs</h3>
    <FontAwesomeIcon icon={faPlus} onClick={()=>setAddDisc(!addDisc)}/>
    <FontAwesomeIcon icon={faChevronDown} onClick={()=>setShowDiscs(!showDiscs)} />
    </div>
    {addDisc && <NewDiscForm/>}
    {showDiscs && <MyDiscs/>}
    </>
}