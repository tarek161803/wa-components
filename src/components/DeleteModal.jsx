import { Dialog, DialogPanel } from '@headlessui/react';
import Button from './Button';

const DeleteModal = ({ isOpen, setIsOpen }) => {
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
				transition
				className="ctx-h-screen ctx-w-screen ctx-flex ctx-justify-center ctx-items-center ctx-bg-gray-800/20 ctx-duration-300 ctx-ease-out data-[closed]:ctx-transform-[scale(95%)] data-[closed]:ctx-opacity-0"
			>
				<div className="ctx-w-[440px] ctx-bg-white ctx-p-8 ctx-rounded-2xl">
					<div>
						<Button
							size="large"
							type="outline"
							className="ctx-w-44"
							onClick={() => {
								setIsOpen(false);
							}}
						>
							Cancel
						</Button>
					</div>
				</div>
			</DialogPanel>
		</Dialog>
	);
};

export default DeleteModal;
