import React from "react";
import { Employee } from "../types/app.types";

type ListEmployeeProps = {
  employees?: Employee[];
  active?: Employee;
  onSetEmployee?: (employee: Employee) => void;
};

const ListEmployee: React.FC<ListEmployeeProps> = ({
  employees,
  active,
  onSetEmployee,
}) => {
  return (
    <>
      <ul className="list-employee">
        {employees?.map((employee, index) => (
          <li
            key={index + "_" + employee.name}
            className={
              `list-employee-item` +
              (active?.name === employee?.name ? " active" : "")
            }
            onClick={() => onSetEmployee?.(employee)}
          >
            {employee.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default React.memo(ListEmployee);
