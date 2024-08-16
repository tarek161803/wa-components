import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
	CheckCircleIcon,
	ExclamationCircleIcon,
} from '@heroicons/react/24/solid';
import cn from '../utils/cn';
import Table from './Table';

const StatusDisclosure = ({ title, data }) => {
	return (
		<Disclosure as="div">
			{({ open }) => (
				<>
					<DisclosureButton
						className={cn(
							'ctx-group ctx-flex ctx-w-full ctx-items-center ctx-bg-gray-100 ctx-justify-between ctx-px-4 ctx-py-3 focus-visible:ctx-outline-none',
							{
								'ctx-border-primary ctx-border ctx-px-[15px] ctx-py-[11px]':
									open,
							}
						)}
					>
						<span className="ctx-text-base  ctx-font-semibold ctx-text-gray-900">
							{title}
						</span>
						<ChevronDownIcon className="ctx-size-6 ctx-fill-gray-900 group-data-[open]:ctx-rotate-180" />
					</DisclosureButton>
					<DisclosurePanel
						className={cn('ctx-p-3', {
							'ctx-border-primary ctx-border ctx-border-t-0':
								open,
						})}
					>
						<Table>
							<Table.Body>
								{data.map((item, index) => (
									<Table.Row
										key={index}
										className="even:ctx-bg-gray-100 odd:ctx-bg-gray-50"
									>
										<Table.Cell className="ctx-text-sm ctx-font-semibold ctx-text-gray-900 ctx-p-3 ctx-w-1/2">
											{item.label}
										</Table.Cell>
										<Table.Cell className="ctx-text-sm ctx-font-normal ctx-text-gray-700 ctx-p-3 ctx-flex ctx-gap-3">
											{item.status === 'success' ? (
												<CheckCircleIcon className="ctx-size-5 ctx-text-green-500 ctx-flex-shrink-0" />
											) : (
												<ExclamationCircleIcon className="ctx-size-5 ctx-text-orange-500 ctx-flex-shrink-0" />
											)}
											<span
												dangerouslySetInnerHTML={{
													__html: item.message,
												}}
											/>
										</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
						</Table>
					</DisclosurePanel>
				</>
			)}
		</Disclosure>
	);
};

export default StatusDisclosure;
