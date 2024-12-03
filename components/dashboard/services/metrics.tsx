"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

const metrics = [
  {
    title: "Active Services",
    value: "1,234",
    change: "+12.3%",
    info: "Number of services currently being provided to participants",
  },
  {
    title: "Avg. Services per Participant",
    value: "2.8",
    change: "+5.2%",
    info: "Average number of services each participant receives",
  },
  {
    title: "Service Completion Rate",
    value: "84%",
    change: "+3.1%",
    info: "Percentage of services successfully completed",
  },
  {
    title: "New Services This Month",
    value: "156",
    change: "+8.4%",
    info: "Number of new service enrollments in the current month",
  },
];

export function ServiceMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{metric.info}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className={metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                {metric.change}
              </span>
              {' '}vs last period
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}