import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "INR" | "USD" | "EUR"
    notation?: Intl.NumberFormatOptions["notation"]
  } = {}
) {
  const { currency = "INR", notation = "standard" } = options; {/*"standard" | "scientific" | "engineering" | "compact"*/ }

  const numericPrice = typeof price === "string" ? parseFloat(price) : price

  return Intl.NumberFormat("en-us", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2
  }).format(numericPrice)
}