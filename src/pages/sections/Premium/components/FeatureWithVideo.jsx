import React, { useState } from 'react';
import cn from '../../../../utils/cn';

const FeatureWithVideo = ({ data }) => {
	const [active, setActive] = useState(0);
	return (
		<div className="ctx-grid ctx-grid-cols-2 ctx-items-center ctx-gap-4 ctx-bg-gray-100 ctx-rounded-xl ctx-p-10 ctx-mt-8">
			<div>
				{data.map((item, index) => (
					<button
						onClick={() => setActive(index)}
						key={item.id}
						className={cn('ctx-text-left ctx-p-4 ctx-rounded-xl', {
							'ctx-bg-white': active === index,
						})}
					>
						<h3 className="ctx-font-semibold ctx-text-lg ctx-gray-900">
							{item.title}
						</h3>
						<p className="ctx-text-sm ctx-text-gray-700">
							{item.subtitle}
						</p>
					</button>
				))}
			</div>
			<div className="ctx-bg-blue-100 ctx-rounded-xl ctx-p-4 ctx-h-96">
				<img
					className="ctx-object-cover ctx-h-full ctx-w-full"
					src={data[active].images[0]}
					alt="Advance Feature"
				/>
			</div>
		</div>
	);
};

export default FeatureWithVideo;
