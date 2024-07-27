import MGCards from "../Elements/MGList/MGCards";

export default function MGList() {
    return (
      <>
        <h1 className='text-7xl text-center font-bold text-primary mt-32 pb-6'>Мини-игры</h1>
        <hr className='w-4/5 mx-auto my-5 border-b-4 border-primary' />
        <MGCards />
      </>
    );
}