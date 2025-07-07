import React from 'react';
import PropTypes from 'prop-types';
import {
  ActionRow,
  Button,
  AlertModal,
} from '@openedx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from './messages';

const DeleteModal = ({ isOpen, close, onDeleteSubmit }) => {
  const intl = useIntl();

  return (
    <AlertModal
      title={messages.deleteModalTitle.defaultMessage}
      isOpen={isOpen}
      onClose={close}
      footerNode={(
        <ActionRow>
          <Button variant="tertiary" onClick={close}>
            {messages.cancelButton.defaultMessage}
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              onDeleteSubmit();
            }}
          >
            {messages.deleteButton.defaultMessage}
          </Button>
        </ActionRow>
      )}
    >
      <p>{messages.deleteModalDescription.defaultMessage}</p>
    </AlertModal>
  );
};

DeleteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  onDeleteSubmit: PropTypes.func.isRequired,
};

export default DeleteModal;
