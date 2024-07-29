import React from 'react';
import Buttons from './components/Buttons/Buttons';
import Checkboxes from './components/Checkboxes/Checkboxes';
import DisclosureTabs from './components/DisclosureTabs/DisclosureTabs';
import Inputs from './components/Inputs/Inputs';
import LinkButtons from './components/LinkButtons/LinkButtons';
import RadioInputs from './components/RadioInputs/RadioInputs';
import Selects from './components/Selects/Selects';
import TabsComponent from './components/TabsComponent/TabsComponent';
import ToggleButtons from './components/ToggleButtons/ToggleButtons';
import ToggleSwitches from './components/ToggleSwitches/ToggleSwitches';
import TopBanners from './components/TopBanners/TopBanners';

const Common = () => {
	return (
		<div className="ctx-mt-4 ctx-font-sans ctx-space-y-8 ctx-mr-4">
			<TabsComponent />
			<TopBanners />
			<DisclosureTabs />
			<ToggleButtons />
			<ToggleSwitches />
			<Checkboxes />
			<Selects />
			<Inputs />
			<RadioInputs />
			<Buttons />
			<LinkButtons />
		</div>
	);
};

export default Common;
