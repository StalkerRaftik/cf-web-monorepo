import { BottomSheet, BottomSheetProps } from 'react-spring-bottom-sheet';
import { styled } from '@mui/material/styles';
import 'react-spring-bottom-sheet/dist/style.css';

const StyledBottomSheet = styled(BottomSheet)`
  --rsbs-backdrop-bg: rgba(0, 0, 0, 0.6);
  --rsbs-bg: ${({ theme }) => theme.palette.background.paper};
  --rsbs-handle-bg: ${({ theme }) => theme.palette.primary.main};
  --rsbs-max-w: auto;
  --rsbs-ml: env(safe-area-inset-left);
  --rsbs-mr: env(safe-area-inset-right);
  --rsbs-overlay-rounded: 16px;

  [data-rsbs-overlay] {
    z-index: 200;
  }

  &.rsbs {
    [data-rsbs-scroll] {
      padding: ${({ theme }) => theme.spacing(0, 2, 2, 2)};
    }
  }
`;

export const ThemedBottomSheet = (props: BottomSheetProps) => {
  return <StyledBottomSheet {...props} />;
};
