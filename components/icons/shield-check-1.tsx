import React from 'react';
import IconProps from "@/types/icon.types"

function ShieldCheck1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M9.305 1.848L14.555 3.528C14.969 3.661 15.25 4.046 15.25 4.48V11C15.25 14.03 10.566 15.748 9.308 16.155C9.105 16.221 8.895 16.221 8.692 16.155C7.434 15.748 2.75 14.03 2.75 11V4.48C2.75 4.045 3.031 3.66 3.445 3.528L8.695 1.848C8.893 1.785 9.106 1.785 9.305 1.848Z" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M9.305 1.848L14.555 3.528C14.969 3.661 15.25 4.046 15.25 4.48V11C15.25 14.03 10.566 15.748 9.308 16.155C9.105 16.221 8.895 16.221 8.692 16.155C7.434 15.748 2.75 14.03 2.75 11V4.48C2.75 4.045 3.031 3.66 3.445 3.528L8.695 1.848C8.893 1.785 9.106 1.785 9.305 1.848Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M6.49701 9.75L8.10601 11.25L11.503 6.75" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default ShieldCheck1;