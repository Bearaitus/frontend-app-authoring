import React, { useMemo } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Icon, Dropdown } from '@openedx/paragon';
import { Check, SwapVert } from '@openedx/paragon/icons';

import classNames from 'classnames';
import messages from './messages';
import { SearchSortOption } from './data/api';
import { useSearchContext } from './SearchManager';

export const SearchSortWidget = ({ iconOnly = false }: { iconOnly?: boolean }) => {
  const intl = useIntl();
  const {
    searchSortOrder,
    setSearchSortOrder,
    defaultSearchSortOrder,
  } = useSearchContext();

  const menuItems = useMemo(
    () => [
      {
        id: 'search-sort-option-most-relevant',
        name: messages.searchSortMostRelevant.defaultMessage,
        value: SearchSortOption.RELEVANCE,
        show: (defaultSearchSortOrder === SearchSortOption.RELEVANCE),
      },
      {
        id: 'search-sort-option-recently-modified',
        name: messages.searchSortRecentlyModified.defaultMessage,
        value: SearchSortOption.RECENTLY_MODIFIED,
        show: true,
      },
      {
        id: 'search-sort-option-recently-published',
        name: messages.searchSortRecentlyPublished.defaultMessage,
        value: SearchSortOption.RECENTLY_PUBLISHED,
        show: true,
      },
      {
        id: 'search-sort-option-title-az',
        name: messages.searchSortTitleAZ.defaultMessage,
        value: SearchSortOption.TITLE_AZ,
        show: true,
      },
      {
        id: 'search-sort-option-title-za',
        name: messages.searchSortTitleZA.defaultMessage,
        value: SearchSortOption.TITLE_ZA,
        show: true,
      },
      {
        id: 'search-sort-option-newest',
        name: messages.searchSortNewest.defaultMessage,
        value: SearchSortOption.NEWEST,
        show: true,
      },
      {
        id: 'search-sort-option-oldest',
        name: messages.searchSortOldest.defaultMessage,
        value: SearchSortOption.OLDEST,
        show: true,
      },
    ],
    [intl, defaultSearchSortOrder],
  );

  const menuHeader = messages.searchSortWidgetLabel.defaultMessage;
  const defaultSortOption = menuItems.find(
    ({ value }) => (value === defaultSearchSortOrder),
  );
  const shownMenuItems = menuItems.filter(({ show }) => show);

  // Show the currently selected sort option as the toggle button label.
  const selectedSortOption = shownMenuItems.find(
    ({ value }) => (value === searchSortOrder),
  ) ?? defaultSortOption;
  const toggleLabel = selectedSortOption ? selectedSortOption.name : menuHeader;

  return (
    <Dropdown id="search-sort-dropdown">
      <Dropdown.Toggle
        id="search-sort-toggle"
        title={messages.searchSortWidgetAltTitle.defaultMessage}
        alt={messages.searchSortWidgetAltTitle.defaultMessage}
        variant="outline-primary"
        className={classNames('dropdown-toggle-menu-items d-flex', {
          'border-0': iconOnly,
        })}
        size="sm"
      >
        <Icon src={SwapVert} className="d-inline" />
        { !iconOnly && <div className="py-0 px-1">{toggleLabel}</div>}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Header>{menuHeader}</Dropdown.Header>
        {shownMenuItems.map(({ id, name, value }) => (
          <Dropdown.Item
            key={id}
            onClick={() => {
              // If the selected sort option was re-clicked, de-select it (reset to default)
              const searchOrder = value === searchSortOrder ? defaultSearchSortOrder : value;
              setSearchSortOrder(searchOrder);
            }}
          >
            {name}
            {(value === searchSortOrder) && <Icon src={Check} className="ml-2" />}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SearchSortWidget;
