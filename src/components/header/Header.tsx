import Logo from "../shared/Logo"
import MenuIcon from "../shared/MenuIcon";
import LogoIcon from '/logo.png';

export default function Header() {
   return (
      <header>
         <Logo url={LogoIcon} />
         <MenuIcon />
      </header>
   );
}