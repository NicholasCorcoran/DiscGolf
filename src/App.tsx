import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserContext } from "./context/user-context";
import { HomePage } from "./pages/HomePage";
import { PlayerPage } from "./pages/PlayerPage";
import { RoundPage } from "./pages/RoundPage";
import { WelcomePage } from "./pages/WelcomePage";
import { auth } from "./firebaseSetup";
import { Root } from "./pages/Root";
import { NewCourse } from "./pages/NewCourse";
import { Courses } from "./pages/Courses";

function App() {
  const ctx = React.useContext(UserContext);
  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      const data = auth.currentUser?.uid;
      console.log(data);
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/player", element: <WelcomePage /> },
        { path: "/player/:playerId", element: <PlayerPage /> },
        { path: "/new_round", element: <RoundPage /> },
        {
          path: "/courses",
          element: <Courses />,
          children: [{ path: "/courses/new_course", element: <NewCourse /> }],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
