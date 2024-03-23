import * as React from "react"
import { Text } from 'react-native';
import Svg, { SvgProps, Path } from "react-native-svg"

function KeywordLight(props) {
    <Svg width={41} height={41} fill="none" {...props}>
        <Text>테스느</Text>
        <Path
            stroke="#7B7B7B"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m17.927 17.132 2.339-4.681a.816.816 0 0 1 .733-.451.824.824 0 0 1 .734.45l2.338 4.682 5.229.755a.814.814 0 0 1 .66.55.802.802 0 0 1-.208.83l-3.782 3.642.893 5.144c.114.66-.588 1.163-1.188.852l-4.676-2.43-4.676 2.43c-.6.312-1.302-.191-1.188-.853l.894-5.144-3.783-3.642a.806.806 0 0 1 .453-1.378l5.228-.756Z"
        />
    </Svg>
}


export { KeywordLight }