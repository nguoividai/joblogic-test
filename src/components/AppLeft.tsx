import React, { useState } from "react";
import logo from "../assets/logo/the-godfather.svg";
import ListEmployee from "./ListEmployee";
import { Employee } from "../types/app.types";
import { useScreenSize } from "../hooks/useScreenSize";

type AppLeftProps = {
  employees?: Employee[];
  active?: Employee;
  onSetEmployee?: (employee: Employee) => void;
};

const MOBILE_WIDTH = 768;

const AppLeft: React.FC<AppLeftProps> = ({
  employees,
  active,
  onSetEmployee,
}) => {
  const screenSize = useScreenSize();
  const [showMobile, setShowMobile] = useState<boolean>(true);

  const handleSetEmployee = (employee: Employee) => {
    onSetEmployee?.(employee);
    if (screenSize < MOBILE_WIDTH) {
      setShowMobile(false);
    }
  };

  if (screenSize < MOBILE_WIDTH && !showMobile) {
    return (
      <>
        <div className="show-menu" onClick={() => setShowMobile(true)}>
          Show Menu
        </div>
      </>
    );
  }

  return (
    <>
      <div className="app-left-bg"></div>
      <div className="app-left">
        <div className="left__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="left__content">
          <ListEmployee
            employees={employees}
            onSetEmployee={handleSetEmployee}
            active={active}
          />
        </div>
        <div className="action-btn" onClick={() => setShowMobile(false)}>
          Hide
        </div>
      </div>
    </>
  );
};

export default React.memo(AppLeft);
