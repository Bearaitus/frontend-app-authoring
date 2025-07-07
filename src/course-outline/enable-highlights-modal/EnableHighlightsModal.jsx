import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import {
  ActionRow, AlertModal, Button, Hyperlink,
} from '@openedx/paragon';

import messages from './messages';
import { useHelpUrls } from '../../help-urls/hooks';

const EnableHighlightsModal = ({
  onEnableHighlightsSubmit,
  isOpen,
  close,
}) => {
  const intl = useIntl();

  const {
    contentHighlights: contentHighlightsUrl,
  } = useHelpUrls(['contentHighlights']);

  return (
    <AlertModal
      title={messages.title.defaultMessage}
      variant="default"
      size="lg"
      isOpen={isOpen}
      onClose={close}
      footerNode={(
        <ActionRow>
          <Button variant="tertiary" onClick={close}>
            {messages.cancelButton.defaultMessage}
          </Button>
          <Button onClick={onEnableHighlightsSubmit}>
            {messages.submitButton.defaultMessage}
          </Button>
        </ActionRow>
      )}
    >
      <p className="small">{messages.description_1.defaultMessage}</p>
      <p className="small">
        {messages.description_2.defaultMessage}
        <Hyperlink
          className="small ml-2 text-decoration-none"
          destination={contentHighlightsUrl}
          target="_blank"
          showLaunchIcon={false}
        >
          {messages.link.defaultMessage}
        </Hyperlink>
      </p>
    </AlertModal>
  );
};

EnableHighlightsModal.propTypes = {
  onEnableHighlightsSubmit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default EnableHighlightsModal;
