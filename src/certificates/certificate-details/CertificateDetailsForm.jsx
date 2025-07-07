import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Stack, Form } from '@openedx/paragon';

import CertificateSection from '../certificate-section/CertificateSection';
import messages from './messages';

const CertificateDetailsForm = ({
  detailsCourseTitle,
  courseTitleOverride,
  handleChange,
  handleBlur,
}) => {
  const intl = useIntl();
  return (
    <CertificateSection
      title={messages.detailsSectionTitle.defaultMessage}
      className="certificate-details"
      data-testid="certificate-details-form"
    >
      <Stack>
        <Stack direction="horizontal" gap="1.5" className="certificate-details__info">
          <p className="certificate-details__info-paragraph">
            <strong>{messages.detailsCourseTitle.defaultMessage}:</strong> {detailsCourseTitle}
          </p>
        </Stack>
        <Stack direction="horizontal" gap="1.5" className="certificate-details__info">
          <Form.Group className="m-0 w-100">
            <Form.Label>{messages.detailsCourseTitleOverride.defaultMessage}</Form.Label>
            <Form.Control
              name="courseTitle"
              value={courseTitleOverride}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={messages.detailsCourseTitleOverride.defaultMessage}
            />
            <Form.Control.Feedback>
              <span className="x-small">{messages.detailsCourseTitleOverrideDescription.defaultMessage}</span>
            </Form.Control.Feedback>
          </Form.Group>
        </Stack>
      </Stack>
    </CertificateSection>
  );
};

CertificateDetailsForm.propTypes = {
  courseTitleOverride: PropTypes.string.isRequired,
  detailsCourseTitle: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default CertificateDetailsForm;
