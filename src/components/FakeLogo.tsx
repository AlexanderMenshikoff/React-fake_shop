import fakeLogo from "../img/fake-logo.png";
import { IFakeLogo } from "../interfaces/interfaces";

export function FakeLogo(props: IFakeLogo) {
  return (
    <>
      <img className={props.template} src={fakeLogo} alt="" />
    </>
  );
}
