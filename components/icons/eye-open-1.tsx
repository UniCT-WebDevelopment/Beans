import React from 'react';
import IconProps from "@/types/icon.types"

function EyeOpen1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9 13.25C10.5188 13.25 11.75 12.0188 11.75 10.5C11.75 8.98122 10.5188 7.75 9 7.75C7.48122 7.75 6.25 8.98122 6.25 10.5C6.25 12.0188 7.48122 13.25 9 13.25Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M1.85901 8C3.67401 6.149 6.20301 5 9.00001 5C11.797 5 14.326 6.148 16.141 8" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9 13.25C10.5188 13.25 11.75 12.0188 11.75 10.5C11.75 8.98122 10.5188 7.75 9 7.75C7.48122 7.75 6.25 8.98122 6.25 10.5C6.25 12.0188 7.48122 13.25 9 13.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M4.021 6.328L2.75 4.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M7.3 5.144L6.823 2.769" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.979 6.328L15.25 4.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M10.7 5.144L11.177 2.769" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default EyeOpen1;