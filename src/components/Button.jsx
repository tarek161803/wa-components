import React from 'react';
import cn from '../utils/cn';

const Button = ({
	onClick = () => {},
	children = '',
	className = '',
	size = 'large',
	type = 'primary',
	icon = '',
	disabled = false,
	...props
}) => {
	const sizeClass = {
		small: `${type === 'outline' || type === 'destructive-outline' ? 'ctx-px-[5px] ctx-py-0.5' : 'ctx-px-1.5 ctx-py-[3px]'}   ctx-text-[10px] ctx-rounded ctx-shadow-custom-sm`,
		medium: `${type === 'outline' || type === 'destructive-outline' ? 'ctx-p-[7px]' : 'ctx-p-2'} ctx-text-xs`,
		large: `${type === 'outline' || type === 'destructive-outline' ? 'ctx-p-[9px]' : 'ctx-p-2.5'} ctx-text-sm`,
	};

	const typeClass = {
		custom: '',
		primary:
			'ctx-bg-gradient-to-r ctx-from-primary ctx-to-primary-light ctx-text-white',
		destructive: 'ctx-bg-red-600 ctx-text-white',
		outline: 'ctx-bg-white ctx-border ctx-border-primary ctx-text-gray-800',
		'destructive-outline':
			'ctx-border ctx-bg-white ctx-border-red-600 ctx-text-gray-800',
	};

	return (
		<button
			{...props}
			disabled={disabled}
			className={cn(
				'ctx-font-semibold ctx-rounded-lg ctx-shadow-custom ctx-flex ctx-items-center ctx-justify-center ctx-gap-1.5 ctx-font-sans ',
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
