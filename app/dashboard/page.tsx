import { redirect } from "next/navigation";

export const metadata = {
  title: "Dashboard (removed)",
};

export default function Dashboard() {
  // Dashboard routes removed — redirect to landing page
  redirect("/");
}
