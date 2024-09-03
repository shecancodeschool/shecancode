import { cn } from "@/lib/utils";

export default function PageTitle({ title, className }) {
  return (
    <h2 className={cn("text-2xl font-semibold", className)}>{title}</h2>
  )
}
