import React from 'react';
import cn from '../utils/cn';

const Label = ({ htmlFor = '', children, className = '' }) => {
	return (
		<label
			htmlFor={htmlFor}
			className={cn(
				'ctx-mb-1 ctx-block ctx-font-medium ctx-text-xs ctx-text-gray-800',
				className
			)}
		>
			{children}
		</label>
	);
};

export default Label;
