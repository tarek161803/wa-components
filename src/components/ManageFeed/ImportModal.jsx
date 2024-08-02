import { Dialog, DialogPanel } from '@headlessui/react';
import Button from '../Button';
import Input from '../Input';

import { toast } from 'react-toastify';
import uploadIcon from '../../assets/svgs/upload.svg';

const ImportModal = ({ isOpen, setIsOpen }) => {
	const handleImport = () => {
		toast(
			<div style={{ color: 'red' }}>
				<h4>Custom Title</h4>
				<p>This is a custom message with HTML content.</p>
			</div>,
			{ hideProgressBar: true, autoClose: 1000 }
		);
	};

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
				className="ctx-h-screen ctx-w-screen ctx-font-sans ctx-flex ctx-justify-center ctx-items-center ctx-bg-gray-800/30 ctx-duration-300 ctx-ease-out data-[closed]:ctx-transform-[scale(95%)] data-[closed]:ctx-opacity-0"
			>
				<div className="ctx-w-[440px] ctx-bg-white ctx-rounded-2xl">
					<div className="ctx-bg-gray-50 ctx-rounded-t-2xl ctx-py-6 ctx-px-10 ctx-flex ctx-flex-col ctx-items-center">
						<h3 className="ctx-font-semibold ctx-text-xl ctx-text-gray-900 ctx-text-center">
							Import Your File Here
						</h3>
						<p className="ctx-text-gray-700 ctx-text-sm ctx-mt-2 ctx-text-center">
							Lorem Ipsum, is simply dummy text of the printing
							and typesetting industry orem Ipsum has been.
						</p>
					</div>

					<div className="ctx-px-10 ctx-pt-6 ctx-pb-10">
						<div className="ctx-h-60 ctx-bg-primary/10 ctx-border-primary ctx-border ctx-border-dashed ctx-mb-6 ctx-rounded-2xl ctx-flex ctx-justify-center ctx-items-center">
							<div className="ctx-flex ctx-flex-col ctx-items-center ctx-gap-2">
								<img
									src={uploadIcon}
									className="ctx-size-20"
									alt="Upload Icon"
								/>

								<p className="ctx-font-medium ctx-text-base ctx-text-gray-700">
									Drag & Drop Your File
								</p>
							</div>
						</div>
						<div className="ctx-mb-5">
							<p className="ctx-text-sm ctx-font-medium ctx-text-gray-800 ctx-mb-0.5">
								File Name
							</p>
							<Input />
						</div>
						<div className="ctx-flex ctx-justify-between ">
							<Button
								size="large"
								type="destructive"
								className="ctx-w-[170px]"
								onClick={() => {
									setIsOpen(false);
								}}
							>
								Cancel
							</Button>
							<Button
								onClick={handleImport}
								size="large"
								className="ctx-w-[170px]"
							>
								Import Now
							</Button>
						</div>
					</div>
				</div>
			</DialogPanel>
		</Dialog>
	);
};

export default ImportModal;
