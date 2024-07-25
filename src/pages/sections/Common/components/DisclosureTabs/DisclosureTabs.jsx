import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Button from '../../../../../components/Button';
import DisclosureTab from '../../../../../components/DisclosureTab';
import DocCard from '../../../../../components/DocCard';
import Input from '../../../../../components/Input';
import ComponentContainer from '../../../../components/ComponentContainer';

const posts = [
	{
		id: 1,
		title: 'How to Add Discount to Cart Programmatically in WooCommerce (Easy Steps)',
		description:
			'Discounts and coupons are the most powerful marketing tool for an online store. They can give you a 73% boost in your sales. Here are some awestriking stats on the impact of discounts – I hope this proves the might and power of discounts. WooCommerce is the best platform to build an online store and',
		thumbnail:
			'https://webappick.com/wp-content/uploads/2024/07/How-to-Add-Discount-to-Cart-Programmatically-in-WooCommerce-Easy-Guide_Blog-Featured-Image.png',
	},
	{
		id: 2,
		title: 'How to Add Discount to Cart Programmatically in WooCommerce (Easy Steps)',
		description:
			'Discounts and coupons are the most powerful marketing tool for an online store. They can give you a 73% boost in your sales. Here are some awestriking stats on the impact of discounts – I hope this proves the might and power of discounts. WooCommerce is the best platform to build an online store and',
		thumbnail:
			'https://webappick.com/wp-content/uploads/2024/07/How-to-Add-Discount-to-Cart-Programmatically-in-WooCommerce-Easy-Guide_Blog-Featured-Image.png',
	},
];

const DisclosureTabs = () => {
	return (
		<ComponentContainer title="Disclosure Tabs">
			<div className="ctx-w-[420px]">
				<DisclosureTab title="Read Documentation">
					<Input
						className="!ctx-bg-gray-50"
						placeholder="Search Documents"
						icon={<MagnifyingGlassIcon className="ctx-size-4" />}
					/>

					<div className="ctx-divide-y ctx-divide-gray-100 ctx-mt-1">
						{posts.map((post) => (
							<DocCard
								key={post.id}
								title={post.title}
								thumbnail={post.thumbnail}
								description={post.description}
							/>
						))}
					</div>
					<Button type="outline" className="ctx-w-full ctx-mt-2">
						Read More
					</Button>
				</DisclosureTab>
			</div>
		</ComponentContainer>
	);
};

export default DisclosureTabs;
