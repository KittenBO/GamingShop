import CardsGames from "../Elements/Games/CardsGames";
import SearchLetters from "../Elements/Games/SearchLetters";

export default function Games() {
    return (
      <>
      <div className="w-full flex">
        <SearchLetters />
        <CardsGames/>
      </div>
      </>
    );
}