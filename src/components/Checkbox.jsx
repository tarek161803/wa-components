import { Checkbox as HeadlessCheckbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/16/solid';
import React from 'react';

const Checkbox = ({ checked, onChange }) => {
	return (
		<HeadlessCheckbox
			checked={checked}
			onChange={onChange}
			className="ctx-flex ctx-justify-center ctx-items-center ctx-group ctx-size-5 ctx-rounded-md ctx-border ctx-border-gray-700 ctx-ring-inset data-[checked]:ctx-bg-primary data-[checked]:ctx-border-primary"
		>
			<CheckIcon className="ctx-hidden ctx-size-4 ctx-fill-white group-data-[checked]:ctx-block" />
		</HeadlessCheckbox>
	);
};

export default Checkbox;
