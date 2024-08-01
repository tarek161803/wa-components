import React from 'react';

const NoItemsInterface = ({
	title = '',
	description = '',
	actionComponent = null,
	videoId = '3r0cTMyUXQo',
}) => {
	return (
		<div className="ctx-bg-gray-100 ctx-rounded-2xl ctx-flex ctx-justify-center ctx-items-center ctx-p-16">
			<div className="ctx-w-[920px] ctx-grid ctx-gap-6 ctx-items-center ctx-grid-cols-2 ctx-bg-white ctx-rounded-2xl ctx-p-11">
				<div className="ctx-h-[230px] ctx-rounded-xl ctx-overflow-hidden">
					<iframe
						width="100%"
						height="230"
						src={`https://www.youtube.com/embed/${videoId}?si=aTuUN0giiegpAZah`}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
				<div className="ctx-space-y-6 -ctx-mt-1">
					<div className="ctx-space-y-3">
						<h3 className="ctx-text-xl ctx-text-gray-900 ctx-font-semibold">
							{title}
						</h3>
						<p className="ctx-text-sm ctx-text-gray-700">
							{description}
						</p>
					</div>
					{actionComponent && actionComponent}
				</div>
			</div>
		</div>
	);
};

export default NoItemsInterface;
