import { Card } from "@/components/ui/card";

export default function TrainingPage() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Training Status</h2>
      <div className="grid gap-4">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Training Overview</h3>
          <p className="text-muted-foreground">Training program data will be displayed here.</p>
        </Card>
      </div>
    </div>
  );
}