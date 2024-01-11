import connectseq from "../../../server/database-sequalize/index";
import User from "../../../server/models/users";
import { NextResponse } from "next/server";

export async function POST(req : any) {
  try {
    await connectseq();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}
