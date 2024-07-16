import React, { useState } from 'react';
import RadioInput from '../../../../../components/RadioInput';
import ComponentContainer from '../../../../components/ComponentContainer';

const RadioInputs = () => {
	const [selectedOption, setSelectedOption] = useState('red');

	const handleRadioChange = (e) => {
		setSelectedOption(e.target.value);
	};

	return (
		<ComponentContainer title="Radio Buttons">
			<div className="ctx-flex ctx-gap-6">
				<RadioInput
					size="large"
					name="option"
					value="red"
					label="Red"
					checked={selectedOption === 'red'}
					onChange={handleRadioChange}
				/>
				<RadioInput
					size="medium"
					name="option"
					value="orange"
					label="Orange"
					checked={selectedOption === 'orange'}
					onChange={handleRadioChange}
				/>
				<RadioInput
					size="small"
					name="option"
					value="blue"
					label="Blue"
					checked={selectedOption === 'blue'}
					onChange={handleRadioChange}
				/>
			</div>
		</ComponentContainer>
	);
};

export default RadioInputs;
