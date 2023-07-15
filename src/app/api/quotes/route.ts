import quotes from "@/assets/data/favourite_quotes";
import { NextResponse } from "next/server";

export async function GET() {
  const res = quotes;

  return NextResponse.json(res);
}

export async function POST(req: Request) {}
