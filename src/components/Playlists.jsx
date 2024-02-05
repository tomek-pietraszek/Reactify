import { useEffect} from "react";
import styled from "styled-components";
import { BsDot } from "react-icons/bs";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

export default function Playlists() {
  const [{ token, playlists }, dispatch] = useStateProvider();

 

  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response);
      const { items } = response.data;
      // console.log(items)

      //const imageUrl = items.images[0].url;
      // console.log(items.images[0].url);
      const playlists = items.map((playlist) => {
        const name = playlist.name;
        const id = playlist.id;
        const ownerName = playlist.owner.display_name;
        //const imageUrl = playlist.uri;
        const type = playlist.type;

        return { name, id, ownerName, type };
      });
      console.log(playlists);
      // const playlists = items.map(({ name, id }) => {
      //   return { name, id };
      // });

      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };

    getPlaylistData();
  }, [token, dispatch]);

  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
  };

  return (
    <Container>
      
      <div
        className="library"
      
      >
        <span>Playlists</span>
        <span>Artist</span>
        <span>Album</span>
        <span>Podcasts & Shows</span>
      </div>

      {playlists.map(({ name, id, ownerName, type }) => {
        return (
          <div
            className="playlist"
            key={id}
            onClick={() => changeCurrentPlaylist(id)}
          >
            <div className="image">
              <img
                src="https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2"
                alt=""
              />
            </div>
            <div className="playlist_info">
              <h4>{name}</h4>
              <span>
                {" "}
                {type}<BsDot />
                {ownerName}
              </span>
            </div>
          </div>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  overflow: hidden;
  color: rgb(179, 179, 179);
  margin: 10px;
  border-radius: 10px;
  background-color: #121212;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0 16px 3rem;
  gap: 16px;
  height: 72vh;
  max-height: 100%;
  /* padding-bottom: 3rem; */
  overflow: auto;
 
  &::-webkit-scrollbar {
    width: 11px;
    &-thumb {
      background-color: gray;
    }
  }
  .library {
    display: flex;
    justify-content: space-around;
    width: 100%;
    position: sticky;
    top: 0;
    padding: 1rem 0;
    box-shadow:#121212 0px 20px 30px -10px;
    background-color:#121212;
   
    span {
      background-color: #2a2a2a;
      border-radius: 15px;
      color: white;
      padding: 5px 8px;
      font-size: 13px;

    }
  }
  .playlist {
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: 0.25ms ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: rgb(42, 42, 42);
    }
    &_info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      h4 {
        color: #fff;
      }
    }
    .image {
      img {
        gap: 16px;
        height: 3rem;
        border-radius: 5px;
        color: white;
      }
    }
  }
`;
