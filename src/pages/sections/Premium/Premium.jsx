import React from 'react';

import advanceFeatures from '../../../../data/advanceFeatures';
import CTASection from './components/CTASection';
import FeatureWithVideo from './components/FeatureWithVideo';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Stats from './components/Stats';
import WorkFaster from './components/WorkFaster';

const Premium = () => {
	return (
		<div className="ctx-bg-white ctx-font-sans">
			<div className="ctx-container ctx-mx-auto ctx-px-10 ctx-py-10">
				<Hero />
				<Stats />
				<WorkFaster />
				<FeatureWithVideo data={advanceFeatures} />
				<WorkFaster />
				<FeatureWithVideo data={advanceFeatures} />
				<Pricing />
			</div>
			<CTASection />
		</div>
	);
};

export default Premium;
