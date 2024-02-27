import CardsList from "../../ui/CardsList";
import { cards as cardsArray } from "../../data/cards";

function WelcomeIntroduction() {
  
  return ( 
      <section className="container mx-auto mb-20">
        <div className="px-2 pb-8 text-center">
          <h1 className="font-semi-bold mx-auto mb-4 mt-14 text-3xl sm:text-5xl">
            Website Development
          </h1>
          <h2 className="mb-4 mt-8 text-center text-sm sm:text-lg">
            I help individuals and brands achieve their goals by creating
            user-centric digital products and engaging web experiences. As a web
            developer, I specialize in crafting intuitive websites and
            interactive solutions that bring visions to life.
          </h2>
        </div>
        <CardsList cardsArray={cardsArray} />
      </section>          
  );
}

export default WelcomeIntroduction;
