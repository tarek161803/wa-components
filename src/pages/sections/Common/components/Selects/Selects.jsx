import React, { useState } from "react";
import Select from "../../../../../components/Select";

import ComponentContainer from "../../../../components/ComponentContainer";

const people = [
  { id: 1, name: "Tom Cook" },
  { id: 2, name: "Wade Cooper" },
  { id: 3, name: "Tanya Fox" },
  { id: 4, name: "Arlene Mccoy" },
  { id: 5, name: "Devon Webb" },
  { id: 6, name: "Tom Cook" },
  { id: 7, name: "Wade Cooper" },
  { id: 8, name: "Tanya Fox" },
  { id: 9, name: "Arlene Mccoy" },
  { id: 10, name: "Devon Webb" },
];

const Selects = () => {
  const [selected, setSelected] = useState(people[1]);

  const handleChange = (currentSelected) => {
    setSelected(currentSelected);
  };

  return (
    <ComponentContainer title="Selects">
      <div className="ctx-w-72">
        <Select items={people} selected={selected} onChange={handleChange} />
      </div>
    </ComponentContainer>
  );
};

export default Selects;
