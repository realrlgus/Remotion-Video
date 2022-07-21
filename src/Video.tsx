import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import './style.css';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={420}
				fps={30}
				width={1080}
				height={1080}
			/>
		</>
	);
};
