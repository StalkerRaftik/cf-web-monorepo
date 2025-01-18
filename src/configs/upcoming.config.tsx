import { Recommend, QuestionAnswer, Quiz, PersonSearch } from '@mui/icons-material';
import { TFunctionNonStrict } from 'i18next';

export const upcomingConfig = [
  {
    key: 'recommendations',
    icon: Recommend,
    content: (t: TFunctionNonStrict) => t('welcome.upcoming.recommendations'),
  },
  {
    key: 'topics',
    icon: QuestionAnswer,
    content: (t: TFunctionNonStrict) => t('welcome.upcoming.topics'),
  },
  {
    key: 'profileQuestions',
    icon: Quiz,
    content: (t: TFunctionNonStrict) => t('welcome.upcoming.profileQuestions'),
  },
  {
    key: 'preselect',
    icon: PersonSearch,
    content: (t: TFunctionNonStrict) => t('welcome.upcoming.preselect'),
  },
];
