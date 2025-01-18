import { Chat, LocalFireDepartment, Person, Favorite, Timer } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { TFunctionNonStrict } from 'i18next';

export const featuresConfig = [
  {
    key: 'chat',
    icon: Chat,
    content: (t: TFunctionNonStrict) => t('welcome.features.chat'),
  },
  {
    key: 'echo',
    icon: LocalFireDepartment,
    content: (t: TFunctionNonStrict) => (
      <>
        <Typography component="span">{t('welcome.features.echoPart1')}</Typography>{' '}
        <LocalFireDepartment color="primary" sx={{ verticalAlign: 'text-bottom' }} />{' '}
        <Typography component="span">{t('welcome.features.echoPart2')}</Typography>
      </>
    ),
  },
  {
    key: 'profile',
    icon: Person,
    content: (t: TFunctionNonStrict) => t('welcome.features.profile'),
  },
  {
    key: 'swipe',
    icon: Favorite,
    content: (t: TFunctionNonStrict) => t('welcome.features.swipe'),
  },
  {
    key: 'timeLimit',
    icon: Timer,
    content: (t: TFunctionNonStrict) => t('welcome.features.timeLimit'),
  },
];
