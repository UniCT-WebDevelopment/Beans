import React from 'react';
import IconProps from "@/types/icon.types"

function FacialRecognition1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M15 13.08V4.92C15 3.85961 14.1404 3 13.08 3L4.92 3C3.85961 3 3 3.85961 3 4.92V13.08C3 14.1404 3.85961 15 4.92 15H13.08C14.1404 15 15 14.1404 15 13.08Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M9 6.25V8.75C9 9.302 8.552 9.75 8 9.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M5.75 6.25V7.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M12.25 6.25V7.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M11.25 12C10.623 12.471 9.844 12.75 9 12.75C8.156 12.75 7.376 12.471 6.75 12" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M2.75 6.75V4.75C2.75 3.645 3.645 2.75 4.75 2.75H6.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M11.25 2.75H13.25C14.355 2.75 15.25 3.645 15.25 4.75V6.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.25 11.25V13.25C15.25 14.355 14.355 15.25 13.25 15.25H11.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.75 15.25H4.75C3.645 15.25 2.75 14.355 2.75 13.25V11.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default FacialRecognition1;