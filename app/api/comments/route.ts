import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("restaurant");
    const comments = await db.collection("comments").find({}).toArray();
    return NextResponse.json({ data: comments });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      { data: [], error: "Failed to fetch comments" },
      { status: 500 },
    );
  }
}
