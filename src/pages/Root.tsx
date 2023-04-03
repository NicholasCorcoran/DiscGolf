import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/UI/Header/Header";

export const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
