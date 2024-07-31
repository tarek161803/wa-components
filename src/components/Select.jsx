import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import cn from '../utils/cn';

const Select = ({
	className = '',
	itemClass = '',
	size = 'large',
	selected,
	onChange,
	items,
	placeholder = 'Please Select',
}) => {
	const sizeClass = {
		small: 'ctx-text-xs ctx-py-2 !ctx-shadow-custom-sm focus:!ctx-shadow-custom-sm',
		large: 'ctx-text-sm ctx-py-2.5 !ctx-shadow-custom focus:!ctx-shadow-custom',
	};

	const buttonIconClass = {
		small: 'ctx-top-1.5 ctx-right-1.5 ctx-size-5',
		large: 'ctx-top-2.5 ctx-right-2.5 ctx-size-5',
	};

	return (
		<Listbox value={selected} onChange={onChange}>
			<ListboxButton
				className={cn(
					'ctx-relative ctx-bg-white ctx-text-sm ctx-block ctx-w-full ctx-rounded-lg ctx-pr-8 ctx-pl-3 ctx-text-left ctx-font-semibold ctx-text-gray-700 focus-visible:ctx-outline-none',
					sizeClass[size],
					className
				)}
			>
				{selected ? selected.name : placeholder}
				<ChevronDownIcon
					className={cn(
						'ctx-group ctx-pointer-events-none ctx-absolute ctx-fill-gray-700',
						buttonIconClass[size]
					)}
					aria-hidden="true"
				/>
			</ListboxButton>
			<ListboxOptions
				anchor={{
					gap: 8,
					to: 'bottom start',
				}}
				transition
				className={cn(
					'ctx-z-20 ctx-scrollbar ctx-bg-white ctx-shadow-md !ctx-max-h-60 ctx-space-y-2 ctx-min-w-[var(--button-width)] ctx-rounded-lg ctx-border ctx-p-2 focus:ctx-outline-none',
					'ctx-transition ctx-duration-100 ctx-ease-in data-[closed]:ctx-opacity-0'
				)}
			>
				{items.map((item) => (
					<ListboxOption
						key={item.name}
						value={item}
						className={cn(
							'ctx-cursor-pointer data-[selected]:ctx-bg-white data-[selected]:ctx-border-primary ctx-text-xs ctx-text-gray-900 ctx-bg-gray-100 ctx-border ctx-rounded-lg ctx-flex ctx-border-gray-200 ctx-transform ctx-duration-300  hover:ctx-border-primary hover:ctx-bg-white ctx-items-center ctx-gap-2 ctx-py-[7px] ctx-px-3 ctx-select-none',
							itemClass
						)}
					>
						{item.icon && (
							<img
								className="ctx-size-4"
								src={item.icon}
								alt=""
							/>
						)}
						{item.name}
					</ListboxOption>
				))}
			</ListboxOptions>
		</Listbox>
	);
};

export default Select;
