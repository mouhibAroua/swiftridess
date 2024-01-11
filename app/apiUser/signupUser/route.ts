import connectseq from "../../../server/database-sequalize/index";
import User from "../../../server/models/users";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req : any) {
  try {
    const { fullName,phoneNumber,longtitude,laltitude,email,password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectseq();
    await User.create({ fullName,phoneNumber,location,longtitude,laltitude,email , password: hashedPassword });

    return NextResponse.json({ message: "user registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
