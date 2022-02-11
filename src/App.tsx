import styled from "styled-components";
import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
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
  // useMotionValue는 기본적으로 값이 바뀌어도 컴포넌트를 재렌더링하지않는다
  const x = useMotionValue(0);
  // 그래서
  // useEffect로 값을 추척하는 것이다
  // useEffect(() => {
  //   x.onChange(() => console.log(x.get()));
  // }, [x]);
  return (
    <Wrapper>
      <button onClick={() => x.set(200)}>click me</button>
      {/* style={{ x: x <- style의 x좌표 }} style의 x좌표가 바뀔 때마다, 이 motionValue 역시 업데이트 된다 */}
      <Box style={{ x }} drag='x' dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
