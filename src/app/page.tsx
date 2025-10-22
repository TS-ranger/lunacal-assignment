import { ProfileWidget } from "@/components/ProfileWidget";


export default function Home() {
  return (
    <main className="min-h-screen text-white p-4 md:p-8 flex items-center justify-center bg-linear-to-b from-[#2c3136] to-[#191B1F]">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>Left Div</div>

        <div className="flex flex-col space-y-8">
          <ProfileWidget />
        </div>
      </div>
    </main>
  );
}