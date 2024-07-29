import React from 'react';
import cn from '../utils/cn';

const Table = ({ children }) => {
	return (
		<div className="ctx-overflow-hidden ctx-border ctx-border-gray-200 ctx-rounded-lg">
			<table className="ctx-min-w-full ctx-divide-y ctx-divide-gray-200">
				{children}
			</table>
		</div>
	);
};

const TableHead = ({ children }) => {
	return (
		<thead className="ctx-font-semibold ctx-text-base ctx-text-gray-900">
			{children}
		</thead>
	);
};

const TableBody = ({ children }) => {
	return (
		<tbody className="ctx-divide-y ctx-divide-gray-200">{children}</tbody>
	);
};

const TableRow = ({ children, className }) => {
	return (
		<tr
			className={cn('even:ctx-bg-gray-100 odd:ctx-bg-gray-50', className)}
		>
			{children}
		</tr>
	);
};

const TableCell = ({ children, className }) => {
	return (
		<td className={cn('ctx-p-3 ctx-text-sm ctx-text-gray-700', className)}>
			{children}
		</td>
	);
};

Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;

export default Table;
