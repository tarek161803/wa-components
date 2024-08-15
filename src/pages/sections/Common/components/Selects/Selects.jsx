import React, { useState } from 'react';
import facebookIcon from '../../../../../assets/images/facebook.png';
import googleIcon from '../../../../../assets/images/google.png';
import instagramIcon from '../../../../../assets/images/instagram.png';
import pinterestIcon from '../../../../../assets/images/pinterest.png';

import Select from '../../../../../components/Select';
import ComponentContainer from '../../../../components/ComponentContainer';

const people = [
	{ id: 1, name: 'Tom Cook' },
	{ id: 2, name: 'Wade Cooper' },
	{ id: 3, name: 'Tanya Fox' },
	{ id: 4, name: 'Arlene Mccoy ' },
	{ id: 5, name: 'Devon Webb' },
	{ id: 6, name: 'Tom Cook' },
	{ id: 7, name: 'Wade Cooper' },
	{ id: 8, name: 'Tanya Fox' },
	{ id: 9, name: 'Arlene Mccoy' },
	{ id: 10, name: 'Devon Webb' },
];

const bulkAction = [
	{ id: 1, name: 'Delete' },
	{ id: 2, name: 'Duplicate' },
	{ id: 3, name: 'Auto Update ON' },
	{ id: 4, name: 'Auto Update OFF' },
];

const templates = [
	{ id: 1, name: 'Google Shopping', icon: googleIcon },
	{ id: 2, name: 'Facebook', icon: facebookIcon },
	{ id: 3, name: 'Pinterest', icon: pinterestIcon },
	{ id: 4, name: 'Instagram', icon: instagramIcon },
];

const Selects = () => {
	const [selected, setSelected] = useState(null);
	const [bulk, setBulk] = useState(null);
	const [template, setTemplate] = useState(null);

	const handleChange = (currentSelected) => {
		setSelected(currentSelected);
	};

	const handleBulk = (currentSelected) => {
		setBulk(currentSelected);
	};
	const handleTemplate = (currentSelected) => {
		setTemplate(currentSelected);
	};

	return (
		<ComponentContainer title="Selects">
			<div className="ctx-flex ctx-gap-10">
				<div className="ctx-w-72">
					<Select
						items={people}
						selected={selected}
						onChange={handleChange}
					/>
				</div>
				<div className="ctx-w-72">
					<Select
						size="small"
						items={people}
						selected={selected}
						onChange={handleChange}
					/>
				</div>
			</div>
			<div className="ctx-flex ctx-gap-10 ctx-mt-6">
				<div className="ctx-w-44">
					<Select
						placeholder="Bulk Action"
						items={bulkAction}
						selected={bulk}
						onChange={handleBulk}
					/>
				</div>
				<div className="ctx-w-44">
					<Select
						placeholder="Template"
						items={templates}
						selected={template}
						onChange={handleTemplate}
					/>
				</div>
			</div>
		</ComponentContainer>
	);
};

export default Selects;
