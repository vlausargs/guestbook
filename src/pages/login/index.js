import { Roboto_Mono } from "next/font/google";
import { createUser, login } from "../network";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/auth";
import { shallow } from "zustand/shallow";

const roboto = Roboto_Mono({ subsets: ["latin"] });

const Page = () => {
  const router = useRouter();
  const [identity, setidentity] = useState("");
  const [password, setpassword] = useState("");
  const [token, setToken] = useAuthStore(
    (state) => [state.token, state.setToken],
    shallow
  );

  const submit = async () => {
    // createUser("usertest3", "a3@a.com", "name1", "asdqwe123");
    var res = await login(identity, password);
    if (res.status != 200) return alert(res?.data?.message);
    setToken(res.data.token);
    router.replace("/");
  };
  return (
    <div
      className={
        roboto.className + " flex flex-col h-screen w-60 mx-auto justify-center"
      }
    >
      <div className="flex flex-col mb-2">
        <span>Username/Email</span>
        <input
          className="border-2 border-black"
          name="username"
          onChange={(e) => setidentity(e.target.value)}
        />
      </div>
      <div className="flex flex-col mb-2">
        <span>password</span>
        <input
          className="border-2 border-black"
          name="password"
          type="password"
          onChange={(e) => setpassword(e.target.value)}
        />
      </div>
      <button
        className="shadow-lg rounded-lg justify-center bg-slate-500 p-2 flex mb-2"
        onClick={() => submit()}
      >
        login
      </button>
    </div>
  );
};
export default Page;
