import React from 'react';
import cn from '../utils/cn';

const LinkButton = ({
	onClick = () => {},
	children = '',
	className = '',
	size = 'medium',
	type = 'primary',
	icon = '',
	disabled = false,
}) => {
	const sizeClass = {
		small: 'ctx-text-[10px]',
		medium: 'ctx-text-xs',
		large: 'ctx-text-sm',
	};

	const typeClass = {
		primary: 'ctx-text-primary',
		destructive: 'ctx-text-red-600',
	};

	const iconClass = {
		primary: 'ctx-bg-primary',
		destructive: 'ctx-bg-red-600',
	};

	const iconSizeClass = {
		small: 'ctx-h-3 ctx-w-3 ctx-rounded-sm',
		medium: 'ctx-h-3.5 ctx-w-3.5 ctx-rounded',
		large: 'ctx-h-3.5 ctx-w-3.5 ctx-rounded',
	};

	return (
		<button
			disabled={disabled}
			className={cn(
				'ctx-font-semibold ctx-flex ctx-items-center ctx-gap-1',
				sizeClass[size],
				typeClass[type],
				className
			)}
			onClick={onClick}
		>
			{icon && (
				<span
					className={`ctx-flex ctx-justify-center ctx-items-center ${iconSizeClass[size]} ${iconClass[type]}`}
				>
					{icon}
				</span>
			)}
			{children}
		</button>
	);
};

export default LinkButton;
