import { DocumentPlusIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Button from '../../../components/Button';
import MainContainer from '../../../components/MainContainer';
import Buttons from './components/Buttons/Buttons';
import Checkboxes from './components/Checkboxes/Checkboxes';
import DisclosureTabs from './components/DisclosureTabs/DisclosureTabs';
import Inputs from './components/Inputs/Inputs';
import LinkButtons from './components/LinkButtons/LinkButtons';
import RadioInputs from './components/RadioInputs/RadioInputs';
import SearchSelects from './components/SearchSelects/SearchSelects';
import Selects from './components/Selects/Selects';
import Tables from './components/Tables/Tables';
import TabsComponent from './components/TabsComponent/TabsComponent';
import ToggleButtons from './components/ToggleButtons/ToggleButtons';
import ToggleSwitches from './components/ToggleSwitches/ToggleSwitches';
import TopBanners from './components/TopBanners/TopBanners';

const Common = () => {
	return (
		<div className="ctx-mt-4 ctx-font-sans ctx-space-y-8 ctx-mr-4">
			<MainContainer
				title="Manage Feed"
				rightContent={
					<Button
						icon={
							<DocumentPlusIcon className="ctx-size-4 ctx-text-white" />
						}
						size="large"
					>
						Make Feed
					</Button>
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
		</div>
	);
};

export default Common;
