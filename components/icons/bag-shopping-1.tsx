import React from 'react';
import IconProps from "@/types/icon.types"

function BagShopping1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M5.334 4.75H12.667C13.704 4.75 14.57 5.543 14.659 6.577L15.311 14.077C15.413 15.246 14.491 16.25 13.319 16.25H4.681C3.508 16.25 2.587 15.245 2.689 14.077L3.341 6.577C3.431 5.543 4.297 4.75 5.334 4.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M6.75 4.75V3C6.75 1.757 7.757 0.75 9 0.75C10.243 0.75 11.25 1.757 11.25 3V4.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.334 4.75H12.667C13.704 4.75 14.57 5.543 14.659 6.577L15.311 14.077C15.413 15.246 14.491 16.25 13.319 16.25H4.681C3.508 16.25 2.587 15.245 2.689 14.077L3.341 6.577C3.431 5.543 4.297 4.75 5.334 4.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default BagShopping1;