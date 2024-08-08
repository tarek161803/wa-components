/* eslint-disable no-shadow */
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { DocumentDuplicateIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Bars3Icon, PlusCircleIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import Button from '../../../../../../../components/Button';
import CreateModal from '../../../../../../../components/CreateModal';
import Input from '../../../../../../../components/Input';
import Label from '../../../../../../../components/Label';
import SearchSelect from '../../../../../../../components/SearchSelect';
import Select from '../../../../../../../components/Select';
import Table from '../../../../../../../components/Table';
import ToggleButton from '../../../../../../../components/ToggleButton';
const data = [
	{ id: 1, selected: { id: 4, name: 'Arlene Mccoy' } },
	{ id: 2, selected: { id: 7, name: 'Wade Cooper Wade Cooper Wade Cooper' } },
];

const buttons = [
	{ title: 'Attribute', value: 'attribute' },
	{ title: 'Text', value: 'text' },
];

const AttributeMapping = () => {
	const [attributes, setAttributes] = useState([...data]);
	const [open, setOpen] = useState(false);

	const handleAddMoreAttribute = () => {
		setAttributes((prevState) => [
			...prevState,
			{ ...data[0], id: Date.now() },
		]);
	};

	const handleAttributeDelete = (id) => {
		if (attributes.length === 1) {
			return;
		}

		setAttributes((prevState) =>
			prevState.filter((item) => item.id !== id)
		);
	};

	const handleDragEnd = (result) => {
		const items = Array.from(attributes);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		setAttributes(items);
	};

	return (
		<div>
			<Button
				onClick={() => {
					setOpen(true);
				}}
				icon={<PlusCircleIcon className="ctx-size-5 ctx-text-white" />}
			>
				New Dynamic Attribute
			</Button>
			<CreateModal
				isOpen={open}
				setIsOpen={setOpen}
				className="ctx-min-w-[1180px]"
				title="Dynamic Attribute"
			>
				<div className="ctx-bg-gray-50 ctx-rounded-2xl ctx-p-4">
					<div className="ctx-w-[480px] ctx-mx-auto ctx-mb-4">
						<Label
							className="ctx-text-center"
							htmlFor="attribute-name"
						>
							Attribute Name
						</Label>
						<Input id="attribute-name" size="small" />
					</div>

					<Table
						containerClass="ctx-border-0 ctx-rounded-b-none"
						className="ctx-divide-y-0"
					>
						<Table.Head>
							<Table.Row className="!ctx-bg-gray-100">
								<Table.Cell className="ctx-px-1.5"></Table.Cell>
								<Table.Cell className="ctx-py-1.5 ctx-px-1.5 ctx-text-gray-500 ctx-font-medium">
									Attribute
								</Table.Cell>
								<Table.Cell className="ctx-px-1.5 ctx-text-gray-500 ctx-font-medium">
									Condition
								</Table.Cell>
								<Table.Cell className="ctx-px-1.5 ctx-text-gray-500 ctx-font-medium">
									Condition Value
								</Table.Cell>
								<Table.Cell className="ctx-px-1.5 ctx-text-gray-500 ctx-font-medium">
									Output Type
								</Table.Cell>
								<Table.Cell className="ctx-px-1.5 ctx-text-gray-500 ctx-font-medium">
									Prefix
								</Table.Cell>
								<Table.Cell className="ctx-px-1.5 ctx-text-gray-500 ctx-font-medium">
									Value
								</Table.Cell>
								<Table.Cell className="ctx-px-1.5 ctx-text-gray-500 ctx-font-medium">
									Suffix
								</Table.Cell>
								<Table.Cell className="ctx-px-1.5 ctx-text-gray-500 ctx-font-medium">
									Actions
								</Table.Cell>
							</Table.Row>
						</Table.Head>
						<DragDropContext onDragEnd={handleDragEnd}>
							<Droppable droppableId="makeFeed">
								{(provided) => (
									<tbody
										{...provided.droppableProps}
										ref={provided.innerRef}
									>
										{attributes.map((row, index) => (
											<Draggable
												key={row.id}
												draggableId={`${row.id}`}
												index={index}
											>
												{(provided) => (
													<tr
														ref={provided.innerRef}
														{...provided.draggableProps}
														className="ctx-bg-gray-100"
														key={row.id}
													>
														<Table.Cell>
															<button
																{...provided.dragHandleProps}
																className=" ctx-flex ctx-items-center ctx-px-1.5"
															>
																<Bars3Icon className="ctx-size-5 ctx-text-gray-700" />
															</button>
														</Table.Cell>
														<Table.Cell className="ctx-py-2 ctx-px-1.5">
															<SearchSelect
																size="small"
																placeholder="Select Attribute"
															/>
														</Table.Cell>
														<Table.Cell className="ctx-px-1.5">
															<Select
																size="small"
																selected={{
																	id: 1,
																	name: 'is/equal to',
																}}
																items={[
																	{
																		id: 1,
																		name: 'is/equal to',
																	},
																	{
																		id: 2,
																		name: 'Others',
																	},
																	{
																		id: 3,
																		name: 'Encoded',
																	},
																	{
																		id: 4,
																		name: 'Arlene Mccoy ',
																	},
																]}
															/>
														</Table.Cell>
														<Table.Cell className="ctx-px-1.5">
															<Input
																className="ctx-w-32"
																size="small"
															/>
														</Table.Cell>
														<Table.Cell className="ctx-px-1.5">
															<ToggleButton
																active={
																	buttons[0]
																}
																buttons={
																	buttons
																}
															/>
														</Table.Cell>
														<Table.Cell className="ctx-py-1 ctx-px-1.5">
															<Input
																className="ctx-w-32"
																size="small"
															/>
														</Table.Cell>
														<Table.Cell className="ctx-text-center ctx-px-1.5">
															<SearchSelect
																size="small"
																placeholder="Select Attribute"
															/>
														</Table.Cell>
														<Table.Cell className="ctx-px-1.5">
															<Input
																className="ctx-w-32"
																size="small"
															/>
														</Table.Cell>
														<Table.Cell className="ctx-text-center ctx-align-middle ctx-px-1.5">
															<div className="ctx-flex ctx-items-center ctx-gap-1.5">
																<button>
																	<DocumentDuplicateIcon className="ctx-size-5" />
																</button>
																<button
																	onClick={() =>
																		handleAttributeDelete(
																			row.id
																		)
																	}
																>
																	<TrashIcon className="ctx-size-5" />
																</button>
															</div>
														</Table.Cell>
													</tr>
												)}
											</Draggable>
										))}

										{provided.placeholder}
									</tbody>
								)}
							</Droppable>
						</DragDropContext>
					</Table>

					<div className="ctx-px-5 ctx-py-4 ctx-bg-white ctx-rounded-b-lg ctx-flex ctx-items-center ctx-justify-between">
						<div className="ctx-flex ctx-items-center ctx-gap-8">
							<p className="ctx-font-medium ctx-text-base ctx-text-gray-800">
								Default
							</p>
							<ToggleButton
								active={buttons[0]}
								buttons={buttons}
							/>
							<SearchSelect
								inputClassName="!ctx-border !ctx-border-solid !ctx-border-gray-100 !ctx-py-[7px]"
								size="small"
								placeholder="Select Attribute"
							/>
						</div>
						<div>
							<Button
								onClick={handleAddMoreAttribute}
								size="medium"
								type="outline"
								icon={
									<PlusCircleIcon className="ctx-size-4 ctx-text-primary" />
								}
							>
								Add More Attribute
							</Button>
						</div>
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

export default AttributeMapping;
