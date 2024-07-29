import React from 'react';
import Tabs from '../../../../../components/Tabs';
import ComponentContainer from '../../../../components/ComponentContainer';

const makeFeedTabs = [
	{ id: 1, title: 'Feed Config', component: <div>Feed Config</div> },
	{ id: 2, title: 'Filter', component: <div>Filter</div> },
	{ id: 3, title: 'Advanced Filter', component: <div>Advanced Filte</div> },
	{ id: 4, title: 'FTP/SFTP', component: <div>FTP/SFTP</div> },
];

const settingTabs = [
	{ id: 1, title: 'Custom Settings', component: <div>Custom Settings</div> },
	{ id: 2, title: 'Custom Fields', component: <div>Custom Fields</div> },
	{ id: 3, title: 'Version Control', component: <div>Version Control</div> },
];

const TabsComponent = () => {
	return (
		<ComponentContainer title="Tabs">
			<div className="ctx-space-y-8">
				<div>
					<p className="ctx-mb-1 ctx-text-sm ctx-font-medium">
						Common Tabs
					</p>
					<Tabs items={makeFeedTabs} />
				</div>
				<div>
					<p className="ctx-mb-1 ctx-text-sm ctx-font-medium">
						Settings Tabs
					</p>
					<Tabs settings items={settingTabs} />
				</div>
			</div>
		</ComponentContainer>
	);
};

export default TabsComponent;
