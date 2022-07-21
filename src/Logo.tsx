import React from 'react';
import logoImage from './images/logo/logo.png';

import {Img} from 'remotion';

export const Logo: React.FC = () => {
	return (
		<div className="absolute bottom-8 right-2">
			<Img src={logoImage} className="w-96" />
		</div>
	);
};
