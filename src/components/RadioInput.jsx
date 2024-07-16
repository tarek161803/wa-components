import React from "react";
import cn from "../utils/cn";

const RadioInput = ({ name, value, label = "Label", checked, onChange, size = "large" }) => {
  const sizeClass = {
    small: "ctx-size-[12px]",
    medium: "ctx-size-[16px]",
    large: "ctx-size-[18px]",
  };

  const radioIconClass = {
    small: "ctx-size-[10px]",
    medium: "ctx-size-[14px]",
    large: "ctx-size-[16px]",
  };

  const labelClass = {
    small: "ctx-text-[10px]",
    medium: "ctx-text-xs",
    large: "ctx-text-sm",
  };

  return (
    <label className="ctx-flex ctx-items-center ctx-cursor-pointer ctx-gap-1.5">
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="!ctx-hidden" />
      <span
        className={cn("ctx-rounded-full ctx-flex ctx-items-center ctx-justify-center", sizeClass[size], {
          "ctx-bg-gradient-to-br ctx-from-primary ctx-to-primary-light": checked,
          "ctx-bg-black": !checked,
        })}>
        <span
          className={cn("ctx-rounded-full ctx-border-2 ctx-border-white", radioIconClass[size], {
            "ctx-bg-gradient-to-br ctx-from-primary ctx-to-primary-light": checked,
            "ctx-bg-white": !checked,
          })}
        />
      </span>
      <span className={cn("ctx-text-black", labelClass[size])}>{label}</span>
    </label>
  );
};

export default RadioInput;
