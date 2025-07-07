import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import {
  ActionRow,
  Alert,
  Button,
  Hyperlink,
  ModalDialog,
  Scrollable,
} from '@openedx/paragon';
import { WarningFilled } from '@openedx/paragon/icons';
import messages from '../messages';
import UploadProgressList from './UploadProgressList';
import { RequestStatus } from '../../../data/constants';

const UploadModal = ({
  isUploadTrackerOpen,
  handleUploadCancel,
  currentUploadingIdsRef,
  addVideoStatus,
}) => {
  const intl = useIntl();
  const videosPagePath = '';
  const { uploadData, uploadCount } = currentUploadingIdsRef;
  const cancelIsDisabled = addVideoStatus === RequestStatus.FAILED || addVideoStatus === RequestStatus.SUCCESSFUL;

  return (
    <ModalDialog
      title={messages.videoUploadTrackerModalTitle.defaultMessage}
      isOpen={isUploadTrackerOpen}
      onClose={handleUploadCancel}
      isBlocking
      hasCloseButton={false}
      size="lg"
    >
      <ModalDialog.Header>
        <ModalDialog.Title className="mb-3">
          {messages.videoUploadTrackerModalTitle.defaultMessage}
        </ModalDialog.Title>
        <Alert
          variant="warning"
          icon={WarningFilled}
        >
          <Alert.Heading>
            {messages.videoUploadTrackerAlertTitle.defaultMessage}
          </Alert.Heading>
          {messages.videoUploadTrackerAlertBodyMessage.defaultMessage}
          <div className="mt-3">
            <span className="font-weight-bold">
              {messages.videoUploadTrackerAlertEditMessage.defaultMessage}
            </span>
            <Hyperlink
              className="ml-2"
              destination={videosPagePath}
              target="_blank"
              content={messages.videoUploadTrackerAlertEditHyperlinkLabel.defaultMessage}
            />
          </div>
        </Alert>
        <div className="my-4 text-primary-500">
          {intl.formatMessage(
            messages.videoUploadTrackerModalBody,
            { uploadCount },
          )}
        </div>
      </ModalDialog.Header>
      <Scrollable>
        <ModalDialog.Body>
          <UploadProgressList videosList={Object.entries(uploadData)} />
        </ModalDialog.Body>
      </Scrollable>
      <ModalDialog.Footer>
        <ActionRow>
          <Button onClick={handleUploadCancel} disabled={cancelIsDisabled}>
            {messages.videoUploadTrackerAlertCancelLabel.defaultMessage}
          </Button>
        </ActionRow>
      </ModalDialog.Footer>
    </ModalDialog>
  );
};

UploadModal.propTypes = {
  isUploadTrackerOpen: PropTypes.bool.isRequired,
  handleUploadCancel: PropTypes.func.isRequired,
  currentUploadingIdsRef: PropTypes.shape({
    uploadData: PropTypes.shape({
      name: PropTypes.string,
      status: PropTypes.string,
      uploadPercentage: PropTypes.number,
    }).isRequired,
    uploadCount: PropTypes.number.isRequired,
  }).isRequired,
  addVideoStatus: PropTypes.string.isRequired,
};

export default UploadModal;
