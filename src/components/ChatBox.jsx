import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Button from './Button';

const ChatBox = () => {
	return (
		<div className="ctx-bg-white ctx-p-5 ctx-flex ctx-items-center ctx-justify-between ctx-rounded-lg">
			<div>
				<p className="ctx-flex ctx-items-center ctx-gap-1 ctx-text-xl ctx-text-gray-900 ctx-font-semibold">
					Hi There! <span className="ctx-text-2xl">👋</span>
				</p>
				<p className="ctx-flex ctx-items-center ctx-gap-1 ctx-font-medium ctx-text-gray-700 ctx-text-base">
					How may we assist you today?
					<span className="ctx-text-xl">😀</span>
				</p>
			</div>
			<Button
				icon={
					<ChatBubbleLeftRightIcon className="ctx-size-4 ctx-text-white" />
				}
			>
				Chat With Us
			</Button>
		</div>
	);
};

export default ChatBox;
