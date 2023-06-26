import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <title>Abhinav Parbhakar Portfolio</title>
    <div className="flex flex-col mt-4 justify-center align-middle">
      <div className="flex flex-col md:flex-col md:justify-center items-center">
            <h1 className='hidden md:flex md:font-bold md:mb-3'>Introduction</h1>
            <img src="/homePic.jpg" alt="Abhinav Parbhkar is an aspiring ML Engineer" className='hidden md:flex md:max-w-[70vw] md:h-[35vw]'/>
            <i className='hidden md:flex md:text-sm'>Overlooking Lake Louise, Banff</i>
            <h1 className='mb-3 font-bold md:hidden'>Introduction</h1>
            <img src="/homePicSmall.jpg" alt="Abhinav Parbhakar" className='max-w-[60vw] max-h-[82vw] md:hidden'/>
            <i className='text-sm md:hidden'>Overlooking Peyto Lake, Banff</i>
      </div>
      <div className='flex flex-col justify-center my-5  items-center'>
        <p className='font-sans max-w-[60vw]'>Who is <i className='text-orange-400'> Abhinav Parbhakar</i>? Currently enrolled at University of Alberta, I'm entering my final year in the BS Computing Science Program, and I'm someone 
         that has project and work experience with <i className='text-blue-300'>front-end development</i>, developing and using
          API's and databases with <i className='text-blue-300'>AWS</i>, and 
          project and work experience in many applications of <i className='text-purple-400'>Machine Learning</i> such as designing Information Retrieval, Recommendation Systems, utilzing
          knowledge of concepts such as Transformers, LLM's, Neural Networks, CLassification, and Tokenization, by leveraging industry standard frame-works and
          libraries such as <i className='text-purple-400'>TensorFlow</i>, <i className='text-purple-400'>PyTorch</i>, <i className='text-purple-400'>OpenCV</i>, and
          <i className='text-purple-400'> Numpy</i>, as well as pre-built models from the HuggingFace library such as the <i className='text-purple-400'>BERT</i> model for <i className='text-purple-400'>NLP.</i>. 
        </p>
        <br/>
        <p className='font-sans max-w-[60vw]'>Currently, in the summer of 2023, I am living in Edmonton, AB, where I'm currently working on<Link href="/Experience" className='underline'> internships.</Link> I will continue my Education
        in September 2023 as I head into my final year of my undergraduate degree. However, I'm open to work any software development or machine learning work part time during the coming semester so please feel free to <Link href="/Contact" className='underline'>contact me</Link> if you wish to learn more about my skillset and how I can contribute to projects. For more information on what I'm working on,
         or to follow the work that I'm doing in real time, feel free to checkout my <Link className="underline"href="https://github.com/AbhinavParbhakar" target='_blank' rel='noopener'>GitHub repository</Link>.</p>
        <br />
        <p className='font-sans max-w-[60vw] mb-2'>Looking ahead, after completing my undergraduate degree, I hope to pursue a MSc in Computing Science with a focus on doing research in any field of machine learning as it's a field
        that interests me a lot. </p>
      </div>
    </div>
    </>
  )
}
