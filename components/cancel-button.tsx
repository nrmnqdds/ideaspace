"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

const CancelButton = () => {
  const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          className="bg-red-500 hover:bg-red-600"
          type="button"
          aria-label="cancel button"
        >
          Cancel
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. There is no draft. All unsaved changes
            will be lost.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            className="bg-red-500 hover:bg-red-600"
            type="button"
            onClick={() => router.replace("/")}
          >
            Exit
          </Button>
          <DialogClose asChild>
            <Button type="button">Continue editing</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CancelButton;
