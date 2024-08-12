/* eslint-disable no-shadow */
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import Button from '../../../../../../../components/Button';
import CreateModal from '../../../../../../../components/CreateModal';
import Input from '../../../../../../../components/Input';
import SearchSelect from '../../../../../../../components/SearchSelect';
import Table from '../../../../../../../components/Table';
import ToggleButton from '../../../../../../../components/ToggleButton';
const data = [
	{ id: 1, selected: { id: 4, name: 'Arlene Mccoy' } },
	{ id: 2, selected: { id: 7, name: 'Wade Cooper Wade Cooper Wade Cooper' } },
];

const CategoryMapping = () => {
	const [open, setOpen] = useState(true);

	return (
		<div>
			<Button
				onClick={() => {
					setOpen(true);
				}}
				icon={<PlusCircleIcon className="ctx-size-5 ctx-text-white" />}
			>
				New Category Mapping
			</Button>
			<CreateModal
				isOpen={open}
				setIsOpen={setOpen}
				className="ctx-w-[1140px] ctx-min-h-60"
				title="Attribute Mapping"
			>
				<div className="ctx-bg-gray-50 ctx-rounded-2xl ctx-px-4 ctx-py-6">
					<div className="ctx-flex ctx-gap-3">
						<div className="ctx-flex-grow">
							<p className="ctx-text-gray-800 ctx-text-base ctx-font-medium ctx-m-1">
								Mapping Name
							</p>
							<Input size="small" />
						</div>
						<div className="ctx-flex-grow">
							<p className="ctx-text-gray-800 ctx-text-base ctx-font-medium ctx-m-1">
								Option Name
							</p>
							<SearchSelect
								currentSelected={data[0].selected}
								size="small"
							/>
						</div>
					</div>

					<div className="ctx-mt-4">
						<div className="ctx-flex ctx-items-center ctx-gap-6 ctx-mb-5">
							<p className="ctx-text-gray-800 ctx-text-base ctx-font-medium">
								Populate Category
							</p>
							<ToggleButton
								buttons={[
									{ title: 'Attribute', value: 'attribute' },
									{ title: 'Text', value: 'text' },
								]}
								active={{
									title: 'Attribute',
									value: 'attribute',
								}}
							/>
						</div>

						<Table
							containerClass="ctx-border-none"
							className="ctx-divide-y-0"
						>
							<Table.Head>
								<Table.Row>
									<Table.Cell className="ctx-bg-gray-200 ctx-text-base ctx-font-medium ctx-text-gray-900 ctx-p-3">
										Store Category
									</Table.Cell>
									<Table.Cell className="ctx-bg-gray-200 ctx-text-base ctx-font-medium ctx-text-gray-900">
										Channel Category
									</Table.Cell>
								</Table.Row>
							</Table.Head>
							<Table.Body>
								<Table.Row className="even:ctx-bg-gray-200 odd:ctx-bg-gray-100">
									<Table.Cell className="ctx-text-base ctx-font-medium ctx-text-gray-900 ctx-p-3">
										Uncategorized
									</Table.Cell>
									<Table.Cell>
										<SearchSelect size="small" />
									</Table.Cell>
								</Table.Row>
								<Table.Row className="even:ctx-bg-gray-200 odd:ctx-bg-gray-100">
									<Table.Cell className="ctx-text-base ctx-font-medium ctx-text-gray-900 ctx-p-3">
										Clothing
									</Table.Cell>
									<Table.Cell>
										<SearchSelect size="small" />
									</Table.Cell>
								</Table.Row>
								<Table.Row className="even:ctx-bg-gray-200 odd:ctx-bg-gray-100">
									<Table.Cell className="ctx-text-base ctx-font-medium ctx-text-gray-900 ctx-p-3">
										Clothing &gt; T-Shirt
									</Table.Cell>
									<Table.Cell>
										<SearchSelect size="small" />
									</Table.Cell>
								</Table.Row>
							</Table.Body>
						</Table>
					</div>
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

export default CategoryMapping;
