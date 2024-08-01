import React from 'react';
import GeneratingFeed from '../../../../components/GeneratingFeed';
import ComponentContainer from '../../../components/ComponentContainer';

const GeneratingFeeds = () => {
	return (
		<ComponentContainer title="Generating Feed">
			<div className="ctx-bg-white ctx-py-20 ctx-flex ctx-justify-center">
				<GeneratingFeed />
			</div>
		</ComponentContainer>
	);
};

export default GeneratingFeeds;
