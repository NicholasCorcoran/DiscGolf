import React from "react";
import classes from "./ScoreCard.module.css";

type ScoreCardForm = {
  card: number[];
  pName: string;
};

type DataForm = {
  courseName: string;
  layoutName: string;
  playerId: string;
  date: string;
  scoreCard: ScoreCardForm[];
};

export const ScoreCard: React.FC<{
  data: {
    courseName: string;
    layoutName: string;
    playerId: string;
    date: string;
    scoreCard: ScoreCardForm[];
  };
}> = (props) => {
  const [data, setData] = React.useState<DataForm[]>([]);
  const holeNums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  const dist_dummy =[123,234,123,234,123,234,123,234,123,234,123,234,123,234,123,234,123,234];
  const par_dummy = [4,3,4,3,3,4,4,3,3,3,4,3,4,3,4,3,4,3]

  React.useEffect(() => {
    if(props.data){
      setData(Object.values(props.data) as unknown as DataForm[]);
    }
    
  }, [props.data]);

  return (
    <>
      <div>
        {data
          ? data.map((i) => {
              return (
                <div key={Math.random()} className={classes.card}>
                  <div key={Math.random()} className={classes.scorecardHeader}>
                    <h1 key={Math.random()}>{i.courseName}</h1>
                    <h3 key={Math.random()}>{i.layoutName}</h3>
                    <p key={Math.random()}>{i.date.substring(0, 10)}</p>
                  </div>
                  <div className={classes.innerCard}>
                    {i.scoreCard.map((j) => {
                      return (
                        <div key={Math.random()} className={classes.scores}>
                            <div key={Math.random()} className={classes.scorecardCollumnNames}>
                                <div>Tee</div>
                                <div>Distance</div>
                                <div>Par</div>
                                <div><p key={Math.random()}>{j.pName}</p></div>
                            </div>
                            
                              <div key={Math.random()} className={classes.scorecardCollumnScore}>
                              <div style={{display: 'flex', flexGrow: 1}}>
                                {holeNums.map((h)=>{
                                  return <div key={Math.random()} className={classes.scorecardTee}>
                                    <p>{h}</p>
                                </div>
                                })}
                              </div>
                                <div style={{display: 'flex', flexGrow: 1}}>
                                 {dist_dummy.map((d)=>{
                                  return <div key={Math.random()} className={classes.scorecardDistance}>
                                    <p>{d}</p>
                                </div>
                                })}
                                </div>
                              <div style={{display: 'flex', flexGrow: 1}}>
                                {par_dummy.map((p)=>{
                                  return <div key={Math.random()} className={classes.scorecardPar}>
                                    <p>{p}</p>
                                </div>
                                })}
                                </div>
                              <div style={{display: 'flex', flexGrow: 1}}>
                                {j.card.map((k) => {
                                  return( 
                                    <div key={Math.random()} className={classes.scorecardPlayerOneScore}>
                                    <p key={Math.random()}>{k}</p>
                                </div>
                                   )})} 
                                   </div>
                          </div>
                          
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};