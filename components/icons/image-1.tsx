import React from 'react';
import IconProps from "@/types/icon.types"

function Image1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M4.75 2.75H13.25C14.3546 2.75 15.25 3.64543 15.25 4.75V11.4513L12.5867 8.94063C11.7943 8.19366 10.5499 8.21792 9.78725 8.99521L3.85636 15.0397C3.20039 14.7116 2.75 14.0334 2.75 13.25V4.75C2.75 3.64543 3.64543 2.75 4.75 2.75Z" fill={secondaryfill} fillOpacity="0.3" fillRule="evenodd"/>
		<path d="M3.76199 14.989L9.83599 8.914C10.617 8.133 11.883 8.133 12.664 8.914L15.25 11.5" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M13.25 2.75H4.75C3.64543 2.75 2.75 3.64543 2.75 4.75V13.25C2.75 14.3546 3.64543 15.25 4.75 15.25H13.25C14.3546 15.25 15.25 14.3546 15.25 13.25V4.75C15.25 3.64543 14.3546 2.75 13.25 2.75Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.25 8.5C6.94036 8.5 7.5 7.94036 7.5 7.25C7.5 6.55964 6.94036 6 6.25 6C5.55964 6 5 6.55964 5 7.25C5 7.94036 5.55964 8.5 6.25 8.5Z" fill={fill}/>
	</g>
</svg>
	);
}

export default Image1;