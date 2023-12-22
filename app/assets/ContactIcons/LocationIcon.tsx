import * as React from "react";
import { SVGProps } from "react";
const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#fff"
    viewBox="-3.36 -3.36 30.72 30.72"
    width={60}
    height={60}
    {...props}
  >
    <rect
      width={30.72}
      height={30.72}
      x={-3.36}
      y={-3.36}
      fill="#e11d48"
      stroke="none"
      strokeWidth={0}
      rx={15.36}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 21c3.5-3.6 7-6.824 7-10.8C19 6.224 15.866 3 12 3s-7 3.224-7 7.2 3.5 7.2 7 10.8Z"
    />
  </svg>
);
export default LocationIcon;
