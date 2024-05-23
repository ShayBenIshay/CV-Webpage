import React from "react";
import "./styles/Job.css";

const Job = ({ title, company, date, type, responsibilities, routine }) => (
  <div className="job">
    <h3>
      {title} at {company}
    </h3>
    <p>
      {date}, {type}
    </p>
    <h4>Responsibilities:</h4>
    <p>{responsibilities}</p>
    <h4>Daily Routine:</h4>
    <ul>
      {routine.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  </div>
);

export default Job;