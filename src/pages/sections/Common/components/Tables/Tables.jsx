import React from 'react';
import ComponentContainer from '../../../../components/ComponentContainer';
import MakeFeedTable from './components/MakeFeedTable';
import ManageFeedTable from './components/ManageFeedTable';

const Tables = () => {
	return (
		<ComponentContainer className="ctx-bg-white" title="Table">
			<div>
				<p className="ctx-mb-1 ctx-text-sm ctx-font-medium">
					Make Feed Table
				</p>
				<MakeFeedTable />
			</div>
			<div className="ctx-mt-6">
				<p className="ctx-mb-1 ctx-text-sm ctx-font-medium">
					Manage Feed Table
				</p>
				<ManageFeedTable />
			</div>
		</ComponentContainer>
	);
};

export default Tables;
