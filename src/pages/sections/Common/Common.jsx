import React from "react";
import Buttons from "./components/Buttons/Buttons";
import Inputs from "./components/Inputs/Inputs";
import LinkButtons from "./components/LinkButtons/LinkButtons";
import RadioInputs from "./components/RadioInputs/RadioInputs";
import Selects from "./components/Selects/Selects";

const Common = () => {
  return (
    <div className="ctx-mt-4 ctx-font-sans ctx-space-y-8 ctx-mr-4">
      <Selects />
      <Inputs />
      <RadioInputs />
      <Buttons />
      <LinkButtons />
    </div>
  );
};

export default Common;
