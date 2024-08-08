/* eslint-disable no-shadow */
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import Button from '../../../../../../../components/Button';
import CreateModal from '../../../../../../../components/CreateModal';
import SearchSelect from '../../../../../../../components/SearchSelect';
const data = [
	{ id: 1, selected: { id: 4, name: 'Arlene Mccoy' } },
	{ id: 2, selected: { id: 7, name: 'Wade Cooper Wade Cooper Wade Cooper' } },
];

const WpOptions = () => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<Button
				onClick={() => {
					setOpen(true);
				}}
				icon={<PlusCircleIcon className="ctx-size-5 ctx-text-white" />}
			>
				Add New Option
			</Button>
			<CreateModal
				isOpen={open}
				setIsOpen={setOpen}
				className="ctx-w-[576px] ctx-min-h-60"
				title="Attribute Mapping"
			>
				<div className="ctx-bg-gray-50 ctx-rounded-2xl ctx-px-4 ctx-py-6">
					<p className="ctx-text-gray-800 ctx-text-base ctx-font-medium ctx-m-1">
						Option Name
					</p>
					<SearchSelect
						currentSelected={data[0].selected}
						size="small"
					/>
				</div>
				<div className="ctx-flex ctx ctx-justify-end ctx-gap-4 ctx-mt-4">
					<Button
						onClick={() => {
							setOpen(false);
						}}
						className="ctx-w-20"
						type="outline"
					>
						Cancel
					</Button>
					<Button className="ctx-w-20">Save</Button>
				</div>
			</CreateModal>
		</div>
	);
};

export default WpOptions;
