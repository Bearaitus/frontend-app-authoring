import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { useFormikContext } from 'formik';
import FormSwitchGroup from '../../../../../generic/FormSwitchGroup';
import messages from '../../messages';
import AppConfigFormDivider from './AppConfigFormDivider';
import ConfirmationPopup from '../../../../../generic/ConfirmationPopup';

const InContextDiscussionFields = ({
  onBlur,
  onChange,
  intl,
  values,
}) => {
  const {
    setFieldValue,
  } = useFormikContext();

  const [showPopup, setShowPopup] = useState(false);
  const handleConfirmation = () => {
    setFieldValue('enableGradedUnits', !values.enableGradedUnits);
    setShowPopup(false);
  };

  return (
    <>
      <h5 className="text-gray-500 mt-4">{messages.visibilityInContext.defaultMessage}</h5>
      {showPopup
        ? (
          <ConfirmationPopup
            label={values.enableGradedUnits
              ? messages.cancelEnableDiscussionsLabel.defaultMessage
              : messages.confirmEnableDiscussionsLabel.defaultMessage}
            bodyText={values.enableGradedUnits
              ? messages.cancelEnableDiscussions.defaultMessage
              : messages.confirmEnableDiscussions.defaultMessage}
            onConfirm={handleConfirmation}
            confirmLabel={messages.confirm.defaultMessage}
            onCancel={() => setShowPopup(false)}
            cancelLabel={messages.cancelButton.defaultMessage}
          />
        )
        : (
          <FormSwitchGroup
            onChange={() => setShowPopup(true)}
            onBlur={onBlur}
            id="enableGradedUnits"
            checked={values.enableGradedUnits}
            label={messages.gradedUnitPagesLabel.defaultMessage}
            helpText={messages.gradedUnitPagesHelp.defaultMessage}
          />
        )}
      <AppConfigFormDivider />
      <FormSwitchGroup
        onChange={onChange}
        onBlur={onBlur}
        id="groupAtSubsection"
        checked={values.groupAtSubsection}
        label={messages.groupInContextSubsectionLabel.defaultMessage}
        helpText={messages.groupInContextSubsectionHelp.defaultMessage}
      />
    </>
  );
};

InContextDiscussionFields.propTypes = {
  onBlur: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
  values: PropTypes.shape({
    enableGradedUnits: PropTypes.bool,
    groupAtSubsection: PropTypes.bool,
  }).isRequired,
};

export default injectIntl(InContextDiscussionFields);
