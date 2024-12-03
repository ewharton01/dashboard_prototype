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
    title: "Total Talent Available",
    value: "2,845",
    change: "+12.3%",
    info: "Total number of participants available for job placement",
  },
  {
    title: "Job Placements",
    value: "890",
    change: "+5.2%",
    info: "Number of successful job placements",
  },
  {
    title: "Placement Rate",
    value: "31%",
    change: "+3.1%",
    info: "Percentage of available talent successfully placed",
  },
  {
    title: "Average Salary",
    value: "$48,500",
    change: "+8.4%",
    info: "Average annual salary of placed participants",
  },
];

export function JobMetrics() {
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