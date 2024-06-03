import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-4xl font-bold text-blue-800">Hello, Prudhvi!</h1>
      <h3 className="mt-4 text-2xl font-bold text-orange-400">Congrats!!! Deploying your first application</h3>
    </div>
  );
}
