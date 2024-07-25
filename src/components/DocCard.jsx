import React from 'react';
import cn from '../utils/cn';

const DocCard = ({ onClick, title, description, thumbnail }) => {
	return (
		<button
			onClick={onClick}
			className={cn(
				'ctx-flex ctx-text-left ctx-items-center ctx-gap-3 ctx-py-2'
			)}
		>
			<img
				src={thumbnail}
				alt={title}
				className={cn(
					'ctx-w-[116px] ctx-h-[66px] ctx-object-cover ctx-flex-shrink-0 ctx-rounded-lg'
				)}
			/>
			<div>
				<h2 className="ctx-font-bold ctx-text-gray-900 ctx-text-xs">
					{title}
				</h2>
				<p className="ctx-text-gray-700 ctx-text-xs">
					{description.substr(0, 84)}...
				</p>
			</div>
		</button>
	);
};

export default DocCard;
