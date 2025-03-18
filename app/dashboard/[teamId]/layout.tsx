'use client';

import SidebarLayout, { SidebarItem } from "@/components/sidebar-layout";
import { SelectedTeamSwitcher, useUser } from "@stackframe/stack";
import { BadgePercent, BarChart4, Columns3, Globe, Settings2, ShoppingCart, Users } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const navigationItems: SidebarItem[] = [
  {
    name: "Usage Overview",
    href: "/",
    icon: Globe,
    type: "item",
  },
  {
    type: 'label',
    name: 'Workflows',
  },
  {
    name: "Workflows used vs. limit",
    href: "/workflows-used-vs-limit",
    icon: BarChart4,
    type: "item",
  },
  {
    name: "Task executions used vs. limit",
    href: "/task-executions-used-vs-limit",
    icon: Columns3,
    type: "item",
  },
  {
    name: "Team members vs. limit",
    href: "/team-members-vs-limit",
    icon: Users,
    type: "item",
  },
  {
    type: 'label',
    name: 'Integrations',
  },
  {
    name: "Basic Integrations",
    href: "/basic-integrations",
    icon: Globe,
    type: "item",
  },
  {
    name: "Advanced Integrations",
    href: "/advanced-integrations",
    icon: Globe,
    type: "item",
  },
  {
    type: 'label',
    name: 'Analytics',
  },
  {
    name: "Total Automations Run",
    href: "/total-automations-run",
    icon: BarChart4,
    type: "item",
  },
  {
    name: "Average Execution Time",
    href: "/average-execution-time",
    icon: Columns3,
    type: "item",
  },
  {
    name: "Success Rate",
    href: "/success-rate",
    icon: BadgePercent,
    type: "item",
  },
  {
    name: "Failed Executions",
    href: "/failed-executions",
    icon: ShoppingCart,
    type: "item",
  },
  {
    type: 'label',
    name: 'Support Section',
  },
  {
    name: "Support Tickets",
    href: "/support-tickets",
    icon: Settings2,
    type: "item",
  },
];

export default function Layout(props: { children: React.ReactNode }) {
  const params = useParams<{ teamId: string }>();
  const user = useUser({ or: 'redirect' });
  const team = user.useTeam(params.teamId);
  const router = useRouter();

  if (!team) {
    router.push('/dashboard');
    return null;
  }

  return (
    <SidebarLayout 
      items={navigationItems}
      basePath={`/dashboard/${team.id}`}
      sidebarTop={<SelectedTeamSwitcher 
        selectedTeam={team}
        urlMap={(team) => `/dashboard/${team.id}`}
      />}
      baseBreadcrumb={[{
        title: team.displayName,
        href: `/dashboard/${team.id}`,
      }]}
    >
      {props.children}
    </SidebarLayout>
  );
}