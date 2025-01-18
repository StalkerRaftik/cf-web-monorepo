import { ContactPhone, Forum, Group, Favorite, Movie, NoAdultContent } from '@mui/icons-material';
import { TFunctionNonStrict } from 'i18next';

export const rulesConfig = [
  {
    key: 'nsfw',
    icon: NoAdultContent,
    content: (t: TFunctionNonStrict) => t('welcome.rules.nsfw'),
  },
  {
    key: 'contacts',
    icon: ContactPhone,
    content: (t: TFunctionNonStrict) => t('welcome.rules.contacts'),
  },
  {
    key: 'purpose',
    icon: Forum,
    content: (t: TFunctionNonStrict) => t('welcome.rules.purpose'),
  },
  {
    key: 'privacy',
    icon: Group,
    content: (t: TFunctionNonStrict) => t('welcome.rules.privacy'),
  },
  {
    key: 'behavior',
    icon: Favorite,
    content: (t: TFunctionNonStrict) => t('welcome.rules.behavior'),
  },
  {
    key: 'motivation',
    icon: Movie,
    content: (t: TFunctionNonStrict) => t('welcome.rules.motivation'),
  },
];
