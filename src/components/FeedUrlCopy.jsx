import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import cn from '../utils/cn';

const shortenURL = (url) => {
	try {
		// const urlObj = new URL(url);

		// const pathSegments = urlObj.pathname
		// 	.split('/')
		// 	.filter((segment) => segment !== '');

		// if (pathSegments.length > 1) {
		// 	const shortenedPath = `.../${pathSegments[pathSegments.length - 1]}`;
		// 	return `${urlObj.origin}/${shortenedPath}`;
		// }

		const first = url.slice(0, 10);
		const last = url.slice(-20);

		return `${first}...${last}`;
	} catch (error) {
		throw new Error('Invalid URL');
	}
};

const FeedUrlCopy = ({ url }) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async (feedUrl) => {
		if (!navigator.clipboard) {
			const textArea = document.createElement('textarea');
			textArea.value = feedUrl;
			document.body.appendChild(textArea);
			textArea.select();
			try {
				document.execCommand('copy');
				setCopied(true);
			} catch (error) {
				console.log(error);
			} finally {
				setTimeout(() => {
					setCopied(false);
				}, 1200);
			}
			document.body.removeChild(textArea);
			return;
		}

		try {
			await navigator.clipboard.writeText(feedUrl);
			setCopied(true);
		} catch (error) {
			console.log(error);
		} finally {
			setTimeout(() => {
				setCopied(false);
			}, 1200);
		}
	};

	return (
		<button
			onClick={() => handleCopy(url)}
			className={cn(
				'ctx-bg-white ctx-w-64 ctx-relative ctx-border ctx-group ctx-text-gray-600 ctx-transition-colors ctx-duration-300 ctx-flex ctx-items-center ctx-justify-between ctx-border-gray-200 hover:ctx-border-primary ctx-rounded-md ctx-py-1 ctx-px-2'
			)}
		>
			{shortenURL(url)}
			<ClipboardDocumentIcon className="ctx-size-4 group-hover:ctx-text-primary ctx-transition-colors ctx-duration-300" />
			<span
				className={cn(
					'ctx-absolute ctx-flex ctx-items-center ctx-transition ctx-duration-700 ctx-justify-between ctx-opacity-0 -ctx-inset-px ctx-rounded-md ctx-bg-success ctx-border ctx-px-2 ctx-text-white ctx-border-success',
					{ 'ctx-opacity-100': copied }
				)}
			>
				Feed link successfully copied
				<CheckCircleIcon className="ctx-size-4 ctx-text-white" />
			</span>
		</button>
	);
};

export default FeedUrlCopy;
