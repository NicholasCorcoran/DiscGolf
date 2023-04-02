import React from "react";
import { RoundCard } from "../UI/Cards/RoundCard";
import classes from "./Round.module.css";
import { PlayerCard } from "../UI/Cards/PlayerCard";
import { CoursesContext } from "../../context/course-store-context";

const createCard = (players: string[]) => {
  const temp = players.map((name) => {
    return { pName: name, score: 0 };
  });
  return temp;
};

export const Round: React.FC<{ onFinishRound: () => void }> = (props) => {
  const ctx = React.useContext(CoursesContext);

  const [holeCounter, setHoleCounter] = React.useState(1);
  const [playersTotal, setPlayersTotal] = React.useState<
    { pName: string; totalScore: number; value: number }[]
  >([]);
  const [scores, setScores] = React.useState<
    { pName: string; score: number }[]
  >([]);

  React.useEffect(() => {
    const tempP = ctx.playerNames;
    const temp = createCard(tempP);
    const total = temp.map((i) => {
      return { pName: i.pName, totalScore: i.score, value: 0 };
    });
    setScores(temp);
    setPlayersTotal(total);
  }, []);

  const coursePars = ctx.coursePars;
  const holePar = coursePars[holeCounter - 1];
  const holeDistance = ctx.courseDistances[holeCounter - 1];
  const accPars = coursePars.reduce((acc, cur, index) => {
    if (index <= holeCounter - 2) {
      return acc + cur;
    } else return acc;
  });

  const onChangeScore = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScores((prevState) => {
      const tempArray = prevState.map((card) => {
        if (card.pName === event.target.id) {
          return { pName: card.pName, score: +event.target.value };
        } else {
          return card;
        }
      }) as { pName: string; score: number }[];
      return tempArray;
    });

    setPlayersTotal((prevState) => {
      const tempArray = prevState.map((i) => {
        if (i.pName === event.target.id) {
          return {
            pName: i.pName,
            totalScore: i.totalScore,
            value: +event.target.value,
          };
        } else {
          return i;
        }
      }) as { pName: string; totalScore: number; value: number }[];
      return tempArray;
    });
  };

  const onSubmitHole = (event: React.FormEvent) => {
    event.preventDefault();
    setPlayersTotal((prevState) => {
      const tempArray = prevState.map((i) => {
        return {
          pName: i.pName,
          totalScore: i.totalScore + i.value,
          value: 0,
        };
      }) as { pName: string; totalScore: number; value: number }[];
      return tempArray;
    });
    ctx.onScoreAdded(scores);
    setHoleCounter((prevState) => prevState + 1);
  };

  const onRoundFinished = (event: React.FormEvent) => {
    event.preventDefault();
    ctx.onScoreAdded(scores);

    props.onFinishRound();
  };

  return (
    <>
      <RoundCard>
        <div className={classes.container}>
          <div className={classes.div}>
            <h1 className={classes.hole}>Hole {holeCounter}</h1>
            <h2 className={classes.par}>Par {holePar}</h2>
            <h2 className={classes.dist}>Dist: {holeDistance}ft</h2>
          </div>
          <div className={classes.space}></div>
          <PlayerCard>
            <div>
              <div className={classes.player}>
                <h3 className={classes.h3Player}>Player</h3>
                <h3 className={classes.h3Curr}>Cur</h3>
                <h3 className={classes.h3Score}>Score</h3>
              </div>

              <form>
                {playersTotal.map((player) => (
                  <div key={Math.random()} className={classes.player}>
                    <label
                      htmlFor={player.pName}
                      className={classes.playerLabel}
                    >
                      {player.pName}
                    </label>
                    <p className={classes.playerCurr}>
                      {player.totalScore - accPars}
                    </p>

                    <input
                      className={classes.scoreInput}
                      id={player.pName}
                      value={player.value}
                      name={player.pName}
                      onChange={onChangeScore}
                      type="number"
                    />
                  </div>
                ))}
                <div className={classes.buttonDiv}>
                  <button className={classes.buttonP}>Prev Hole</button>
                  {holeCounter < 18 ? (
                    <button className={classes.button} onClick={onSubmitHole}>
                      Next Hole
                    </button>
                  ) : (
                    <button
                      className={classes.button}
                      onClick={onRoundFinished}
                    >
                      Finish Round
                    </button>
                  )}
                </div>
              </form>
            </div>
          </PlayerCard>
        </div>
      </RoundCard>
    </>
  );
};
