import React, { useEffect } from 'react';
import {
  FormattedDate,
  injectIntl,
  intlShape,
} from '@edx/frontend-platform/i18n';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@openedx/paragon';
import { getConfig } from '@edx/frontend-platform';

import { RequestStatus } from '../../data/constants';
import CourseStepper from '../../generic/course-stepper';
import { IMPORT_STAGES } from '../data/constants';
import { fetchImportStatus } from '../data/thunks';
import {
  getCurrentStage, getError, getFileName, getLoadingStatus, getProgress, getSavingStatus, getSuccessDate,
} from '../data/selectors';
import messages from './messages';

const ImportStepper = ({ intl, courseId }) => {
  const currentStage = useSelector(getCurrentStage);
  const fileName = useSelector(getFileName);
  const { hasError, message: errorMessage } = useSelector(getError);
  const progress = useSelector(getProgress);
  const dispatch = useDispatch();
  const loadingStatus = useSelector(getLoadingStatus);
  const savingStatus = useSelector(getSavingStatus);
  const successDate = useSelector(getSuccessDate);
  const isStopFetching = currentStage === IMPORT_STAGES.SUCCESS
    || loadingStatus === RequestStatus.FAILED
    || savingStatus === RequestStatus.FAILED
    || hasError;
  const formattedErrorMessage = hasError ? errorMessage || messages.defaultErrorMessage.defaultMessage : '';

  useEffect(() => {
    const id = setInterval(() => {
      if (isStopFetching) {
        clearInterval(id);
      } else if (fileName) {
        dispatch(fetchImportStatus(courseId, fileName));
      }
    }, 3000);
    return () => clearInterval(id);
  });

  let successTitle = messages.stepperSuccessTitle.defaultMessage;
  const localizedSuccessDate = successDate ? (
    <FormattedDate
      value={successDate}
      year="2-digit"
      month="2-digit"
      day="2-digit"
      hour="numeric"
      minute="numeric"
    />
  ) : null;
  if (localizedSuccessDate && currentStage === IMPORT_STAGES.SUCCESS) {
    const successWithDate = (
      <>
        {successTitle} ({localizedSuccessDate})
      </>
    );
    successTitle = successWithDate;
  }

  const handleRedirectCourseOutline = () => window.location.replace(`${getConfig().STUDIO_BASE_URL}/course/${courseId}`);

  const steps = [
    {
      title: messages.stepperUploadingTitle.defaultMessage,
      description: messages.stepperUploadingDescription.defaultMessage,
      key: IMPORT_STAGES.UPLOADING,
    }, {
      title: messages.stepperUnpackingTitle.defaultMessage,
      description: messages.stepperUnpackingDescription.defaultMessage,
      key: IMPORT_STAGES.UNPACKING,
    }, {
      title: messages.stepperVerifyingTitle.defaultMessage,
      description: messages.stepperVerifyingDescription.defaultMessage,
      key: IMPORT_STAGES.VERIFYING,
    }, {
      title: messages.stepperUpdatingTitle.defaultMessage,
      description: messages.stepperUpdatingDescription.defaultMessage,
      key: IMPORT_STAGES.UPDATING,
    }, {
      title: successTitle,
      description: messages.stepperSuccessDescription.defaultMessage,
      key: IMPORT_STAGES.SUCCESS,
    },
  ];

  return (
    <section>
      <h3 className="mt-4">{messages.stepperHeaderTitle.defaultMessage}</h3>
      <CourseStepper
        courseId={courseId}
        percent={currentStage === IMPORT_STAGES.UPLOADING ? progress : null}
        steps={steps}
        activeKey={currentStage}
        hasError={hasError}
        errorMessage={formattedErrorMessage}
      />
      {currentStage === IMPORT_STAGES.SUCCESS && (
        <Button className="ml-5.5 mt-n2.5" onClick={handleRedirectCourseOutline}>{messages.viewOutlineButton.defaultMessage}</Button>
      )}
    </section>
  );
};

ImportStepper.propTypes = {
  intl: intlShape.isRequired,
  courseId: PropTypes.string.isRequired,
};

export default injectIntl(ImportStepper);
