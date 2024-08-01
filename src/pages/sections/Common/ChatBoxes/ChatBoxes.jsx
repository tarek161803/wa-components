import React from 'react';
import ChatBox from '../../../../components/ChatBox';
import ComponentContainer from '../../../components/ComponentContainer';

const ChatBoxes = () => {
	return (
		<ComponentContainer title="Chat Box">
			<div className="ctx-w-[486px]">
				<ChatBox />
			</div>
		</ComponentContainer>
	);
};

export default ChatBoxes;
