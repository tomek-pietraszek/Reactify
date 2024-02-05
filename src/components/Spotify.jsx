import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

function Spotify() {
  const [{ token }, dispatch] = useStateProvider();

  //   console.log(initialState.navBackground)

  const bodyRef = useRef();

  const [navBackground, setNavBackground] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);
 
  //   console.log(navBackground);

  const scrollHandler = () => {
    bodyRef.current.scrollTop >= 30
      ? setNavBackground(true)
      : setNavBackground(false);

    bodyRef.current.scrollTop >= 268
      ? setHeaderBackground(true)
      : setHeaderBackground(false);
  };

  useEffect(() => {
    const getUserInfo = async () => {
      //we can destructure data directly from response object
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });

      //   console.log(data);

      //get user data from fetched object
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
        userImg: data.images[0].url,
      };

      //   console.log(userInfo)

      //update userInfo object
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };

    //call the function
    getUserInfo(); 
    window.history.pushState({}, null, '/')
  }, [token, dispatch]);

  return (
    <Container>
      <div className="spotify-body">
        <Sidebar />
        <div className="body" ref={bodyRef} onScroll={scrollHandler}>
          <Navbar navBackground={navBackground} />
          <div className="body-contents">
            <Body headerBackground={headerBackground} />
          </div>
        </div>
      </div>
      <div className="spotify-footer">
        <Footer />
      </div>
    </Container>
  );
}

export default Spotify;

const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 90vh 10vh;

  .spotify-body {
    display: grid;
    grid-template-columns: 20vw 80vw;
    height: 100%;
    width: 100%;
    background-color: black;
    color: white;
  }
  .body {
    height: 100%;
    width: 100%;
    overflow: auto;
    background-color: black;
    color: white;

    /* border: 1px solid white; */
    border-radius: 10px;
    background-color: #121212;
    margin: 10px 15px 0 0;
    &::-webkit-scrollbar {
      width: 11px;

      &-thumb {
        background-color: gray;
      }
    }
  }
  .body-contents {
    height: 70%;
    /* border-radius: 10px; */
    background: linear-gradient(
      to bottom,
      #000000 0%,
      #1F1252 50%,
      #000000 100%
    );
  }
`;
