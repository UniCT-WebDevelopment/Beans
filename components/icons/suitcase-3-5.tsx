import React from 'react';
import IconProps from "@/types/icon.types"

function Suitcase35(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="m8.25,4.5c-.414,0-.75-.336-.75-.75V1.75c0-.138-.112-.25-.25-.25h-2.5c-.138,0-.25.112-.25.25v2c0,.414-.336.75-.75.75s-.75-.336-.75-.75V1.75c0-.965.785-1.75,1.75-1.75h2.5c.965,0,1.75.785,1.75,1.75v2c0,.414-.336.75-.75.75Z" fill={secondaryfill} strokeWidth="0"/>
		<path d="m11.509,7.454c-1.582.596-3.18.925-4.759,1.011v.285c0,.414-.336.75-.75.75s-.75-.336-.75-.75v-.285c-1.581-.086-3.178-.416-4.765-1.014-.025-.009-.198-.075-.485-.205v1.503c0,1.517,1.233,2.75,2.75,2.75h6.5c1.517,0,2.75-1.233,2.75-2.75v-1.503c-.29.131-.464.198-.491.208Z" fill={fill} strokeWidth="0"/>
		<path d="m9.25,3H2.75C1.289,3,.102,4.148.016,5.588c.625.319.983.455.992.458,1.421.536,2.842.834,4.241.919v-.215c0-.414.336-.75.75-.75s.75.336.75.75v.215c1.398-.085,2.819-.383,4.235-.917.011-.004.372-.142.998-.463-.087-1.439-1.273-2.586-2.733-2.586Z" fill={fill} strokeWidth="0"/>
	</g>
</svg>
	);
}

export default Suitcase35;