import React from 'react';
import classes from './NewDiscForm.module.css'
import { chronoFirebase } from '../../http';
import { UserContext } from '../../context/user-context';

const SaveDisc = (uid:string,data: {brand:string, name:string, plastic: string, speed: number, glide: number, turn: number, fade: number}) => {
    chronoFirebase
    .post(`/PlayerData/${uid}/MyDiscs.json`, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export const NewDiscForm = () => {
    const [brand, setBrand] = React.useState('')
    const [name, setName] = React.useState('')
    const [plastic, setPlastic] = React.useState('')
    const [speed, setSpeed] = React.useState(0)
    const [glide, setGlide] = React.useState(0)
    const [fade, setFade] = React.useState(0)
    const [turn, setTurn] = React.useState(0)

    const ctx = React.useContext(UserContext)

    const onSubmitDisc = (event: React.FormEvent) => {
        event.preventDefault();
        const data = {
            brand,
            name,
            plastic,
            speed,
            glide,
            turn,
            fade,
        }
        SaveDisc(ctx.userInfo.uid, data);
        setBrand('');
        setName('');
        setPlastic('');
        setSpeed(0);
        setGlide(0);
        setFade(0);
        setTurn(0);
        
    }



    return <form className={classes.form}>
        <label htmlFor="brand" >
          Disc Brand
        </label>
        <input
          id="brand"
          type="text"
          name="brand"
          value={brand}
          onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setBrand(event.target.value)}
        />
        <label htmlFor="discname" >
          Disc Name
        </label>
        <input
          id="discname"
          type="text"
          name="discname"
          value={name}
           onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setName(event.target.value)}
        />
        <label htmlFor="plastic" >
          Plastic
        </label>
        <input
          id="plastic"
          type="text"
          name="plastic"
          value={plastic}
           onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setPlastic(event.target.value)}
        />
        <label htmlFor="speed" >
          Disc Speed
        </label>
        <input
          id="speed"
          type="number"
          name="speed"
          value={speed}
           onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setSpeed(+event.target.value)}
        />
        <label htmlFor="glide" >
          Disc Glide
        </label>
        <input
          id="glide"
          type="number"
          name="glide"
          value={glide}
           onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setGlide(+event.target.value)}
        />
        <label htmlFor="Turn" >
          Disc Turn
        </label>
        <input
          id="turn"
          type="number"
          name="turn"
          value={turn}
           onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setTurn(+event.target.value)}
        />
        <label htmlFor="fade" >
          Disc Fade
        </label>
        <input
          id="fade"
          type="number"
          name="fade"
          value={fade}
           onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setFade(+event.target.value)}
        />
        <button onClick={onSubmitDisc}>Add Disc</button>
    </form>
}