import React from 'react';
import IconProps from "@/types/icon.types"

function Keyboard2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<rect height="8.5" width="16.5" fill="none" rx="2" ry="2" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x=".75" y="4.75"/>
		<rect height="1.5" width="1.5" fill={secondaryfill} rx=".5" ry=".5" x="3" y="7"/>
		<rect height="1.5" width="1.5" fill={secondaryfill} rx=".5" ry=".5" x="3" y="9.5"/>
		<rect height="1.5" width="1.5" fill={secondaryfill} rx=".5" ry=".5" x="5.5" y="7"/>
		<rect height="1.5" width="1.5" fill={secondaryfill} rx=".5" ry=".5" x="8.25" y="7"/>
		<rect height="1.5" width="1.5" fill={secondaryfill} rx=".5" ry=".5" x="13.5" y="7"/>
		<rect height="1.5" width="1.5" fill={secondaryfill} rx=".5" ry=".5" x="13.5" y="9.5"/>
		<rect height="1.5" width="1.5" fill={secondaryfill} rx=".5" ry=".5" x="11" y="7"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="11.75" x2="6.25" y1="10.25" y2="10.25"/>
	</g>
</svg>
	);
}

export default Keyboard2;