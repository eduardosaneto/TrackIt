import LogoBox from "../../styledComponents/LogoBox";
import TrackItLogo from "../../assets/images/TrackItLogo.JPG";

export default function Logo() {
  return (
    <>
      <LogoBox>
        <div>
          <img src={TrackItLogo} alt="logo" />
        </div>
        <div>
          <h1>TrackIt</h1>
        </div>
      </LogoBox>
    </>
  );
}
