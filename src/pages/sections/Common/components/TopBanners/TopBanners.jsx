import React from 'react';
import TopBannerFree from '../../../../../components/TopBannerFree';
import TopBannerPro from '../../../../../components/TopBannerPro';
import ComponentContainer from '../../../../components/ComponentContainer';

const TopBanners = () => {
	return (
		<ComponentContainer title="Top Banners">
			<div className="ctx-space-y-3">
				<div className="ctx-space-y-1">
					<p className="ctx-text-sm ctx-font-medium">Pro Banner</p>
					<TopBannerPro />
				</div>
				<div className="ctx-space-y-1">
					<p className="ctx-text-sm ctx-font-medium">Free Banner</p>
					<TopBannerFree />
				</div>
			</div>
		</ComponentContainer>
	);
};

export default TopBanners;
