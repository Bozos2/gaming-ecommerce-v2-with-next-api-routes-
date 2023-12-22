import {
  Dialog,
  InterceptedDialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import ProfileContent from "./ProfileModalContent";

export default function InterceptedPageAsModal() {
  return (
    <Dialog open>
      <InterceptedDialogContent className="max-w-[310px] sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="pb-1 text-xl">User Profile</DialogTitle>
          <DialogDescription>
            Here you can view the history of your transactions and make changes
            to your profile picture and password if needed.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center">
          <ProfileContent />
        </div>
      </InterceptedDialogContent>
    </Dialog>
  );
}
