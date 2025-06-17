import Image from "next/image";
import WelcomeMessage from "@/src/components/WelcomeMessage";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return (
    <>
      <WelcomeMessage name="Malik" />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold mb-8">My first project!</h1>
        <Image src="/next.svg" alt="Next.js Logo" width={200} height={200} />
        <p className="mt-4 text-lg">Lorem ipsum dolor sit consectetur.</p>
      </div>
    </>
  );
}
