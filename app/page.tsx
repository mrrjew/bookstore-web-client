import Books from "./(pages)/(home)/Books";
import Genres from "./(pages)/(home)/Genres";
import Hero from "./(pages)/(home)/Hero";
import Inspiration from "./(pages)/(home)/Inspiration";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Genres />
      <Books />
      <Inspiration />
    </div>
  );
}
