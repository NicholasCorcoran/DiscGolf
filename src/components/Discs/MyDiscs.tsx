import React from 'react';
import { UserContext } from '../../context/user-context';
import { chronoFirebase } from '../../http';
import { DiscDisplay } from './DiscDisplay';

type MyBagForm = {
            brand:string,
            name:string,
            plastic: string,
            speed: number,
            glide: number,
            turn: number,
            fade: number,
        }

const getDiscData = (uid: string): Promise<MyBagForm[]> =>
  chronoFirebase
    .get(`/PlayerData/${uid}/MyDiscs.json`)
    .then(({ data }) => Object.values(data));

export const MyDiscs = () => {

    const [discs, setDiscs] = React.useState<MyBagForm[]>([])

    const ctx = React.useContext(UserContext);

    React.useEffect(()=>{
        getDiscData(ctx.userInfo.uid).then(setDiscs)
    },[ctx])


    return <>
        {discs ? discs.map((i)=><DiscDisplay data={i}/>) : <p>Bag is Empty</p>}
    </>
}