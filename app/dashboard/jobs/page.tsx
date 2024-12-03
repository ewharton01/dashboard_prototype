"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { JobMetrics } from "@/components/dashboard/jobs/metrics";
import { JobDemographics } from "@/components/dashboard/jobs/demographics";
import { JobSkills } from "@/components/dashboard/jobs/skills";
import { JobOccupations } from "@/components/dashboard/jobs/occupations";

export default function JobsPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Job Placements</h2>
      </div>

      <JobMetrics />

      <Tabs defaultValue="demographics" className="space-y-4">
        <TabsList>
          <TabsTrigger value="demographics">Demographics</TabsTrigger>
          <TabsTrigger value="occupations">Common Occupations</TabsTrigger>
          <TabsTrigger value="skills">Skills Available</TabsTrigger>
        </TabsList>

        <TabsContent value="demographics" className="space-y-4">
          <JobDemographics />
        </TabsContent>

        <TabsContent value="occupations" className="space-y-4">
          <JobOccupations />
        </TabsContent>

        <TabsContent value="skills" className="space-y-4">
          <JobSkills />
        </TabsContent>
      </Tabs>
    </div>
  );
}