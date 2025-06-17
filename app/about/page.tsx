import Image from "next/image";

export default async function About() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <Image src="/next.svg" alt="Next.js Logo" width={200} height={200} />
        <p className="mt-4 text-lg">Lorem ipsum dolor sit consectetur.</p>
      </div>
    </>
  );
}
