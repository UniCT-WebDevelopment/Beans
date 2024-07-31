import React from 'react';
import IconProps from "@/types/icon.types"

function BookOpen1(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M8.99999 15.051C9.16999 15.051 9.33899 15.006 9.49399 14.917C10.137 14.546 11.226 14.07 12.635 14.072C13.534 14.073 14.302 14.269 14.905 14.507C15.553 14.762 16.249 14.267 16.249 13.57V4.48701C16.249 4.13301 16.068 3.80701 15.763 3.62701C15.126 3.25101 14.037 2.76401 12.623 2.76401C10.733 2.76401 9.42499 3.63601 8.99899 3.94601" fill={secondaryfill} fillOpacity="0.3"/>
		<path d="M8.99999 15.051C9.16999 15.051 9.33899 15.006 9.49399 14.917C10.137 14.546 11.226 14.07 12.635 14.072C13.534 14.073 14.302 14.269 14.905 14.507C15.553 14.762 16.249 14.267 16.249 13.57V4.48701C16.249 4.13301 16.068 3.80701 15.763 3.62701C15.126 3.25101 14.037 2.76401 12.623 2.76401C10.733 2.76401 9.42499 3.63601 8.99899 3.94601" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
		<path d="M9.00001 15.051C8.83001 15.051 8.66101 15.006 8.50601 14.917C7.86301 14.546 6.77401 14.07 5.36501 14.072C4.46601 14.073 3.69801 14.269 3.09501 14.507C2.44701 14.762 1.75101 14.27 1.75101 13.574C1.75101 10.981 1.75101 6.10201 1.75101 4.48401C1.75101 4.13001 1.93201 3.80801 2.23701 3.62801C2.87401 3.25201 3.96301 2.76501 5.37701 2.76501C7.26701 2.76501 8.57501 3.63701 9.00101 3.94701V15.051H9.00001Z" fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokewidth}/>
	</g>
</svg>
	);
}

export default BookOpen1;