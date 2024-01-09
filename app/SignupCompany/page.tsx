import { getServerSession } from 'next-auth';
import SignupForm from './signupForm';
import { redirect } from 'next/navigation';
// import Nav from "../Nav/page"

export default async function Signup() {
  const session = await getServerSession();
  if (session) {
    redirect('/Home');
  }
  return(
    <div>
  <SignupForm/>
    </div>
    )
  }