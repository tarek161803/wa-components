import { Dialog, DialogPanel } from '@headlessui/react';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import Button from './Button';

const ProModal = ({ isOpen, setIsOpen, title, videoId = '' }) => {
	return (
		<Dialog
			open={isOpen}
			as="div"
			className="ctx-fixed ctx-inset-0 ctx-z-[9999]"
			onClose={() => {
				setIsOpen(false);
			}}
		>
			<DialogPanel
				onClick={(e) => {
					if (e.target.id === 'delete-backdrop') {
						setIsOpen(false);
					}
				}}
				transition
				id="delete-backdrop"
				className="ctx-h-screen ctx-font-sans ctx-w-screen ctx-flex ctx-justify-center ctx-items-center ctx-bg-gray-800/30 ctx-duration-300 ctx-ease-out data-[closed]:ctx-transform-[scale(95%)] data-[closed]:ctx-opacity-0"
			>
				<div className="ctx-w-[600px] ctx-relative ctx-bg-gray-100 ctx-rounded-2xl ctx-flex ctx-flex-col  ctx-items-center">
					<div className="ctx-bg-white ctx-p-10 ctx-pb-8 ctx-rounded-t-2xl">
						<div className="ctx-h-[293px] ctx-bg-gray-100 ctx-rounded-xl ctx-overflow-hidden">
							<iframe
								width="100%"
								height="293"
								src={`https://www.youtube.com/embed/${videoId}?si=aTuUN0giiegpAZah`}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowfullscreen
							></iframe>
						</div>

						<h3 className="ctx-font-semibold ctx-text-2xl ctx-text-gray-900 ctx-text-center ctx-mt-5">
							{title}
						</h3>
						<p className="ctx-text-gray-700 ctx-text-sm ctx-mt-3 ctx-text-center">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry&apos;s standard dummy text ever since the
							1500s, when an unknown printer took.
						</p>
					</div>
					<div className="ctx-flex ctx-gap-6 ctx-py-5">
						<Button
							size="large"
							type="outline"
							className="ctx-w-28"
							onClick={() => {
								setIsOpen(false);
							}}
						>
							Learn More
						</Button>
						<Button
							size="large"
							className="ctx-w-28"
							onClick={() => {
								setIsOpen(false);
							}}
						>
							Unlock Now
						</Button>
					</div>
					<button
						onClick={() => setIsOpen(false)}
						className="ctx-flex ctx-justify-center ctx-items-center ctx-size-10 ctx-bg-red-500 ctx-rounded-full ctx-absolute -ctx-top-3 -ctx-right-3"
					>
						<PlusCircleIcon className="ctx-text-white ctx-size-8 ctx-rotate-45" />
					</button>
				</div>
			</DialogPanel>
		</Dialog>
	);
};

export default ProModal;
