import styled from "styled-components";
import { FaSearch, FaUsers } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { useStateProvider } from "../utils/StateProvider";

export default function Navbar({ navBackground }) {
  const [{ userInfo }] = useStateProvider();

  return (
    <Container
      style={{
        backgroundColor: navBackground
          ? "#1F1252"
          : "transparent",
      }}
    >
      <div className="search_bar">
        <FaSearch />
        <input type="text" placeholder="What do you want to listen to?" />
      </div>
      <a href="#" className="avatar">
        <div className="bell-circle">
          <div className="bell">
            <GoBell />
          </div>
        </div>
        <div className="users-icon-circle">
          <div className="users-icon">
            <FaUsers />
          </div>
        </div>
        <div className="profile_img-circle">
          <div className="profile_img" title={userInfo?.userName}>
            <img src={userInfo?.userImg} alt="profile img" />
            <div className="user-name-popup">{userInfo?.userName}</div>
          </div>
        </div>
      </a>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 10vh;
  position: sticky;
  top: 0;
  transition: 0.3s ease-in-out;

  .search_bar {
    background-color: white; 
    width: 30%;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    input {
      border: none;
      height: 2rem;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
    svg {
      color: #ccc; 
    }
  }
  
  .avatar {
    text-decoration: none;
    color: #000000b4;
    padding: 0.3rem 0.3rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    transition: 0.2s ease-in-out;
    opacity: 0.8;
    .bell-circle,
    .profile_img-circle,
    .users-icon-circle {
      display: flex;
      align-items: center;
      background-color: #121212;
      border-radius: 50%;
      padding: 0.3rem 0.3rem;
      &:hover {
        background-color: black;
        opacity: 1;
      }
    }
  }
  .bell-circle,
  .users-icon-circle {
    .bell,
    .users-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1.5rem;
      width: 1.5rem;
      font-size: 1.1rem;
      border-radius: 50%;
      color: white;
      &:hover {
        color: white;
      }
    }
  }
  .profile_img-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #121212;
    border-radius: 50%;
    padding: 0.3rem 0.3rem;
    .profile_img {
      height: 1.8rem;
      width: 1.8rem;
      object-fit: cover;
      img {
        border-radius: 50%;
        width: 1.8rem;
        height: 1.8rem;
        object-fit: cover;
      }
      &:hover {
        transform: scale(1.05);
        transition: 0.2s ease-in-out;
      }
      .user-name-popup {
        display: none;
        position: absolute;
        background-color: #fff;
        color: #000;
        border-radius: 5px;
        padding: 5px;
        top: -30px;
        left: 50%;
        transform: translateX(-50%);
        transition: opacity 0.2s;
      }
      .profile_img:hover .user-name-popup {
        display: block;
        opacity: 1;
      }
      .profile_img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
        &:hover {
          transform: scale(1.05);
          transition: 0.2s ease-in-out;
        }
      }
    }
  }
`;
