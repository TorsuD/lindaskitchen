"use client";

import { useState } from "react";
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
import { Button } from "@/components/ui/button";

type UseDialogProps = {
  title: string;
  description: string;
  triggerLabel: string;
  body: React.ReactNode;
};

export function useDialog({
  title,
  description,
  triggerLabel,
  body,
}: UseDialogProps) {
  const [open, setOpen] = useState(false);

  const DialogComponent = (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{triggerLabel ?? "Open"}</DialogTrigger>
      <DialogContent showCloseButton>
        <DialogHeader>
          <DialogTitle className="">{title}</DialogTitle>
          <DialogDescription className="text-sm">
            {description}
          </DialogDescription>
        </DialogHeader>
        {body}
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="default">
              Close menu
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  return { DialogComponent, open, setOpen };
}
