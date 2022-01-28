import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Lottie } from '@alfonmga/react-lottie-light-ts';

type TProps = {
  margin?: string;
};

const LottieColorfulLoading: React.FC<TProps> = ({ margin = '60px auto' }) => {
  const [loaded, setLoaded] = useState(null);

  const loadedSpeechBubble = async () => {
    const SpeechBubble = await import('./file/loading-screen-dot.json');
    setLoaded(SpeechBubble);
  };

  useEffect(() => {
    loadedSpeechBubble();
  }, []);

  if (!loaded) return null;

  return (
    <StyledLottie className="styled-lottie">
      <Lottie
        config={{
          loop: true,
          animationData: loaded,
        }}
      />
    </StyledLottie>
  );
};

export default LottieColorfulLoading;

const StyledLottie = styled.div`
  margin: 0;
`;
