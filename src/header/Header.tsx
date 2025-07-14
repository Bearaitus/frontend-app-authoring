import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { StudioHeader } from '@edx/frontend-component-header';
import { type Container } from '@openedx/paragon';

import { useContentMenuItems, useSettingMenuItems, useToolsMenuItems } from './hooks';
import messages from './messages';

type ContainerPropsType = React.ComponentProps<typeof Container>;

interface HeaderProps {
  contextId?: string,
  number?: string,
  org?: string,
  title?: string,
  isHiddenMainMenu?: boolean,
  isLibrary?: boolean,
  containerProps?: ContainerPropsType,
}

const Header = ({
  contextId = '',
  org = '',
  number = '',
  title = '',
  isHiddenMainMenu = false,
  isLibrary = false,
  containerProps = {},
}: HeaderProps) => {
  const intl = useIntl();

  const contentMenuItems = useContentMenuItems(contextId);
  const settingMenuItems = useSettingMenuItems(contextId);
  const toolsMenuItems = useToolsMenuItems(contextId);

  const mainMenuDropdowns = !isLibrary ? [
    {
      id: `${intl.formatMessage(messages['header.links.content'])}-dropdown-menu`,
      buttonTitle: 'Файлы и дополнительные страницы',
      items: contentMenuItems,
    },
    {
      id: `${intl.formatMessage(messages['header.links.settings'])}-dropdown-menu`,
      buttonTitle: 'Настройки',
      items: settingMenuItems,
    },
    {
      id: `${intl.formatMessage(messages['header.links.tools'])}-dropdown-menu`,
      buttonTitle: 'Импорт/Экспорт курса',
      items: toolsMenuItems,
    },
  ] : [];

  return (
    <>
      <StudioHeader
        org={org}
        number={number}
        title={title}
        isHiddenMainMenu={isHiddenMainMenu}
        mainMenuDropdowns={mainMenuDropdowns}
        containerProps={containerProps}
      />
      <style>
        {`
          #user-dropdown-menu {
            display: none !important;
          }
        `}
      </style>
    </>
  );
};

export default Header;
