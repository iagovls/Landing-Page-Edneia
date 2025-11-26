import Link from "next/link";
import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="px-6 py-5 bg-gradient-to-r from-red-900 to-red-950 text-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-3">
        <div className="flex items-center justify-center">
          <Image
            src="/Logo%20Neia%20branco.png"
            alt="Logo Ednéia"
            width={180}
            height={90}
            priority
          />
        </div>
        <div className="flex items-center justify-center gap-6 text-white">
          <Link href={`mailto:${CONTACT_EMAIL}`} aria-label="Email" className="flex items-center gap-2">
            <MdOutlineEmail className="w-7 h-7" />
          </Link>
          <Link href={`https://instagram.com/`} aria-label="Instagram" className="flex items-center gap-2">
            <FaInstagram className="w-6 h-6" />
          </Link>
          <Link href={`https://wa.me/${WHATSAPP_NUMBER}`} aria-label="WhatsApp" className="flex items-center gap-2">
            <FaWhatsapp className="w-6 h-6" />
          </Link>
        </div>
        <p className="text-center text-xs md:text-sm">© {new Date().getFullYear()} A Marca é Você. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}