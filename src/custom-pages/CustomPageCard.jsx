import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { intlShape, injectIntl } from '@edx/frontend-platform/i18n';
import {
  ActionRow,
  IconButtonWithTooltip,
  Icon,
  AlertModal,
  Button,
  StatefulButton,
  useToggle,
} from '@openedx/paragon';
import {
  DeleteOutline,
  EditOutline,
  SpinnerSimple,
  Visibility,
  VisibilityOff,
} from '@openedx/paragon/icons';
import { useNavigate } from 'react-router-dom';
import { deleteSingleCustomPage, updateCustomPageVisibility } from './data/thunks';
import messages from './messages';
import { CustomPagesContext } from './CustomPagesProvider';

const CustomPageCard = ({
  page,
  dispatch,
  deletePageStatus,
  setCurrentPage,
  // injected
  intl,
}) => {
  const [isDeleteConfirmationOpen, openDeleteConfirmation, closeDeleteConfirmation] = useToggle(false);
  const { path: customPagesPath } = useContext(CustomPagesContext);
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteSingleCustomPage({
      blockId: page.id,
      closeConfirmation: closeDeleteConfirmation,
    }));
  };

  const toggleVisibility = () => {
    dispatch(updateCustomPageVisibility({
      blockId: page.id,
      metadata: { course_staff_only: !page.courseStaffOnly },
    }));
  };
  const handleEditOpen = () => {
    setCurrentPage(page.id);
    navigate(`${customPagesPath}/editor`);
  };

  const deletePageStateProps = {
    labels: {
      default: messages.deletePageLabel.defaultMessage,
      pending: messages.deletingPageBodyLabel.defaultMessage,
    },
    icons: {
      pending: <Icon src={SpinnerSimple} className="icon-spin" />,
    },
    disabledStates: ['pending'],
  };

  return (
    <>
      <ActionRow>
        <div className="h4" data-testid="card-title">
          {page?.name || messages.newPageTitle.defaultMessage}
        </div>
        <ActionRow.Spacer />
        <IconButtonWithTooltip
          key={messages.editTooltipContent.defaultMessage}
          tooltipPlacement="top"
          tooltipContent={messages.editTooltipContent.defaultMessage}
          src={EditOutline}
          iconAs={Icon}
          alt={messages.editTooltipContent.defaultMessage}
          onClick={handleEditOpen}
          data-testid="edit-modal-icon"
        />
        <IconButtonWithTooltip
          key={messages.visibilityTooltipContent.defaultMessage}
          tooltipPlacement="top"
          tooltipContent={messages.visibilityTooltipContent.defaultMessage}
          src={page.courseStaffOnly ? VisibilityOff : Visibility}
          iconAs={Icon}
          alt={messages.visibilityTooltipContent.defaultMessage}
          onClick={toggleVisibility}
          data-testid="visibility-toggle-icon"
        />
        <IconButtonWithTooltip
          key={messages.deleteTooltipContent.defaultMessage}
          tooltipPlacement="top"
          tooltipContent={messages.deleteTooltipContent.defaultMessage}
          src={DeleteOutline}
          iconAs={Icon}
          alt={messages.deleteTooltipContent.defaultMessage}
          onClick={openDeleteConfirmation}
          data-testid="delete-modal-icon"
        />
      </ActionRow>
      <AlertModal
        title={messages.deleteConfirmationTitle.defaultMessage}
        isOpen={isDeleteConfirmationOpen}
        onClose={closeDeleteConfirmation}
        footerNode={(
          <ActionRow>
            <Button variant="tertiary" onClick={closeDeleteConfirmation}>
              {messages.cancelButtonLabel.defaultMessage}
            </Button>
            <StatefulButton onClick={handleDelete} state={deletePageStatus} {...deletePageStateProps} />
          </ActionRow>
        )}
      >
        {messages.deleteConfirmationMessage.defaultMessage}
      </AlertModal>
    </>
  );
};

CustomPageCard.propTypes = {
  page: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string.isRequired,
    courseStaffOnly: PropTypes.bool.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  deletePageStatus: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  // injected
  intl: intlShape.isRequired,
};

export default injectIntl(CustomPageCard);
