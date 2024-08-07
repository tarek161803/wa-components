import {
	ArrowDownOnSquareIcon,
	DocumentPlusIcon,
} from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import Button from '../../../components/Button';
import MainContainer from '../../../components/MainContainer';
import ImportModal from '../../../components/ManageFeed/ImportModal';
import ChatBoxes from './ChatBoxes/ChatBoxes';
import Buttons from './components/Buttons/Buttons';
import Checkboxes from './components/Checkboxes/Checkboxes';
import CreateModals from './components/CreateModals/CreateModals';
import DisclosureTabs from './components/DisclosureTabs/DisclosureTabs';
import Inputs from './components/Inputs/Inputs';
import LinkButtons from './components/LinkButtons/LinkButtons';
import NoItems from './components/NoItems/NoItems';
import RadioInputs from './components/RadioInputs/RadioInputs';
import SearchSelects from './components/SearchSelects/SearchSelects';
import Selects from './components/Selects/Selects';
import Tables from './components/Tables/Tables';
import TabsComponent from './components/TabsComponent/TabsComponent';
import ToggleButtons from './components/ToggleButtons/ToggleButtons';
import ToggleSwitches from './components/ToggleSwitches/ToggleSwitches';
import TopBanners from './components/TopBanners/TopBanners';
import GeneratingFeeds from './GeneratingFeeds/GeneratingFeeds';

const Common = () => {
	const [importModalOpen, setImportModalOpen] = useState(false);

	const handleImportModal = () => {
		setImportModalOpen(true);
	};

	return (
		<div className="ctx-mt-4 ctx-font-sans ctx-space-y-8 ctx-mr-4">
			<CreateModals />
			<GeneratingFeeds />
			<ChatBoxes />
			<NoItems />
			<MainContainer
				title="Manage Feed"
				rightContent={
					<div className="ctx-flex ctx-gap-3">
						<Button
							onClick={handleImportModal}
							icon={
								<ArrowDownOnSquareIcon className="ctx-size-4 ctx-text-white" />
							}
							size="large"
						>
							Import
						</Button>
						<Button
							icon={
								<DocumentPlusIcon className="ctx-size-4 ctx-text-white" />
							}
							size="large"
						>
							Make Feed
						</Button>
					</div>
				}
			>
				<div className="ctx-h-44">Page Content</div>
			</MainContainer>
			<Tables />
			<TabsComponent />
			<TopBanners />
			<DisclosureTabs />
			<ToggleButtons />
			<ToggleSwitches />
			<Checkboxes />
			<SearchSelects />
			<Selects />
			<Inputs />
			<RadioInputs />
			<Buttons />
			<LinkButtons />

			<ImportModal
				isOpen={importModalOpen}
				setIsOpen={setImportModalOpen}
			/>
		</div>
	);
};

export default Common;
