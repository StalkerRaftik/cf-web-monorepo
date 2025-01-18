import React from 'react';
import { IconButton, keyframes } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  15% {
    transform: scale(1.15);
  }
  25% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const AnimatedIconButton = styled(IconButton)`
  animation: ${pulse} 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
`;

const HeartComponent: React.FC = () => {
  return (
    <AnimatedIconButton>
      <FavoriteIcon color="primary" />
    </AnimatedIconButton>
  );
};

export default HeartComponent;
