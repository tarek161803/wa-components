import React, { useState } from 'react';
import ToggleSwitch from '../../../../../components/ToggleSwitch';
import ComponentContainer from '../../../../components/ComponentContainer';

const ToggleSwitches = () => {
	const [checked, setChecked] = useState(false);
	const handleChange = (value) => {
		setChecked(value);
	};
	return (
		<ComponentContainer title="Toggle Switches">
			<div>
				<ToggleSwitch checked={checked} onChange={handleChange} />
			</div>
		</ComponentContainer>
	);
};

export default ToggleSwitches;
