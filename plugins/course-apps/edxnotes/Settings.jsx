import React from 'react';
import PropTypes from 'prop-types';

import { useIntl } from '@edx/frontend-platform/i18n';

import AppSettingsModal from 'CourseAuthoring/pages-and-resources/app-settings-modal/AppSettingsModal';
import messages from './messages';

/**
 * Settings widget for the "edxnotes" Course App.
 * @param {{onClose: () => void}} props
 */
const NotesSettings = ({ onClose }) => {
  const intl = useIntl();
  return (
    <AppSettingsModal
      appId="edxnotes"
      title={messages.heading.defaultMessage}
      enableAppHelp={messages.enableNotesHelp.defaultMessage}
      enableAppLabel={messages.enableNotesLabel.defaultMessage}
      learnMoreText={messages.enableNotesLink.defaultMessage}
      onClose={onClose}
    />
  );
};

NotesSettings.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default NotesSettings;
