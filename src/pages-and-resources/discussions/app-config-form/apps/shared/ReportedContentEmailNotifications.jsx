import React from 'react';
import { useFormikContext } from 'formik';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import FormSwitchGroup from '../../../../../generic/FormSwitchGroup';
import AppConfigFormDivider from './AppConfigFormDivider';
import messages from '../../messages';

const ReportedContentEmailNotifications = ({ intl }) => {
  const {
    handleChange,
    handleBlur,
    values,
  } = useFormikContext();

  return (
    <div>
      <h5 className="text-gray-500 mt-4 mb-2 ">{messages.reportedContentEmailNotifications.defaultMessage}</h5>
      <FormSwitchGroup
        className="mb-4"
        onChange={handleChange}
        onBlur={handleBlur}
        id="reportedContentEmailNotifications"
        checked={values.reportedContentEmailNotifications}
        label={messages.reportedContentEmailNotificationsLabel.defaultMessage}
        helpText={messages.reportedContentEmailNotificationsHelp.defaultMessage}
      />
      <AppConfigFormDivider thick />
    </div>
  );
};

ReportedContentEmailNotifications.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(ReportedContentEmailNotifications);
