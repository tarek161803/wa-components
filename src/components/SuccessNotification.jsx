import React from 'react';

const SuccessNotification = ({ message, ...props }) => {
	return (
		<div className="ctx-flex ctx-gap-2 ctx-items-center ctx-text-white ctx-mi">
			<props.icon className="ctx-size-4" />
			<p className="ctx-font-medium ctx-text-base">{message}</p>
		</div>
	);
};

export default SuccessNotification;
