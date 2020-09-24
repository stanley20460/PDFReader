import * as React from 'react'
import Svg, {
  Defs,
  ClipPath,
  Path,
  Rect,
  G,
  Text,
  Polygon,
  Use
} from "react-native-svg";

const SvgTest = props => (
  <Svg width="100%" height="30%" viewBox="0 0 140 110" {...props}>
    <Defs>
      <Path
        id="prefix__a"
        d="M25 10a20 20 0 1 0 0 40 20 20 1 1 0 0-40m20 0a20 20 0 1 0 0 40 20 20 1 1 0 0-40"
      />
      <ClipPath id="prefix__b" clipRule="nonzero">
        <Use xlinkHref="#prefix__a" clipRule="nonzero" />
      </ClipPath>
      <ClipPath id="prefix__c" clipRule="evenodd">
        <Path
          id="prefix__a"
          y={50}
          d="M25 10a20 20 0 1 0 0 40 20 20 1 1 0 0-40m20 0a20 20 0 1 0 0 40 20 20 1 1 0 0-40"
        />
      </ClipPath>
      <ClipPath id="prefix__d" clipRule="evenodd">
        <Use xlinkHref="#prefix__a" clipRule="evenodd" y={50} />
      </ClipPath>
    </Defs>
    <Path clipPath="url(#prefix__b)" fill="#6495ed" d="M0 5h70v50H0z" />
    <Text x={15} y={54} fontSize={5} fill="#fff">
      {"non-zero clip-rule"}
    </Text>
    <Use xlinkHref="#prefix__a" x={70} stroke="#6495ed" />
    <Text x={86} y={54} fontSize={5} fill="#fff">
      {"non-zero fill-rule"}
    </Text>
    <G>
      <Path clipPath="url(#prefix__d)" fill="#daa520" d="M0 55h70v50H0z" />
      <Text x={14} y={105} fontSize={5} fill="#fff">
        {"even-odd clip-rule"}
      </Text>
    </G>
    <G>
      <Use
        fillRule="evenodd"
        xlinkHref="#prefix__a"
        x={70}
        y={50}
        stroke="#daa520"
      />
      <Text x={85} y={105} fontSize={5} fill="#fff">
        {"even-odd fill-rule"}
      </Text>
    </G>
  </Svg>
);
export default SvgTest