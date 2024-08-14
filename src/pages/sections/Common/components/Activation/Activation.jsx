import React from 'react';
import Button from '../../../../../components/Button';
import Input from '../../../../../components/Input';
import ToggleButton from '../../../../../components/ToggleButton';
import ComponentContainer from '../../../../components/ComponentContainer';

const Activation = () => {
	return (
		<ComponentContainer title="Activation Interface">
			<p className="ctx-text-lg ctx-font-semibold ctx-text-gray-800">
				Active CTX Feed Pro by your license key to get professional
				support and automatic update from your WordPress dashboard.
			</p>
			<div className="ctx-mt-3 ctx-flex ctx-gap-4 ctx-items-start">
				<div className="ctx-w-[720px]">
					<div className="ctx-bg-gray-50 ctx-p-5 ctx-rounded-2xl">
						<div>
							<label
								className="ctx-block ctx-mb-1.5 ctx-text-base ctx-font-medium ctx-text-gray-800"
								htmlFor="activation-key"
							>
								Activation Key
							</label>
							<Input
								id="activation-key"
								placeholder="Enter Your License Activation Key"
							/>
						</div>
						<div className="ctx-mt-5">
							<p className="ctx-block ctx-mb-1.5 ctx-text-base ctx-font-medium ctx-text-gray-800">
								Select Time Period
							</p>

							<div className="ctx-flex">
								<ToggleButton
									buttons={[
										{ title: 'Yearly', value: 'yearly' },
										{
											title: 'Life Time',
											value: 'lifetime',
										},
									]}
									active={{
										title: 'Yearly',
										value: 'yearly',
									}}
								/>
							</div>
						</div>
						<div className="ctx-mt-5">
							<p className="ctx-block ctx-mb-1.5 ctx-text-base ctx-font-medium ctx-text-gray-800">
								Select License Type
							</p>

							<div className="ctx-flex">
								<ToggleButton
									buttons={[
										{
											title: 'Single Site',
											value: 'single',
										},
										{
											title: 'Five Site',
											value: 'five',
										},
										{
											title: 'Ten Site',
											value: 'ten',
										},
									]}
									active={{
										title: 'Single Site',
										value: 'single',
									}}
								/>
							</div>
						</div>
					</div>

					<div className="ctx-mt-5 ctx-flex ctx-gap-4">
						<Button className="ctx-w-40">Active License</Button>
						<Button className="ctx-w-40" type="outline">
							Mange License
						</Button>
					</div>
				</div>
				<div className="ctx-w-52 ctx-bg-gray-50 ctx-rounded-lg ctx-p-4">
					<p className="ctx-text-lg ctx-font-medium ctx-text-gray-800 ">
						Current Condition
					</p>
					<p className="ctx-text-sm ctx-text-gray-700 ctx-font-medium ctx-mt-2">
						Activation Status:
						<span className="ctx-text-red-500"> Inactive</span>
					</p>
					<p className="ctx-text-sm ctx-text-gray-700 ctx-font-medium ctx-mt-1.5">
						Activation Ongoing:
						<span className="ctx-text-green-500"> 2</span>
					</p>
					<p className="ctx-text-sm ctx-text-gray-700 ctx-font-medium ctx-mt-1.5">
						Activation Remaining:
						<span className="ctx-text-green-500"> 3</span>
					</p>
					<p className="ctx-text-sm ctx-text-gray-700 ctx-font-medium ctx-mt-1.5">
						Automatic Update:
						<span className="ctx-text-green-500"> Enable</span>
					</p>
				</div>
			</div>
		</ComponentContainer>
	);
};

export default Activation;
