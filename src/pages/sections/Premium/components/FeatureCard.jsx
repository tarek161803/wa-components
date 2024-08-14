import { PlayCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import importImage from '../../../../assets/premium/import.png';
import Button from '../../../../components/Button';

const FeatureCard = () => {
	return (
		<div>
			<div className="ctx-bg-blue-100 ctx-rounded-2xl ctx-h-96 ctx-p-3">
				<img
					className="ctx-object-cover ctx-h-full ctx-rounded-2xl"
					src={importImage}
					alt="Feature Card"
				/>
			</div>
			<div className="ctx-mt-5">
				<h3 className="ctx-text-center ctx-text-xl ctx-font-medium ctx-text-gray-900">
					Import File To Replicate Feed
				</h3>
				<p className="ctx-text-gray-600 ctx-text-sm ctx-text-center ctx-mt-2">
					Simply dummy text of the printing and typesetting industry.{' '}
					<br />
					Lorem Ipsum has been the industry standard dummy text ever
					since.
				</p>
				<div className="ctx-flex ctx-justify-center ctx-mt-3">
					<Button
						icon={
							<PlayCircleIcon className="ctx-size-5 ctx-text-white" />
						}
					>
						Learn More
					</Button>
				</div>
			</div>
		</div>
	);
};

export default FeatureCard;
