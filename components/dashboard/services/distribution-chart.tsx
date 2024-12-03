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

const data = [
  { name: "Career Counseling", value: 450 },
  { name: "Job Search Support", value: 380 },
  { name: "Resume Writing", value: 320 },
  { name: "Skills Assessment", value: 280 },
  { name: "Interview Prep", value: 250 },
  { name: "Professional Networking", value: 220 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border border-border p-3 rounded-lg shadow-lg">
        <p className="font-medium">{label}</p>
        <p className="text-sm text-muted-foreground">
          Participants: {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
};

export function ServiceDistributionChart() {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">Service Type Distribution</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} horizontal={false} />
            <XAxis type="number" />
            <YAxis 
              dataKey="name" 
              type="category" 
              tick={{ fill: 'currentColor' }}
              width={100}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'var(--accent)', opacity: 0.2 }}
            />
            <Bar 
              dataKey="value"
              fill="hsl(var(--chart-1))"
              radius={[0, 4, 4, 0]}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`}
                  fill={`hsl(var(--chart-${(index % 5) + 1}))`}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}