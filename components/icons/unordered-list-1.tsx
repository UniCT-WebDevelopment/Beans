import React from 'react';
import IconProps from "@/types/icon.types"

function UnorderedList1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M3.75 7.25C4.85457 7.25 5.75 6.35457 5.75 5.25C5.75 4.14543 4.85457 3.25 3.75 3.25C2.64543 3.25 1.75 4.14543 1.75 5.25C1.75 6.35457 2.64543 7.25 3.75 7.25Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M3.75 14.75C4.85457 14.75 5.75 13.8546 5.75 12.75C5.75 11.6454 4.85457 10.75 3.75 10.75C2.64543 10.75 1.75 11.6454 1.75 12.75C1.75 13.8546 2.64543 14.75 3.75 14.75Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M3.75 7.25C4.85457 7.25 5.75 6.35457 5.75 5.25C5.75 4.14543 4.85457 3.25 3.75 3.25C2.64543 3.25 1.75 4.14543 1.75 5.25C1.75 6.35457 2.64543 7.25 3.75 7.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M3.75 14.75C4.85457 14.75 5.75 13.8546 5.75 12.75C5.75 11.6454 4.85457 10.75 3.75 10.75C2.64543 10.75 1.75 11.6454 1.75 12.75C1.75 13.8546 2.64543 14.75 3.75 14.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M8.75 5.25H16.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M8.75 12.75H16.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default UnorderedList1;