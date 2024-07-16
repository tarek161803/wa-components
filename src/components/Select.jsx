import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import cn from "../utils/cn";

export default function Select({ selected, onChange, items }) {
  return (
    <Listbox value={selected} onChange={onChange}>
      <ListboxButton
        className={cn(
          "ctx-relative ctx-bg-white ctx-shadow-custom ctx-block ctx-w-full ctx-rounded-lg ctx-py-2.5 ctx-pr-8 ctx-pl-3 ctx-text-left ctx-text-sm ctx-font-semibold ctx-text-gray-700 focus-visible:ctx-outline-none"
        )}>
        {selected.name}
        <ChevronDownIcon
          className="ctx-group ctx-pointer-events-none ctx-absolute ctx-top-2.5 ctx-right-2.5 ctx-size-5 ctx-fill-gray-700"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        transition
        className={cn(
          "ctx-z-20 ctx-scrollbar ctx-mt-2 ctx-shadow-lg ctx-h-60 ctx-space-y-2 ctx-w-[var(--button-width)] ctx-rounded-lg ctx-border ctx-bg-white ctx-p-2 focus:ctx-outline-none",
          "ctx-transition ctx-duration-100 ctx-ease-in data-[closed]:ctx-opacity-0"
        )}>
        {items.map((item) => (
          <ListboxOption
            key={item.name}
            value={item}
            className="ctx-cursor-pointer ctx-bg-gray-100 ctx-border ctx-border-200 ctx-rounded-lg ctx-flex ctx-border-gray-200 ctx-transform ctx-duration-300 focus:ctx-border-primary data-[focus]:ctx-border-primary data-[focus]:ctx-bg-white ctx-items-center ctx-gap-2 ctx-py-[7px] ctx-px-3 ctx-select-none">
            <div className="ctx-text-xs ctx-text-gray-900">{item.name}</div>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}
