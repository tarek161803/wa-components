import React from 'react';
import ctxFeedLogo from '../assets/svgs/ctx_feed_pro.svg';
import Button from './Button';
const TopBannerPro = () => {
	return (
		<div className="ctx-bg-white ctx-flex ctx-justify-between ctx-items-center ctx-rounded-lg ctx-px-3 ctx-py-4">
			<div className="ctx-flex ctx-items-center ctx-gap-6">
				<img
					src={ctxFeedLogo}
					alt="CTX Feed Logo"
					className="ctx-h-8"
				/>
				<p className="ctx-font-semibold ctx-text-lg ctx-text-gray-900">
					Have any questions? Feel free to contact us.
				</p>
			</div>
			<div>
				<Button size="large" type="outline">
					Learn More
				</Button>
			</div>
		</div>
	);
};

export default TopBannerPro;
