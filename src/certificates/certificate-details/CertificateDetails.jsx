import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import {
  Icon, Stack, IconButtonWithTooltip,
} from '@openedx/paragon';
import {
  EditOutline as EditOutlineIcon, DeleteOutline as DeleteOutlineIcon,
} from '@openedx/paragon/icons';

import CertificateSection from '../certificate-section/CertificateSection';
import ModalNotification from '../../generic/modal-notification';
import commonMessages from '../messages';
import messages from './messages';
import useCertificateDetails from './hooks/useCertificateDetails';

const CertificateDetails = ({
  certificateId,
  detailsCourseTitle,
  courseTitleOverride,
  detailsCourseNumber,
  courseNumberOverride,
}) => {
  const intl = useIntl();
  const {
    isConfirmOpen,
    confirmOpen,
    confirmClose,
    isEditModalOpen,
    editModalOpen,
    editModalClose,
    isCertificateActive,
    handleEditAll,
    handleDeleteCard,
  } = useCertificateDetails(certificateId);

  return (
    <CertificateSection
      title={messages.detailsSectionTitle.defaultMessage}
      className="certificate-details"
      data-testid="certificate-details"
      actions={(
        <Stack direction="horizontal" gap="2">
          <IconButtonWithTooltip
            src={EditOutlineIcon}
            iconAs={Icon}
            tooltipContent={<div>{intl.formatMessage(commonMessages.editTooltip)}</div>}
            alt={intl.formatMessage(commonMessages.editTooltip)}
            onClick={isCertificateActive ? editModalOpen : handleEditAll}
          />
          <IconButtonWithTooltip
            src={DeleteOutlineIcon}
            iconAs={Icon}
            tooltipContent={<div>{intl.formatMessage(commonMessages.deleteTooltip)}</div>}
            alt={intl.formatMessage(commonMessages.deleteTooltip)}
            onClick={confirmOpen}
          />
        </Stack>
      )}
    >
      <Stack>
        <Stack direction="horizontal" gap="1.5" className="certificate-details__info">
          <p className="certificate-details__info-paragraph">
            <strong>{messages.detailsCourseTitle.defaultMessage}:</strong> {detailsCourseTitle}
          </p>
          <p className="certificate-details__info-paragraph-course-number">
            <strong>{messages.detailsCourseNumber.defaultMessage}:</strong> {detailsCourseNumber}
          </p>
        </Stack>
        <Stack direction="horizontal" gap="1.5" className="certificate-details__info">
          {courseTitleOverride && (
            <p className="certificate-details__info-paragraph">
              <strong>{messages.detailsCourseTitleOverride.defaultMessage}:</strong> {courseTitleOverride}
            </p>
          )}
          {courseNumberOverride && (
            <p className="certificate-details__info-paragraph text-right">
              <strong>{messages.detailsCourseNumberOverride.defaultMessage}:</strong> {courseNumberOverride}
            </p>
          )}
        </Stack>
      </Stack>
      <ModalNotification
        isOpen={isEditModalOpen}
        title={messages.editCertificateConfirmationTitle.defaultMessage}
        message={messages.editCertificateMessage.defaultMessage}
        actionButtonText={intl.formatMessage(commonMessages.editTooltip)}
        cancelButtonText={intl.formatMessage(commonMessages.cardCancel)}
        handleCancel={editModalClose}
        handleAction={() => {
          editModalClose();
          handleEditAll();
        }}
      />
      <ModalNotification
        isOpen={isConfirmOpen}
        title={messages.deleteCertificateConfirmationTitle.defaultMessage}
        message={messages.deleteCertificateMessage.defaultMessage}
        actionButtonText={intl.formatMessage(commonMessages.deleteTooltip)}
        cancelButtonText={intl.formatMessage(commonMessages.cardCancel)}
        handleCancel={confirmClose}
        handleAction={() => {
          confirmClose();
          handleDeleteCard();
        }}
      />
    </CertificateSection>
  );
};

CertificateDetails.defaultProps = {
  courseTitleOverride: '',
  courseNumberOverride: '',
};

CertificateDetails.propTypes = {
  certificateId: PropTypes.number.isRequired,
  courseTitleOverride: PropTypes.string,
  courseNumberOverride: PropTypes.string,
  detailsCourseTitle: PropTypes.string.isRequired,
  detailsCourseNumber: PropTypes.string.isRequired,
};

export default CertificateDetails;
