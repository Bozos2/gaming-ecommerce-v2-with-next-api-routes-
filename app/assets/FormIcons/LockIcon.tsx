import * as React from "react";
import { SVGProps } from "react";
const LockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={22}
    height={22}
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M5.5 10V7a6.5 6.5 0 1 1 13 0v3h.5a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h.5Zm4.025-5.475A3.5 3.5 0 0 1 15.5 7v3h-7V7a3.5 3.5 0 0 1 1.025-2.475Z"
      clipRule="evenodd"
    />
  </svg>
);
export default LockIcon;
