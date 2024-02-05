import styled from "styled-components";
import { IoLibrary } from "react-icons/io5";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import Playlists from "./Playlists";
export default function Sidebar() {
  return (
    <Container>
      <div className="links">
        <div className="logo">
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" />
        </div>
        <ul>
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li>
            <IoLibrary />
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <Playlists />
    </Container>
  );
}

const Container = styled.div`
  /* border: 1px solid white; */
  background-color: black;
  color: rgb(179, 179, 179);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: left;
      padding-left: 1rem;
      //margin: 1rem, 0;
      img {
       
        max-inline-size: 30%;
        block-size: auto;
        text-align: center;
        /* width: 110px; */
        margin: 10px auto;
      }
    }
    ul {
      /* border: 1px solid gray; */
      background-color: #121212;
      border-radius: 10px;
      margin: 0 10px 0 10px;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      padding: 16px;
      gap: 16px;
      li {
        display: flex;
        gap: 16px;
        cursor: pointer;
        transition: 0.3ms ease-in-out;
        :hover {
          color: #fff;
        }
      }
    }
  }
`;
