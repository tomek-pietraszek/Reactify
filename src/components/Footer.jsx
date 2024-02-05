import styled from "styled-components";
import PlayerControls from "./PlayerControls";
import CurrentTrack from "./CurrentTrack";
import VolumeBar from "./VolumeBar";

function Footer() {
  return (
    <Container>
      <CurrentTrack />
      <PlayerControls />
      <VolumeBar />
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background-color: black;
  color: white;
  height: 100%;
  width: 100%;


  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;
