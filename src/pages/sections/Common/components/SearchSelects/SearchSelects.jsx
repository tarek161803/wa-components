import React from 'react';
import SearchSelect from '../../../../../components/SearchSelect';
import ComponentContainer from '../../../../components/ComponentContainer';

const SearchSelects = () => {
	return (
		<ComponentContainer title="Search Select">
			<div className="ctx-flex ctx-gap-8">
				<div className="ctx-w-48">
					<SearchSelect placeholder="Select Attribute" />
				</div>
				<div className="ctx-w-48">
					<SearchSelect placeholder="Select Template" size="small" />
				</div>
			</div>
		</ComponentContainer>
	);
};

export default SearchSelects;
