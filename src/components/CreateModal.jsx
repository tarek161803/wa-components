import { Dialog, DialogPanel } from '@headlessui/react';
import cn from '../utils/cn';

const CreateModal = ({ isOpen, setIsOpen, children, className }) => {
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
				className="ctx-h-screen ctx-font-sans ctx-w-screen ctx-flex ctx-justify-center ctx-items-center ctx-bg-gray-800/40 ctx-duration-300 ctx-ease-out data-[closed]:ctx-transform-[scale(95%)] data-[closed]:ctx-opacity-0"
			>
				<div
					className={cn(
						'ctx-bg-white ctx-relative ctx-min-h-80 ctx-rounded-[20px] ctx-px-8 ctx-py-6',
						className
					)}
				>
					<div className="ctx-h-40 ctx-bg-primary ctx-absolute ctx-top-0 ctx-left-0 ctx-right-0 ctx-rounded-t-[20px]" />
					{children}
				</div>
			</DialogPanel>
		</Dialog>
	);
};

export default CreateModal;
