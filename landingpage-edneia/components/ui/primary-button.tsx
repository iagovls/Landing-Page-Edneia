"use client"
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

export interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export default function PrimaryButton({ asChild = false, className, children, ...props }: PrimaryButtonProps) {
  const Comp: React.ElementType = asChild ? Slot : "button"
  return (
    <Comp
      className={[
        "inline-flex items-center justify-center text-center",
        "rounded-lg bg-gradient-to-r from-[#C53537] to-[#9E3134]",
        "text-white px-14 md:px-14 py-8 hover:cursor-pointer",
        "text-sm sm:text-xl font-bold",
        "transition-transform transition-shadow hover:scale-105 hover:shadow-[0_0_24px_#C73638]",
        className || "",
      ].join(" ")}
      {...props}
    >
      {children}
    </Comp>
  )
}
