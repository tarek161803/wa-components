import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import chatBubble from '../../../../assets/premium/chat_bubble.svg';
import Button from '../../../../components/Button';

const CTASection = () => {
	return (
		<div className="ctx-bg-gray-50 ctx-p-16 ctx-flex ctx-justify-center ctx-items-center ctx-gap-10">
			<div className="ctx-flex ctx-bg-white ctx-justify-center ctx-items-center ctx-size-40 ctx-rounded-full">
				<img
					className="ctx-size-20"
					src={chatBubble}
					alt="Chat Bubble"
				/>
			</div>
			<div>
				<h3 className="ctx-text-3xl ctx-text-gray-900 ctx-font-bold">
					Need Help? Feel Free To Knock Us
				</h3>

				<p className="ctx-text-gray-700 ctx-text-base ctx-mt-2">
					If you have any further questions or need more information,
					you&apos;re welcome to reach out. <br /> If there&apos;s
					anything specific you need help with, feel free to ask!
				</p>
				<div className="ctx-flex ctx-gap-4 ctx-mt-4">
					<Button
						icon={
							<ChatBubbleLeftRightIcon className="ctx-size-5 ctx-text-white" />
						}
					>
						Chat With US
					</Button>
					<Button type="outline">Visit Website</Button>
				</div>
			</div>
		</div>
	);
};

export default CTASection;
