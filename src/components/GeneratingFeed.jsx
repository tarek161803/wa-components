import { CheckIcon } from '@heroicons/react/24/solid';
import React from 'react';
import cogsIcon from '../assets/svgs/cogs_icon.svg';
const GeneratingFeed = () => {
	return (
		<div className="ctx-flex ctx-flex-col ctx-items-center">
			<img
				className="ctx-w-24 ctx-mb-5"
				src={cogsIcon}
				alt="Loading Icon"
			/>
			<p className="ctx-font-semibold ctx-text-gray-900 ctx-text-lg">
				Generating feed, please wait a while...
			</p>

			<div className=" ctx-w-96 ctx-mt-3 ctx-mb-5 ctx-flex ctx-items-center ctx-gap-2">
				<div className="ctx-h-[30px] ctx-bg-gray-100 ctx-p-1 ctx-rounded-full ctx-flex-grow">
					<div className="ctx-h-[22px] ctx-bg-gray-50 ctx-border ctx-border-gray-200 ctx-rounded-full ctx-p-0.5">
						<div className="color-progress ctx-h-4 ctx-rounded-full ctx-w-32"></div>
					</div>
				</div>
				<p className="ctx-text-sm ctx-font-medium ctx-text-gray-900">
					100%
				</p>
			</div>

			<div className="ctx-space-y-3">
				<div className="ctx-flex ctx-items-center ctx-gap-2">
					<div className="ctx-size-5 ctx-rounded-full ctx-bg-success ctx-flex ctx-justify-center ctx-items-center">
						<CheckIcon className="ctx-size-3 ctx-text-white" />
					</div>
					<p className="ctx-text-base ctx-text-gray-800">
						Checked Writing Access
					</p>
				</div>
				<div className="ctx-flex ctx-items-center ctx-gap-2">
					<div className="ctx-animate-spin ctx-size-5 ctx-rounded-full ctx-border-[3px] ctx-border-t-primary" />
					<p className="ctx-text-base ctx-text-gray-800">
						Saving Feed Configuration
					</p>
				</div>
				<div className="ctx-flex ctx-items-center ctx-gap-2">
					<div className="ctx-size-5 ctx-rounded-full ctx-border-[3px]" />
					<p className="ctx-text-base ctx-text-gray-800">
						Saving Feed Configuration
					</p>
				</div>
				<div className="ctx-flex ctx-items-center ctx-gap-2">
					<div className="ctx-size-5 ctx-rounded-full ctx-border-[3px]" />
					<p className="ctx-text-base ctx-text-gray-800">
						Processing Batch
					</p>
				</div>
				<div className="ctx-flex ctx-items-center ctx-gap-2">
					<div className="ctx-size-5 ctx-rounded-full ctx-border-[3px]" />

					<p className="ctx-text-base ctx-text-gray-800">
						Generating Feed
					</p>
				</div>
			</div>
		</div>
	);
};

export default GeneratingFeed;
