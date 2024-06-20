import Cards from "../Elements/Home/Cards"
import Footer from "../Elements/Global/Footer"

export default function Home() {
    return (
      <>
        <div className="container mx-auto pt-28">
          <h1 className="font-serif text-7xl text-center font-medium text-primary pb-6">ИгроваяЛавка</h1>
          <h1 className="text-xl text-center font-light text-secondary leading-10">
            Нам доверяют более 100.000 пользователей<br/>
            Популярные игры:
          </h1>
          <Cards />
        </div>
      </>
    );
}