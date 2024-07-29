import React from 'react';
import cn from '../../utils/cn';
const ComponentContainer = ({ title = '', children, className }) => {
	return (
		<div>
			<p className="ctx-mb-1 ctx-text-base ctx-font-medium ctx-capitalize ctx-select-none">
				{title}
			</p>
			<div
				className={cn(
					'ctx-border ctx-border-gray-300 ctx-p-4 ctx-rounded-lg',
					className
				)}
			>
				{children}
			</div>
		</div>
	);
};

export default ComponentContainer;
