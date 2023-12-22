import * as React from "react";
import { SVGProps } from "react";
const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={56}
    height={56}
    {...props}
  >
    <path
      fill="#e11d48"
      fillRule="evenodd"
      d="M18.125 9.033A6.242 6.242 0 0 0 12 4a6.246 6.246 0 0 0-5.542 3.367A4.995 4.995 0 0 0 2 12.333c0 2.759 2.242 5 5 5h10.833c2.3 0 4.167-1.866 4.167-4.166 0-2.2-1.708-3.984-3.875-4.134ZM10.792 11.5H8.667L12 8.167l3.333 3.333h-2.125V14h-2.416v-2.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default UploadIcon;
