import React from 'react';
import ComponentContainer from '../../../../components/ComponentContainer';
import CustomField from './components/CustomField';

const CustomFields = () => {
	return (
		<ComponentContainer title="Custom Fields">
			<div className="ctx-grid ctx-grid-cols-4">
				<CustomField />
			</div>
		</ComponentContainer>
	);
};

export default CustomFields;
