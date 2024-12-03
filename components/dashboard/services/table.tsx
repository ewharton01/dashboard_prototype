"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    id: 1,
    name: "Career Counseling Session",
    participant: "John Doe",
    date: "2024-03-20",
    status: "Completed",
    duration: "45 mins",
  },
  {
    id: 2,
    name: "Resume Review",
    participant: "Jane Smith",
    date: "2024-03-19",
    status: "In Progress",
    duration: "30 mins",
  },
  {
    id: 3,
    name: "Mock Interview",
    participant: "Mike Johnson",
    date: "2024-03-18",
    status: "Scheduled",
    duration: "60 mins",
  },
  {
    id: 4,
    name: "Job Search Strategy",
    participant: "Sarah Williams",
    date: "2024-03-17",
    status: "Completed",
    duration: "45 mins",
  },
  {
    id: 5,
    name: "Skills Assessment",
    participant: "Robert Brown",
    date: "2024-03-16",
    status: "Completed",
    duration: "90 mins",
  },
];

export function ServiceTable() {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Service</TableHead>
            <TableHead>Participant</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell>{service.participant}</TableCell>
              <TableCell>{service.date}</TableCell>
              <TableCell>{service.duration}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    service.status === "Completed"
                      ? "default"
                      : service.status === "In Progress"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {service.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}