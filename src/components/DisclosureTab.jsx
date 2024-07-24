import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import Button from './Button';

const DisclosureTab = ({ title = 'Disclosure Title  ' }) => {
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
			<DisclosurePanel className="ctx-text-gray-500 ctx-bg-white">
				Yes! You can purchase a license that you can share with your
				entire team.
			</DisclosurePanel>
		</Disclosure>
	);
};

export default DisclosureTab;
