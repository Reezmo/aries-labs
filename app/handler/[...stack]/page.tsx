import { redirect } from "next/navigation";

export default function Handler(_props: unknown) {
  // Authentication/handler routes removed — redirect to landing
  redirect("/");
}
