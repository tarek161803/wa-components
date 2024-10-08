import {
	Combobox,
	ComboboxButton,
	ComboboxInput,
	ComboboxOption,
	ComboboxOptions,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import { useState } from 'react';
import cn from '../utils/cn';

const people = [
	{ id: 1, name: 'Tom Cook' },
	{ id: 2, name: 'Wade Cooper Wade Cooper Wade Cooper' },
	{ id: 3, name: 'Tanya Fox' },
	{ id: 4, name: 'Arlene Mccoy' },
	{ id: 5, name: 'Devon Webb' },
	{ id: 6, name: 'Tom Cook' },
	{ id: 7, name: 'Wade Cooper Wade Cooper Wade Cooper' },
	{ id: 8, name: 'Tanya Fox' },
	{ id: 9, name: 'Arlene Mccoy' },
	{ id: 10, name: 'Devon Webb' },
];

const SearchSelect = ({
	itemClass = '',
	size = 'large',
	placeholder = '',
	currentSelected = null,
	inputClassName = '',
}) => {
	const [query, setQuery] = useState('');
	const [selected, setSelected] = useState(currentSelected);

	const sizeClass = {
		small: '!ctx-text-xs !ctx-py-[7px] !ctx-pl-2 !ctx-pr-7 !ctx-shadow-custom-sm-light focus:!ctx-shadow-custom-sm-light',
		large: '!ctx-text-sm !ctx-py-[9px] !ctx-pl-2.5 !ctx-pr-8 !ctx-shadow-custom-light focus:!ctx-shadow-custom-light',
	};

	const filteredPeople =
		query === ''
			? people
			: people.filter((person) => {
					return person.name
						.toLowerCase()
						.includes(query.toLowerCase());
				});

	return (
		<Combobox
			value={selected}
			onChange={(value) => setSelected(value)}
			onClose={() => setQuery('')}
		>
			<div className="ctx-relative ctx-flex-grow">
				<ComboboxInput
					placeholder={placeholder}
					className={cn(
						' ctx-w-full placeholder:!ctx-text-gray-300 !ctx-rounded-lg !ctx-font-medium !ctx-text-gray-700 !ctx-border !ctx-border-gray-100 !ctx-bg-white',
						'focus:!ctx-outline-none data-[focus]:!ctx-outline-none focus-visible:!ctx-outline-none',
						sizeClass[size],
						inputClassName
					)}
					displayValue={(person) => person?.name}
					onChange={(event) => setQuery(event.target.value)}
				/>
				<ComboboxButton
					className={cn(
						'ctx-group ctx-absolute ctx-inset-y-0 ctx-right-0 ctx-pl-2.5 ctx-pr-2',
						{ 'ctx-pr-1 ctx-pl-1': size === 'small' }
					)}
				>
					<ChevronDownIcon className="ctx-size-5 ctx-fill-gray-700" />
				</ComboboxButton>
			</div>

			<ComboboxOptions
				anchor={{
					gap: 8,
					to: 'bottom start',
				}}
				transition
				className={cn(
					'ctx-min-w-[var(--input-width)] ctx-z-20 ctx-scrollbar ctx-bg-white ctx-shadow-md !ctx-max-h-60 ctx-rounded-lg ctx-border focus:ctx-outline-none empty:ctx-invisible',
					'ctx-transition ctx-duration-100 ctx-ease-in data-[leave]:data-[closed]:ctx-opacity-0'
				)}
			>
				{filteredPeople.map((person) => (
					<ComboboxOption
						key={person.id}
						value={person}
						className={cn(
							'ctx-cursor-pointer data-[focus]:ctx-bg-gray-100 data-[selected]:ctx-bg-primary/10 ctx-text-xs ctx-text-gray-900 ctx-flex ctx-transform ctx-duration-300   hover:ctx-bg-gray-100 ctx-items-center ctx-gap-2 ctx-py-[7px] ctx-px-3 ctx-select-none',
							itemClass
						)}
					>
						{person.name}
					</ComboboxOption>
				))}
			</ComboboxOptions>
		</Combobox>
	);
};

export default SearchSelect;
