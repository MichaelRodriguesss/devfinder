import "./style.scss";
import ProfilePicture from "../../assets/profile.jpg";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { HiLink } from "react-icons/hi";
import { BsFillBuildingsFill } from "react-icons/bs";

export const Card = () => {
  return (
    <>
      <div className="card">
        <div className="profile_image">
          <img src={ProfilePicture} alt="profile of the person"></img>
        </div>
        <div className="profile">
          <div className="profile_detail">
            <div className="title_data">
              <h2>The Octocat</h2>
              <p className="joined_data">Joined 25 jan 2011</p>
            </div>
            <p>@octocat</p>
            <h4>This profile has no bio</h4>
            <div className="profile_info">
              <div className="github_info">
                <div>
                  <p>Repos</p>
                  <p className="github_numbers">123</p>
                </div>
                <div>
                  <p>Followers</p>
                  <p className="github_numbers">123</p>
                </div>
                <div>
                  <p>Following</p>
                  <p className="github_numbers">123</p>
                </div>
              </div>
            </div>
            <div className="person_info">
              <div className="icons_text">
                <div className="info_icons-container">
                  <MdLocationPin className="info_icons" />
                  <p>San Francisco</p>
                </div>
                <div className="info_icons-container">
                  <AiOutlineTwitter className="info_icons" />
                  <p>Not Available</p>
                </div>
              </div>
              <div className="icons_text">
                <div className="info_icons-container">
                  <HiLink className="info_icons" />
                  <p>https:/github.com</p>
                </div>
                <div className="info_icons-container">
                  <BsFillBuildingsFill className="info_icons" />
                  <p>@github</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
