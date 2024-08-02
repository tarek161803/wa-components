import { Dialog, DialogPanel } from '@headlessui/react';
import deleteImage from '../assets/svgs/delete_image.svg';
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
				onClick={(e) => {
					if (e.target.id === 'delete-backdrop') {
						setIsOpen(false);
					}
				}}
				transition
				id="delete-backdrop"
				className="ctx-h-screen ctx-font-sans ctx-w-screen ctx-flex ctx-justify-center ctx-items-center ctx-bg-gray-800/30 ctx-duration-300 ctx-ease-out data-[closed]:ctx-transform-[scale(95%)] data-[closed]:ctx-opacity-0"
			>
				<div className="ctx-w-[440px] ctx-bg-gray-100  ctx-rounded-2xl">
					<div className="ctx-bg-white ctx-rounded-t-2xl ctx-p-8 ctx-flex ctx-flex-col ctx-items-center">
						<img
							className="ctx-mb-6"
							src={deleteImage}
							alt="Delete Icon"
						/>
						<h3 className="ctx-font-semibold ctx-text-xl ctx-text-gray-900">
							Are you sure want to delete?
						</h3>
						<p className="ctx-text-gray-700 ctx-text-sm ctx-mt-2">
							Lorem Ipsum, is simply dummy text of the printing
							and typesetting industry. Lorem Ipsum has been the
							industry.
						</p>
					</div>
					<div className="ctx-flex ctx-justify-between ctx-px-8 ctx-py-6">
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
						<Button
							size="large"
							type="destructive"
							className="ctx-w-44"
						>
							Delete
						</Button>
					</div>
				</div>
			</DialogPanel>
		</Dialog>
	);
};

export default DeleteModal;
