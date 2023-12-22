import * as React from "react";
import { SVGProps } from "react";
const FilterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    transform="rotate(90)"
    viewBox="0 0 24 24"
    width={35}
    height={35}
    {...props}
  >
    <g stroke="currentColor" strokeLinecap="round">
      <path d="M5 12V4M19 20v-3M5 20v-4M19 13V4M12 7V4M12 20v-9" />
      <circle cx={5} cy={14} r={2} />
      <circle cx={12} cy={9} r={2} />
      <circle cx={19} cy={15} r={2} />
    </g>
  </svg>
);
export default FilterIcon;
