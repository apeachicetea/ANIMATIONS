import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  height: 300px;
  width: 500px;
  background: white;
  border-radius: 30px;
  display: flex;
  position: absolute;
  top: 150px;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

const box = {
  entry: (custom: boolean) => ({
    x: custom ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  //custom 3
  exit: (custom: boolean) => ({
    x: custom ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prevPlease = () => {
    setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <Wrapper>
      {/* custom 2 */}
      <AnimatePresence custom={back}>
        <Box
          //custom 1
          custom={back}
          variants={box}
          initial='entry'
          animate='center'
          exit='exit'
          //react는 key만 바뀌어도 엘리먼트가 바뀌었다고 인식한다
          //그래서 react는 컴포넌트를 리랜더링하게 된다
          //따라서 initial,animate,exit 애니메이션이 동작하게 된다.
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={nextPlease}>Next</button>
      <button onClick={prevPlease}>Prev</button>
    </Wrapper>
  );
}

export default App;
