"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { useDashboardStore } from "@/hooks/use-dashboard-store";

const getFilteredMetrics = (filters: any) => {
  // This would normally come from an API based on the filters
  const baseMetrics = [
    {
      title: "Total Participants",
      value: "1,234",
      description: "Total number of registered participants",
      info: "Includes all participants who have registered in the system",
    },
    {
      title: "Receiving Services",
      value: "45",
      description: "+20.1% from last month",
      info: "Participants currently receiving any type of service",
    },
    {
      title: "Enrolled in Training",
      value: "67",
      description: "+10.1% from last month",
      info: "Participants enrolled in training programs",
    },
    {
      title: "Placed in Job",
      value: "890",
      description: "+35.1% from last month",
      info: "Participants who have been successfully placed in jobs",
    },
  ];

  if (!filters.selectedEthnicity && !filters.selectedGender) return baseMetrics;

  // Simulate filtered data
  const multiplier = Math.random() * 0.5 + 0.3; // Random factor between 0.3 and 0.8
  return baseMetrics.map(metric => ({
    ...metric,
    value: Math.round(parseInt(metric.value.replace(',', '')) * multiplier).toLocaleString(),
  }));
};

export function Metrics() {
  const { filters } = useDashboardStore();
  const metrics = getFilteredMetrics(filters);

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
              {metric.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}