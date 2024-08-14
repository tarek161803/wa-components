import React from 'react';
import cn from '../utils/cn';

const Input = ({
	id = '',
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
		<div className="ctx-flex ctx-items-center tx-bg-red-500 ctx-shadow-custom-sm-light ctx-rounded-lg">
			{icon && (
				<span className="ctx-px-2 -ctx-mr-8 ctx-z-10">{icon}</span>
			)}
			<input
				id={id}
				value={value}
				onChange={onChange}
				className={cn(
					'ctx-font-medium ctx-border  !ctx-border-gray-100 !ctx-rounded-lg !ctx-px-2 placeholder:!ctx-text-gray-300  ctx-flex-grow focus:!ctx-border-primary focus-visible:!ctx-outline-none !ctx-shadow-none',
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
