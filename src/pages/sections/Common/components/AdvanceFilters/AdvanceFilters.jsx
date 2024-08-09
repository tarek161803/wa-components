/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-shadow */
import { TrashIcon } from '@heroicons/react/24/outline';
import { PlusCircleIcon, PlusIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import LinkButton from '../../../../../components/LinkButton';
import SearchSelect from '../../../../../components/SearchSelect';
import ToggleButton from '../../../../../components/ToggleButton';
import ComponentContainer from '../../../../components/ComponentContainer';

const filters = [
	{
		id: 'a8a98625-8f95-4e99-9681-a680f92751de',
		base_operator: 'and',
		base_filters: [
			{
				id: '386867b1-7119-4f1d-8aa9-cfdadc2a2af8',
				compare_with: 'short_description',
				operator: 'and',
				condition: 'equal',
			},
			{
				id: '6d776d3e-ed03-48f4-ba55-8abcccfe1770',
				compare_with: 'attributes',
				operator: 'and',
				condition: 'in_list',
				compare: [],
			},
		],
	},
	{
		id: '8795e515-1b56-4e5a-b275-784646713841',
		base_operator: 'and',
		base_filters: [
			{
				id: '19733b91-6785-4697-b603-d8afe1b24267',
				compare_with: 'sku',
				operator: 'and',
				condition: 'equal',
			},
			{
				id: '6aa702d4-399f-4016-ae62-cffbb0fb7aec',
				compare_with: 'tags',
				operator: 'and',
				condition: 'in_list',
				compare: [],
			},
		],
	},
];

const AdvanceFilters = () => {
	const [conditions, setConditions] = useState([...filters]);

	const handleAddCondition = () => {
		setConditions((prevState) => [
			...prevState,
			{
				id: uuidv4(),
				base_operator: 'and',
				base_filters: [
					{
						id: uuidv4(),
						compare_with: '',
						operator: 'and',
					},
				],
			},
		]);
	};

	const handleAddSubCondition = (id) => {
		const groupIndex = conditions.findIndex((item) => item.id === id);
		if (groupIndex !== -1) {
			const conditionCopy = Array.from(conditions);

			conditionCopy[groupIndex].base_filters.push({
				id: uuidv4(),
				compare_with: '',
				operator: 'and',
			});

			setConditions(conditionCopy);
		}
	};

	const handleDeleteCondition = (groupId, conditionId) => {
		if (
			conditions.length === 1 &&
			conditions[0].base_filters.length === 1
		) {
			return;
		}
		const groupIndex = conditions.findIndex((item) => item.id === groupId);

		if (groupIndex !== -1) {
			if (conditions[groupIndex].base_filters.length === 1) {
				setConditions((prevState) =>
					prevState.filter(
						(conditionGroup) => conditionGroup.id !== groupId
					)
				);
			} else {
				const conditionCopy = Array.from(conditions);
				conditionCopy[groupIndex].base_filters = conditions[
					groupIndex
				].base_filters.filter(
					(condition) => condition.id !== conditionId
				);
				setConditions(conditionCopy);
			}
		}
	};

	return (
		<ComponentContainer title="Advance Filter">
			{conditions.map((condition, index) => (
				<div key={condition.id}>
					{index !== 0 && (
						<div className="ctx-flex ctx-justify-center ctx-my-4">
							<ToggleButton
								buttons={[
									{ title: 'AND', value: 'and' },
									{ title: 'OR', value: 'or' },
								]}
								active={{
									title: condition.base_operator,
									value: condition.base_operator,
								}}
							/>
						</div>
					)}
					<div className="ctx-border ctx-border-primary ctx-bg-white  ctx-rounded-2xl ctx-p-2">
						<div className=" ctx-bg-gray-50 ctx-rounded-2xl ctx-border ctx-border-gray-100 ctx-p-2">
							<div className="ctx-bg-gray-200 ctx-py-1.5 ctx-rounded-t-lg ctx-grid ctx-grid-cols-10 ctx-mb-2">
								<p className="ctx-text-base ctx-font-semibold ctx-text-gray-800 ctx-pl-4 ctx-col-span-3">
									Attribute
								</p>
								<p className="ctx-text-base ctx-font-semibold ctx-text-gray-800 ctx-pl-4 ctx-col-span-3">
									Condition
								</p>
								<p className="ctx-text-base ctx-font-semibold ctx-text-gray-800 ctx-pl-4 ctx-col-span-3">
									Value
								</p>
								<p className="ctx-text-base ctx-font-semibold ctx-text-gray-800 ctx-pl-4 ctx-text-center ctx-col-span-1">
									Actions
								</p>
							</div>
							{condition.base_filters.map((filter, index) => (
								<div key={filter.id}>
									{index !== 0 && (
										<div className="ctx-flex ctx-justify-center ctx-my-2">
											<ToggleButton
												buttons={[
													{
														title: 'AND',
														value: 'and',
													},
													{
														title: 'OR',
														value: 'or',
													},
												]}
												active={{
													title: condition.base_operator,
													value: condition.base_operator,
												}}
											/>
										</div>
									)}
									<div className="ctx-grid ctx-py-2 ctx-rounded-lg ctx-shadow-sm ctx-grid-cols-10 ctx-items-center">
										<div className="ctx-col-span-3 ctx-pl-4">
											<SearchSelect
												placeholder="Please Select"
												size="small"
											/>
										</div>
										<div className="ctx-col-span-3 ctx-pl-4">
											<SearchSelect
												placeholder="Select Condition"
												size="small"
											/>
										</div>
										<div className="ctx-col-span-3 ctx-pl-4">
											<Input
												placeholder="Value"
												size="small"
											/>
										</div>
										<div className="ctx-col-span-1 ctx-pl-4 ctx-flex ctx-justify-center">
											<button
												onClick={() =>
													handleDeleteCondition(
														condition.id,
														filter.id
													)
												}
											>
												<TrashIcon className="ctx-size-5 ctx-text-gray-900" />
											</button>
										</div>
									</div>
								</div>
							))}

							<div className="ctx-flex ctx-justify-center ctx-mt-3 ctx-mb-1">
								<LinkButton
									onClick={() =>
										handleAddSubCondition(condition.id)
									}
									size="large"
									icon={
										<PlusIcon className="ctx-text-white ctx-size-3" />
									}
								>
									Add Sub Condition
								</LinkButton>
							</div>
						</div>
					</div>
				</div>
			))}

			<div className="ctx-flex ctx-justify-end ctx-mt-4">
				<Button
					onClick={handleAddCondition}
					icon={
						<PlusCircleIcon className="ctx-size-5 ctx-text-white" />
					}
				>
					Add Condition
				</Button>
			</div>
		</ComponentContainer>
	);
};

export default AdvanceFilters;
