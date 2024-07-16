import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import LinkButton from "../../../../../components/LinkButton";
import ComponentContainer from "../../../../components/ComponentContainer";

const LinkButtonsContainer = ({ type, iconColor, title = "" }) => {
  return (
    <ComponentContainer title={title}>
      <div className="ctx-flex ctx-items-center ctx-gap-8">
        <div className="ctx-flex ctx-items-center ctx-gap-4">
          <LinkButton size="large" type={type} icon={<PlusIcon className={`ctx-text-${iconColor} ctx-size-3`} />}>
            Make Feed
          </LinkButton>
          <LinkButton size="large" type={type}>
            Make Feed
          </LinkButton>
        </div>

        <div className="ctx-flex ctx-items-center ctx-gap-4">
          <LinkButton type={type} icon={<PlusIcon className={`ctx-text-${iconColor} ctx-size-3`} />}>
            Make Feed
          </LinkButton>
          <LinkButton type={type}>Make Feed</LinkButton>
        </div>

        <div className="ctx-flex ctx-items-center ctx-gap-4">
          <LinkButton size="small" type={type} icon={<PlusIcon className={`ctx-text-${iconColor} ctx-size-2.5`} />}>
            Make Feed
          </LinkButton>
          <LinkButton size="small" type={type}>
            Make Feed
          </LinkButton>
        </div>
      </div>
    </ComponentContainer>
  );
};

export default LinkButtonsContainer;
