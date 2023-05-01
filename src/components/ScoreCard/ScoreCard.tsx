import React from "react";

type ScoreCardForm = {
  card: number[];
  pName: string;
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
  return (
    <>
      <div>
        <h1>{props.data.courseName}</h1>
        <h1>{props.data.layoutName}</h1>
        <h2>{props.data.date}</h2>
        {/* {props.data.scoreCard.map((i) => {
          return <p key={Math.random()}>{i.pName}</p>;
        })} */}
      </div>
    </>
  );
};
