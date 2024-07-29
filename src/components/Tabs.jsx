import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import cn from '../utils/cn';

const CTabs = ({ items, settings = false }) => {
	return (
		<TabGroup className="ctx-border ctx-border-gray-200 ctx-rounded-xl">
			<TabList
				className={cn(
					'ctx-flex ctx-bg-[#F6F8FA] ctx-rounded-t-xl ctx-p-2.5',
					{
						'ctx-gap-4': settings,
					}
				)}
			>
				{items.map(({ id, title }) => (
					<Tab
						key={id}
						className={cn(
							'ctx-bg-white ctx-py-2.5 first:ctx-rounded-s-lg last:ctx-rounded-e-lg ctx-text-xl ctx-border ctx-border-r-transparent ctx-flex-grow ctx-text-gray-900 last:ctx-border-r-gray-200 ctx-font-bold focus:ctx-outline-none data-[selected]:ctx-text-primary data-[selected]:ctx-border data-[selected]:ctx-border-primary data-[selected]:ctx-bg-[#DFEFFB] data-[focus]:outline-none',
							{
								'ctx-rounded-lg ctx-font-semibold ctx-text-lg ctx-border-r-gray-200 ctx-flex-grow-0 ctx-px-3 ctx-w-[200px]':
									settings,
							}
						)}
					>
						{title}
					</Tab>
				))}
			</TabList>
			<TabPanels className="ctx-bg-white ctx-p-5 ctx-pt-4 ctx-rounded-b-xl">
				{items.map(({ id, component }) => (
					<TabPanel key={id}>{component}</TabPanel>
				))}
			</TabPanels>
		</TabGroup>
	);
};

export default CTabs;
