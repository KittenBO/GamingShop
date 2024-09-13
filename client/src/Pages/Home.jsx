import Cards from "../Elements/Home/Cards"
import ChatHome from "../Elements/Home/ChatHome"

export default function Home() {
    return (
      <>
        <div className="mx-auto pt-28">
          <h1 className="font-serif text-5xl sm:text-7xl text-center font-medium text-primary pb-3 sm:pb-6">ИгроваяЛавка</h1>
          <h1 className="text-base sm:text-xl text-center font-light text-secondary leading-4 sm:leading-10">
            Нам доверяют более 100.000 пользователей<br/>
            Популярные игры:
          </h1>
          <Cards />
          <ChatHome  />
        </div>
      </>
    );
}