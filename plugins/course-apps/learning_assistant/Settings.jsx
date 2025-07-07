import React from 'react';
import PropTypes from 'prop-types';

import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink } from '@openedx/paragon';

import AppSettingsModal from 'CourseAuthoring/pages-and-resources/app-settings-modal/AppSettingsModal';
import { useModel } from 'CourseAuthoring/generic/model-store';

import messages from './messages';

const LearningAssistantSettings = ({ onClose }) => {
  const appId = 'learning_assistant';
  const appInfo = useModel('courseApps', appId);
  const intl = useIntl();

  // We need to render more than one link, so we use the bodyChildren prop.
  const bodyChildren = (
    appInfo?.documentationLinks?.learnMoreOpenaiDataPrivacy && appInfo?.documentationLinks?.learnMoreOpenai
      ? (
        <div className="d-flex flex-column">
          {appInfo.documentationLinks?.learnMoreOpenaiDataPrivacy && (
            <Hyperlink
              className="text-primary-500"
              destination={appInfo.documentationLinks.learnMoreOpenaiDataPrivacy}
              target="_blank"
              rel="noreferrer noopener"
            >
              {messages.learningAssistantOpenAIDataPrivacyLink.defaultMessage}
            </Hyperlink>
          )}
          {appInfo.documentationLinks?.learnMoreOpenai && (
            <Hyperlink
              className="text-primary-500"
              destination={appInfo.documentationLinks.learnMoreOpenai}
              target="_blank"
              rel="noreferrer noopener"
            >
              {messages.learningAssistantOpenAILink.defaultMessage}
            </Hyperlink>
          )}
        </div>
      )
      : null
  );

  return (
    <AppSettingsModal
      appId={appId}
      title={messages.heading.defaultMessage}
      enableAppHelp={messages.enableLearningAssistantHelp.defaultMessage}
      enableAppLabel={messages.enableLearningAssistantLabel.defaultMessage}
      bodyChildren={bodyChildren}
      onClose={onClose}
    />
  );
};

LearningAssistantSettings.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LearningAssistantSettings;
