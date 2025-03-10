import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json(
    { message: "Raster tile service disabled" },
    { status: 404 }
  );
} 