import React from 'react';
import ComponentContainer from '../../../../components/ComponentContainer';
import AttributeMapping from './Components/AttributeMapping/AttributeMapping';
import DynamicAttribute from './Components/DynamicAttribute/DynamicAttribute';

const CreateModals = () => {
	return (
		<ComponentContainer title="Create Modal">
			<div className="ctx-flex ctx-gap-8">
				<AttributeMapping />
				<DynamicAttribute />
			</div>
		</ComponentContainer>
	);
};

export default CreateModals;
