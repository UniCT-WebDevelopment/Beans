import React from 'react';
import IconProps from "@/types/icon.types"

function Gamepad2(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<circle cx="10.75" cy="8.75" fill={secondaryfill} r=".75"/>
		<circle cx="12.25" cy="6.75" fill={secondaryfill} r=".75"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="6.25" x2="6.25" y1="6.5" y2="9"/>
		<line fill="none" stroke={secondaryfill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth} x1="7.5" x2="5" y1="7.75" y2="7.75"/>
		<path d="M16.914,11.986l-1.993-6.799c-.25-.852-1.031-1.438-1.919-1.438H4.998c-.888,0-1.669,.585-1.919,1.438l-1.993,6.799c-.051,.163-.086,.333-.086,.514,0,.967,.784,1.75,1.75,1.75,.584,0,1.098-.289,1.415-.728l1.272-1.772h7.124l1.272,1.772c.318,.439,.832,.728,1.415,.728,.966,0,1.75-.783,1.75-1.75,0-.18-.035-.35-.086-.514Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Gamepad2;