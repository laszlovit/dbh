import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export const BeforeAfterSlider = () => {
	return (
		<ReactCompareSlider
			className="rounded-lg"
			itemOne={
				<ReactCompareSliderImage
					src="https://static.wixstatic.com/media/1f358e_6a26a2e79e554c3793176f24fb4f5e72~mv2.png/v1/fill/w_600,h_450,q_85,usm_0.66_1.00_0.01/1f358e_6a26a2e79e554c3793176f24fb4f5e72~mv2.png"
					alt="Image one"
					className="w-full rounded-lg object-cover"
				/>
			}
			itemTwo={
				<ReactCompareSliderImage
					src="https://static.wixstatic.com/media/1f358e_b3b4e89b941f4609b28484787acd6330~mv2.png/v1/fill/w_600,h_450,q_85,usm_0.66_1.00_0.01/1f358e_b3b4e89b941f4609b28484787acd6330~mv2.png"
					alt="w-full object-cover "
				/>
			}
		/>
	);
};
