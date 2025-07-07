import { CERTIFICATE_DISPLAY_BEHAVIOR } from './schedule-section/certificate-display-row';
import { defaultEntranceExamMinimumScorePct } from './constants';
import messages from './messages';

const isDateBeforeOrEqual = (
  dateFormer,
  dateLatter,
  allowEqual = false,
  checkExists = true,
) => {
  if (checkExists && (!dateFormer || !dateLatter)) {
    return false;
  }
  if (allowEqual) {
    return new Date(dateFormer) < new Date(dateLatter);
  }

  return new Date(dateFormer) <= new Date(dateLatter);
};

const validateScheduleAndDetails = (courseDetails, canShowCertificateAvailableDate, intl) => {
  const errors = {};
  const {
    endDate,
    startDate,
    enrollmentEnd,
    enrollmentStart,
    certificateAvailableDate,
    entranceExamMinimumScorePct,
    certificatesDisplayBehavior,
  } = courseDetails;

  if (!startDate) {
    errors.startDate = messages.errorMessage7.defaultMessage;
  }

  if (isDateBeforeOrEqual(certificateAvailableDate, endDate) && canShowCertificateAvailableDate) {
    errors.certificateAvailableDate = messages.errorMessage6.defaultMessage;
  }

  if (isDateBeforeOrEqual(endDate, startDate)) {
    errors.endDate = messages.errorMessage5.defaultMessage;
  }

  if (isDateBeforeOrEqual(startDate, enrollmentStart, true)) {
    errors.enrollmentStart = messages.errorMessage4.defaultMessage;
  }

  if (isDateBeforeOrEqual(enrollmentEnd, enrollmentStart)) {
    errors.enrollmentStart = messages.errorMessage3.defaultMessage;
  }

  if (isDateBeforeOrEqual(endDate, enrollmentEnd, true)) {
    errors.enrollmentEnd = messages.errorMessage2.defaultMessage;
  }

  if (
    certificatesDisplayBehavior === CERTIFICATE_DISPLAY_BEHAVIOR.endWithDate
    && !certificateAvailableDate
  ) {
    errors.certificateAvailableDate = messages.errorMessage1.defaultMessage;
  }

  if (entranceExamMinimumScorePct) {
    const number = Number(entranceExamMinimumScorePct);
    if (Number.isNaN(number) || number < 1 || number > 100) {
      errors.entranceExamMinimumScorePct = messages.errorMessage8.defaultMessage;
    }
  }

  return errors;
};

const updateWithDefaultValues = (values) => {
  const { entranceExamMinimumScorePct } = values;
  if (entranceExamMinimumScorePct === '') {
    return {
      ...values,
      entranceExamMinimumScorePct: defaultEntranceExamMinimumScorePct,
    };
  }

  return values;
};

export { updateWithDefaultValues, validateScheduleAndDetails };
