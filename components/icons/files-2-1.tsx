import React from 'react';
import IconProps from "@/types/icon.types"

function Files21(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M15.75 9.25V15.25C15.75 15.802 15.302 16.25 14.75 16.25H9.75C9.198 16.25 8.75 15.802 8.75 15.25V8.25C8.75 7.698 9.198 7.25 9.75 7.25H13.75L15.75 9.25Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M6.25 10.75H3.25C2.698 10.75 2.25 10.302 2.25 9.75V2.75C2.25 2.198 2.698 1.75 3.25 1.75H7.25L9.25 3.75V4.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.75 1.75V3.75H8.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M15.75 9.25V15.25C15.75 15.802 15.302 16.25 14.75 16.25H9.75C9.198 16.25 8.75 15.802 8.75 15.25V8.25C8.75 7.698 9.198 7.25 9.75 7.25H13.75L15.75 9.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.75 7.25V9.25H15.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default Files21;