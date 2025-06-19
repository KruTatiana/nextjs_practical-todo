import { Header } from "../components/header";
import { Main } from "../components/Main/Main";

export default function Home() {
  return (
    <div className="h-dvh bg-violet-300 flex-column alighn-cente">
      <Header />
      <Main />
    </div>
  );
}
