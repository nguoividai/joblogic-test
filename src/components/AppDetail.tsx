import React, { useState } from "react";
import testImg from "../assets/images/profile/Carlo Rizzi.jpg";
import { Employee } from "../types/app.types";

type AppDetailProps = {
  employee: Employee;
};

const AppDetail: React.FC<AppDetailProps> = ({ employee }) => {
  const [popularity, setPopularity] = useState<number>(
    employee.popularity ?? 0
  );

  const onChangePopularity = (value: number) => {
    setPopularity(value);
  };

  return (
    <div className="app-detail">
      <div className="row">
        <div className="col-image">
          <img
            src={require("../assets/images/profile/" + employee.image)}
            alt="employee-img"
          />
        </div>
        <div className="col-content">
          <div className="text-name">{employee.name}</div>
          <div className="slider-popularity">
            <div className="title">Popularity</div>
            <input
              type="range"
              min="1"
              max="100"
              defaultValue={employee.popularity}
              className="slider"
              onChange={(e) => onChangePopularity(+e.target.value)}
            />
          </div>
          <div className="card-biography">
            <div className="title">Biography</div>
            <div
              className="content"
              style={{
                fontSize: popularity / (employee.popularity ?? 1) + "rem",
              }}
            >
              {employee.biography}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AppDetail);
