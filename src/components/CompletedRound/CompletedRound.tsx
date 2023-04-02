import React from "react";
import classes from "./CompletedRound.module.css";

export const CompletedRound: React.FC<{
  scoreCard: { pName: string; card: number[] }[];
  coursePars: number[];
  courseDist: number[];
}> = (props) => {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.div}>
          <p className={classes.parp}>Pars</p>
          {props.coursePars.map((i) => {
            return (
              <p key={Math.random()} className={classes.parp}>
                {i}
              </p>
            );
          })}
        </div>
        <div className={classes.div}>
          <p className={classes.parp}>Dist</p>
          {props.courseDist.map((i) => {
            return (
              <p key={Math.random()} className={classes.distp}>
                {i}
              </p>
            );
          })}
        </div>
        <div className={classes.div2}>
          {props.scoreCard.map((i) => {
            return (
              <div key={Math.random()} className={classes.div}>
                <p className={classes.parp}>{i.pName}</p>
                {i.card.map((j) => {
                  return (
                    <p key={Math.random()} className={classes.scorep}>
                      {j}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
