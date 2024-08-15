import React from 'react';
import Button from './Button';

const ToolTip = () => {
	return (
		<div className="ctx-relative ctx-bg-white ctx-rounded-2xl ctx-w-[440px] ">
			<div className="ctx-p-4">
				<h3 className="ctx-font-semibold ctx-text-gray-900 ctx-text-lg">
					Thank you for install CTX Product Feed. 🙂
				</h3>
				<p className="ctx-font-normal ctx-text-gray-900 ctx-text-base">
					If you want to set-up your product feed to enhance your
					e-commerce store, then you can do it by simply clicking
					here.
				</p>
			</div>
			<div className="ctx-bg-gray-50 ctx-rounded-b-2xl ctx-p-4">
				<div className="ctx-flex ctx-justify-between ctx-items-center">
					<button className="ctx-text-sm ctx-font-semibold ctx-text-red-500">
						Skip All
					</button>
					<div className="ctx-flex ctx-gap-3">
						<Button
							size="medium"
							type="outline"
							className="ctx-w-24"
						>
							Back
						</Button>
						<Button size="medium" className="ctx-w-24">
							Next
						</Button>
					</div>
				</div>
			</div>
			<div className="ctx-absolute ctx-size-8 ctx-bg-white -ctx-top-4 ctx-right-10 ctx-rotate-45" />
		</div>
	);
};

export default ToolTip;
