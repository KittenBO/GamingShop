import MGCards from "../Elements/MGList/MGCards";

export default function MGList() {
    return (
      <>
        <h1 className='font-serif text-6xl sm:text-7xl text-center font-medium text-primary mt-10 sm:mt-32 pb-6'>Мини-игры</h1>
        <hr className='w-5/6 sm:w-4/5 mx-auto my-5 border-b-2 border-primary' />
        <MGCards />
      </>
    );
}