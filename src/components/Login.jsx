import styled from "styled-components";
// import { useNavigate } from "react-router-dom";

const AUTH_URL_RAZ =
  "https://accounts.spotify.com/authorize?client_id=b730b7cf6222456da05e4bb8619a78a4&response_type=token&redirect_uri=https://reactify-chi.vercel.app/&scope=streaming%20user-library-read%20user-library-modify%20user-read-email%20user-read-private%20user-modify-playback-state%20user-read-playback-state%20user-read-currently-playing%20user-read-recently-played%20user-read-playback-position%20user-top-read";

const AUTH_URL_MERON =
  "https://accounts.spotify.com/authorize?client_id=b65f93f375894416beaa701ef2ec7a2f&response_type=token&redirect_uri=https://reactify-chi.vercel.app/&scope=streaming%20user-library-read%20user-library-modify%20user-read-email%20user-read-private%20user-modify-playback-state%20user-read-playback-state%20user-read-currently-playing%20user-read-recently-played%20user-read-playback-position%20user-top-read";

const AUTH_URL_TOMEK =
  "https://accounts.spotify.com/authorize?client_id=0384a3364b7d4b1b847e1490f9c3d00c&response_type=token&redirect_uri=https://reactify-chi.vercel.app/&scope=streaming%20user-library-read%20user-library-modify%20user-read-email%20user-read-private%20user-modify-playback-state%20user-read-playback-state%20user-read-currently-playing%20user-read-recently-played%20user-read-playback-position%20user-top-read";

// 0384a3364b7d4b1b847e1490f9c3d00c

// client ID: 0384a3364b7d4b1b847e1490f9c3d00c    && meron: b65f93f375894416beaa701ef2ec7a2f raz: b730b7cf6222456da05e4bb8619a78a4

function Login() {
  // const navigate = useNavigate(); // Get the navigate function from the hook

  // const handleClick = () => {
  //   // Use the navigate function to go to the "/spotify" route
  //   navigate('/spotify');
  // }
  return (
    <Container>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png"
        alt="spotify"
      />
      <div className = "buttons-container">
        <a href={AUTH_URL_RAZ}>Raz's Reactify</a>
        <a href={AUTH_URL_MERON}>Meron's Reactify</a>
        <a href={AUTH_URL_TOMEK}>Tomek's Reactify</a>
      </div>

    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5 rem;
  img {
    height: 20vh;
  }
  a {
    margin-top:2rem;
    margin-right:2rem;
    text-decoration: none;
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    border: none;
    color: #49f585;
    font-size: 1.4rem;
    cursor: pointer;
  }
  .buttons-container{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
