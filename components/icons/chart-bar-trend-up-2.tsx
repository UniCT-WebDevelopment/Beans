import React from 'react';
import IconProps from "@/types/icon.types"

function ChartBarTrendUp2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<rect height="12.5" width="2.5" fill="none" rx="1" ry="1" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="13.25" y="2.75"/>
		<rect height="7.5" width="2.5" fill="none" rx="1" ry="1" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="7.75" y="7.75"/>
		<rect height="3.5" width="2.5" fill="none" rx="1" ry="1" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x="2.25" y="11.75"/>
		<polyline fill="none" points="6.25 2.75 8.75 2.75 8.75 5.25" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="8.5" x2="2.75" y1="3" y2="8.75"/>
	</g>
</svg>
	);
}

export default ChartBarTrendUp2;