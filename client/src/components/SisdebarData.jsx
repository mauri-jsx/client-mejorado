/* eslint-disable react/prop-types */
import { datas } from "../data";
import { Link } from "react-router-dom"; // Importa Link para usar rutas

const SisdebarData = ({ toggle }) => {
  return (
    <div className="">
      {datas.map((data) => {
        return (
          <Link
            to={data.link} // Aquí usamos el link que definiste en data.jsx
            key={data.id}
            className={`${
              toggle ? "last:w-[3.6rem]" : "last:w-[17rem]"
            } sidebar last:absolute left-4 bottom-4`}
          >
            <div className="mr-8 text-[1.7rem] text-brown">{data.icon}</div>
            <div
              className={`${
                toggle ? "opacity-0 delay-200" : ""
              } text-[1rem] text-brown whitespace-pre`}
            >
              {data.text}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SisdebarData;
