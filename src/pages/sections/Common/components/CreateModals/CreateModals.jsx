import React from 'react';
import ComponentContainer from '../../../../components/ComponentContainer';
import AttributeMapping from './Components/AttributeMapping/AttributeMapping';
import DynamicAttribute from './Components/DynamicAttribute/DynamicAttribute';
import WpOptions from './Components/WpOptions/WpOptions';

const CreateModals = () => {
	return (
		<ComponentContainer title="Create Modal">
			<div className="ctx-flex ctx-gap-8">
				<AttributeMapping />
				<DynamicAttribute />
				<WpOptions />
			</div>
		</ComponentContainer>
	);
};

export default CreateModals;
