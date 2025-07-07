import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from './messages';

import CoursesFilterMenu from '../courses-filter-menu';

const CoursesOrderFilterMenu = ({ onItemMenuSelected }) => {
  const intl = useIntl();

  const courseOrders = useMemo(
    () => [
      {
        id: 'az-courses',
        name: messages.coursesOrderFilterMenuAscendantCurses.defaultMessage,
        value: 'azCourses',
      },
      {
        id: 'za-courses',
        name: messages.coursesOrderFilterMenuDescendantCurses.defaultMessage,
        value: 'zaCourses',
      },
      {
        id: 'newest-courses',
        name: messages.coursesOrderFilterMenuNewestCurses.defaultMessage,
        value: 'newestCourses',
      },
      {
        id: 'oldest-courses',
        name: messages.coursesOrderFilterMenuOldestCurses.defaultMessage,
        value: 'oldestCourses',
      },
    ],
    [intl],
  );

  const handleCourseTypeSelected = (courseOrder) => {
    onItemMenuSelected(courseOrder);
  };

  return (
    <CoursesFilterMenu
      id="dropdown-toggle-courses-order-menu"
      menuItems={courseOrders}
      onItemMenuSelected={handleCourseTypeSelected}
      defaultItemSelectedText={messages.coursesOrderFilterMenuAscendantCurses.defaultMessage}
    />
  );
};

CoursesOrderFilterMenu.propTypes = {
  onItemMenuSelected: PropTypes.func.isRequired,
};

export default CoursesOrderFilterMenu;
