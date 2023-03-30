import "./style.scss";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { HiLink } from "react-icons/hi";
import { BsFillBuildingsFill } from "react-icons/bs";
import moment from "moment";

export const Card = ({ user, userNotFound, loading }) => {
  const createdAt = moment(user?.created_at ?? "").format("DD/MM/YYYY");

  return (
    <>
      {!loading && !userNotFound && (
        <div className="card">
          <div className="profile_image">
            <img
              src={user?.avatar_url ?? "./PrintScreen-devfinder.png"}
              alt="avatar"
            />
          </div>

          <div className="profile">
            <div className="profile_detail">
              <div className="title_data">
                <div className="name_date-container">
                  <img src={user?.avatar_url ?? ""} alt="" />

                  <div className="name_date">
                    <div>
                      <h2>{user?.name ?? "No name"}</h2>

                      <p>@{user?.login ?? "No Username"}</p>
                    </div>

                    <p className="joined_data">Joined {createdAt}</p>
                  </div>
                </div>
              </div>

              <h4>{user?.bio ?? "No Bio"}</h4>

              <div className="profile_info">
                <div className="github_info">
                  <div>
                    <p>Repos</p>

                    <p className="github_numbers">
                      {user?.public_repos ?? "0"}
                    </p>
                  </div>
                  <div>
                    <p>Followers</p>

                    <p className="github_numbers">{user?.followers ?? "0"}</p>
                  </div>
                  <div>
                    <p>Following</p>

                    <p className="github_numbers">{user?.following ?? "0"}</p>
                  </div>
                </div>
              </div>

              <div className="person_info">
                <div className="icons_text">
                  <div className="info_icons-container">
                    <MdLocationPin className="info_icons" />

                    <p>{user?.location ?? "No Location"}</p>
                  </div>
                  <div className="info_icons-container">
                    <AiOutlineTwitter className="info_icons" />

                    <p>{user?.twitter_username ?? "No Twitter"}</p>
                  </div>
                </div>
                <div className="icons_text">
                  <div className="info_icons-container">
                    <HiLink className="info_icons" />

                    <p>{user?.blog ?? "No Website"}</p>
                  </div>

                  <div className="info_icons-container">
                    <BsFillBuildingsFill className="info_icons" />

                    <p>{user?.company ?? "No Company"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!loading && userNotFound && <p className="notfound">User Not Found !</p>}
    </>
  );
};
