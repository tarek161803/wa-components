import React from 'react';
import cn from '../utils/cn';

const Input = ({
	type = 'text',
	placeholder = '',
	size = 'large',
	icon = '',
	className = '',
	value = '',
	onChange = () => {},
}) => {
	const sizeClass = {
		large: 'ctx-text-sm !ctx-py-[5px]',
		small: 'ctx-text-xs !ctx-py-[3px]',
	};

	return (
		<div className="ctx-flex ctx-items-center  ctx-shadow-gray-200 ctx-shadow-custom-sm ctx-rounded-lg">
			{icon && (
				<span className="ctx-px-2 -ctx-mr-8 ctx-z-10">{icon}</span>
			)}
			<input
				value={value}
				onChange={onChange}
				className={cn(
					'ctx-font-medium  placeholder:ctx-text-gray-600 !ctx-border-gray-100 !ctx-rounded-lg !ctx-px-2  ctx-flex-grow focus:!ctx-border-primary focus-visible:!ctx-outline-none !ctx-shadow-none',
					sizeClass[size],
					{
						'!ctx-pl-7': icon,
					},
					className
				)}
				type={type}
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
