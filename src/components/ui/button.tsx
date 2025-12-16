import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] active:bg-primary/80",
        destructive:
          "bg-destructive text-destructive-foreground shadow-lg hover:shadow-xl hover:bg-destructive/90 hover:scale-[1.02] active:scale-[0.98] active:bg-destructive/80",
        outline:
          "border-2 border-primary bg-background text-primary shadow-md hover:shadow-lg hover:bg-primary hover:text-primary-foreground hover:scale-[1.02] active:scale-[0.98] active:bg-primary/90",
        secondary:
          "bg-black text-white shadow-lg hover:shadow-xl hover:bg-black/90 hover:scale-[1.02] active:scale-[0.98] active:bg-black/80",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:scale-[1.02] active:scale-[0.98] active:bg-accent/80",
        link: "text-primary underline-offset-4 hover:underline active:text-primary/70",
        white: "bg-white text-primary shadow-lg hover:shadow-xl hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] active:bg-white/80",
        light: "bg-white/90 text-primary shadow-md hover:shadow-lg hover:bg-white hover:scale-[1.02] active:scale-[0.98] active:bg-white/95",
        dark: "bg-black text-white shadow-lg hover:shadow-xl hover:bg-black/90 hover:scale-[1.02] active:scale-[0.98] active:bg-black/80",
        transparent: "bg-black/90 backdrop-blur-sm text-white shadow-md hover:shadow-lg hover:bg-black hover:scale-[1.02] active:scale-[0.98] active:bg-black/95",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8",
        xl: "h-14 rounded-lg px-10 text-base md:text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }