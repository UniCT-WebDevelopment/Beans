import React from 'react';
import IconProps from "@/types/icon.types"

function PresentationScreen3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="5.75" x2="6.75" y1="16.25" y2="13.25"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="12.25" x2="11.25" y1="16.25" y2="13.25"/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="9" x2="9" y1="2.75" y2="1.5"/>
		<rect height="10.5" width="14.5" fill="none" rx="2" ry="2" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="1.75" y="2.75"/>
	</g>
</svg>
	);
}

export default PresentationScreen3;