import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          //x,y옵션으로 x,y축으로만 움직이게 제약 가능
          drag
          //dragging이 허용될 수 있는 영역
          dragConstraints={biggerBoxRef}
          //드래그 후 제자리로 오게한다
          dragSnapToOrigin
          //값을 1로 지정하면 마우스 포인트와 같이 움직인다
          //0일때는 제한한 영역 안에서만 움직인다
          dragElastic={0}
          variants={boxVariants}
          whileDrag='drag'
          whileHover='hover'
          whileTap='click'
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
