import { Switch } from '@headlessui/react';

const ToggleSwitch = ({ checked, onChange }) => {
	return (
		<Switch
			checked={checked}
			onChange={onChange}
			className="ctx-group ctx-bg-gray-200 ctx-relative ctx-flex ctx-h-5 ctx-w-8 ctx-cursor-pointer ctx-rounded-full  ctx-p-1 ctx-transition-colors ctx-duration-200 ctx-ease-in-out focus:ctx-outline-none data-[focus]:ctx-outline-1 data-[focus]:ctx-outline-white data-[checked]:ctx-bg-primary"
		>
			<span
				aria-hidden="true"
				className="ctx-pointer-events-none ctx-absolute ctx-top-0.5 ctx-left-0.5 ctx-inline-block ctx-size-4 ctx-translate-x-0 ctx-rounded-full ctx-bg-white ctx-ring-0 ctx-shadow-lg ctx-transition ctx-duration-200 ctx-ease-in-out group-data-[checked]:ctx-translate-x-3"
			/>
		</Switch>
	);
};

export default ToggleSwitch;
