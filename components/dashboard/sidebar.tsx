"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users, GraduationCap, Briefcase, Activity, UserCheck, UserCog } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const routes = [
  {
    label: "Received Services",
    icon: Users,
    href: "/dashboard/services",
    color: "text-sky-500",
  },
  {
    label: "Training Status",
    icon: GraduationCap,
    href: "/dashboard/training",
    color: "text-violet-500",
  },
  {
    label: "Job Placements",
    icon: Briefcase,
    href: "/dashboard/jobs",
    color: "text-pink-700",
  },
  {
    label: "Services & Training",
    icon: UserCheck,
    href: "/dashboard/services-training",
    color: "text-orange-700",
  },
  {
    label: "Training & Jobs",
    icon: UserCog,
    href: "/dashboard/training-jobs",
    color: "text-green-700",
  },
  {
    label: "Recent Activity",
    icon: Activity,
    href: "/dashboard/activity",
    color: "text-blue-700",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-slate-900 text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">
            Rise<span className="text-blue-500">Kit</span>
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}