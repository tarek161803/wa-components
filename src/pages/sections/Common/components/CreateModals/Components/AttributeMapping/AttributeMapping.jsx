/* eslint-disable no-shadow */
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Bars3Icon, PlusCircleIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import Button from '../../../../../../../components/Button';
import CreateModal from '../../../../../../../components/CreateModal';
import Input from '../../../../../../../components/Input';
import Label from '../../../../../../../components/Label';
import SearchSelect from '../../../../../../../components/SearchSelect';
const data = [
	{ id: 1, selected: { id: 4, name: 'Arlene Mccoy' } },
	{ id: 2, selected: { id: 7, name: 'Wade Cooper Wade Cooper Wade Cooper' } },
];

const AttributeMapping = () => {
	const [attributes, setAttributes] = useState([...data]);
	const [open, setOpen] = useState(false);

	const handleAddNewAttribute = () => {
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
				New Attribute Mapping
			</Button>
			<CreateModal
				isOpen={open}
				setIsOpen={setOpen}
				className="ctx-w-[576px]"
				title="Attribute Mapping"
			>
				<div className="ctx-bg-gray-50 ctx-rounded-2xl ctx-p-4">
					<div className="ctx-flex ctx-gap-4 ctx-mx-7">
						<div className="ctx-flex-grow">
							<Label htmlFor="attribute-name">
								Attribute Name*
							</Label>
							<Input id="attribute-name" size="small" />
						</div>
						<div className="ctx-flex-grow">
							<Label htmlFor="attribute-name">
								Attribute Separator
							</Label>
							<Input id="attribute-name" size="small" />
						</div>
					</div>

					<div className="ctx-mt-4">
						<p className="ctx-ml-7">Select Attribute*</p>
						<DragDropContext onDragEnd={handleDragEnd}>
							<Droppable droppableId="attribute-mapping">
								{(provided) => {
									return (
										<div
											{...provided.droppableProps}
											ref={provided.innerRef}
										>
											{attributes.map((item, index) => (
												<Draggable
													key={item.id}
													draggableId={`${item.id}`}
													index={index}
												>
													{(provided) => (
														<div
															ref={
																provided.innerRef
															}
															{...provided.draggableProps}
															className="ctx-flex ctx-items-center ctx-gap-2 ctx-py-1.5"
														>
															<button
																{...provided.dragHandleProps}
															>
																<Bars3Icon className="ctx-size-5 ctx-text-gray-700" />
															</button>

															<SearchSelect
																currentSelected={
																	item.selected
																}
																size="small"
															/>

															<button
																onClick={() => {
																	handleAttributeDelete(
																		item.id
																	);
																}}
															>
																<TrashIcon className="ctx-size-5 ctx-text-gray-700" />
															</button>
														</div>
													)}
												</Draggable>
											))}
											{provided.placeholder}
										</div>
									);
								}}
							</Droppable>
						</DragDropContext>

						<div className="ctx-mx-7 ctx-flex ctx-justify-end ctx-mt-4">
							<Button
								onClick={handleAddNewAttribute}
								type="outline"
								size="medium"
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
