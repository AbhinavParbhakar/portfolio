import Image from 'next/image'
export default function Home() {
  return (
    <>
    <title>Abhinav Parbhakar Portfolio</title>
    <div className="flex flex-col mt-3">
      <div className="flex flex-col md:flex-row md:justify-center">
          <h1 className='flex flex-col mx-3'>Who is <p className="text-7xl font-mono text-orange-400"> Abhinav Parbhakar</p></h1>
          <img src="/homePagePic.png" alt="" className='max-w-lg max-h-80'/>
      </div>
      <div className='flex justify-center'>
        <p className='font-sans'>Currently enrolled at University of Alberta, entering his final year in the BS Computing Science Program,
          <style className='text-orange-400'>Abhinav Parbhakar</style> has experience with front-end and back-end development.
        </p>
      </div>
    </div>
    </>
  )
}
