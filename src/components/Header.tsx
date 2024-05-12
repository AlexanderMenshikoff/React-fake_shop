import { Link } from "react-router-dom";
import { FakeLogo } from "./FakeLogo";

export function Header() {
  return (
    <div className="bg-black opacity-90 h-[80px] fixed w-[100%] flex items-center justify-center z-[1]">
      <nav className="flex justify-center items-center ">
        <Link
          to="/"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          <FakeLogo template="w-[220px] h-[130px] fixed left-[0px] top-[0px]" />
        </Link>

        <ul className="text-white flex gap-[10px]">
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/delivery">Delivery</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
