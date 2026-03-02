"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type LeadFormProps = {
  sourcePage: string;
};

type FormState = {
  name: string;
  phone: string;
  event_type: string;
  date: string;
  guest_count: string;
  budget_range: string;
  notes: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  event_type: "",
  date: "",
  guest_count: "",
  budget_range: "",
  notes: ""
};

export function LeadForm({ sourcePage }: LeadFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const payload = { ...form, source_page: sourcePage };

    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = (await response.json()) as { ok: boolean; message: string };

    if (!response.ok || !data.ok) {
      setStatus("error");
      setMessage(data.message || "Nao foi possivel enviar.");
      return;
    }

    trackEvent("submit_lead_form", { source_page: sourcePage, event_type: form.event_type });
    setStatus("success");
    setMessage("Recebemos seu briefing! Em breve entramos em contato.");
    setForm(initialState);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-brand border border-rose-100 bg-white p-6 shadow-soft">
      <h3 className="font-serifBrand text-2xl text-cocoa-800">Briefing rapido do evento</h3>
      <p className="text-sm text-cocoa-700">
        Preencha os campos principais para receber seu orcamento personalizado.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          placeholder="Nome"
          value={form.name}
          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
          className="rounded-xl border border-rose-200 px-4 py-3 text-sm outline-none ring-cocoa-700/40 focus:ring"
        />
        <input
          required
          placeholder="WhatsApp"
          value={form.phone}
          onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))}
          className="rounded-xl border border-rose-200 px-4 py-3 text-sm outline-none ring-cocoa-700/40 focus:ring"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <input
          required
          placeholder="Tipo de evento"
          value={form.event_type}
          onChange={(e) => setForm((prev) => ({ ...prev, event_type: e.target.value }))}
          className="rounded-xl border border-rose-200 px-4 py-3 text-sm outline-none ring-cocoa-700/40 focus:ring"
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))}
          className="rounded-xl border border-rose-200 px-4 py-3 text-sm outline-none ring-cocoa-700/40 focus:ring"
        />
        <input
          placeholder="Quantidade de convidados"
          value={form.guest_count}
          onChange={(e) => setForm((prev) => ({ ...prev, guest_count: e.target.value }))}
          className="rounded-xl border border-rose-200 px-4 py-3 text-sm outline-none ring-cocoa-700/40 focus:ring"
        />
      </div>

      <input
        placeholder="Faixa de investimento (opcional)"
        value={form.budget_range}
        onChange={(e) => setForm((prev) => ({ ...prev, budget_range: e.target.value }))}
        className="w-full rounded-xl border border-rose-200 px-4 py-3 text-sm outline-none ring-cocoa-700/40 focus:ring"
      />

      <textarea
        rows={4}
        placeholder="Detalhes do pedido, personalizacao e observacoes"
        value={form.notes}
        onChange={(e) => setForm((prev) => ({ ...prev, notes: e.target.value }))}
        className="w-full rounded-xl border border-rose-200 px-4 py-3 text-sm outline-none ring-cocoa-700/40 focus:ring"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-cocoa-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cocoa-800 disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Enviar briefing"}
      </button>

      {status !== "idle" ? <p className="text-sm text-cocoa-700">{message}</p> : null}
    </form>
  );
}
