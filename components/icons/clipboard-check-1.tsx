import React from 'react';
import IconProps from "@/types/icon.types"

function ClipboardCheck1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M6.25 2.75V3.25C6.25 3.80228 6.69772 4.25 7.25 4.25H10.75C11.3023 4.25 11.75 3.80228 11.75 3.25V2.75H12.75C13.855 2.75 14.75 3.645 14.75 4.75V14.25C14.75 15.355 13.855 16.25 12.75 16.25H5.25C4.145 16.25 3.25 15.355 3.25 14.25V4.75C3.25 3.645 4.145 2.75 5.25 2.75H6.25Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M6.25 2.75H5.25C4.145 2.75 3.25 3.645 3.25 4.75V14.25C3.25 15.355 4.145 16.25 5.25 16.25H12.75C13.855 16.25 14.75 15.355 14.75 14.25V4.75C14.75 3.645 13.855 2.75 12.75 2.75H11.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M10.75 1.25H7.25C6.69772 1.25 6.25 1.69772 6.25 2.25V3.25C6.25 3.80228 6.69772 4.25 7.25 4.25H10.75C11.3023 4.25 11.75 3.80228 11.75 3.25V2.25C11.75 1.69772 11.3023 1.25 10.75 1.25Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.25 10.25L8 12.25L11.75 7.25" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default ClipboardCheck1;