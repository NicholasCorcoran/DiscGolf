import React from "react";
import { CompletedRound } from "../CompletedRound/CompletedRound";
import { CoursesContext } from "../../context/course-store-context";
import { chronoFirebase } from "../../http";
import { UserContext } from "../../context/user-context";

const saveFinishedRound = (data: any, uid: string) => {
  chronoFirebase
    .post("/CompletedRounds.json", data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  chronoFirebase
    .post(`/PlayerData/${uid}/RoundsPlayed.json`, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const FinishRound = () => {
  const ctx = React.useContext(CoursesContext);
  const playerCtx = React.useContext(UserContext);
  const pars = ctx.coursePars;
  const dist = ctx.courseDistances;
  const scoreCard = ctx.scoreCard;

  React.useEffect(() => {
    const data = {
      courseName: ctx.courseData.name,
      layoutName: ctx.courseData.layoutName,
      playerId: playerCtx.userInfo.uid,
      scoreCard: ctx.scoreCard,
      date: new Date(),
    };

    saveFinishedRound(JSON.stringify(data), data.playerId);
  }, [
    ctx.courseData.layoutName,
    ctx.courseData.name,
    ctx.scoreCard,
    playerCtx.userInfo.uid,
  ]);

  return (
    <>
      <CompletedRound
        courseDist={dist}
        coursePars={pars}
        scoreCard={scoreCard}
      />
    </>
  );
};
