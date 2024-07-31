import React from 'react';
import IconProps from "@/types/icon.types"

function Subscription22(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M1.75,9c0-4.004,3.246-7.25,7.25-7.25,3.031,0,5.627,1.86,6.71,4.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M16.25,9c0,4.004-3.246,7.25-7.25,7.25-3.031,0-5.627-1.86-6.71-4.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M10.817,6.894c-.394-.933-1.183-1.144-1.779-1.144-.554,0-2.01,.295-1.875,1.692,.094,.981,1.019,1.346,1.827,1.49s1.981,.452,2.01,1.635c.024,1-.875,1.683-1.962,1.683-1.038,0-1.76-.404-2.038-1.317" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<polyline fill="none" points="16.12 3.305 15.712 6.25 12.768 5.843" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<polyline fill="none" points="1.88 14.695 2.288 11.75 5.232 12.157" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="9" x2="9" y1="4.991" y2="5.636"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="9" x2="9" y1="12.25" y2="12.894"/>
	</g>
</svg>
	);
}

export default Subscription22;