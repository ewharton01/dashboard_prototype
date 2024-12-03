export interface Participant {
  id: string;
  ethnicity: string;
  gender: string;
  age: number;
  services: string[];
  training: string[];
  jobOffers: number;
  lastActive: string;
}

export interface DashboardFilters {
  selectedEthnicity: string | null;
  selectedGender: string | null;
  dateRange: { from: Date; to: Date } | null;
  ageRange: string | null;
  msa: string | null;
}