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
				<div className="ctx-border-2 ctx-shadow-sm ctx-border-white/15 ctx-p-1.5 ctx-rounded-lg ctx-bg-white/10">
					<img
						src={ctxFeedLogo}
						alt="CTX Feed Logo"
						className="ctx-h-8"
					/>
				</div>
				<p className="ctx-font-semibold ctx-text-3xl ctx-text-white ctx-drop-shadow-md">
					Reach More, Sell More with CTX Feed Pro.
				</p>
			</div>
			<div className="ctx-flex ctx-gap-4">
				<Button
					style={{
						backgroundImage:
							'linear-gradient(to right, #F39177 , #F61F48,#A758EE,#86C5FE)',
					}}
					size="large"
					className="ctx-px-4"
				>
					Upgrade to PRO
				</Button>
				<Button
					type="custom"
					className="ctx-bg-white ctx-text-gray-900 ctx-px-4"
					size="large"
				>
					Learn More
				</Button>
			</div>
		</div>
	);
};

export default TopBannerFree;
