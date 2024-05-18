import Logo from "../shared/Logo";
import LogoWhiteIcon from '/LogoWhite.png';
import { firstFooterNav, secondFooterNav } from "../../data/footerNavigation";


type FooterNavigationProps = {
   text: string;
}

function FooterNavigation({ text }: FooterNavigationProps) {
   return (
      <p>{text}</p>
   );
}
export default function Footer() {
   return (
      <footer className="mt-4 mx-2 bg-[#151515] text-white">
         <Logo url={LogoWhiteIcon} />
         <p className='text-[32px] font-bold'>Want to recieve our awesome stories?</p>
         <div className="flex justify-between bg-[#fff] p-2">
            <input
               placeholder="Enter your Email"
               className='outline-none text-[#000] text-[16px] p-1 flex-2'
            />
            <button className="bg-[#000] flex-1 text-[16px] p-1">Subscribe</button>
         </div>
         {firstFooterNav.map(nav => <FooterNavigation text={nav.title} key={nav.idGen} />)}
         {secondFooterNav.map(nav => <FooterNavigation text={nav.title} key={nav.idGen} />)}
         <p>Email</p>
         <p>birushandegeya@gmail.com</p>
         <div>
            <p>&copy; Electron</p>
            <p>All rights reserved.</p>
         </div>
      </footer>
   );
}