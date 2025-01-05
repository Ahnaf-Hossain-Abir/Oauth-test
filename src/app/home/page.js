import { auth } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (!session?.user) redirect("/");
  return (
    <div className="flex flex-col gap-4 items-center m-4">
      {session.user.image && session.user.email ? (
        <>
          {" "}
          <h1 className="text-3xl">
            <span className="font-bold">welcome</span>, {session.user.name}
          </h1>
          <Image
            src={session.user.image}
            alt={session.user.name}
            width={125}
            height={125}
            className="rounded-full"
          />
        </>
      ) : (
        <h1 className="text-3xl">
          <span className="font-bold">welcome</span>, {session.user.email}
        </h1>
      )}
    </div>
  );
};

export default page;
