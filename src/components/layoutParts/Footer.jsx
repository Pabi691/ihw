import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa';
import { FaThreads, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {

  const links = [
    { labelCompany: 'About Us', pathCompany: '/about', labelService: 'Contact Us', pathService: '/contact-us' },
    { labelService: 'Track Order', pathService: '/myaccount/orders' },
    { labelCompany: 'Terms & Conditions', pathCompany: '/terms-and-conditions', labelService: 'Return Order', pathService: '/myaccount/orders' },
    { labelCompany: 'Privacy Policy', pathCompany: '/privacy-policy', labelService: 'Cancel Order', pathService: '/myaccount/orders' },
    { labelCompany: 'Return/Refund Policy', pathCompany: '/return-policy' }
  ];


  return (
    <footer className="bg-[#2d2d2d] py-5 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 py-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
{/* Branches Section */}
        <div>
          <h5 className="text-[#04A9FF] font-bold mb-4 text-base uppercase">
            Branches
          </h5>

          <div className="space-y-6 text-sm text-gray-200">

            {/* Durgapur */}
            <div>
              <h6 className="font-semibold mb-1">Durgapur</h6>
              <p>Address: 2nd Floor, Above Punjab National Bank,</p>
              <p>City Center, Durgapur, West Bengal – 713216</p>
              <p>Phone: +91 9875517402</p>
              <p>+91 8910652352</p>
            </div>

            {/* Salt Lake */}
            <div>
              <h6 className="font-semibold mb-1">Salt Lake</h6>
              <p>
                Address: EC-20, Ground Floor (Back Side), Opp. CC1,
              </p>
              <p>Sector-1, Salt Lake City, Kolkata, West Bengal – 700064</p>
              <p>Phone: +91 8961194044</p>
            </div>

          </div>
        </div>
        <div className='mt-10'>
          <div className="space-y-6 text-sm text-gray-200">
            {/* Lake Gardens */}
            <div>
              <h6 className="font-semibold mb-1">Lake Gardens, Kolkata</h6>
              <p>Address: 1A, Sultan Alam Road,</p>
              <p>Lake Gardens, Kolkata, West Bengal – 700033</p>
              <p>Phone: +91 7980221032</p>
              <p>+91 8910097668</p>
            </div>

            {/* Siliguri */}
            <div>
              <h6 className="font-semibold mb-1">Siliguri</h6>
              <p>
                Address: Sevoke Road, Siliguri City Plaza,
              </p>
              <p>
                2nd Floor, Shop No. 3, District: Jalpaiguri,
              </p>
              <p>
                Ward No. 40, Pincode – 734001
              </p>
              <p>Phone: +91 7439436698</p>
            </div>

          </div>
        </div>
        {/* Company Section */}
        <div className=''>
          <h5 className="text-[#04A9FF] font-bold mb-3 text-base uppercase">Company</h5>
          <ul className='flex flex-wrap gap-2 md:block'>
            {links.map((item, index) => (
              <li key={index} className="mb-2">
                <Link to={item.pathCompany} className="border-r-2 md:border-none pr-1 md:pr-0 hover:text-gray-400 font-medium">
                  {item.labelCompany}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Customer Service Section */}
        <div>
          <h5 className="text-[#04A9FF] font-bold mb-3 text-base uppercase">Customer Service</h5>
          <ul className='flex flex-wrap gap-2 md:block'>
            {links.map(
              (item, index) => (
                item.labelService && (
                  <li key={index} className="mb-2">
                    <Link to={item.pathService} className="border-r-2 md:border-none pr-1 md:pr-0 hover:text-gray-400 font-medium">
                      {item.labelService}
                    </Link>
                  </li>
                )

              )
            )}
          </ul>
        </div>

        {/* Social Media Section */}
        <div className='ml-0 md:ml-[-25px]'>
          <h5 className="text-[#04A9FF] font-bold mb-3 text-base uppercase">Connect With Us</h5>
          <ul className="flex space-x-6 items-center">
            <li className="flex items-center space-x-2">
              <Link
                to={"https://www.facebook.com/"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-400"
              >
                <FaFacebook size={24} />
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link
                to={"https://www.instagram.com/"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-400"
              >
                <FaInstagram size={24} />
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link
                to={"https://twitter.com/"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-400"
              >
                <FaXTwitter size={24} />
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link
                to={"https://www.threads.net/"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-gray-400"
              >
                <FaThreads size={24} />
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link className="text-sm hover:text-gray-400" rel="noopener noreferrer" target="_blank" to={'https://in.pinterest.com/'}>
                <FaPinterest size={24} />
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <Link className="text-sm hover:text-gray-400" rel="noopener noreferrer" target="_blank" to={'https://youtube.com/'}>
                <FaYoutube size={24} />
              </Link>
            </li>
          </ul>
          <h5 className="text-[#04A9FF] font-bold mb-3 text-base uppercase mt-4">Opening Hours</h5>
          <p className='text-sm'>Monday to Sunday: 11Am - 7Pm</p>
          {/* <form className='w-full flex mt-4'>
            <input type="email" placeholder="Enter Email Id" className="p-2 text-sm bg-gray-900 text-white 
            focus:outline-none border-b-2 border-[#04A9FF]" />
            <button type="submit" className="bg-[#04A9FF] text-black p-2 font-semibold text-sm">
              SUBSCRIBE
            </button>
          </form> */}
        </div>

      </div>

      <div className="footer_down max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <hr />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
          <div>
            <h5 className="font-bold mb-3 text-base uppercase">Planters</h5>
            {loading ? (
              <ul>
                {Array.from({ length: 7 }).map((_, index) => (
                  <li key={index}>
                    <Skeleton height={15} width={"100%"} />
                  </li>
                ))}
              </ul>
            ) : (
              <ul className='flex flex-wrap gap-2 md:block'>
                {Array.isArray(planters) &&
                  planters.map((item) => (
                    <li key={item.id} className="mb-2">
                      <Link to={`../${item.slug}`} className="text-xs border-r-2 md:border-none pr-1 md:pr-0 hover:text-gray-400 font-medium">
                        {item.category_name}
                      </Link>
                    </li>
                  ))}
              </ul>
            )}

          </div>

          <div>
            <h5 className="font-bold mb-3 text-base uppercase">Container</h5>
            {loading?(
              <ul>
              {Array.from({ length: 7 }).map((_, index) => (
                <li key={index}>
                  <Skeleton height={15} width={"100%"} />
                </li>
              ))}
            </ul>
            ):(
              <ul className='flex flex-wrap gap-2 md:block'>
                {Array.isArray(container) &&
                  container.map((item) => (
                    <li key={item.id} className="mb-2">
                      <Link to={`../${item.slug}`} className="text-xs border-r-2 md:border-none pr-1 hover:text-gray-400 font-medium">
                        {item.category_name}
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
          </div>

        </div> */}


        <hr className='my-3' />

        <div className='flex-col flex justify-center text-sm md:justify-between items-center md:flex-row'>
          <div>
            Copyright © {new Date().getFullYear()} <span className='text-[#04A9FF]'>Indian Hair World</span>
          </div>
          <div>
            Designed & developed by <Link className='text-[#04A9FF]' target='_blank' to='https://kyleinfotech.co.in/'>Kyle Infotech</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
