import React from "react";
import { doSocialLogin } from "@/app/actions";
const LoginForm = () => {
  return (
    <form action={doSocialLogin}>
      <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded " type="submit" name="action" value="google">
        Google
      </button>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4" type="submit" name="action" value="github">
        Github
      </button>
    </form>
  );
};

export default LoginForm;
