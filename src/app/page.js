import Credential from "@/Components/Credential";
import LoginForm from "@/Components/LoginForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-4">
      <h1 className="text-3xl my-3">Hey, time to Sign In!</h1>
      <Credential/>
      <LoginForm/>
    </div>
  );
}
