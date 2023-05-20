import React, { useState } from "react";
import logo from "./logo.svg";
// import "./App.css";
import "./css/app.css";
import AppHeader from "./components/AppHeader";
import AppLeft from "./components/AppLeft";
import { EMPLOYEE_DATA } from "./constants/employeeData";
import { Employee } from "./types/app.types";
import AppDetail from "./components/AppDetail";

function App() {
  const { employees } = EMPLOYEE_DATA;
  const [employee, setEmployee] = useState<Employee>(employees[0]);
  const [key, setKey] = useState<number>(0);

  const onSetEmployee = (employee: Employee) => {
    setEmployee({ ...employee });
    setKey((p) => p + 1);
  };

  return (
    <div className="App">
      <AppHeader />
      <div className="app-body">
        <AppLeft
          employees={employees as Employee[]}
          onSetEmployee={onSetEmployee}
          active={employee}
        />
        <AppDetail key={key} employee={employee} />
      </div>
    </div>
  );
}

export default App;
