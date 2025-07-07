import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Image, Icon, Stack, IconButtonWithTooltip, FormLabel, Form, Button, useToggle,
} from '@openedx/paragon';
import { DeleteOutline as DeleteOutlineIcon } from '@openedx/paragon/icons';
import { useIntl } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';

import ModalDropzone from '../../../generic/modal-dropzone/ModalDropzone';
import ModalNotification from '../../../generic/modal-notification';
import { updateSavingImageStatus } from '../../data/slice';
import commonMessages from '../../messages';
import messages from '../messages';

const SignatoryForm = ({
  index,
  name,
  title,
  isEdit,
  handleBlur,
  organization,
  handleChange,
  setFieldValue,
  showDeleteButton,
  signatureImagePath,
  handleDeleteSignatory,
  handleCancelUpdateSignatory,
}) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const [isOpen, open, close] = useToggle(false);
  const [isConfirmOpen, confirmOpen, confirmClose] = useToggle(false);

  const handleImageUpload = (newImagePath) => {
    setFieldValue(`signatories[${index}].signatureImagePath`, newImagePath);
  };

  const handleSavingStatusDispatch = (status) => {
    dispatch(updateSavingImageStatus(status));
  };

  const formData = [
    {
      labelText: messages.nameLabel.defaultMessage,
      value: name,
      name: `signatories[${index}].name`,
      placeholder: messages.namePlaceholder.defaultMessage,
      feedback: messages.nameDescription.defaultMessage,
      onChange: handleChange,
      onBlur: handleBlur,
    },
    {
      as: 'textarea',
      labelText: messages.titleLabel.defaultMessage,
      value: title,
      name: `signatories[${index}].title`,
      placeholder: messages.titlePlaceholder.defaultMessage,
      feedback: messages.titleDescription.defaultMessage,
      onChange: handleChange,
      onBlur: handleBlur,
    },
    {
      labelText: messages.organizationLabel.defaultMessage,
      value: organization,
      name: `signatories[${index}].organization`,
      placeholder: messages.organizationPlaceholder.defaultMessage,
      feedback: messages.organizationDescription.defaultMessage,
      onChange: handleChange,
      onBlur: handleBlur,
    },
  ];

  const uploadReplaceText = intl.formatMessage(
    messages.uploadImageButton,
    {
      uploadText: signatureImagePath
        ? messages.uploadModalReplace.defaultMessage
        : messages.uploadModal.defaultMessage,
    },
  );

  return (
    <div className="bg-light-200 p-2.5 signatory-form" data-testid="signatory-form">
      <Stack className="justify-content-between mb-4" direction="horizontal">
        <h3 className="section-title">{`${messages.signatoryTitle.defaultMessage} ${index + 1}`}</h3>
        <Stack direction="horizontal" gap="2">
          {showDeleteButton && (
            <IconButtonWithTooltip
              src={DeleteOutlineIcon}
              iconAs={Icon}
              alt={intl.formatMessage(commonMessages.deleteTooltip)}
              tooltipContent={<div>{intl.formatMessage(commonMessages.deleteTooltip)}</div>}
              onClick={confirmOpen}
            />
          )}
        </Stack>
      </Stack>

      <Stack gap="4">
        {formData.map(({ labelText, feedback, ...rest }) => (
          <Form.Group className="m-0" key={labelText}>
            <FormLabel>{labelText}</FormLabel>
            <Form.Control {...rest} className="m-0" />
            <Form.Control.Feedback>
              <span className="x-small">{feedback}</span>
            </Form.Control.Feedback>
          </Form.Group>
        ))}
        <Form.Group className="m-0">
          <FormLabel> {messages.imageLabel.defaultMessage}</FormLabel>
          {signatureImagePath && (
            <Image
              src={`${getConfig().STUDIO_BASE_URL}${signatureImagePath}`}
              fluid
              alt={messages.imageLabel.defaultMessage}
              className="signatory__image"
            />
          )}
          <Stack direction="horizontal" className="align-items-baseline">
            <Stack>
              <Form.Control
                readOnly
                value={signatureImagePath}
                name={`signatories[${index}].signatureImagePath`}
                placeholder={messages.imagePlaceholder.defaultMessage}
              />
              <Form.Control.Feedback>
                <span className="x-small">{messages.imageDescription.defaultMessage}</span>
              </Form.Control.Feedback>
            </Stack>
            <Button onClick={open}>{uploadReplaceText}</Button>
          </Stack>
        </Form.Group>
      </Stack>
      {isEdit && (
        <Stack direction="horizontal" gap="2" className="mt-4">
          <Button type="submit">
            {intl.formatMessage(commonMessages.saveTooltip)}
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => handleCancelUpdateSignatory()}
          >
            {intl.formatMessage(commonMessages.cardCancel)}
          </Button>
        </Stack>
      )}

      <ModalDropzone
        isOpen={isOpen}
        onClose={close}
        onCancel={close}
        onChange={handleImageUpload}
        fileTypes={['png']}
        onSavingStatus={handleSavingStatusDispatch}
        imageHelpText={messages.imageDescription.defaultMessage}
        modalTitle={uploadReplaceText}
      />
      <ModalNotification
        isOpen={isConfirmOpen}
        title={intl.formatMessage(messages.deleteSignatoryConfirmation, { name })}
        message={messages.deleteSignatoryConfirmationMessage.defaultMessage}
        actionButtonText={intl.formatMessage(commonMessages.deleteTooltip)}
        cancelButtonText={intl.formatMessage(commonMessages.cardCancel)}
        handleCancel={confirmClose}
        handleAction={() => {
          confirmClose();
          handleDeleteSignatory();
        }}
      />
    </div>
  );
};

SignatoryForm.defaultProps = {
  isEdit: false,
  handleChange: null,
  handleBlur: null,
  handleDeleteSignatory: null,
  setFieldValue: null,
  handleCancelUpdateSignatory: null,
};

SignatoryForm.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  showDeleteButton: PropTypes.bool.isRequired,
  signatureImagePath: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isEdit: PropTypes.bool,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  setFieldValue: PropTypes.func,
  handleDeleteSignatory: PropTypes.func,
  handleCancelUpdateSignatory: PropTypes.func,
};

export default SignatoryForm;
