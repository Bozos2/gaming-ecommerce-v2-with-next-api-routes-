import * as React from "react";
import { SVGProps } from "react";
const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="#fff"
    viewBox="-5.76 -5.76 35.52 35.52"
    width={60}
    height={60}
    {...props}
  >
    <rect
      width={35.52}
      height={35.52}
      x={-5.76}
      y={-5.76}
      fill="#e11d48"
      stroke="none"
      strokeWidth={0}
      rx={17.76}
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5.5C3 14.06 9.94 21 18.5 21c.386 0 .77-.014 1.148-.042.435-.032.653-.048.851-.162a1.06 1.06 0 0 0 .402-.432c.099-.206.099-.446.099-.926v-2.817c0-.404 0-.606-.067-.779a.999.999 0 0 0-.277-.396c-.14-.122-.33-.191-.71-.329l-3.206-1.166c-.441-.16-.662-.24-.872-.227a1 1 0 0 0-.513.182c-.171.121-.292.322-.534.725L14 16a12.1 12.1 0 0 1-6-6l1.369-.821c.402-.242.604-.363.725-.534a1 1 0 0 0 .182-.513c.014-.21-.066-.43-.227-.872L8.883 4.053c-.138-.38-.207-.569-.329-.709a1 1 0 0 0-.396-.278C7.985 3 7.783 3 7.379 3H4.562c-.48 0-.72 0-.926.1a1.06 1.06 0 0 0-.432.401c-.114.198-.13.416-.162.85C3.014 4.732 3 5.115 3 5.5Z"
    />
  </svg>
);
export default PhoneIcon;
