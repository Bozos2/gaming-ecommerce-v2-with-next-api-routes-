import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import FilterIcon from "@/app/assets/NavbarIcons/MobileIcons/FilterIcon";
import FilterSection from "../UI/FilterSection";

const FilterButton = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="w-10 h-10 border border-white rounded-md flex justify-center items-center">
          <FilterIcon />
        </button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>
            Filter the desired products according to your preferences.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-1 w-full">
          <FilterSection />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default FilterButton;
