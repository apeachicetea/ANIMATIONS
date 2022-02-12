import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Box = styled(motion.div)`
  height: 300px;
  width: 300px;
  background: white;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClicked}>
      {/* 같은 layoutId를 주게 되면 두 움직임에 대한 애니메이션을 자동으로 부여해준다 */}
      <Box>
        {!clicked ? (
          <Circle layoutId='circle' style={{ borderRadius: 50 }} />
        ) : null}
      </Box>
      <Box>
        {clicked ? (
          <Circle layoutId='circle' style={{ borderRadius: 0, scale: 2 }} />
        ) : null}{" "}
      </Box>
    </Wrapper>
  );
}

export default App;
