import React from 'react';
import PropTypes from 'prop-types';

import { useIntl } from '@edx/frontend-platform/i18n';

import AppSettingsModal from 'CourseAuthoring/pages-and-resources/app-settings-modal/AppSettingsModal';
import messages from './messages';

/**
 * Settings widget for the "calculator" Course App.
 * @param {{onClose: () => void}} props
 */
const CalculatorSettings = ({ onClose }) => {
  const intl = useIntl();
  return (
    <AppSettingsModal
      appId="calculator"
      title={messages.heading.defaultMessage}
      enableAppHelp={messages.enableCalculatorHelp.defaultMessage}
      enableAppLabel={messages.enableCalculatorLabel.defaultMessage}
      learnMoreText={messages.enableCalculatorLink.defaultMessage}
      onClose={onClose}
    />
  );
};

CalculatorSettings.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default CalculatorSettings;
