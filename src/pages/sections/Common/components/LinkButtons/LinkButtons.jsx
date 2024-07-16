import React from "react";
import LinkButtonsContainer from "./LinkButtonsContainer";

const LinkButtons = () => {
  return (
    <div className="ctx-space-y-4">
      <LinkButtonsContainer type="primary" iconColor="white" title="Primary Link Button" />
      <LinkButtonsContainer type="destructive" iconColor="white" title="Destructive Link Button" />
    </div>
  );
};

export default LinkButtons;
