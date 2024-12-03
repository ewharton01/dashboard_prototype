"use client";

import { Card } from "@/components/ui/card";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

const occupations = [
  {
    title: "Customer Service Representative",
    count: 156,
    avgSalary: 38000,
  },
  {
    title: "Administrative Assistant",
    count: 142,
    avgSalary: 42000,
  },
  {
    title: "Sales Associate",
    count: 128,
    avgSalary: 45000,
  },
  {
    title: "Project Coordinator",
    count: 98,
    avgSalary: 52000,
  },
  {
    title: "Data Entry Specialist",
    count: 86,
    avgSalary: 36000,
  },
  {
    title: "IT Support Technician",
    count: 76,
    avgSalary: 48000,
  },
  {
    title: "Marketing Assistant",
    count: 68,
    avgSalary: 44000,
  },
  {
    title: "Human Resources Assistant",
    count: 62,
    avgSalary: 46000,
  },
];

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))"];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border p-3 rounded-lg shadow-lg">
        <p className="font-medium">{label}</p>
        <p className="text-sm text-muted-foreground">
          Placements: {payload[0].value}
        </p>
        <p className="text-sm text-muted-foreground">
          Avg. Salary: ${payload[1].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export function JobOccupations() {
  return (
    <Card>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Common Occupations</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={occupations}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 200, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} horizontal={false} />
              <XAxis type="number" />
              <YAxis 
                dataKey="title" 
                type="category" 
                width={180}
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="count" name="Placements" fill="hsl(var(--chart-1))">
                {occupations.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
              <Bar dataKey="avgSalary" name="Average Salary" fill="hsl(var(--chart-2))" opacity={0.7}>
                {occupations.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[(index + 2) % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}