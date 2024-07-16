import React, { useState } from 'react';
import ToggleButton from '../../../../../components/ToggleButton';
import ComponentContainer from '../../../../components/ComponentContainer';

const buttons = [
	{ title: 'Attribute', value: 'attribute' },
	{ title: 'Text', value: 'text' },
	{ title: 'Class', value: 'class' },
];

const buttonsLess = [
	{ title: 'Attribute', value: 'attribute' },
	{ title: 'Text', value: 'text' },
];

const ToggleButtons = () => {
	const [active, setActive] = useState(buttons[0]);

	const handleChange = (value) => {
		setActive(value);
	};

	return (
		<ComponentContainer title="Toggle Buttons">
			<div className="ctx-flex ctx-gap-10">
				<ToggleButton
					active={active}
					onChange={handleChange}
					buttons={buttons}
				/>

				<ToggleButton
					active={active}
					onChange={handleChange}
					buttons={buttonsLess}
				/>
			</div>
		</ComponentContainer>
	);
};

export default ToggleButtons;
