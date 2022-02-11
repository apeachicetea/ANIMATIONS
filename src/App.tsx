import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  height: 300px;
  width: 500px;
  background: white;
  border-radius: 30px;
  position: absolute;
  top: 100px;
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 50,
  },
};

function App() {
  const [showing, setShowing] = useState(false);

  const onClick = () => {
    setShowing(!showing);
  };

  return (
    <Wrapper>
      <button onClick={onClick}>Click</button>
      {/* AnimatePresence은 엘리먼트가 사라지게 있다면 그걸 애니메이션 할 수 있게 해준다 */}
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial='initial'
            animate='visible'
            //엘리먼트가 사라질때 에니메이션
            exit='leaving'
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
