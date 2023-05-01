import React from "react";
import { chronoFirebase } from "../../http";
import { ScoreCard } from "../ScoreCard/ScoreCard";

type RoundsForm = {
  courseName: string;
  layoutName: string;
  playerId: string;
  date: string;
  scoreCard: {
    card: number[];
    pName: string;
  }[];
};

type PlayerDataForm = {
  Friends: string[];
  LastName: string;
  RoundsPlayed: RoundsForm;
  displayName: string;
  firstName: string;
};

const getPlayerData = (): Promise<PlayerDataForm[]> =>
  chronoFirebase
    .get("/PlayerData.json")
    .then(({ data }) => Object.values(data));

export const ScoreCardFeed = () => {
  const [playerData, setPlayerData] = React.useState<PlayerDataForm[]>([]);
  const [rounds, setRounds] = React.useState<RoundsForm[]>([]);
  //const [friends, setFriends] = React.useState<string[]>([])

  React.useEffect(() => {
    getPlayerData().then(setPlayerData);
  }, []);

  React.useEffect(() => {
    if (playerData) {
      playerData.forEach((i) => {
        setRounds((prevState) => {
          return [...prevState, i.RoundsPlayed];
        });
      });
    }
  }, [playerData]);

  // React.useEffect(() => {

  // }, [playerData])

  return (
    <>
      {rounds
        ? rounds.map((i) => {
            return <ScoreCard key={Math.random()} data={i} />;
          })
        : null}
    </>
  );
};
