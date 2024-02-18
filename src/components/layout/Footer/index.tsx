import IconInstagram from '@/components/icons/footer/IconInstagram';
import IconMastercard from '@/components/icons/footer/IconMastercard';
import IconVisa from '@/components/icons/footer/IconVisa';
import IconYoutube from '@/components/icons/footer/IconYoutube';
import useGeneral from '@/hooks/general/useGeneral';

const Footer = () => {
  const { currentYear } = useGeneral();

  return (
    <footer className="mt-[40px]">
      <div className="bg-[#222222] hidden lg:block">
        <div className="container px-[20px] lg:px-[40px] py-[8px] flex items-center">
          <div className="allcaps-12 text-white">ACCEPTED PAYMENTS</div>
          <div className="flex items-center ml-auto">
            <IconVisa />
            <IconMastercard />
          </div>
        </div>
      </div>
      <div className="bg-[#1919190D] lg:bg-white">
        <div className="container px-[20px] lg:px-[40px] py-[20px] block lg:flex lg:items-center">
          <div className="flex items-center justify-center mb-[10px] lg:mb-0">
            <div className="text-[10px] leading-[20px] mr-[24px] cursor-pointer">
              SUBCRIBE NEWSLETTER
            </div>
            <a href="#faq" className="text-[10px] leading-[20px] mr-[24px]">FAQ</a>
            <a href="#contact-us" className="text-[10px] leading-[20px]">CONTACT US</a>
          </div>
          <div className="flex items-center justify-center lg:ml-auto lg:mr-[24px] mb-[10px] lg:mb-0">
            <a href="#terms-and-condition" className="text-[10px] leading-[20px] text-[#00000080] mr-[24px]">
              Terms & Conditions
            </a>
            <a href="#privacy-policy" className="text-[10px] leading-[20px] text-[#00000080] mr-[24px]">
              Privacy Policy
            </a>
            <div className="text-[10px] leading-[20px] text-[#00000080]">
              {`© ${currentYear} sepatucompass.com`}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <a
              href="https://www.instagram.com/sepatucompass/"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-[8px]"
            >
              <IconInstagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UCjeDs7AZg1ZgFBbIvhdCoww"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
