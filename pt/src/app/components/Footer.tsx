import Link from "next/link";
const Footer = () => {
  return (
    <div className="relative">
      <div className="flex justify-center w-full h-24 bg-gradient-to-t from-gray-400 to-black space-x-3">
      <Link href="/" className="block mb-4" >Home</Link>
          <Link href="/about" className="block mb-4" >About</Link>
          <Link href="/aanbod" className="block mb-4" >Aanbod</Link>
          <Link href="/book" className="block mb-4" >Afspraak</Link>
      </div>
      </div>
    
  );
};

export default Footer;
