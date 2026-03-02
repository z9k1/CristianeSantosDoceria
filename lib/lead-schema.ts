import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Nome obrigatorio."),
  phone: z.string().min(8, "Telefone obrigatorio."),
  event_type: z.string().min(2, "Tipo de evento obrigatorio."),
  date: z.string().optional(),
  guest_count: z.string().optional(),
  budget_range: z.string().optional(),
  notes: z.string().max(1500).optional(),
  source_page: z.string().min(1, "source_page obrigatorio.")
});

export type LeadInput = z.infer<typeof leadSchema>;
