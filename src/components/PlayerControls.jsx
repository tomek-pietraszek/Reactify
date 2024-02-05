import styled from "styled-components";
import { CiRepeat } from "react-icons/ci";
import { BiSkipNext, BiSkipPrevious, BiShuffle } from "react-icons/bi";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import { reducerCases } from "../utils/Constants";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { useEffect, useState } from "react";

function PlayerControls() {
  const [{ token, playerState }, dispatch] = useStateProvider();
  const [progress, setProgress] = useState(0);


  const changeTrack = async (type) => {
   const data = await axios.post(
      `https://api.spotify.com/v1/me/player/${type}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    const response = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );

    const { item } = data;
    if (data !== "") {
      const currentlyPlaying = {
        id: item.id,
        name: item.name,
        artists: item.artists.map((artist) => artist.name),
        image: item.album.images[2].url,
      };
      dispatch({ type: reducerCases.SET_CURRENTLY_PLAYING, currentlyPlaying });
    } else {
      dispatch({
        type: reducerCases.SET_CURRENTLY_PLAYING,
        currentlyPlaying: null,
      });
    }
  };

  const changeState = async () => {
    const state = playerState ? "pause" : "play";
  
    await axios.put(
      `https://api.spotify.com/v1/me/player/${state}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: reducerCases.SET_PLAYER_STATE,
      playerState: !playerState,
    });
  };
  useEffect(() => {
    if (playerState) {
      const interval = setInterval(async () => {
        const response = await axios.get(
          "https://api.spotify.com/v1/me/player/currently-playing",
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );
        const progress = response.data.progress_ms / response.data.item.duration_ms;
        setProgress(progress);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [playerState, token]);
  
  return  (
    <Container>
      <div className="controls-wrapper">
        <div className="controls">
          <div className="left-controls">
            <div className="shuffle">
              <BiShuffle />
            </div>
            <div className="previous">
              <BiSkipPrevious onClick={() => changeTrack("previous")} />
            </div>
            <div className="play">
            {playerState ? (
              <BsFillPauseCircleFill onClick={changeState} />
            ) : (
              <BsFillPlayCircleFill onClick={changeState} />
            )}
            </div>
            <div className="next">
              <BiSkipNext onClick={() => changeTrack("next")} />
            </div>
            <div className="repeat">
              <CiRepeat />
            </div>
          </div>
          <div className="right-controls"></div>
        </div>
        <progress className="progress-bar" value={progress} max="1"></progress>
      </div>
    </Container>
  );
  
}

export default PlayerControls;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .controls-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .controls {
    display: flex;
  }

  .left-controls,
  .right-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .progress-bar {
    width: 50rem;
    height: 4px;
    margin-top: 1rem;
    color: #1db954; 
    background: #535353; 
  }
  .progress-bar::-webkit-progress-bar {
    background: #535353; 
  }
  .progress-bar::-webkit-progress-value {
    background: #1db954; 
  }
  .progress-bar::-moz-progress-bar {
    background: #1db954; 
  }

  .play svg,
  .previous svg,
  .next svg,
  .repeat svg,
  .shuffle svg {
    cursor: pointer;
  }

  .play svg {
    color: white;
    font-size: 2.5rem;
    &:hover {
      color: white;
      transform: scale(1.05);
      transition: 0.2s ease-in-out;
    }
  }

  .previous svg,
  .next svg {
    color: #b3b3b3;
    font-size: 2.2rem;
    &:hover {
      color: white;
    }
  }

  .repeat svg,
  .shuffle svg {
    color: #b3b3b3;
    font-size: 1.2rem;
    &:hover {
      color: white;
    }
  }
`;