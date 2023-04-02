import React from "react";
import { RoundCard } from "../UI/Cards/RoundCard";
import { Course } from "../../models/coursesFormat";
import { chronoFirebase } from "../../http";
import classes from "./NewRoundForm.module.css";
import { CoursesContext } from "../../context/course-store-context";
import { PlayerName } from "./PlayerName";
import Select, { SingleValue } from "react-select";

type InputNameFormat = {
  id: number;
  code: JSX.Element;
};

const getCourses = (): Promise<Course[]> =>
  chronoFirebase.get("/Courses.json").then(({ data }) => data);

export const NewRoundForm: React.FC<{
  courseData: string[];
  onSubmit: () => void;
}> = (props) => {
  const [layout, setLayout] = React.useState("");
  const [courseData, setCourseData] = React.useState<Course[]>([]);
  const [courseName, setCourseName] = React.useState<string>("");
  const [cnIndex, setCNIndex] = React.useState(0);
  const [lnIndex, setLNIndex] = React.useState(0);
  const [layoutData, setLayoutData] = React.useState<
    {
      difficulty: string;
      holeDistances: number[];
      holePars: number[];
      name: string;
    }[]
  >([]);

  const [playerInputs, setPlayerInputs] = React.useState<InputNameFormat[]>([]);

  React.useEffect(() => {
    getCourses().then(setCourseData);
  }, []);

  const ctx = React.useContext(CoursesContext);

  const onCourseSelect = (
    newValue: SingleValue<{ value: string; label: string }>
  ) => {
    const keys = Object.keys(courseData);
    const data = Object.values(courseData);
    const value = newValue?.value;
    const key = keys.findIndex((cn) => {
      return cn === value;
    });
    const lData: {
      difficulty: string;
      holeDistances: number[];
      holePars: number[];
      name: string;
    }[] = Object.values(data[key].layout) as unknown as {
      difficulty: string;
      holeDistances: number[];
      holePars: number[];
      name: string;
    }[];
    setLayoutData(lData);
    setCNIndex(key);
    if (value) {
      setCourseName(value);
    }
  };

  const onSelectLayout = (
    newValue: SingleValue<{ value: string; label: string }>
  ) => {
    const value = newValue?.value;
    const key = layoutData.findIndex((ln) => {
      return ln.name === value;
    });

    if (newValue) {
      setLNIndex(key);
      setLayout(newValue.value);
    }
  };

  const onBlur = (id: number, name: string) => {
    setPlayerInputs((prevState) => {
      const newArray = prevState.map((player) => {
        if (player.id === id) {
          return {
            id: player.id,
            code: (
              <PlayerName
                np={player.id}
                onRemovePlayer={onRemovePlayer}
                onBlur={onBlur}
                name={name}
              />
            ),
          };
        } else {
          return player;
        }
      });
      return newArray;
    });
  };

  const onNumPlayersChanged = () => {
    const filler = Math.random();
    const holder: InputNameFormat = {
      id: filler,
      code: (
        <PlayerName
          np={filler}
          onRemovePlayer={onRemovePlayer}
          onBlur={onBlur}
          name=""
        />
      ),
    };
    setPlayerInputs((prevState) => [...prevState, holder]);
  };

  const onRemovePlayer = (id: number): void => {
    setPlayerInputs((prevState) => prevState.filter((p) => p.id !== id));
  };

  const onSubmitCard = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const data = Object.values(courseData);
    const courseSelected = data[cnIndex];
    const pars = layoutData[lnIndex].holePars;
    const dist = layoutData[lnIndex].holeDistances;
    ctx.onCourseSelected(courseSelected, pars, dist);
    props.onSubmit();
  };
  const helperData = layoutData.map((data) => {
    return { value: data.name, label: data.name };
  });

  const helper2Data = props.courseData.map((course) => {
    return { value: course, label: course };
  });

  return (
    <RoundCard>
      <form className={classes.form}>
        <label htmlFor="course">Courses:</label>

        <Select
          key={Math.random()}
          value={{ value: courseName, label: courseName }}
          options={helper2Data}
          onChange={onCourseSelect}
        />
      </form>
      <form className={classes.form}>
        <label htmlFor="layout">Layouts:</label>
        {courseName !== "" ? (
          <Select
            key={Math.random()}
            options={helperData}
            value={{ value: layout, label: layout }}
            onChange={onSelectLayout}
          />
        ) : null}
      </form>
      <form className={classes.form}>
        {playerInputs.map((id) => (
          <div key={Math.random()} className={classes.player}>
            {id.code}
          </div>
        ))}

        <img
          className={classes.plusimg}
          alt=""
          onClick={onNumPlayersChanged}
          src="https://cdn.pixabay.com/photo/2014/04/02/10/55/plus-304947_960_720.png"
        />

        <button className={classes.button1} onClick={onSubmitCard}>
          Start Round
        </button>
      </form>
    </RoundCard>
  );
};

//course
//layout
//numberofplayers
//playerNames
