
import React from "react";
import { Button as ShadcnButton } from "@/components/ui/button"; 
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define Once UI button styles that extend shadcn/ui button
const onceButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-brand-primary text-neutral-100 hover:bg-brand-primary-dark",
        secondary: "border border-brand-primary text-brand-primary bg-transparent hover:bg-opacity-10 hover:bg-brand-primary",
        tertiary: "text-brand-primary hover:underline bg-transparent",
        ghost: "hover:bg-neutral-700 hover:text-neutral-300",
        link: "text-brand-primary underline-offset-4 hover:underline bg-transparent",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        md: "h-10 px-4 py-2",
        lg: "h-11 px-6 py-2.5 text-base",
        xl: "h-12 px-8 py-3 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface OnceButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof onceButtonVariants> {
  asChild?: boolean;
}

const OnceButton = React.forwardRef<HTMLButtonElement, OnceButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <ShadcnButton
        className={cn(onceButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
OnceButton.displayName = "OnceButton";

export { OnceButton, onceButtonVariants };
