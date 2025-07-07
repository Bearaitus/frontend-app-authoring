// @ts-check
import React, { useState } from 'react';
import {
  ActionRow,
  Button,
  Container,
  Form,
  ModalDialog,
} from '@openedx/paragon';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import messages from './messages';
import { getTaxonomyExportFile } from '../data/api';

const ExportModal = ({
  taxonomyId,
  isOpen,
  onClose,
}) => {
  const intl = useIntl();
  const [outputFormat, setOutputFormat] = useState(/** @type {'csv'|'json'} */('csv'));

  const onClickExport = React.useCallback(() => {
    onClose();
    getTaxonomyExportFile(taxonomyId, outputFormat);
  }, [onClose, taxonomyId, outputFormat]);

  return (
    <Container onClick={(e) => e.stopPropagation() /* This prevents calling onClick handler from the parent */}>
      <ModalDialog
        title={messages.exportModalTitle.defaultMessage}
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
        hasCloseButton
        isFullscreenOnMobile
        className="taxonomy-export-modal"
      >
        <ModalDialog.Header>
          <ModalDialog.Title>
            {messages.exportModalTitle.defaultMessage}
          </ModalDialog.Title>
        </ModalDialog.Header>
        <ModalDialog.Body className="pb-5 mt-2">
          <Form.Group>
            <Form.Label>
              {messages.exportModalBodyDescription.defaultMessage}
            </Form.Label>
            <Form.RadioSet
              name="export-format"
              value={outputFormat}
              onChange={(e) => setOutputFormat(e.target.value)}
            >
              <Form.Radio
                key={`export-csv-format-${taxonomyId}`}
                value="csv"
              >
                {messages.taxonomyCSVFormat.defaultMessage}
              </Form.Radio>
              <Form.Radio
                key={`export-json-format-${taxonomyId}`}
                value="json"
              >
                {messages.taxonomyJSONFormat.defaultMessage}
              </Form.Radio>
            </Form.RadioSet>
          </Form.Group>
        </ModalDialog.Body>
        <ModalDialog.Footer>
          <ActionRow>
            <ModalDialog.CloseButton variant="tertiary">
              {messages.taxonomyModalsCancelLabel.defaultMessage}
            </ModalDialog.CloseButton>
            <Button
              variant="primary"
              onClick={onClickExport}
              data-testid={`export-button-${taxonomyId}`}
            >
              {messages.exportModalSubmitButtonLabel.defaultMessage}
            </Button>
          </ActionRow>
        </ModalDialog.Footer>
      </ModalDialog>
    </Container>
  );
};

ExportModal.propTypes = {
  taxonomyId: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ExportModal;
