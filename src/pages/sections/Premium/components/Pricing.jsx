import { CheckCircleIcon } from '@heroicons/react/24/outline';
import React from 'react';
import Button from '../../../../components/Button';
import ToggleButton from '../../../../components/ToggleButton';
import cn from '../../../../utils/cn';

const pricingData = [
	{
		id: 1,
		siteCount: 1,
		price: 119,
		popular: false,
		features: [
			'No Questions asked.',
			'30 Days Money back guarantee.',
			'Industry Expert support team ready to help.',
		],
	},
	{
		id: 2,
		siteCount: 5,
		popular: true,
		price: 199,
		features: [
			'No Questions asked.',
			'30 Days Money back guarantee.',
			'Industry Expert support team ready to help.',
		],
	},
	{
		id: 3,
		siteCount: 10,
		popular: false,
		price: 229,
		features: [
			'No Questions asked.',
			'30 Days Money back guarantee.',
			'Industry Expert support team ready to help.',
		],
	},
];

const Pricing = () => {
	return (
		<div className="ctx-mt-8">
			<h3 className="ctx-text-4xl ctx-font-bold ctx-leading-10 ctx-text-gray-900 ctx-text-center">
				Choose your <br />
				<span className="ctx-text-primary">best Pricing plan</span>
			</h3>
			<p className="ctx-text-sm ctx-text-gray-700 ctx-mt-4 ctx-text-center">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has <br /> been the industry standard
				dummy text ever since the 1500s, when an unknown printer.
			</p>
			<div className="ctx-p-8 ctx-rounded-xl ctx-bg-gray-100 ctx-mt-12">
				<div className="ctx-flex ctx-justify-center -ctx-translate-y-[53px]">
					<div className="ctx-flex ctx-items-center ctx-p-1.5 ctx-gap-2 ctx-bg-white  ctx-rounded-xl ctx-border ctx-border-gray-200">
						<p className="ctx-font-medium ctx-text-sm ctx-text-gray-800">
							Check details as per the timeline
						</p>
						<ToggleButton
							buttons={[
								{ title: 'Yearly', value: 'yearly' },
								{ title: 'Life Time', value: 'life-time' },
							]}
							active={{ title: 'Yearly', value: 'yearly' }}
						/>
					</div>
				</div>

				<div className="ctx-flex ctx-gap-8">
					{pricingData.map((item) => (
						<div
							className={cn(
								'ctx-relative ctx-rounded-xl ctx-flex-grow ctx-border ctx-border-white ctx-bg-white ctx-p-4 ctx-h-52 ctx-flex ctx-flex-col ctx-justify-between',
								{
									'ctx-border-primary': item.popular,
								}
							)}
							key={item.id}
						>
							{item.popular && (
								<div className="ctx-flex">
									<div className="ctx-font-bold ctx-bg-primary/20 ctx-py-1 ctx-px-1.5 ctx-rounded ctx-border ctx-border-primary ctx-uppercase ctx-text-primary ctx-text-[10px]">
										🔥 Most Popular
									</div>
								</div>
							)}
							<h2 className="ctx-font-semibold ctx-text-[22px] ctx-text-gray-900">
								{item.siteCount} Site Configuration
							</h2>

							<ul
								className={`${item.popular ? 'ctx-space-y-1' : 'ctx-space-y-2.5'}`}
							>
								{item.features.map((feature, index) => (
									<li
										className="ctx-flex ctx-items-center ctx-gap-1 ctx-text-sm ctx-text-gray-700"
										key={index}
									>
										<CheckCircleIcon className="ctx-size-4 ctx-text-gray-700" />
										{feature}
									</li>
								))}
							</ul>
							<Button
								type={item.popular ? 'primary' : 'outline'}
								size="medium"
								className="ctx-w-24"
							>
								Add To Cart
							</Button>

							<div className="ctx-absolute ctx-h-20 ctx-w-16 -ctx-top-3 ctx-right-3">
								<div
									className={cn(
										'ctx-price-tag ctx-bg-[#dbeafe]  ctx-h-full  ctx-text-primary ctx-flex ctx-flex-col ctx-items-center ctx-justify-center ',
										{
											'ctx-bg-primary ctx-text-white':
												item.popular,
										}
									)}
								>
									<p className="ctx-text-xl ctx-font-semibold ctx-leading-3 ctx-mb-1.5">
										${item.price}
									</p>
									<p>Yearly</p>
								</div>
								<div className="ctx-price-tag-triangle ctx-h-[11px] ctx-w-[9px]  ctx-bg-primary ctx-z-20 ctx-absolute ctx-top-0 -ctx-left-[9px]"></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Pricing;
