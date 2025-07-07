import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from './messages';

import CoursesFilterMenu from '../courses-filter-menu';

const CoursesTypesFilterMenu = ({ onItemMenuSelected }) => {
  const intl = useIntl();

  const courseTypes = useMemo(
    () => [
      {
        id: 'all-courses',
        name: messages.coursesTypesFilterMenuAllCurses.defaultMessage,
        value: 'allCourses',
      },
      {
        id: 'active-courses',
        name: messages.coursesTypesFilterMenuActiveCurses.defaultMessage,
        value: 'activeCourses',
      },
      {
        id: 'archived-courses',
        name: messages.coursesTypesFilterMenuArchivedCurses.defaultMessage,
        value: 'archivedCourses',
      },
    ],
    [intl],
  );

  const handleCourseTypeSelected = (courseType) => {
    onItemMenuSelected(courseType);
  };

  return (
    <CoursesFilterMenu
      id="dropdown-toggle-course-type-menu"
      menuItems={courseTypes}
      onItemMenuSelected={handleCourseTypeSelected}
      defaultItemSelectedText={messages.coursesTypesFilterMenuAllCurses.defaultMessage}
    />
  );
};

CoursesTypesFilterMenu.propTypes = {
  onItemMenuSelected: PropTypes.func.isRequired,
};

export default CoursesTypesFilterMenu;
