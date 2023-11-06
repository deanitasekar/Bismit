import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <nav className="w-full h-20 bg-white flexs drop-shadow-lg 20">
        <button className="ml-60 my-7 text-gray-500 cursor-pinter"> Homepage </button>
        <button className="mx-10 my-7 text-gray-500 cursor-pinter"> Friends </button>
        <button className="mx-10 my-7 text-gray-500 cursor-pinter"> Tasks </button>
        <button className="mx-10 my-7 text-gray-500 cursor-pinter"> Event </button>
        <button className="mx-10 my-7 text-gray-500 cursor-pinter"> About Fasilkom/UI </button>
        <button className="mx-10 my-7 text-gray-500 cursor-pinter"> Welcome, Deanita Sekar Kinasih </button>
      </nav>
      <div className="drop-shadow-xl-10"> </div>
    <p className="mx-15 my-40 text-black-400 cursor-pinter"> NIKCNAME </p>
    </main>   
  )
}
