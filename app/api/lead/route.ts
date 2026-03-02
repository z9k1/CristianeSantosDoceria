import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/lead-schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: parsed.error.issues[0]?.message ?? "Dados invalidos." },
        { status: 400 }
      );
    }

    // Placeholder for integration with email/CRM/Google Sheets.
    console.log("Novo lead recebido:", parsed.data);

    return NextResponse.json({ ok: true, message: "Lead recebido com sucesso." }, { status: 200 });
  } catch (error) {
    console.error("Erro ao processar lead:", error);
    return NextResponse.json({ ok: false, message: "Erro interno ao enviar lead." }, { status: 500 });
  }
}
