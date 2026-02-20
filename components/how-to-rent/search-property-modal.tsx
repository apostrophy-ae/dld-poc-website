"use client";

import * as React from "react";
import Image from "next/image";
import { X, CheckCircle2, Circle, Home, FileText, Key } from "lucide-react";
import { Dialog, DialogPortal, DialogOverlay } from "@/components/ui/dialog";
import { Dialog as DialogPrimitive } from "radix-ui";
import { cn } from "@/lib/utils";

interface SearchPropertyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const timelineSteps = [
  {
    step: 1,
    label: "Search & Shortlist",
    description: "Browse verified listings on Dubai REST and trusted platforms",
    icon: Home,
    completed: true,
    active: false,
  },
  {
    step: 2,
    label: "Verify Property",
    description: "Confirm ownership through DLD Title Deed verification",
    icon: FileText,
    completed: false,
    active: true,
  },
  {
    step: 3,
    label: "Book Viewing",
    description: "Schedule an in-person viewing with a RERA-licensed broker",
    icon: Key,
    completed: false,
    active: false,
  },
];

const searchPlatforms = [
  {
    name: "Dubai REST App",
    description: "Official DLD mobile application for property search",
    tag: "Official",
    tagColor: "bg-dld-green-bg text-dld-green",
  },
  {
    name: "Bayut",
    description: "UAE's leading property portal with verified listings",
    tag: "Verified",
    tagColor: "bg-dld-blue/10 text-dld-blue",
  },
  {
    name: "Property Finder",
    description: "Comprehensive listings across all Dubai communities",
    tag: "Trusted",
    tagColor: "bg-dld-surface text-dld-text-secondary",
  },
];

export function SearchPropertyModal({
  open,
  onOpenChange,
}: SearchPropertyModalProps) {
  const [activeStep, setActiveStep] = React.useState(1);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-dld-dark/70 backdrop-blur-sm" />
        <DialogPrimitive.Content
          data-slot="dialog-content"
          className={cn(
            "fixed inset-4 z-50 flex flex-col overflow-hidden rounded-2xl bg-dld-white shadow-2xl",
            "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 duration-200",
            "md:inset-8 lg:inset-12",
          )}
          aria-labelledby="search-modal-title"
          aria-describedby="search-modal-description"
        >
          {/* Header */}
          <div className="flex items-center justify-end bg-dld-white px-6 py-4 z-10">
            <DialogPrimitive.Close
              className="flex h-9 w-9 items-center justify-center rounded-full border border-dld-border bg-dld-surface text-dld-text-secondary transition-colors hover:bg-dld-border hover:text-dld-black"
              aria-label="Close search property modal"
            >
              <X className="size-4" />
            </DialogPrimitive.Close>
          </div>

          <img
            alt=""
            src={"/images/modalImage.png"}
            className="object-contain h-full z-0 relative  -top-20"
            style={{
              objectFit: "contain",
            }}
          />
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
