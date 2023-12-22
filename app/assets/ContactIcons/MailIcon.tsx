import * as React from "react";
import { SVGProps } from "react";
const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#fff"
    viewBox="-3.6 -3.6 31.2 31.2"
    width={60}
    height={60}
    {...props}
  >
    <rect
      width={31.2}
      height={31.2}
      x={-3.6}
      y={-3.6}
      fill="#e11d48"
      stroke="none"
      strokeWidth={0}
      rx={15.6}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3 8 5.45 3.633c1.283.856 1.925 1.283 2.618 1.45a4.001 4.001 0 0 0 1.864 0c.694-.167 1.335-.594 2.618-1.45L21 8M6.2 19h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 17.48 21 16.92 21 15.8V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 5 18.92 5 17.8 5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 6.52 3 7.08 3 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 19 5.08 19 6.2 19Z"
    />
  </svg>
);
export default MailIcon;
