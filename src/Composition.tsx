import {Audio} from 'remotion';
import {AbsoluteFill} from 'remotion';
import {checkLast} from '../util';
import {Logo} from './Logo';
import {ProblemText} from './ProblemText';
import {Title} from './Title';
import BGM from './audio/bgm.mp3';

const problems = [
	{
		texts: [2, '+', 3, '=', 8],
		inputRange: [20, 40],
		outputRange: [0, 1],
	},
	{
		texts: [3, '+', 7, '=', 27],
		inputRange: [40, 60],
		outputRange: [0, 1],
	},
	{
		texts: [4, '+', 5, '=', 32],
		inputRange: [60, 80],
		outputRange: [0, 1],
	},
	{
		texts: [5, '+', 8, '=', 60],
		inputRange: [80, 100],
		outputRange: [0, 1],
	},
	{
		texts: [6, '+', 7, '=', 72],
		inputRange: [100, 120],
		outputRange: [0, 1],
	},
	{
		texts: [7, '+', 8, '=', '?'],
		inputRange: [120, 140],
		outputRange: [0, 1],
	},
];

export const MyComposition = () => {
	return (
		<>
			<AbsoluteFill className="bg-gray-100 items-center flex pt-32 gap-10">
				<Title />
				{problems.map((problem, index) => (
					<ProblemText
						texts={problem.texts}
						inputRange={problem.inputRange}
						outputRange={problem.outputRange}
						isLast={checkLast(index, problems.length)}
					/>
				))}
			</AbsoluteFill>
			<Audio src={BGM} />
		</>
	);
};
