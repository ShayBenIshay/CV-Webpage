import React from "react";
import Job from "./Job";
import "../styles/Content.css";

const Experience = () => (
  <div>
    <h2>Experience</h2>
    <Job
      title="Software Developer"
      company="Amdocs"
      date="12/2021 - 09/2023"
      type="Full-time"
      responsibilities="Investigating issues with business flows."
      routine={[
        "Running the flow",
        "Fetching and investigating logs",
        "Comparing to expected behavior",
        "Analyzing the issue. Debugging services if necessary",
        "Fixing the issue/s",
        "Running the fixes through CI/CD pipeline (Jenkins)",
        "Merging changes to the main branch",
        "Rolling up/down if needed",
      ]}
    />
  </div>
);

export default Experience;