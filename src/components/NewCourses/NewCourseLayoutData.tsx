import React from "react";
import { CourseDataForm } from "../UI/Forms/CourseDataForm";
import { CoursesContext } from "../../context/course-store-context";

export const NewCourseLayoutData = () => {
  const ctx = React.useContext(CoursesContext);

  return (
    <>
      <CourseDataForm onChangeInput={ctx.onDistanceAdded} />
      <CourseDataForm onChangeInput={ctx.onParAdded} />
    </>
  );
};
