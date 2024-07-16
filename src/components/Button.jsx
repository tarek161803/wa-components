import React from 'react';
import cn from '../utils/cn';

const Button = ({
	onClick = () => {},
	children = '',
	className = '',
	size = 'medium',
	type = 'primary',
	icon = '',
	disabled = false,
}) => {
	const sizeClass = {
		small: 'ctx-px-1.5 ctx-py-[3px] ctx-text-[10px] ctx-rounded ctx-shadow-custom-sm',
		medium: 'ctx-px-2.5 ctx-py-2.5 ctx-text-xs',
		large: 'ctx-p-2.5 ctx-text-sm',
	};

	const typeClass = {
		primary:
			'ctx-bg-gradient-to-r ctx-from-primary ctx-to-primary-light ctx-text-white',
		destructive: 'ctx-bg-red-600 ctx-text-white',
		outline: 'ctx-border ctx-border-primary ctx-text-gray-800',
		'destructive-outline':
			'ctx-border ctx-border-red-600 ctx-text-gray-800',
	};

	return (
		<button
			disabled={disabled}
			className={cn(
				'ctx-font-semibold ctx-rounded-lg ctx-shadow-custom ctx-flex ctx-items-center ctx-gap-1.5 ctx-font-sans ',
				sizeClass[size],
				typeClass[type],
				className
			)}
			onClick={onClick}
		>
			{icon && icon} {children}
		</button>
	);
};

export default Button;
