import PropTypes from 'prop-types';
import {
  ActionRow,
  Button,
  AlertModal,
  StatefulButton,
} from '@openedx/paragon';
import messages from './messages';
const DeleteModal = ({
  category,
  isOpen,
  close,
  onDeleteSubmit,
  title,
  description,
  variant,
  btnState,
  btnDefaultLabel,
  btnPendingLabel,
}) => {
  const modalTitle = title || messages.title({ category });
  const modalDescription = description || messages.description({ category });
  const defaultBtnLabel = btnDefaultLabel || messages.deleteButton.defaultMessage;
  const pendingBtnLabel = btnPendingLabel || messages.pendingDeleteButton.defaultMessage;
  return (
    <AlertModal
      title={modalTitle}
      isOpen={isOpen}
      onClose={close}
      variant={variant}
      footerNode={(
        <ActionRow>
          <Button
            variant="tertiary"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              close();
            }}
          >
            {messages.cancelButton.defaultMessage}
          </Button>
          <StatefulButton
            data-testid="delete-confirm-button"
            state={btnState}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onDeleteSubmit();
            }}
            labels={{
              default: defaultBtnLabel,
              pending: pendingBtnLabel,
            }}
          />
        </ActionRow>
      )}
    >
      <p>{modalDescription}</p>
    </AlertModal>
  );
};
DeleteModal.defaultProps = {
  category: '',
  title: '',
  description: '',
  variant: 'default',
  btnState: 'default',
  btnDefaultLabel: '',
  btnPendingLabel: '',
};
DeleteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  category: PropTypes.string,
  onDeleteSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  variant: PropTypes.string,
  btnState: PropTypes.string,
  btnDefaultLabel: PropTypes.string,
  btnPendingLabel: PropTypes.string,
};
export default DeleteModal;