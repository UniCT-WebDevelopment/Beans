import React from 'react';
import IconProps from "@/types/icon.types"

function InboxArrowDown3(props: IconProps) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '1em';
	const height = props.height || '1em';

	return (
		<svg height={height} width={width} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
	<g fill={fill}>
		<path d="M5.97,5.22c-.293,.293-.293,.768,0,1.061l2.5,2.5c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l2.5-2.5c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0l-1.22,1.22V2.75c0-.414-.336-.75-.75-.75s-.75,.336-.75,.75v3.689l-1.22-1.22c-.293-.293-.768-.293-1.061,0Z" fill={secondaryfill}/>
		<path d="M14.696,3.744c-.417-1.06-1.421-1.744-2.56-1.744h-.137c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h.137c.518,0,.974,.311,1.163,.793l1.849,4.707h-3.399c-.414,0-.75,.336-.75,.75v1c0,.138-.112,.25-.25,.25h-3.5c-.138,0-.25-.112-.25-.25v-1c0-.414-.336-.75-.75-.75H2.851l1.849-4.707c.189-.482,.646-.793,1.163-.793h.137c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-.137c-1.139,0-2.143,.685-2.56,1.744L1.19,9.123c-.126,.321-.19,.66-.19,1.006v3.121c0,1.517,1.233,2.75,2.75,2.75H14.25c1.517,0,2.75-1.233,2.75-2.75v-3.121c0-.346-.064-.685-.19-1.006l-2.113-5.379Z" fill={fill}/>
	</g>
</svg>
	);
}

export default InboxArrowDown3;