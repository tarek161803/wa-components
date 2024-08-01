import React from 'react';
import cn from '../utils/cn';

const ToggleButton = ({ buttons, active, onChange }) => {
	return (
		<div className="ctx-flex ctx-shadow-custom-sm ctx-rounded-lg">
			{buttons.map((button, index) => (
				<button
					onClick={() => onChange(button)}
					className={cn(
						'ctx-text-sm first:ctx-rounded-l-lg last:ctx-rounded-r-lg ctx-border ctx-border-primary ctx-py-[5px] ctx-px-3.5 ctx-bg-white ctx-text-gray-900 ctx-font-medium ',
						{
							'ctx-bg-gradient-to-r ctx-from-primary ctx-to-primary-light ctx-text-white':
								button.value === active.value,
							'ctx-border-l-0': index !== 0,
						}
					)}
					key={button.value}
				>
					{button.title}
				</button>
			))}
		</div>
	);
};

export default ToggleButton;
