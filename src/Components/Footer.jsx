import { FaGithub } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import mainLogo from "./../assets/images/mylogo.png";

function Footer() {
  const iconsTab = [
    { icon: <FaGithub /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <FaLinkedin /> },
  ];
  return (
    <>
      <footer className='bg-black'>
        <div className='container mx-auto  py-[10px] items-center'>
          {/* footer div all */}
          <div className='flex justify-between flex-col md:flex-row  items-center md:items-center  md:gap-[5rem] text-left'>
            {/* logo side */}
            <div className='flex flex-col w-1/2 md:p-0 py-4 gap-8'>
              <img
                src={mainLogo}
                alt='footer_logo'
                className='w-[200px] md:ml-[400px] hover:shadow-sm shadow-black'
              />
              <p className='text-[15px] font-medium text-[#646464] mt-[-55px] md:ml-[259px] md:w-full'>
                Our Commitment is to Deliver Superior Technological Solutions
                That Combine Innovation and Practicality, Elevating Your
                Business and Driving Growth in a Rapidly Evolving Digital World
                !
              </p>
              {/* socials */}
              <div className='flex gap-7 text-[18px] text-[#646464] justify-center md:justify-center md:ml-[466px]'>
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className='text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#fa4040] hover:text-white cursor-pointer'
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              <p className='text-[16px] font-medium text-[#646464] md:ml-[400px] w-full mb-5'>
                Privacy Policy | © {new Date().getFullYear()} Tekleeyesus <br />{" "}
                Design by{" "}
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/tekle-eyesus'
                >
                  me😘!
                </a>
              </p>
            </div>

            {/* middle div */}
            {/* <div className='flex flex-col gap-8 relative'>
              <p className='text-[22px] font-bold footer-main'>Our Classes</p>

              <span className='top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]'></span>

              <p className='text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold'>
                Fitness Classes
              </p>
              <p className='text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold'>
                Aerobics Classes
              </p>
              <p className='text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold'>
                Power Yoga
              </p>
              <p className='text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold'>
                Learn Machines
              </p>
              <p className='text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold'>
                Full-body Strength
              </p>
            </div> */}

            {/* right div
            <div className='flex flex-col gap-8 relative'>
              <p className='text-[22px] font-bold footer-main'>Working Hours</p>

              <span className='top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]'></span>

              <p className='text-[16px]  text-[#646464] font-bold'>
                Monday - Friday:
              </p>
              <p className='text-[16px] text-[#646464] font-medium'>
                7:00am - 21:00pm
              </p>
              <p className='text-[16px] text-[#646464] font-bold'>Saturday:</p>
              <p className='text-[16px] text-[#646464] font-medium'>
                7:00am - 19:00pm
              </p>
              <p className='text-[16px] text-[#646464] font-bold '>
                Sunday - Closed
              </p>
            </div> */}

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
