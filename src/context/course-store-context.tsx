import React from "react";
import { Course } from "../models/coursesFormat";

type CourseDataFormat = {
  name: string;
  address: string;
  layoutName: string;
  layoutDiff: string;
};

export const CoursesContext = React.createContext({
  courseBeingPlayed: {} as Course,
  courseDistances: [] as number[],
  coursePars: [] as number[],
  courseData: {} as CourseDataFormat,
  playerNames: [] as string[],
  scoreCard: [] as { pName: string; card: number[] }[],
  onStartofCourseInfo: (
    name: string,
    address: string,
    layoutName: string,
    layoutDiff: string
  ) => {},
  onDistanceAdded: (event: React.ChangeEvent<HTMLInputElement>) => {},
  onParAdded: (event: React.ChangeEvent<HTMLInputElement>) => {},
  onCourseSelected: (
    course: Course,
    pars: number[],
    dist: number[]
  ): void => {},
  onPlayerAdded: (names: string): void => {},
  onScoreAdded: (scoreCard: { pName: string; score: number }[]) => {},
});

export const CourseProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [course, setCourse] = React.useState<Course>({} as Course);
  const [distance, setDistance] = React.useState<number[]>([]);
  const [par, setPar] = React.useState<number[]>([]);
  const [playerNames, setPlayerNames] = React.useState<string[]>([]);
  const [scoreCard, setScoreCard] = React.useState<
    { pName: string; card: number[] }[]
  >([]);
  const [courseData, setCourseData] = React.useState<CourseDataFormat>(
    {} as CourseDataFormat
  );

  const onCourseSelected = (
    course: Course,
    pars: number[],
    dist: number[]
  ): void => {
    setCourse(course);
    setPar(pars);
    setDistance(dist);
  };
  const onDistanceAdded = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDistance((prevState) => [...prevState, +event.target.value]);
  };
  const onParAdded = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPar((prevState) => [...prevState, +event.target.value]);
  };
  const onStartofCourseInfo = (
    name: string,
    address: string,
    layoutName: string,
    layoutDiff: string
  ) => {
    setCourseData({
      name,
      address,
      layoutName,
      layoutDiff,
    });
  };
  const onScoreAdded = (
    scoreCard: { pName: string | ""; score: number | 8 }[]
  ) => {
    setScoreCard((prevState) => {
      const newArray = prevState.map((i) => {
        if (scoreCard.length !== 0) {
          for (let j = 0; j < scoreCard.length; j++) {
            if (i.pName === scoreCard[j].pName) {
              return { pName: i.pName, card: [...i.card, scoreCard[j].score] };
            }
          }
        }
      });
      if (newArray === undefined) {
        return prevState;
      } else {
        return newArray as { pName: string; card: number[] }[];
      }
    });
  };

  const onPlayerAdded = (names: string) => {
    setPlayerNames((prevState) => [...prevState, names]);
    setScoreCard((prevState) => [...prevState, { pName: names, card: [] }]);
  };

  return (
    <CoursesContext.Provider
      value={{
        courseBeingPlayed: {
          name: course.name,
          address: course.address,
          layout: course.layout,
        },
        courseDistances: distance,
        coursePars: par,
        courseData: courseData,
        scoreCard: scoreCard,
        playerNames: playerNames,
        onStartofCourseInfo: onStartofCourseInfo,
        onDistanceAdded: onDistanceAdded,
        onParAdded: onParAdded,
        onCourseSelected: onCourseSelected,
        onPlayerAdded: onPlayerAdded,
        onScoreAdded: onScoreAdded,
      }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
};
