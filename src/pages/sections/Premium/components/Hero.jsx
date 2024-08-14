import React from 'react';
import heroImage from '../../../../assets/premium/hero.png';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';

const Hero = () => {
	return (
		<div className="ctx-grid ctx-gap-4d ctx-grid-cols-12 ctx-items-center">
			<div className="ctx-col-span-6">
				<h2 className="ctx-flex ctx-gap-3 ctx-leading-[44px] ctx-flex-col ctx-capitalize ctx-text-[44px] ctx-font-bold ctx-text-gray-900">
					Discover powerful
					<span className="ctx-text-primary">
						product feed manager
					</span>
					For Your E-commerce Store
				</h2>
				<p className="ctx-text-base ctx-text-gray-600 ctx-pr-8 ctx-mt-3">
					Lorem Ipsum has been the industry standard dummy text ever
					since the 1500s, when an unknown printer took a galley of
					type and scrambled it to make a type specimen book.
				</p>
				<div className="ctx-mt-5 ctx-w-80">
					<Input
						placeholder="Your Email"
						className="placeholder:!ctx-text-gray-600 !ctx-bg-gray-50 "
					/>
					<p className="ctx-mt-1.5 ctx-text-gray-600 ctx-text-sm">
						⚡️ Get latest updates and tips & tricks!
					</p>
					<div className="ctx-flex ctx-gap-4 ctx-mt-2.5">
						<Button className="ctx-flex-grow">
							Subscribe Newsletter
						</Button>
						<Button className="ctx-flex-grow" type="outline">
							Contact Support
						</Button>
					</div>
				</div>
			</div>
			<div className="ctx-col-span-6">
				<div>
					<img src={heroImage} alt="Mange Feed" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
