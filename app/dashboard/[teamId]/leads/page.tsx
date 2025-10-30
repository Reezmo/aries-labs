
import { redirect } from "next/navigation";

export const metadata = {
  title: "Leads (removed)",
};

export default function Leads() {
  // Redirect to landing page — dashboard removed
  redirect("/");
  return null;
}
