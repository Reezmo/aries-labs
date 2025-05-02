'use client';

import SidebarLayout, { SidebarItem } from "@/components/sidebar-layout";
import { SelectedTeamSwitcher, useUser } from "@stackframe/stack";
import { BadgePercent, BarChart4, Calendar, ClipboardList, Columns3, Cpu, DollarSign, FileText, Globe, Phone, TrendingUp, User, UserCheck } from "lucide-react";
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
    name: 'Lead Generation',
  },
  {
    name: "Lead Overview",
    href: "/leads",
    icon: BarChart4,
    type: "item",
  },
  {
    name: "Campaign Management",
    href: "/campaigns",
    icon: Columns3,
    type: "item",
  },
  {
    name: "Automation Sequences",
    href: "/automation",
    icon: Cpu,
    type: "item",
  },
  {
    type: 'label',
    name: 'Project Management',
  },
  {
    name: "Active Projects",
    href: "/projects",
    icon: ClipboardList,
    type: "item",
  },
  {
    name: "Task Board",
    href: "/tasks",
    icon: Columns3,
    type: "item",
  },
  {
    name: "Gantt Chart View",
    href: "/gantt",
    icon: Calendar,
    type: "item",
  },
  {
    type: 'label',
    name: 'Hiring Systems ',
  },
  {
    name: "Candidate Pipeline",
    href: "/hiring",
    icon: UserCheck,
    type: "item",
  },
  {
    name: "Interview Schedule",
    href: "/interviews",
    icon: Calendar,
    type: "item",
  },
  {
    name: "Automation Status",
    href: "/automation-status",
    icon: BadgePercent,
    type: "item",
  },
  {
    type: 'label',
    name: 'AI Service Fulfillment',
  },
  {
    name: "Automated Tasks",
    href: "/automated-tasks",
    icon: FileText,
    type: "item",
  },
  {
    name: "AI Efficiency Metrics",
    href: "/ai-metrics",
    icon: TrendingUp,
    type: "item",
  },
  {
    name: "Payroll Savings",
    href: "/payroll",
    icon: DollarSign,
    type: "item",
  },
  {
    type: 'label',
    name: 'CRM Buildouts',
  },
  {
    name: "Customer Profiles",
    href: "/customer-profiles",
    icon: User,
    type: "item",
  },
  {
    name: "Sales Pipeline",
    href: "/sales-pipeline",
    icon: TrendingUp,
    type: "item",
  },
  {
    name: "Communication Log",
    href: "/communications",
    icon: Phone,
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