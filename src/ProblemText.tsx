import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {checkLast, cls} from '../util';
import './font.css';

type ProblemTextProps = {
	inputRange: number[];
	outputRange: number[];
	texts: (string | number)[];
	isLast?: boolean;
};

export const ProblemText: React.FC<ProblemTextProps> = ({
	inputRange,
	outputRange,
	texts,
	isLast,
}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, inputRange, outputRange, {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div className="flex gap-10 mt-4" style={{opacity}}>
			{texts.map((text, index) => (
				<span
					className={cls(
						'text-5xl w-8 text-center font-notoSans',
						isLast && checkLast(index, texts.length)
							? 'text-rose-500'
							: ' text-gray-500'
					)}
				>
					{text}
				</span>
			))}
		</div>
	);
};
