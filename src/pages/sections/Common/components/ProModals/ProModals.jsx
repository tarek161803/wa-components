import React, { useState } from 'react';
import Button from '../../../../../components/Button';
import ProModal from '../../../../../components/ProModal';
import ComponentContainer from '../../../../components/ComponentContainer';

const ProModals = () => {
	const [filterOpen, setFilterOpen] = useState(false);
	const [reportOpen, setReportOpen] = useState(false);

	return (
		<ComponentContainer title="Pro Modals">
			<div className="ctx-flex ctx-gap-8">
				<Button size="large" onClick={() => setFilterOpen(true)}>
					Filter Modal
				</Button>
				<Button size="large" onClick={() => setReportOpen(true)}>
					Report Modal
				</Button>
			</div>

			<ProModal
				isOpen={filterOpen}
				setIsOpen={setFilterOpen}
				title="Advance Filter feature is available in Pro version"
				videoId="-WvcE_QUIS0"
			/>
			<ProModal
				isOpen={reportOpen}
				setIsOpen={setReportOpen}
				title="Report is available in Pro version"
				videoId="elYbtW882vw"
			/>
		</ComponentContainer>
	);
};

export default ProModals;
