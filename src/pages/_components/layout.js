import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <div
      className={
        roboto.className + " flex min-h-screen w-fit min-w-full flex-col"
      }
    >
      <div className="font-extrabold text-3xl mx-auto mt-4">
        SIMPLE GUESTBOOK
      </div>
      <div className="flex flex-row pt-10">
        <div className="mr-auto ml-[calc(100vw/4)] flex w-full max-w-[calc(100vw/2)] flex-col break-words ">
          {children}
        </div>
        <div className="fixed inset-x-[80vw] w-[300px] h-[340px] p-10 bg-slate-300">
          <div className="flex font-extrabold text-lg">Login info</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
