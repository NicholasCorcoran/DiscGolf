import React from "react";

export const NavBarContext = React.createContext({
  isOpen: false,
  setIsOpen: () => {},
});

export const NavBarProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onNavBarClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavBarContext.Provider
      value={{
        isOpen: isOpen,
        setIsOpen: onNavBarClick,
      }}
    >
      {props.children}
    </NavBarContext.Provider>
  );
};
