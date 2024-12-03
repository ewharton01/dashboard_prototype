"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const skills = [
  {
    name: "Customer Service",
    count: 450,
    percentage: 85,
  },
  {
    name: "Microsoft Office",
    count: 380,
    percentage: 72,
  },
  {
    name: "Communication",
    count: 350,
    percentage: 66,
  },
  {
    name: "Problem Solving",
    count: 320,
    percentage: 60,
  },
  {
    name: "Team Leadership",
    count: 280,
    percentage: 53,
  },
  {
    name: "Project Management",
    count: 250,
    percentage: 47,
  },
  {
    name: "Data Analysis",
    count: 220,
    percentage: 42,
  },
  {
    name: "Sales",
    count: 200,
    percentage: 38,
  },
];

export function JobSkills() {
  return (
    <Card>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Available Skills Ranking</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Skill</TableHead>
              <TableHead>Participants</TableHead>
              <TableHead>Distribution</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {skills.map((skill) => (
              <TableRow key={skill.name}>
                <TableCell className="font-medium">{skill.name}</TableCell>
                <TableCell>{skill.count}</TableCell>
                <TableCell className="w-[300px]">
                  <div className="flex items-center gap-2">
                    <Progress value={skill.percentage} className="h-2" />
                    <span className="text-sm text-muted-foreground w-12">
                      {skill.percentage}%
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}