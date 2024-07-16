import React from 'react';
import Input from '../../../../../components/Input';
import ComponentContainer from '../../../../components/ComponentContainer';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Inputs = () => {
	return (
		<ComponentContainer title="Inputs">
			<div className="ctx-flex ctx-gap-16">
				<div className="ctx-flex ctx-flex-col ctx-gap-3 ctx-w-72">
					<Input
						placeholder="Search Here"
						icon={
							<MagnifyingGlassIcon className="ctx-size-4 ctx-text-gray-600" />
						}
					/>
					<Input placeholder="Search Here" />
					<Input
						icon={
							<MagnifyingGlassIcon className="ctx-size-4 ctx-text-gray-600" />
						}
					/>
					<Input />
				</div>
				<div className="ctx-flex ctx-flex-col ctx-gap-3 ctx-w-72">
					<Input
						size="small"
						placeholder="Search Here"
						icon={
							<MagnifyingGlassIcon className="ctx-size-3.5 ctx-text-gray-600" />
						}
					/>
					<Input size="small" placeholder="Search Here" />
					<Input
						size="small"
						icon={
							<MagnifyingGlassIcon className="ctx-size-3.5 ctx-text-gray-600" />
						}
					/>
					<Input size="small" />
				</div>
			</div>
		</ComponentContainer>
	);
};

export default Inputs;
