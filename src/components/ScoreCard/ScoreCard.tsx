import React from "react";
import classes from "./ScoreCard.module.css";

type ScoreCardForm = {
  card: number[];
  pName: string;
};

type DataForm = {
  courseName: string;
  layoutName: string;
  dist: number[];
  pars:number[]
  playerId: string;
  date: string;
  scoreCard: ScoreCardForm[];
};



export const ScoreCard: React.FC<{
  data: {
    courseName: string;
    layoutName: string;
    playerId: string;
    dist: number[];
    pars: number[]
    date: string;
    scoreCard: ScoreCardForm[];
  };
}> = (props) => {
  const [data, setData] = React.useState<DataForm[]>([]);
  const holeNums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  const dist_dummy =[123,234,123,234,123,234,123,234,123,234,123,234,123,234,123,234,123,234];
  const par_dummy = [4,3,4,3,3,4,4,3,3,3,4,3,4,3,4,3,4,3]

  const [showF9, setShowF9] = React.useState(true)

  const onButtonClick = () => {
    setShowF9(!showF9)
  }
  
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
                    {showF9 ?
                    <div className={classes.fontNine}>
                    <h3>Front 9</h3>
                    <button onClick={onButtonClick}>View back 9</button>
                    </div> 
                    :
                    <div className={classes.backNine}>
                    <h3>Back 9</h3>
                    <button onClick={onButtonClick}>View front 9</button>
                    </div>
                    }
                    {/* start of front 9 */}
                    {showF9 ? 
                    i.scoreCard.map((j) => {
                      return (
                        <div key={Math.random()} className={classes.scores}>
                            <div key={Math.random()} className={classes.scorecardCollumnNames}>
                                <div>Tee</div>
                                <div>Distance</div>
                                <div>Par</div>
                                <div><p key={Math.random()}>{j.pName}</p></div>
                            </div>
                              <div key={Math.random()} className={classes.scorecardCollumnScore}>
                              <div key={Math.random()} className={classes.scorecardRowScore}>
                                {holeNums.slice(0,9).map((h)=>{
                                  return <div key={Math.random()} className={classes.scorecardTee}>
                                    {h}
                                </div>
                                })}
                              </div>
                              <div key={Math.random()} className={classes.scorecardRowScore}>
                                 {i.dist.slice(0,9).map((d)=>{
                                  return <div key={Math.random()} className={classes.scorecardDistance}>
                                    {d}
                                </div>
                                })}
                                </div>
                                <div key={Math.random()} className={classes.scorecardRowScore}>
                                {i.pars.slice(0,9).map((p)=>{
                                  return <div key={Math.random()} className={classes.scorecardPar}>
                                    {p}
                                </div>
                                })}
                                </div>
                                <div key={Math.random()} className={classes.scorecardRowScore}>
                                {j.card.slice(0,9).map((k) => {
                                  return( 
                                    <div key={Math.random()} className={classes.scorecardPlayerOneScore}>
                                    {k}
                                </div>
                                   )})} 
                                   </div>
                          </div>
                          
                        </div>
                      );
                    }) :
                    i.scoreCard.map((j) => {
                      return (
                        <div key={Math.random()} className={classes.backScores}>
                            <div key={Math.random()} className={classes.scorecardCollumnNames}>
                                <div>Tee</div>
                                <div>Distance</div>
                                <div>Par</div>
                                <div><p key={Math.random()}>{j.pName}</p></div>
                            </div>
                              <div key={Math.random()} className={classes.scorecardCollumnScore}>
                              <div key={Math.random()} className={classes.scorecardRowScore}>
                                {holeNums.slice(9,18).map((h)=>{
                                  return <div key={Math.random()} className={classes.scorecardTee}>
                                    {h}
                                </div>
                                })}
                              </div>
                              <div key={Math.random()} className={classes.scorecardRowScore}>
                                 {dist_dummy.slice(9,18).map((d)=>{
                                  return <div key={Math.random()} className={classes.scorecardDistance}>
                                    {d}
                                </div>
                                })}
                                </div>
                                <div key={Math.random()} className={classes.scorecardRowScore}>
                                {par_dummy.slice(9,18).map((p)=>{
                                  return <div key={Math.random()} className={classes.scorecardPar}>
                                    {p}
                                </div>
                                })}
                                </div>
                                <div key={Math.random()} className={classes.scorecardRowScore}>
                                {j.card.slice(9,18).map((k) => {
                                  return( 
                                    <div key={Math.random()} className={classes.scorecardPlayerOneScore}>
                                    {k}
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