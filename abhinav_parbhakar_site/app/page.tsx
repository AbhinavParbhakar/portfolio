import Image from 'next/image'
export default function Home() {
  return (
    <>
    <title>Abhinav Parbhakar Portfolio</title>
    <div className="flex flex-col mt-4 justify-center align-middle">
      <div className="flex flex-col md:flex-col md:justify-center items-center">
            <h1 className='hidden md:flex md:mb-2'>Introduction</h1>
            <img src="/homePic.jpg" alt="Abhinav Parbhkar is an aspiring ML Engineer" className='hidden md:flex md:max-w-5xl'/>
            <h1 className=' md:hidden'>Introduction</h1>
            <img src="/homePicSmall.jpg" alt="Abhinav Parbhakar" className='md:hidden'/>
      </div>
      <div className='flex justify-center'>
        <p className='font-sans max-w-lg'>Currently enrolled at University of Alberta, entering his final year in the BS Computing Science Program, 
          <i className='text-orange-400'> Abhinav Parbhakar</i> has project and work experience with front-end, project experience back-end development, and 
          project and work experience in many applications of Machine Learning such as designing Information Retrieval, Recommendation Systems, and  
        </p>
      </div>
    </div>
    </>
  )
}
