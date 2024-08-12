import React, { useState } from 'react';
import Button from '../../../../../components/Button';
import FormSubmissionModal from '../../../../../components/FormSubmissionModal';
import ComponentContainer from '../../../../components/ComponentContainer';

const FormSubmission = () => {
	const [open, setOpen] = useState(false);
	return (
		<ComponentContainer title="Form Submission">
			<Button onClick={() => setOpen(true)}>Submit Form</Button>
			<FormSubmissionModal isOpen={open} setIsOpen={setOpen} />
		</ComponentContainer>
	);
};

export default FormSubmission;
