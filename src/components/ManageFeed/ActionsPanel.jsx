import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import {
	ArrowDownOnSquareIcon,
	ArrowPathIcon,
	ArrowUpTrayIcon,
	ClipboardDocumentIcon,
	DocumentDuplicateIcon,
	EyeIcon,
	FolderArrowDownIcon,
	PencilSquareIcon,
	TrashIcon,
} from '@heroicons/react/24/outline';
import { Cog8ToothIcon } from '@heroicons/react/24/solid';

const panelOptions = [
	{ id: 1, title: 'Preview', icon: EyeIcon },
	{ id: 2, title: 'Regenerate', icon: ArrowPathIcon },
	{ id: 3, title: 'Edit Feed', icon: PencilSquareIcon },
	{ id: 4, title: 'Duplicate', icon: DocumentDuplicateIcon },
	{ id: 5, title: 'Download', icon: FolderArrowDownIcon },
	{ id: 6, title: 'Export Config', icon: ArrowUpTrayIcon },
	{ id: 7, title: 'Download Log', icon: ArrowDownOnSquareIcon },
	{ id: 8, title: 'Report', icon: ClipboardDocumentIcon },
	{ id: 9, title: 'Feed Delete', icon: TrashIcon },
];

const ActionsPanel = () => {
	return (
		<Popover>
			<PopoverButton className="ctx-block ctx-outline-none focus:ctx-outline-none">
				<Cog8ToothIcon className="ctx-size-5 ctx-text-gray-600" />
			</PopoverButton>
			<PopoverPanel
				transition
				anchor={{
					gap: 8,
					to: 'bottom',
				}}
				className="ctx-bg-white ctx-rounded-md ctx-shadow-lg"
			>
				{panelOptions.map((option) => (
					<button
						className="ctx-border ctx-border-white last:ctx-rounded-b-md first:ctx-rounded-t-md hover:ctx-border-primary ctx-w-full ctx-py-1.5 ctx-px-4  ctx-flex ctx-items-center ctx-gap-2  hover:ctx-bg-gray-100 ctx-transition-colors ctx-duration-300 "
						key={option.id}
					>
						<option.icon className="ctx-size-[18px]" />
						<span className="ctx-font-sans ctx-text-xs ctx-text-gray-800">
							{option.title}
						</span>
					</button>
				))}
			</PopoverPanel>
		</Popover>
	);
};

export default ActionsPanel;
