import React from 'react';
import IconProps from "@/types/icon.types"

function ProgressBar2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="3.75" x2="9" y1="11.75" y2="11.75"/>
		<rect height="6" width="16.5" fill="none" rx="3" ry="3" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x=".75" y="8.75"/>
		<path d="M9.404,5.052l1.757-2.53c.226-.326-.007-.772-.404-.772h-3.513c-.397,0-.63,.446-.404,.772l1.757,2.53c.196,.282,.612,.282,.808,0Z" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default ProgressBar2;