import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // Basic validation
    if (!data || typeof data !== "object" || !("email" in data)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }
    // Simple honeypot check
    if ((data as any).website) {
      return NextResponse.json({ ok: true });
    }
    // Here you could forward to your CRM/email provider
    // For now, just log to server output
    console.log("Contact submission:", data);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
