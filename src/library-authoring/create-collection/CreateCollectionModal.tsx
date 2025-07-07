import React from 'react';
import {
  ActionRow,
  Button,
  Form,
  ModalDialog,
} from '@openedx/paragon';
import { useNavigate } from 'react-router-dom';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../../generic/FormikControl';
import { useLibraryContext } from '../common/context';
import messages from './messages';
import { useCreateLibraryCollection } from '../data/apiHooks';
import { ToastContext } from '../../generic/toast-context';

const CreateCollectionModal = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const {
    libraryId,
    isCreateCollectionModalOpen,
    closeCreateCollectionModal,
  } = useLibraryContext();
  const create = useCreateLibraryCollection(libraryId);
  const { showToast } = React.useContext(ToastContext);

  const handleCreate = React.useCallback((values) => {
    create.mutateAsync(values).then((data) => {
      closeCreateCollectionModal();
      navigate(`/library/${libraryId}/collection/${data.key}`);
      showToast(messages.createCollectionSuccess.defaultMessage);
    }).catch(() => {
      showToast(messages.createCollectionError.defaultMessage);
    });
  }, []);

  return (
    <ModalDialog
      title={messages.createCollectionModalTitle.defaultMessage}
      isOpen={isCreateCollectionModalOpen}
      onClose={closeCreateCollectionModal}
      size="xl"
      hasCloseButton
      isFullscreenOnMobile
    >
      <ModalDialog.Header>
        <ModalDialog.Title>
          {messages.createCollectionModalTitle.defaultMessage}
        </ModalDialog.Title>
      </ModalDialog.Header>

      <Formik
        initialValues={{
          title: '',
          description: '',
        }}
        validationSchema={
          Yup.object().shape({
            title: Yup.string()
              .required(messages.createCollectionModalNameInvalid.defaultMessage),
            description: Yup.string(),
          })
        }
        onSubmit={handleCreate}
      >
        {(formikProps) => (
          <>
            <ModalDialog.Body className="mw-sm">
              <Form onSubmit={formikProps.handleSubmit}>
                <FormikControl
                  name="title"
                  label={(
                    <Form.Label className="font-weight-bold h3">
                      {messages.createCollectionModalNameLabel.defaultMessage}
                    </Form.Label>
                  )}
                  value={formikProps.values.title}
                  placeholder={messages.createCollectionModalNamePlaceholder.defaultMessage}
                  controlClasses="pb-2"
                />
                <FormikControl
                  name="description"
                  as="textarea"
                  label={(
                    <Form.Label className="font-weight-bold h3">
                      {messages.createCollectionModalDescriptionLabel.defaultMessage}
                    </Form.Label>
                  )}
                  value={formikProps.values.description}
                  placeholder={messages.createCollectionModalDescriptionPlaceholder.defaultMessage}
                  help={(
                    <Form.Text>
                      {messages.createCollectionModalDescriptionDetails.defaultMessage}
                    </Form.Text>
                  )}
                  controlClasses="pb-2"
                  rows="5"
                />
              </Form>
            </ModalDialog.Body>
            <ModalDialog.Footer>
              <ActionRow>
                <ModalDialog.CloseButton variant="tertiary">
                  {messages.createCollectionModalCancel.defaultMessage}
                </ModalDialog.CloseButton>
                <Button
                  variant="primary"
                  onClick={formikProps.submitForm}
                  disabled={formikProps.isSubmitting || !formikProps.isValid || !formikProps.dirty}
                >
                  {messages.createCollectionModalCreate.defaultMessage}
                </Button>
              </ActionRow>
            </ModalDialog.Footer>
          </>
        )}
      </Formik>
    </ModalDialog>
  );
};

export default CreateCollectionModal;
