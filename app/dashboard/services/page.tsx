"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceMetrics } from "@/components/dashboard/services/metrics";
import { ServiceDistributionChart } from "@/components/dashboard/services/distribution-chart";
import { ServiceTimelineChart } from "@/components/dashboard/services/timeline-chart";
import { ServiceTable } from "@/components/dashboard/services/table";

export default function ServicesPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Received Services</h2>
      </div>

      <ServiceMetrics />

      <Tabs defaultValue="distribution" className="space-y-4">
        <TabsList>
          <TabsTrigger value="distribution">Service Distribution</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="details">Detailed View</TabsTrigger>
        </TabsList>

        <TabsContent value="distribution" className="space-y-4">
          <ServiceDistributionChart />
        </TabsContent>

        <TabsContent value="timeline" className="space-y-4">
          <ServiceTimelineChart />
        </TabsContent>

        <TabsContent value="details" className="space-y-4">
          <ServiceTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}