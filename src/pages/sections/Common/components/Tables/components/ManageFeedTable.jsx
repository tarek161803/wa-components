import React from 'react';
import facebook from '../../../../../../assets/images/facebook.png';
import google from '../../../../../../assets/images/google.png';
import pinterest from '../../../../../../assets/images/pinterest.png';

import Checkbox from '../../../../../../components/Checkbox';
import FeedUrlCopy from '../../../../../../components/FeedUrlCopy';
import ActionsPanel from '../../../../../../components/ManageFeed/ActionsPanel';
import Table from '../../../../../../components/Table';
import ToggleSwitch from '../../../../../../components/ToggleSwitch';

const data = [
	{
		id: 1,
		feedName: 'Google Campaign Feed',
		channel: 'Google',
		channel_icon: google,
		fileType: 'XML',
		feedUrl:
			'http://newctx.local/mysite/feeddirectory/feedfolder/itsatestfeed.xml',
		interval: '6 Hours',
		lastUpdate: '24 Apr, 2024',
	},
	{
		id: 2,
		feedName: 'Facebook Marketplace',
		channel: 'Facebook',
		channel_icon: facebook,
		fileType: 'XML',
		feedUrl:
			'http://newctx.local/mysite/feeddirectory/feedfolder/somefeed.xml',
		interval: 'On Change',
		lastUpdate: '24 Apr, 2024',
	},
	{
		id: 3,
		feedName: 'Pinterest Oct CMP',
		channel: 'Pinterest',
		channel_icon: pinterest,
		fileType: 'XML',
		feedUrl:
			'http://newctx.local/mysite/feeddirectory/feedfolder/googlefeed.xml',
		interval: '6 Hours',
		lastUpdate: '24 Apr, 2024',
	},
	{
		id: 4,
		feedName: 'Google Campaign Feed 2',
		channel: 'Google',
		channel_icon: google,
		fileType: 'XML',
		feedUrl:
			'http://newctx.local/mysite/feeddirectory/feedfolder/mygreatfeed.xml',
		interval: '7 Days',
		lastUpdate: '24 Apr, 2024',
	},
];

const ManageFeedTable = () => {
	return (
		<Table>
			<Table.Head>
				<Table.Row className="!ctx-bg-gray-100">
					<Table.Cell>
						<Checkbox />
					</Table.Cell>
					<Table.Cell className="ctx-text-center ctx-py-3.5">
						Auto Update
					</Table.Cell>
					<Table.Cell>Feed Name</Table.Cell>
					<Table.Cell>Channel</Table.Cell>
					<Table.Cell>File Type</Table.Cell>
					<Table.Cell>Feed URL</Table.Cell>
					<Table.Cell className="ctx-text-center">
						Interval
					</Table.Cell>
					<Table.Cell>Last Update</Table.Cell>
					<Table.Cell className="ctx-text-center">Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				{data.map((row) => (
					<Table.Row key={row.id}>
						<Table.Cell>
							<Checkbox />
						</Table.Cell>
						<Table.Cell>
							<span className="ctx-flex ctx-justify-center ctx-items-center">
								<ToggleSwitch />
							</span>
						</Table.Cell>
						<Table.Cell className="ctx-py-3.5 ctx-text-gray-700 ctx-text-sm ctx-font-normal">
							{row.feedName}
						</Table.Cell>
						<Table.Cell className="ctx-text-gray-700 ctx-text-sm ctx-font-normal">
							<span className="ctx-flex ctx-items-center ctx-gap-3">
								<img
									className="ctx-size-4"
									src={row.channel_icon}
									alt={row.channel}
								/>
								{row.channel}
							</span>
						</Table.Cell>
						<Table.Cell className="ctx-text-center ctx-font-spaceport ctx-text-xs ctx-text-[#EA580C]">
							{row.fileType}
						</Table.Cell>
						<Table.Cell className="ctx-py-1 ctx-text-gray-700 ctx-text-sm ctx-font-normal">
							<FeedUrlCopy url={row.feedUrl} />
						</Table.Cell>
						<Table.Cell className="ctx-text-center ctx-text-gray-700 ctx-text-sm ctx-font-normal">
							{row.interval}
						</Table.Cell>
						<Table.Cell className="ctx-font-spaceport ctx-text-gray-600 ctx-py-0 ctx-text-[10px]">
							<span>{row.lastUpdate}</span>
							<br />
							<span className="ctx-text-[#EA580C]">8:20 PM</span>
						</Table.Cell>
						<Table.Cell className="ctx-text-center ctx-align-middle">
							<span className="ctx-flex ctx-justify-center">
								<ActionsPanel />
							</span>
						</Table.Cell>
					</Table.Row>
				))}
			</Table.Body>
		</Table>
	);
};

export default ManageFeedTable;
