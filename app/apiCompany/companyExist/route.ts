import connectseq from "../../../server/database-sequalize/index";
import Company from "../../../server/models/company";
import { NextResponse } from "next/server";

export async function POST(req : any) {
  try {
    await connectseq();
    const { emailCompany } = await req.json();
    const company = await Company.findOne({ emailCompany }).select("_id");
    console.log("company: ", company);
    return NextResponse.json({ company });
  } catch (error) {
    console.log(error);
  }
}
