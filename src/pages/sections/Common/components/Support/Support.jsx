import React from 'react';
import supportImage from '../../../../../assets/svgs/support.svg';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import ComponentContainer from '../../../../components/ComponentContainer';

const Support = () => {
	return (
		<ComponentContainer title="Support Interface">
			<div className="ctx-p-16 ctx-grid ctx-grid-cols-12 ctx-gap-14">
				<div className="ctx-col-span-5 ctx-pt-5 ctx-pl-5">
					<div className="ctx-relative ctx-h-full">
						<div className="ctx-relative ctx-h-full ctx-bg-white ctx-rounded-3xl ctx-p-8 ctx-border ctx-border-primary ctx-z-20 ctx-flex ctx-justify-center ctx-items-center">
							<img
								src={supportImage}
								alt="Support Illustration"
							/>
						</div>
						<div className="ctx-bg-primary ctx-absolute ctx-h-full ctx-z-10 ctx-rounded-3xl ctx-w-full -ctx-top-5 -ctx-left-5 ctx-bottom-5 -ctx-right-10" />
					</div>
				</div>
				<div className="ctx-col-span-7 ctx-rounded-3xl ctx-bg-gray-50 ctx-p-8">
					<p className="ctx-text-3xl ctx-font-semibold ctx-text-gray-900">
						Need help? We&apos;re here for you!
					</p>
					<div className="ctx-mt-5">
						<label
							className="ctx-block ctx-text-base ctx-font-medium ctx-text-gray-800 ctx-mb-0.5"
							htmlFor="name"
						>
							Your Name
						</label>
						<Input
							className="ctx-bg-white"
							id="name"
							placeholder="Your name [required]"
						/>
					</div>
					<div className="ctx-mt-4">
						<label
							className="ctx-block ctx-text-base ctx-font-medium ctx-text-gray-800 ctx-mb-0.5"
							htmlFor="name"
						>
							Your Email
						</label>
						<Input
							className="ctx-bg-white"
							id="name"
							placeholder="emailaddress@email.com [required]"
						/>
					</div>
					<div className="ctx-mt-4">
						<label
							className="ctx-block ctx-text-base ctx-font-medium ctx-text-gray-800 ctx-mb-0.5"
							htmlFor="name"
						>
							Your Message
						</label>
						<textarea
							rows={4}
							className="ctx-bg-white ctx-block ctx-w-full ctx-shadow-custom-sm-light ctx-font-medium ctx-border !ctx-border-gray-100 !ctx-rounded-lg !ctx-px-2 placeholder:!ctx-text-gray-300  ctx-flex-grow focus:!ctx-border-primary focus-visible:!ctx-outline-none "
						/>
					</div>
					<div className="ctx-mt-4 ctx-flex ctx-justify-end">
						<Button className="ctx-w-20">Submit</Button>
					</div>
				</div>
			</div>
		</ComponentContainer>
	);
};

export default Support;
