import React from 'react';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';

import { HelpSidebar } from '../../generic/help-sidebar';
import messages from './messages';

const GradingSidebar = ({ intl, courseId, proctoredExamSettingsUrl }) => (
  <HelpSidebar
    courseId={courseId}
    showOtherSettings
    proctoredExamSettingsUrl={proctoredExamSettingsUrl}
  >
    <h4 className="help-sidebar-about-title">
      {messages.gradingSidebarTitle.defaultMessage}
    </h4>
    <p className="help-sidebar-about-descriptions">
      {messages.gradingSidebarAbout1.defaultMessage}
    </p>
    <p className="help-sidebar-about-descriptions">
      {messages.gradingSidebarAbout2.defaultMessage}
    </p>
    <p className="help-sidebar-about-descriptions">
      {messages.gradingSidebarAbout3.defaultMessage}
    </p>
  </HelpSidebar>
);

GradingSidebar.defaultProps = {
  proctoredExamSettingsUrl: '',
};

GradingSidebar.propTypes = {
  intl: intlShape.isRequired,
  courseId: PropTypes.string.isRequired,
  proctoredExamSettingsUrl: PropTypes.string,
};

export default injectIntl(GradingSidebar);
