import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./context/user-context";
import { CourseProvider } from "./context/course-store-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <UserProvider>
    <CourseProvider>
      <App />
    </CourseProvider>
  </UserProvider>
);