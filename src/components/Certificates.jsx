/* eslint-disable react/no-unescaped-entities */
import certi1 from '../assets/devang mehta certificate.jpg'
import certi2 from '../assets/devang mehta certificate2.jpg'
import certi3 from '../assets/java_basic certificate_page-0001.jpg'
const Certificates = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4 py-8 bg-slate-900'>
        <h1 className='text-3xl text-cyan-200 font-semibold mb-4'>Certificates & Awards</h1>
        <div className='flex flex-col gap-14 px-10 md:gap-28'>
            <div className='flex flex-col gap-6 justify-center items-center md:flex-row md:gap-12'>
                <img src={certi1} alt='certificate1' className='h-44 w-60 md:h-1/3 md:w-1/3'></img>
                <p className='text-justify text-blue-300'>This certificate from the Dewang Mehta Foundation Trust is a Certificate of Appreciation for the "Smart Helmet" project from Sardar Patel College of Engineering. The project was shortlisted for the prestigious Shri Dewang Mehta IT Awards 2023, highlighting its innovation and impact in the field of Information Technology. The certificate acknowledges the efforts of Prarthan Parmar, a student involved in the project, under the guidance of Mr. Anuj Patel, the Head of the Department. The appreciation from such a notable foundation underscores the significance of the project and its potential contributions to technology and safety. The certificate features signatures from Harish Mehta, the Managing Trustee, and Jaimin Shah, a Trustee of the Dewang Mehta Foundation Trust, adding further credibility and honor to the recognition. Dated August 10, 2023, and issued in Ahmedabad, this certificate not only marks an academic and professional milestone for Prarthan but also reflects the collaborative effort and dedication of the team behind the Smart Helmet project. This recognition is a testament to the innovative spirit and technical prowess of the students at Sardar Patel College of Engineering, motivating them to continue striving for excellence in their future endeavors.Overall, this certificate serves as an inspiration for other students and budding engineers, encouraging them to pursue innovative solutions and contribute to advancements in their respective fields. It is a proud moment for all involved and sets a benchmark for future projects at the college.</p>
            </div>
            <div className='flex flex-col gap-6 justify-center items-center md:flex-row md:gap-12'>
                <img src={certi2} alt='certificate2' className='order-1 h-44 w-60 md:h-1/3 md:w-1/3 md:order-2'></img>
                <p className='text-justify text-blue-300 order-2 md:order-1'>The Dewang Mehta Foundation Trust's recognition is particularly significant as it comes from an organization known for promoting excellence and innovation in the IT industry. The Smart Helmet project’s shortlisting for the 2023 IT Awards highlights its innovative approach to enhancing safety through technology. This project not only exemplifies the practical application of engineering principles but also addresses a real-world problem, showcasing the potential for positive societal impact.Receiving this certificate is a noteworthy achievement for Prarthan Parmar and the team, as it validates their hard work and creativity. It also brings prestige to Sardar Patel College of Engineering, illustrating the high quality of education and mentorship provided by the institution, represented by Mr. Anuj Patel, the Head of the Department. The acknowledgment from industry leaders like Harish Mehta and Jaimin Shah further emphasizes the project’s significance and the potential it holds for future development and implementation.</p>
            </div>
            <div className='flex flex-col gap-6 justify-center items-center md:flex-row md:gap-12'>
                <img src={certi3} alt='certificate2' className='order-2 h-44 w-60 md:h-1/3 md:w-1/3 md:order-1'></img>
                <p className='text-justify text-blue-300 order-2 md:order-1'>I have earned a Java Basics Certificate from HackerRank, demonstrating my proficiency in foundational Java programming skills. This certification attests to my ability to write, analyze, and debug Java code effectively. It covers key concepts such as object-oriented programming, data structures, algorithms, and exception handling. The rigorous assessment required a thorough understanding of Java syntax and practical problem-solving abilities. This achievement reflects my commitment to continuous learning and my capability to apply Java in real-world scenarios. It serves as a testament to my skills and dedication as a competent and reliable Java developer.</p>
            </div>
        </div>
    </div>
  )
}

export default Certificates