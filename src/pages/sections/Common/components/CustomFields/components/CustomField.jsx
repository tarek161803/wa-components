import React from 'react';
import ToggleSwitch from '../../../../../../components/ToggleSwitch';

const CustomField = () => {
	return (
		<div className="ctx-rounded-lg ctx-overflow-hidden">
			<p className="ctx-bg-gray-200 ctx-font-semibold ctx-text-base ctx-text-gray-900 ctx-px-4 ctx-py-2">
				Custom Fields
			</p>
			{[0, 1, 2, 3, 4].map((item) => (
				<div
					key={item}
					className=" ctx-flex ctx-justify-between ctx-items-center odd:ctx-bg-gray-100 even:ctx-bg-gray-50 ctx-p-4"
				>
					<p className="ctx-text-base ctx-text-gray-700">
						Custom Field {item}
					</p>
					<ToggleSwitch />
				</div>
			))}
		</div>
	);
};

export default CustomField;
