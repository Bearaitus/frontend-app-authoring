import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { useSelector } from 'react-redux';
import { getPagePath } from '../utils';
import { getStudioHomeData } from '../studio-home/data/selectors';
import messages from './messages';
export const useContentMenuItems = courseId => {
  return [];
};
export const useSettingMenuItems = courseId => {
  const intl = useIntl();
  const studioBaseUrl = getConfig().STUDIO_BASE_URL;
  const { canAccessAdvancedSettings } = useSelector(getStudioHomeData);
  const items = [
    {
      href: `${studioBaseUrl}/settings/grading/${courseId}`,
      title: 'Оценка',
    },
    {
      href: `${studioBaseUrl}/assets/${courseId}`,
      title: 'Дополнительные файлы',
    },
    ...(canAccessAdvancedSettings === true
      ? [{
        href: `${studioBaseUrl}/settings/advanced/${courseId}`,
        title: 'Расширенные настройки',
      }] : []
    ),
  ];
  return items;
};
export const useToolsMenuItems = courseId => {
  const intl = useIntl();
  const studioBaseUrl = getConfig().STUDIO_BASE_URL;
  const items = [
    {
      href: `${studioBaseUrl}/import/${courseId}`,
      title: 'Импорт курса',
    },
    {
      href: `${studioBaseUrl}/export/${courseId}`,
      title: 'Экспорт курса',
    },
  ];
  return items;
};