import React from 'react';

const MainContainer = ({ children, title = '', rightContent = null }) => {
	return (
		<div className="ctx-bg-white ctx-rounded-2xl ctx-overflow-hidden">
			<div className="ctx-flex ctx-bg-gray-50 ctx-border-b ctx-border-gray-200 ctx-justify-between ctx-items-center ctx-px-6 ctx-py-3">
				<h3 className="ctx-font-semibold ctx-text-2xl ctx-text-gray-900">
					{title}
				</h3>
				{rightContent && rightContent}
			</div>

			<div className="ctx-p-6">{children}</div>
		</div>
	);
};

export default MainContainer;
