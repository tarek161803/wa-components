import { Dialog, DialogPanel } from '@headlessui/react';
import Button from './Button';

const FormSubmissionModal = ({ isOpen, setIsOpen }) => {
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
				<div className="ctx-w-[440px] ctx-bg-white ctx-rounded-2xl ctx-flex ctx-flex-col ctx-p-8 ctx-items-center">
					<p className="ctx-text-5xl ">🙂</p>
					<h3 className="ctx-font-semibold ctx-text-xl ctx-text-gray-900 ctx-text-center ctx-mt-5">
						Thanks, we&apos;ll get back you soon!
					</h3>
					<p className="ctx-text-gray-700 ctx-text-sm ctx-mt-3 ctx-mb-6 ctx-text-center">
						Lorem Ipsum, is simply dummy text of the printing and
						typesetting industry. Lorem Ipsum has been the industry.
					</p>

					<Button
						size="large"
						className="ctx-w-40"
						onClick={() => {
							setIsOpen(false);
						}}
					>
						Go To Manage Feed
					</Button>
				</div>
			</DialogPanel>
		</Dialog>
	);
};

export default FormSubmissionModal;
