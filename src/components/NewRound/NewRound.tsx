import React from "react";
import { chronoFirebase } from "../../http";
import { NewCourse } from "../NewCourses/NewCourse";
import { CardInputs } from "../UI/Forms/CardInputs";

import { Round } from "./Round";
import { NewRoundForm } from "./NewRoundForm";
import { FinishRound } from "./FinishRound";

// type Course = {
//   address: string;
//   name: string;
//   layout: any;
// };

const getCourses = (): Promise<string[]> =>
  chronoFirebase.get("/Courses.json").then(({ data }) => Object.keys(data));

export const NewRound = () => {
  const [courses, setCourses] = React.useState<string[]>([]);
  const [roundStarted, setRoundStarted] = React.useState(false);
  const [finishedRound, setFinishedRound] = React.useState(false);
  React.useEffect(() => {
    getCourses().then(setCourses);
  }, []);

  const onSubmit = () => {
    setRoundStarted((prevState) => !prevState);
  };

  const onFinishRound = () => {
    setFinishedRound(true);
  };

  return (
    <>
      <h1>New Round</h1>
      <h1>Add New Course</h1>

      {roundStarted ? (
        !finishedRound ? (
          <Round onFinishRound={onFinishRound} />
        ) : (
          <FinishRound />
        )
      ) : (
        <NewRoundForm courseData={courses} onSubmit={onSubmit} />
      )}
    </>
  );
};
