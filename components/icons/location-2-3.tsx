import React from 'react';
import IconProps from "@/types/icon.types"

function Location23(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="9" cy="5" fill="none" r="3.25" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<line fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="9" x2="9" y1="13.25" y2="8.25"/>
		<path d="M12,12.429c2.507,.315,4.25,1.012,4.25,1.821,0,1.105-3.246,2-7.25,2s-7.25-.895-7.25-2c0-.809,1.743-1.507,4.25-1.821" fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Location23;