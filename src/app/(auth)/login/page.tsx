"use client";
import Loading from "@/app/loading";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GiMummyHead } from "react-icons/gi";

const Page = () => {
  const { status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    } else {
      setIsLoading(false);
    }
  }, [router, status]);

  return (
    <main className="container mx-auto px-4 items-center flex justify-center min-h-screen">
      {isLoading ? (
        <Loading />
      ) : (
        status !== "authenticated" && (
          <div className="flex flex-col items-center gap-2 bg-primary-content p-10 rounded-box">
            {/* Logo Section */}
            <GiMummyHead className="text-6xl md:text-8xl fill-accent-content hover:scale-110 transition-all" />

            {/* Welcome section */}
            <h1 className="text-xl md:text-2xl text-primary font-bold text-center">
              Muminime <span className="text-accent-content">Login</span>
            </h1>
            <p className="mt-4">Login with</p>
            <button
              className="btn btn-primary w-full"
              onClick={() => signIn("google")}
            >
              <FaGoogle /> Google
            </button>
            <button
              className="btn btn-primary w-full"
              onClick={() => signIn("github")}
            >
              <FaGithub /> Github
            </button>
          </div>
        )
      )}
    </main>
  );
};
export default Page;
