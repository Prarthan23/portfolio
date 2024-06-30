/* eslint-disable react/no-unescaped-entities */
import skill1 from '../assets/react.svg';
import skill2 from '../assets/icons8-nodejs.svg'
import skill3 from '../assets/icons8-express-js.svg'
import skill4 from '../assets/mongodb-ar21.svg'
import skill5 from '../assets/tailwindcss-logotype-white.svg'
import skill6 from '../assets/java-vertical.svg'
import skill7 from '../assets/w3_html5-icon.svg'
import skill8 from '../assets/w3_css-icon.svg'

const Skills = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 py-8 bg-slate-900'>
      <h3 className='text-4xl text-cyan-200 font-semibold mb-4'>Skiils</h3>
      <div className='flex flex-col gap-6 px-10 md:grid md:grid-cols-4'>
      <div className='flex flex-col justify-center items-center px-10 gap-3'>
            <img src={skill1} alt='react' className='h-24'></img>
            <p className='text-justify text-blue-300'>React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.</p>
        </div>
        <div className='flex flex-col justify-center items-center px-10 gap-3'>
            <img src={skill2} alt='nodejs' className='h-24'></img>
            <p className='text-justify text-blue-300'>Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. </p>
        </div>
        <div className='flex flex-col justify-center items-center px-10 gap-3'>
            <img src={skill3} alt='expressjs' className='h-24'></img>
            <p className='text-justify text-blue-300'>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.</p>
        </div>
        <div className='flex flex-col justify-center items-center px-10 gap-3'>
            <img src={skill4} alt='mongodb' className='h-24'></img>
            <p className='text-justify text-blue-300'>MongoDB handles the conversion of JSON and JSON-like documents, such as BSON, into Java objects effortlessly, making the reading and writing of data in MongoDB fast and incredibly efficient when analyzing real-time information across multiple development environments.</p>
        </div>
        <div className='flex flex-col justify-center items-center px-10 gap-3'>
            <img src={skill5} alt='tailwind' className='h-24'></img>
            <p className='text-justify text-blue-300'>Tailwind CSS is a design system implementation in pure CSS. It is also configurable. It gives developers super powers. It allows them to build websites with a clean consistent UI out of the box.</p>
        </div>
        <div className='flex flex-col justify-center items-center px-10 gap-3'>
            <img src={skill6} alt='java' className='h-24'></img>
            <p className='text-justify text-blue-300'>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere</p>
        </div>
        <div className='flex flex-col justify-center items-center px-10 gap-3'>
            <img src={skill7} alt='html5' className='h-24'></img>
            <p className='text-justify text-blue-300'>HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content.</p>
        </div>
        <div className='flex flex-col justify-center items-center px-10 gap-3'>
            <img src={skill8} alt='css' className='h-24'></img>
            <p className='text-justify text-blue-300'>Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML.</p>
        </div>
      </div>
        
    </div>
  )
}

export default Skills