"use client";

import { Card } from "@/components/ui/card";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import { useDashboardStore } from "@/hooks/use-dashboard-store";

const getFilteredData = (selectedEthnicity: string | null) => {
  // This would normally come from an API based on the filters
  const baseData = [
    { name: "Male", value: 540 },
    { name: "Female", value: 480 },
    { name: "Non-Binary", value: 80 },
  ];

  if (!selectedEthnicity) return baseData;

  // Simulate filtered data based on ethnicity
  const multiplier = Math.random() * 0.5 + 0.5; // Random factor between 0.5 and 1
  return baseData.map(item => ({
    ...item,
    value: Math.round(item.value * multiplier)
  }));
};

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))"];

const CustomLabel = ({ name, percent }: { name: string; percent: number }) => 
  `${name} ${(percent * 100).toFixed(0)}%`;

export function GenderChart() {
  const { filters, setFilter } = useDashboardStore();
  const data = getFilteredData(filters.selectedEthnicity);

  const handlePieClick = (entry: any) => {
    setFilter('selectedGender', 
      filters.selectedGender === entry.name ? null : entry.name
    );
  };

  return (
    <Card className="p-4">
      <h3 className="text-lg font-semibold mb-4">
        Gender Distribution
        {filters.selectedEthnicity && (
          <span className="text-sm text-muted-foreground ml-2">
            ({filters.selectedEthnicity})
          </span>
        )}
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={CustomLabel}
              outerRadius={100}
              innerRadius={60}
              fill="var(--primary)"
              dataKey="value"
              paddingAngle={2}
              minAngle={5}
              isAnimationActive={true}
              animationBegin={0}
              animationDuration={400}
              animationEasing="ease-out"
              onClick={handlePieClick}
              className="cursor-pointer"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]}
                  opacity={filters.selectedGender === entry.name ? 1 : 
                    filters.selectedGender ? 0.5 : 1}
                />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--background)',
                border: '1px solid var(--border)'
              }}
            />
            <Legend 
              formatter={(value) => <span className="text-sm">{value}</span>}
              verticalAlign="bottom"
              height={36}
              onClick={(entry) => handlePieClick(entry)}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}