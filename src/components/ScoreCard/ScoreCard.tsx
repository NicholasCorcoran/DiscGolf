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
    setData(Object.values(props.data) as unknown as DataForm[]);
  }, []);

  return (
    <>
      <div>
        {data.map((i) => {
          return (
            <div key={Math.random()} className={classes.card}>
              <div>
                <h1 key={Math.random()}>{i.courseName}</h1>
                <h3 key={Math.random()}>{i.layoutName}</h3>
              </div>
              <div className={classes.innerCard}>
                {i.scoreCard.map((j) => {
                  return (
                    <div key={Math.random()} className={classes.scores}>
                      <p key={Math.random()}>{j.pName}</p>
                      {j.card.map((k) => {
                        return <p key={Math.random()}>{k}</p>;
                      })}
                    </div>
                  );
                })}
              </div>
              <p key={Math.random()}>{i.date.substring(0, 10)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
