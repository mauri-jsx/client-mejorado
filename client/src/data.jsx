import { RxDashboard } from "react-icons/rx";
import { MdInsights } from "react-icons/md";
import { FiUsers, FiLogOut } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai"; // Importa el icono de casa

export const datas = [
  {
    id: 0, // Nuevo ítem para Home
    icon: <AiFillHome />, // Icono de casa
    text: "Home",
    link: "/", // Ruta que te lleva al Home
  },
  {
    id: 1,
    icon: <RxDashboard />,
    text: "Publicaciones",
    link: "/publicaciones",
  },
  {
    id: 2,
    icon: <MdInsights />,
    text: "Publicar",
    link: "/publicar",
  },
  {
    id: 3,
    icon: <FiUsers />,
    text: "Perfil",
    link: "/perfil",
  },
  {
    id: 4,
    icon: <FiLogOut />,
    text: "Cerrar sesión",
    link: "/logout",
  },
];
