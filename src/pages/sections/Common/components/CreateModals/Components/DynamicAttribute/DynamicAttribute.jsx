import { PlusCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Button from '../../../../../../../components/Button';

const DynamicAttribute = () => {
	return (
		<div>
			<Button
				icon={<PlusCircleIcon className="ctx-size-5 ctx-text-white" />}
			>
				New Dynamic Attribute
			</Button>
		</div>
	);
};

export default DynamicAttribute;
