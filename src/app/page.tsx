import { redirect } from "next/navigation";
import { getAppConfig } from "@/lib/config";

export default function HomePage() {
  redirect(getAppConfig().startRoute);
}
