import { clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
  prefix: "ctx-",
});

export default function cn(...inputs) {
  return twMerge(clsx(inputs));
}
