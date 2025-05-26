import { Header } from "../components/header";
import { Body } from "../components/body/body";


export default function Home() {
  


  return (
    <>
      <Header />
      <main className="h-screen bg-white flex flex-col items-center gap-y-4">
        <Body />
      </main>
    </>
  );
}
