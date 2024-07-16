import React from 'react';
import ButtonsContainer from './components/ButtonsContainer';

const Buttons = () => {
	return (
		<div className="ctx-space-y-4">
			<ButtonsContainer type="primary" iconColor="white" />
			<ButtonsContainer type="destructive" iconColor="white" />
			<ButtonsContainer type="outline" iconColor="gray-800" />
			<ButtonsContainer type="destructive-outline" iconColor="gary-800" />
		</div>
	);
};

export default Buttons;
