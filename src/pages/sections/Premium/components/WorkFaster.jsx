import React from 'react';
import FeatureCard from './FeatureCard';

const WorkFaster = () => {
	return (
		<div className="ctx-mt-8">
			<h3 className="ctx-text-4xl ctx-font-bold ctx-leading-10 ctx-text-gray-900 ctx-text-center">
				<span className="ctx-text-primary">Work 10x faster, </span>
				efficiently <br /> and save your time
			</h3>
			<p className="ctx-text-sm ctx-text-gray-700 ctx-mt-4 ctx-text-center">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has <br /> been the industry standard
				dummy text ever since the 1500s, when an unknown printer.
			</p>
			<div className="ctx-grid ctx-grid-cols-2 ctx-gap-6 ctx-mt-6">
				<FeatureCard />
				<FeatureCard />
			</div>
		</div>
	);
};

export default WorkFaster;
