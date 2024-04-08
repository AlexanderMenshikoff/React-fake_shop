import { FakeLogo } from "./FakeLogo";

export function Header() {
  return (
    <div className="bg-black opacity-90 h-[80px] fixed w-[100%] flex items-center justify-center">
      <nav className="flex justify-center items-center ">
        <FakeLogo template="w-[220px] h-[130px] fixed left-[0px]" />
        <ul className="text-white flex gap-[10px]">
          <li>
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Delivery</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
