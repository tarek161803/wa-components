import React from 'react';
import ComponentContainer from '../../../../components/ComponentContainer';
import ManageFeedTable from './components/ManageFeedTable';

const Tables = () => {
	return (
		<ComponentContainer className="ctx-bg-white" title="Table">
			<div>
				<p className="ctx-mb-1 ctx-text-sm ctx-font-medium">
					Manage Feed Table
				</p>
				<ManageFeedTable />
			</div>
		</ComponentContainer>
	);
};

export default Tables;
