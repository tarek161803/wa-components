import React from 'react';
import ctxFeedLogo from '../assets/svgs/ctx_feed_pro.svg';
import Button from './Button';
const TopBannerFree = () => {
	return (
		<div
			id="tobBannerFree"
			className="ctx-bg-white ctx-flex ctx-justify-between ctx-items-center ctx-rounded-lg ctx-p-2"
		>
			<div className="ctx-flex ctx-items-center ctx-gap-6">
				<div className="ctx-border-2 ctx-border-white/15 ctx-p-1.5 ctx-rounded-lg ctx-bg-white/10">
					<img
						src={ctxFeedLogo}
						alt="CTX Feed Logo"
						className="ctx-h-8"
					/>
				</div>
				<p className="ctx-font-semibold ctx-text-3xl ctx-text-white ctx-drop-shadow">
					Reach More, Sell More with CTX Feed Pro.
				</p>
			</div>
			<div className="ctx-flex ctx-gap-4">
				<Button size="large" className="ctx-from-red-700">
					Upgrade to PRO
				</Button>
				<Button
					type="custom"
					className="ctx-bg-white ctx-text-gray-900"
					size="large"
				>
					Learn More
				</Button>
			</div>
		</div>
	);
};

export default TopBannerFree;
