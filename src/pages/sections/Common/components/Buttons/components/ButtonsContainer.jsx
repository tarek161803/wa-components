import { DocumentPlusIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Button from '../../../../../../components/Button';
import ComponentContainer from '../../../../../components/ComponentContainer';

const ButtonsContainer = ({ type, iconColor }) => {
	return (
		<ComponentContainer title={`${type} Buttons`}>
			<div className="ctx-flex ctx-items-center ctx-gap-8">
				<div className="ctx-flex ctx-items-center ctx-gap-4">
					<Button
						type={type}
						icon={
							<DocumentPlusIcon
								className={`ctx-text-${iconColor} ctx-size-5`}
							/>
						}
					/>
					<Button type={type}>Make Feed</Button>
					<Button
						type={type}
						icon={
							<DocumentPlusIcon
								className={`ctx-text-${iconColor} ctx-size-4`}
							/>
						}
					>
						Make Feed
					</Button>
				</div>

				<div className="ctx-flex ctx-items-center ctx-gap-4">
					<Button
						size="medium"
						type={type}
						icon={
							<DocumentPlusIcon
								className={`ctx-text-${iconColor} ctx-size-4`}
							/>
						}
					/>
					<Button size="medium" type={type}>
						Make Feed
					</Button>
					<Button
						size="medium"
						type={type}
						icon={
							<DocumentPlusIcon
								className={`ctx-text-${iconColor} ctx-size-4`}
							/>
						}
					>
						Make Feed
					</Button>
				</div>

				<div className="ctx-flex ctx-items-center ctx-gap-4">
					<Button
						size="small"
						type={type}
						icon={
							<DocumentPlusIcon
								className={`ctx-text-${iconColor} ctx-size-4`}
							/>
						}
					/>
					<Button size="small" type={type}>
						Make Feed
					</Button>
					<Button
						size="small"
						type={type}
						icon={
							<DocumentPlusIcon
								className={`ctx-text-${iconColor} ctx-size-3`}
							/>
						}
					>
						Make Feed
					</Button>
				</div>
			</div>
		</ComponentContainer>
	);
};

export default ButtonsContainer;
