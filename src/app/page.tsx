import { Header } from "../components/header/header";
import { Main } from "../components/Main/Main";

export default function Home() {
  return (
    <div className="h-dvh flex-column alighn-center">
      <Header />
      <Main />
    </div>
  );
}
