import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Button from './Button';

const DisclosureTab = ({ title = 'Disclosure Title', children }) => {
	return (
		<Disclosure>
			<DisclosureButton
				className={({ open }) =>
					`ctx-bg-white ctx-w-full  ctx-text-gray-800 ctx-px-4 ctx-py-[18px] ctx-flex ctx-justify-between ctx-items-center ctx-rounded-lg  ${open && 'ctx-rounded-b-none'}`
				}
			>
				<p className="ctx-font-semibold ctx-text-xl">{title}</p>
				<Button icon={<ChevronDownIcon className="ctx-size-4" />} />
			</DisclosureButton>
			<DisclosurePanel className=" ctx-px-4 ctx-pb-2.5 ctx-bg-white ctx-rounded-b-lg">
				{children}
			</DisclosurePanel>
		</Disclosure>
	);
};

export default DisclosureTab;
