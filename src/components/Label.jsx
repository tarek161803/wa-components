import React from 'react';

const Label = ({ htmlFor = '', children }) => {
	return (
		<label
			htmlFor={htmlFor}
			className="ctx-mb-1 ctx-block ctx-font-medium ctx-text-xs ctx-text-gray-800"
		>
			{children}
		</label>
	);
};

export default Label;
