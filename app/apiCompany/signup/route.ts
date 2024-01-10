import connectseq from "../../../server/database-sequalize/index";
import Company from "../../../server/models/company";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req : any) {
  try {
    const { companyName,ownerName,phoneNumber,location,longtitude,laltitude,emailCompany,passwordCompany } = await req.json();
    const hashedPassword = await bcrypt.hash(passwordCompany, 10);
    await connectseq();
    await Company.create({ companyName,ownerName,phoneNumber,location,longtitude,laltitude,emailCompany , passwordCompany: hashedPassword });

    return NextResponse.json({ message: "Company registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the company." },
      { status: 500 }
    );
  }
}
