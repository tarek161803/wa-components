import { PlusCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Button from '../../../../../components/Button';
import NoItemsInterface from '../../../../../components/NoItemsInterface';
import ComponentContainer from '../../../../components/ComponentContainer';

const NoItems = () => {
	return (
		<ComponentContainer title="No Items Interface">
			<NoItemsInterface
				title="Create Your First Attribute Mapping To Combine Multiple Attribute"
				description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
				actionComponent={
					<div className="ctx-flex ctx-gap-4">
						<Button
							className="ctx-w-36"
							size="large"
							type="outline"
						>
							Learn More
						</Button>
						<Button
							size="large"
							icon={
								<PlusCircleIcon className="ctx-text-white ctx-size-4" />
							}
						>
							New Attribute Mapping
						</Button>
					</div>
				}
			/>
		</ComponentContainer>
	);
};

export default NoItems;
