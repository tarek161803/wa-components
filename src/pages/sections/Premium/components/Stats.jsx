import React from 'react';
import userIcon from '../../../../assets/premium/stats_1.svg';
import reviewIcon from '../../../../assets/premium/stats_2.svg';
import totalIcon from '../../../../assets/premium/stats_3.svg';
import monthlyIcon from '../../../../assets/premium/stats_4.svg';

const statsData = [
	{ id: 1, title: '120K+', subtitle: 'Active User', icon: userIcon },
	{ id: 2, title: '664+', subtitle: 'User Review', icon: reviewIcon },
	{ id: 3, title: '550K+', subtitle: 'Total Download', icon: totalIcon },
	{ id: 4, title: '55K+', subtitle: 'Monthly Download', icon: monthlyIcon },
];

const Stats = () => {
	return (
		<div className="ctx-bg-gray-50 ctx-border ctx-border-gray-100 ctx-rounded-3xl ctx-p-8 ctx-flex ctx-gap-12">
			{statsData.map((item) => (
				<div
					key={item.id}
					className="ctx-flex ctx-items-center ctx-gap-4 ctx-bg-white ctx-rounded-xl ctx-flex-grow ctx-px-4 ctx-py-3"
				>
					<img
						className="ctx-size-12"
						src={item.icon}
						alt="Stats Icon"
					/>
					<div>
						<h3 className="ctx-text-3xl ctx-font-bold ctx-text-gray-900">
							{item.title}
						</h3>
						<p className="ctx-font-normal ctx-text-gray-900 ctx-text-sm">
							{item.subtitle}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Stats;
