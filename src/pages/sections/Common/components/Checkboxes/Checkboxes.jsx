import React, { useState } from 'react';
import Checkbox from '../../../../../components/Checkbox';
import ComponentContainer from '../../../../components/ComponentContainer';

const Checkboxes = () => {
	const [checked, setChecked] = useState(false);
	const handleChange = () => {
		setChecked((prevState) => !prevState);
	};

	return (
		<ComponentContainer title="Checkboxes">
			<div>
				<Checkbox checked={checked} onChange={handleChange} />
			</div>
		</ComponentContainer>
	);
};

export default Checkboxes;
