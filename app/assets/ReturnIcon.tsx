import * as React from "react";
import { SVGProps } from "react";
const ReturnIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#fff"
    strokeWidth={3}
    viewBox="0 0 64 64"
    {...props}
  >
    <g strokeLinecap="round">
      <path d="M54.89 26.73A23.52 23.52 0 0 1 15.6 49M9 37.17a23.75 23.75 0 0 1-.53-5A23.51 23.51 0 0 1 48.3 15.2" />
      <path d="m37.73 16.24 10.89-.8-.85-10.2M25.91 47.76l-10.88.8.85 10.2" />
    </g>
  </svg>
);
export default ReturnIcon;
