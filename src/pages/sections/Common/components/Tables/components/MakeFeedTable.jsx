/* eslint-disable no-shadow */
import React, { useState } from 'react';
import facebook from '../../../../../../assets/images/facebook.png';
import google from '../../../../../../assets/images/google.png';
import pinterest from '../../../../../../assets/images/pinterest.png';

import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd';
import {
	DocumentDuplicateIcon,
	PlusCircleIcon,
	TrashIcon,
} from '@heroicons/react/24/outline';
import { Bars3Icon } from '@heroicons/react/24/solid';
import DeleteModal from '../../../../../../components/DeleteModal';
import Input from '../../../../../../components/Input';
import SearchSelect from '../../../../../../components/SearchSelect';
import Select from '../../../../../../components/Select';
import Table from '../../../../../../components/Table';
import ToggleButton from '../../../../../../components/ToggleButton';

const data = [
	{
		id: 1,
		feedName: 'Google Campaign Feed',
		channel: 'Google',
		channel_icon: google,
		fileType: 'XML',
		feedUrl:
			'http://newctx.local/mysite/feeddirectory/feedfolder/itsatestfeed.xml',
		interval: '6 Hours',
		lastUpdate: '24 Apr, 2024',
	},
	{
		id: 2,
		feedName: 'Facebook Marketplace',
		channel: 'Facebook',
		channel_icon: facebook,
		fileType: 'XML',
		feedUrl:
			'http://newctx.local/mysite/feeddirectory/feedfolder/somefeed.xml',
		interval: 'On Change',
		lastUpdate: '24 Apr, 2024',
	},
	{
		id: 3,
		feedName: 'Pinterest Oct CMP',
		channel: 'Pinterest',
		channel_icon: pinterest,
		fileType: 'XML',
		feedUrl:
			'http://newctx.local/mysite/feeddirectory/feedfolder/googlefeed.xml',
		interval: '6 Hours',
		lastUpdate: '24 Apr, 2024',
	},
	{
		id: 4,
		feedName: 'Google Campaign Feed 2',
		channel: 'Google',
		channel_icon: google,
		fileType: 'XML',
		feedUrl:
			'http://newctx.local/mysite/feeddirectory/feedfolder/mygreatfeed.xml',
		interval: '7 Days',
		lastUpdate: '24 Apr, 2024',
	},
];

const buttons = [
	{ title: 'Attribute', value: 'attribute' },
	{ title: 'Text', value: 'text' },
];

const MakeFeedTable = () => {
	const [deleteModalOpen, setDeleteModalOpen] = useState(true);
	const [reOrderCampaigns, setReOrderCampaigns] = useState(data);
	const handleDragEnd = (result) => {
		const items = Array.from(reOrderCampaigns);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);

		setReOrderCampaigns(items);
	};

	return (
		<>
			<Table>
				<Table.Head>
					<Table.Row className="!ctx-bg-gray-100">
						<Table.Cell></Table.Cell>
						<Table.Cell className="ctx-py-3.5">
							Attribute
						</Table.Cell>
						<Table.Cell>Prefix</Table.Cell>
						<Table.Cell>Type</Table.Cell>
						<Table.Cell>Value</Table.Cell>
						<Table.Cell>Suffix</Table.Cell>
						<Table.Cell>Output Type</Table.Cell>
						<Table.Cell>Command</Table.Cell>
						<Table.Cell>Actions</Table.Cell>
					</Table.Row>
				</Table.Head>
				<DragDropContext onDragEnd={handleDragEnd}>
					<Droppable droppableId="makeFeed">
						{(provided) => (
							<tbody
								className="ctx-divide-y ctx-divide-gray-200"
								{...provided.droppableProps}
								ref={provided.innerRef}
							>
								{reOrderCampaigns.map((row, index) => (
									<Draggable
										key={row.id}
										draggableId={`${row.id}`}
										index={index}
									>
										{(provided) => (
											<tr
												ref={provided.innerRef}
												{...provided.draggableProps}
												className="even:ctx-bg-gray-100 odd:ctx-bg-gray-50"
												key={row.id}
											>
												<Table.Cell>
													<button
														{...provided.dragHandleProps}
														className="ctx-cursor-grab active:ctx-cursor-grabbing ctx-flex ctx-items-centerå"
													>
														<Bars3Icon className="ctx-size-5 ctx-text-gray-700" />
													</button>
												</Table.Cell>
												<Table.Cell className="ctx-py-2">
													<SearchSelect
														size="small"
														placeholder="Select Attribute"
													/>
												</Table.Cell>
												<Table.Cell>
													<Input
														value={row.channel}
														className="ctx-w-32"
														size="small"
													/>
												</Table.Cell>
												<Table.Cell>
													<ToggleButton
														active={buttons[0]}
														buttons={buttons}
													/>
												</Table.Cell>
												<Table.Cell>
													<SearchSelect
														size="small"
														placeholder="Select Attribute"
													/>
												</Table.Cell>
												<Table.Cell className="ctx-py-1">
													<Input
														className="ctx-w-32"
														size="small"
													/>
												</Table.Cell>
												<Table.Cell className="ctx-text-center">
													<Select
														size="small"
														selected={{
															id: 1,
															name: 'Default',
														}}
														items={[
															{
																id: 1,
																name: 'Default',
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
												<Table.Cell>
													<Input
														className="ctx-w-32"
														size="small"
													/>
												</Table.Cell>
												<Table.Cell className="ctx-text-center ctx-align-middle">
													<div className="ctx-flex ctx-items-center ctx-gap-1.5">
														<button>
															<TrashIcon
																onClick={() => {
																	setDeleteModalOpen(
																		true
																	);
																}}
																className="ctx-size-5"
															/>
														</button>
														<button>
															<PlusCircleIcon className="ctx-size-5" />
														</button>
														<button>
															<DocumentDuplicateIcon className="ctx-size-5" />
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
			<DeleteModal
				isOpen={deleteModalOpen}
				setIsOpen={setDeleteModalOpen}
			/>
		</>
	);
};

export default MakeFeedTable;
