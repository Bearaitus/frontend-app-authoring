import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';

import { HelpSidebar } from '../../generic/help-sidebar';
import messages from './messages';

const ScheduleSidebar = ({ courseId, proctoredExamSettingsUrl }) => {
  const intl = useIntl();
  return (
    <HelpSidebar
      courseId={courseId}
      proctoredExamSettingsUrl={proctoredExamSettingsUrl}
      showOtherSettings
    >
      <h4 className="help-sidebar-about-title">
        {messages.scheduleSidebarTitle.defaultMessage}
      </h4>
      <p className="help-sidebar-about-descriptions">
        {messages.scheduleSidebarAbout.defaultMessage}
      </p>
    </HelpSidebar>
  );
};

ScheduleSidebar.defaultProps = {
  proctoredExamSettingsUrl: '',
};

ScheduleSidebar.propTypes = {
  courseId: PropTypes.string.isRequired,
  proctoredExamSettingsUrl: PropTypes.string,
};

export default ScheduleSidebar;
