import { useNavigate } from 'react-router-dom';


type Props = {
   url: string;
}

export default function Logo({ url }: Props) {
   const navigate = useNavigate();
   function goToHome() {
      navigate('/');
   }
   return (
      <img
         onClick={goToHome}
         src={url}
         alt="logo-image"
         className='w-14 h-14 object-cover cursor-pointer'
      />
   );
}