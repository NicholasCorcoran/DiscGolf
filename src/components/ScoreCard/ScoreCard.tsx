import userEvent from "@testing-library/user-event";
import React from "react";

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
        <h1>Fuck</h1>

        {data.map((i) => {
          return (
            <div key={Math.random()}>
              <h1 key={Math.random()}>{i.courseName}</h1>
              <h1 key={Math.random()}>{i.layoutName}</h1>
              <h2 key={Math.random()}>{i.date}</h2>
              {i.scoreCard.map((j) => {
                return (
                  <div key={Math.random()}>
                    <p key={Math.random()}>{j.pName}</p>
                    {j.card.map((k) => {
                      return <p key={Math.random()}>{k}</p>;
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};
