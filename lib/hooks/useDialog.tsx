"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
      </DialogContent>
    </Dialog>
  );

  return { DialogComponent, open, setOpen };
}
