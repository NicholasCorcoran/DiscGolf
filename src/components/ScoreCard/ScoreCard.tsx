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
                          {j.card.map((k) => {
                            return( 
                                <div key={Math.random()} className={classes.scorecardCollumnScore}>
                                    <div key={Math.random()} className={classes.scorecardTee}></div>
                                    <div key={Math.random()} className={classes.scorecardDistance}></div>
                                    <div key={Math.random()} className={classes.scorecardPar}></div>
                                    <div key={Math.random()} className={classes.scorecardPlayerOneScore}>
                                        <p key={Math.random()}>{k}</p>
                                    </div>
                                </div>
                    )})}
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