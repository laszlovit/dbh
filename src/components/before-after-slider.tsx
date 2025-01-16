import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";

export const BeforeAfterSlider = () => {
	return (
		<ReactCompareSlider
			className="h-full rounded-lg"
			itemOne={
				<ReactCompareSliderImage
					src="https://cdn.sanity.io/images/11915si6/production/e54613c996ea0ac4df3ea53e78a8e22b0e7b5e24-1200x961.jpg?format=auto"
					alt="Image one"
					className="w-full rounded-lg object-cover"
				/>
			}
			itemTwo={
				<ReactCompareSliderImage
					src="https://cdn.sanity.io/images/11915si6/production/de40e4588b112e67c60927e02dcb0a985a409467-1200x961.jpg?format=auto"
					alt="w-full object-cover "
				/>
			}
		/>
	);
};
