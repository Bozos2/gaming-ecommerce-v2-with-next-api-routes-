import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement> & { filled: boolean }) => {
  const { filled, ...svgProps } = props;

  return (
    <>
      {!filled ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={15}
          fill="none"
          {...svgProps}
        >
          <path
            fill="#fefce8"
            d="m8.56.746 1.817 3.668a.584.584 0 0 0 .469.343l4.011.594a.617.617 0 0 1 .343 1.063l-2.891 2.869a.605.605 0 0 0-.183.548l.697 4.035a.629.629 0 0 1-.914.663L8.297 12.62a.674.674 0 0 0-.594 0L4.09 14.529a.628.628 0 0 1-.914-.663l.697-4.08a.606.606 0 0 0-.183-.549L.766 6.414a.617.617 0 0 1 .377-1.063l4.011-.594a.583.583 0 0 0 .469-.343L7.44.746a.617.617 0 0 1 1.12 0Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={15}
          fill="none"
          {...svgProps}
        >
          <path
            fill="#facc15"
            d="m8.56.746 1.817 3.668a.584.584 0 0 0 .469.343l4.011.594a.617.617 0 0 1 .343 1.063l-2.891 2.869a.605.605 0 0 0-.183.548l.697 4.035a.629.629 0 0 1-.914.663L8.297 12.62a.674.674 0 0 0-.594 0L4.09 14.529a.628.628 0 0 1-.914-.663l.697-4.08a.606.606 0 0 0-.183-.549L.766 6.414a.617.617 0 0 1 .377-1.063l4.011-.594a.583.583 0 0 0 .469-.343L7.44.746a.617.617 0 0 1 1.12 0Z"
          />
        </svg>
      )}
    </>
  );
};

export default SvgComponent;
