import React from 'react';
import status from '../../../../../../data/status';
import StatusDisclosure from '../../../../../components/StautsDisclosure';
import ComponentContainer from '../../../../components/ComponentContainer';

const StatusDisclosures = () => {
	return (
		<ComponentContainer className="ctx-bg-white" title="Status Disclosure">
			<div className="ctx-space-y-4">
				{Object.keys(status).map((item) => (
					<StatusDisclosure
						key={item}
						title={item}
						data={status[item]}
					/>
				))}
			</div>
		</ComponentContainer>
	);
};

export default StatusDisclosures;
