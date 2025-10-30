import { redirect } from "next/navigation";

export default function Layout() {
  // Handler routes removed — redirect to landing page
  redirect("/");
}