import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useToggle } from '@openedx/paragon';
import { InfoOutline as InfoOutlineIcon } from '@openedx/paragon/icons';
import { useIntl } from '@edx/frontend-platform/i18n';
import useCourseUnitData from './hooks';
import { editCourseUnitVisibilityAndData } from '../data/thunk';
import { SidebarBody, SidebarFooter, SidebarHeader } from './components';
import { PUBLISH_TYPES } from '../constants';
import { getCourseUnitData } from '../data/selectors';
import messages from './messages';
import ModalNotification from '../../generic/modal-notification';

const PublishControls = ({ blockId }) => {
  const {
    title,
    locationId,
    releaseLabel,
    visibilityState,
    visibleToStaffOnly,
  } = useCourseUnitData(useSelector(getCourseUnitData));
  const intl = useIntl();

  const [isDiscardModalOpen, openDiscardModal, closeDiscardModal] = useToggle(false);
  const [isVisibleModalOpen, openVisibleModal, closeVisibleModal] = useToggle(false);

  const dispatch = useDispatch();

  const handleCourseUnitVisibility = () => {
    closeVisibleModal();
    dispatch(editCourseUnitVisibilityAndData(blockId, PUBLISH_TYPES.republish, null));
  };

  const handleCourseUnitDiscardChanges = () => {
    closeDiscardModal();
    dispatch(editCourseUnitVisibilityAndData(blockId, PUBLISH_TYPES.discardChanges));
  };

  const handleCourseUnitPublish = () => {
    dispatch(editCourseUnitVisibilityAndData(blockId, PUBLISH_TYPES.makePublic));
  };

  return (
    <>
      <SidebarHeader
        title={title}
        visibilityState={visibilityState}
      />
      <SidebarBody
        releaseLabel={releaseLabel}
        visibleToStaffOnly={visibleToStaffOnly}
      />
      <SidebarFooter
        locationId={locationId}
        openDiscardModal={openDiscardModal}
        openVisibleModal={openVisibleModal}
        handlePublishing={handleCourseUnitPublish}
        visibleToStaffOnly={visibleToStaffOnly}
      />
      <ModalNotification
        title={messages.modalDiscardUnitChangesTitle.defaultMessage}
        isOpen={isDiscardModalOpen}
        actionButtonText={messages.modalDiscardUnitChangesActionButtonText.defaultMessage}
        cancelButtonText={messages.modalDiscardUnitChangesCancelButtonText.defaultMessage}
        handleAction={handleCourseUnitDiscardChanges}
        handleCancel={closeDiscardModal}
        message={messages.modalDiscardUnitChangesDescription.defaultMessage}
        icon={InfoOutlineIcon}
      />
      <ModalNotification
        title={messages.modalMakeVisibilityTitle.defaultMessage}
        isOpen={isVisibleModalOpen}
        actionButtonText={messages.modalMakeVisibilityActionButtonText.defaultMessage}
        cancelButtonText={messages.modalMakeVisibilityCancelButtonText.defaultMessage}
        handleAction={handleCourseUnitVisibility}
        handleCancel={closeVisibleModal}
        message={messages.modalMakeVisibilityDescription.defaultMessage}
        icon={InfoOutlineIcon}
      />
    </>
  );
};

PublishControls.propTypes = {
  blockId: PropTypes.string,
};

PublishControls.defaultProps = {
  blockId: null,
};

export default PublishControls;
