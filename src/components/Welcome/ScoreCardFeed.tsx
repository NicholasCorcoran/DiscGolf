import React from "react";
import { chronoFirebase } from "../../http";

type PlayerDataForm = {
  roundsPlayed: any;
};

const getPlayerData = (): Promise<PlayerDataForm[]> =>
  chronoFirebase.get("/PlayerData/RoundsPlayed.json").then(({ data }) => data);

export const ScoreCardFeed = () => {};
