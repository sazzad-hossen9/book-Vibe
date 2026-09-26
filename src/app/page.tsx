import BannerPage from "./components/homePage/banner";
import Books from "./components/homePage/books";

export default function Home() {
  return (
    <div>
      <main>
        <BannerPage />
        <Books />
      </main>
    </div>
  );
}
