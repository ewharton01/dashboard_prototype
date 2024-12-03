"use client";

import { create } from "zustand";
import { DashboardFilters } from "@/lib/types";

interface DashboardStore {
  filters: DashboardFilters;
  setFilter: <K extends keyof DashboardFilters>(
    key: K,
    value: DashboardFilters[K]
  ) => void;
  resetFilters: () => void;
}

const initialFilters: DashboardFilters = {
  selectedEthnicity: null,
  selectedGender: null,
  dateRange: null,
  ageRange: null,
  msa: null,
};

export const useDashboardStore = create<DashboardStore>((set) => ({
  filters: initialFilters,
  setFilter: (key, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
      },
    })),
  resetFilters: () => set({ filters: initialFilters }),
}));