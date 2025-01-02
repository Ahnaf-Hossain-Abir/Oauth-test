import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async() => {
    const session = await auth();

    if(!session?.user) redirect("/")
    return (
        <div>
            this is actual home.
        </div>
    );
};

export default page;