import React from "react";
import { useRadio, Chip, VisuallyHidden, tv } from "@nextui-org/react";
import { CheckIcon } from "@/app/assets/NavbarIcons/MobileIcons/CheckIcon";

const radio = tv({
  slots: {
    base: "border-default hover:bg-default-200",
    content: "text-default-500",
  },
  variants: {
    isSelected: {
      true: {
        base: "border-rose-600 bg-rose-600 hover:bg-rose-600 hover:border-rose-600",
        content: "text-primary-foreground pl-1",
      },
    },
    isFocusVisible: {
      true: {
        base: "outline-none ring-2 ring-focus ring-offset-2 ring-offset-background",
      },
    },
  },
});

export const CustomRadioButton = (props: any) => {
  const {
    children,
    getInputProps,
    getBaseProps,
    getLabelProps,
    isSelected,
    isFocusVisible,
  } = useRadio({
    ...props,
  });

  const styles = radio({ isSelected, isFocusVisible });

  return (
    <label {...getLabelProps()} {...getBaseProps()}>
      <VisuallyHidden>
        <input type="radio" {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        color="primary"
        startContent={isSelected ? <CheckIcon className="ml-1" /> : null}
        variant="faded"
        {...getLabelProps()}
      >
        {children ? children : isSelected ? "Enabled" : "Disabled"}
      </Chip>
    </label>
  );
};
