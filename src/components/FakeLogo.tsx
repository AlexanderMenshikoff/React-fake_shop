import fakeLogo from "../img/fake-logo.png";

interface IFakeLogo {
  template: string;
}

export function FakeLogo(props: IFakeLogo) {
  return (
    <>
      <img className={props.template} src={fakeLogo} alt="" />
    </>
  );
}
