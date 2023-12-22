import * as React from "react";
import { SVGProps } from "react";
const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    stroke="currentColor"
    viewBox="0 0 32 32"
    width={18}
    height={18}
    {...props}
  >
    <path d="M31.772 16.043 16.76.319a.998.998 0 0 0-1.443 0L.228 16.043a1 1 0 1 0 1.443 1.385l1.344-1.401V30.99a1 1 0 0 0 1 1h6.986a1 1 0 0 0 1-.997l.031-9.989h7.969v9.986a1 1 0 0 0 1 1h6.983a1 1 0 0 0 1-1V16.022l1.343 1.407a1.002 1.002 0 0 0 1.414.029 1 1 0 0 0 .029-1.413zm-4.787-1.83v15.776h-4.983v-9.986a1 1 0 0 0-1-1h-9.965a1 1 0 0 0-1 .997l-.031 9.989H5.017V14.212a.998.998 0 0 0-.032-.239L16.04 2.453 27.022 13.96a1.002 1.002 0 0 0-.036.252z" />
  </svg>
);
export default HomeIcon;
