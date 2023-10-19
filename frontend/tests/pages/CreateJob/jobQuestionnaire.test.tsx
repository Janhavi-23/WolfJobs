import { render, screen } from "@testing-library/react";
import React from "react";
import JobQuestionnaire from "../../../src/Pages/CreateJob/JobQuestionnaire";
import { MemoryRouter } from "react-router";

describe("JobQuestionnaire", () => {
  it("renders JobQuestionnaire", () => {
    render(
      <MemoryRouter>
        <JobQuestionnaire />
      </MemoryRouter>
    );
  });
});
