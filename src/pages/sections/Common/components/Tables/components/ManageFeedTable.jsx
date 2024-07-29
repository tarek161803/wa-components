import { Cog8ToothIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Checkbox from '../../../../../../components/Checkbox';
import Table from '../../../../../../components/Table';
import ToggleSwitch from '../../../../../../components/ToggleSwitch';

const data = [
	{
		id: 1,
		feedName: 'Google Campaign Feed',
		channel: 'Google',
		fileType: 'XML',
		feedUrl:
			'http://newctx.local/mysite/feeddirectory/feedfolder/testfeed.xml',
		interval: '6 Hours',
		lastUpdate: '24 Apr, 2024',
	},
	{
		id: 2,
		feedName: 'Facebook Marketplace',
		channel: 'Facebook',
		fileType: 'XML',
		feedUrl:
			'http://newctx.local/mysite/feeddirectory/feedfolder/testfeed.xml',
		interval: '6 Hours',
		lastUpdate: '24 Apr, 2024',
	},
	{
		id: 3,
		feedName: 'Pinterest Oct CMP',
		channel: 'Pinterest',
		fileType: 'XML',
		feedUrl:
			'http://newctx.local/mysite/feeddirectory/feedfolder/testfeed.xml',
		interval: '6 Hours',
		lastUpdate: '24 Apr, 2024',
	},
	{
		id: 4,
		feedName: 'Google Campaign Feed 2',
		channel: 'Google',
		fileType: 'XML',
		feedUrl:
			'http://newctx.local/mysite/feeddirectory/feedfolder/testfeed.xml',
		interval: '6 Hours',
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
					<Table.Cell className="ctx-text-center">
						Auto Update
					</Table.Cell>
					<Table.Cell>Feed Name</Table.Cell>
					<Table.Cell>Channel</Table.Cell>
					<Table.Cell>File Type</Table.Cell>
					<Table.Cell>Feed URL</Table.Cell>
					<Table.Cell>Interval</Table.Cell>
					<Table.Cell>Last Update</Table.Cell>
					<Table.Cell>Actions</Table.Cell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				{data.map((row) => (
					<Table.Row key={row.id}>
						<Table.Cell>
							<Checkbox />
						</Table.Cell>
						<Table.Cell className="ctx-flex ctx-justify-center">
							<ToggleSwitch />
						</Table.Cell>
						<Table.Cell>{row.feedName}</Table.Cell>
						<Table.Cell>{row.channel}</Table.Cell>
						<Table.Cell>{row.fileType}</Table.Cell>
						<Table.Cell>{row.feedUrl}</Table.Cell>
						<Table.Cell>{row.interval}</Table.Cell>
						<Table.Cell>{row.lastUpdate}</Table.Cell>
						<Table.Cell className="ctx-flex ctx-justify-center">
							<Cog8ToothIcon className="ctx-size-5" />
						</Table.Cell>
					</Table.Row>
				))}
			</Table.Body>
		</Table>
	);
};

export default ManageFeedTable;
