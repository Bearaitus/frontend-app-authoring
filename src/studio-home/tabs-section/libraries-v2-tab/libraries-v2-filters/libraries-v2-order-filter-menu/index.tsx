import React, { useMemo } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from './messages';

import LibrariesV2FilterMenu from '../libraries-v2-filter-menu';

const LibrariesV2OrderFilterMenu: React.FC<{
  onItemMenuSelected: (value: string) => void;
  isFiltered: boolean;
}> = ({ onItemMenuSelected, isFiltered }) => {
  const intl = useIntl();

  const libraryV2Orders = useMemo(
    () => [
      {
        id: 'sort-libraries-v2-az',
        name: messages.librariesV2OrderFilterMenuAscendantLibrariesV2.defaultMessage,
        value: 'sortLibrariesV2AZ',
      },
      {
        id: 'sort-libraries-v2-za',
        name: messages.librariesV2OrderFilterMenuDescendantLibrariesV2.defaultMessage,
        value: 'sortLibrariesV2ZA',
      },
      {
        id: 'sort-libraries-v2-newest',
        name: messages.librariesV2OrderFilterMenuNewestLibrariesV2.defaultMessage,
        value: 'sortLibrariesV2Newest',
      },
      {
        id: 'sort-libraries-v2-oldest',
        name: messages.librariesV2OrderFilterMenuOldestLibrariesV2.defaultMessage,
        value: 'sortLibrariesV2Oldest',
      },
    ],
    [intl],
  );

  const handleLibraryV2OrderSelected = (libraryV2Order: string) => {
    onItemMenuSelected(libraryV2Order);
  };

  return (
    <LibrariesV2FilterMenu
      id="dropdown-toggle-libraries-v2-order-menu"
      menuItems={libraryV2Orders}
      onItemMenuSelected={handleLibraryV2OrderSelected}
      defaultItemSelectedText={messages.librariesV2OrderFilterMenuAscendantLibrariesV2.defaultMessage}
      isFiltered={isFiltered}
    />
  );
};

export default LibrariesV2OrderFilterMenu;
