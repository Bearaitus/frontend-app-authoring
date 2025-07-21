import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Form } from '@openedx/paragon';
import { FormattedMessage, injectIntl, useIntl } from '@edx/frontend-platform/i18n';
import messages from './messages';
import { COURSE_BLOCK_NAMES } from '../../constants';

const VisibilityTab = ({
  values,
  setFieldValue,
  category,
  showWarning,
  isSubsection,
}) => {
  const intl = useIntl();
  const visibilityTitle = COURSE_BLOCK_NAMES[category]?.name;

  const {
    isVisibleToStaffOnly,
    hideAfterDue,
    showCorrectness,
  } = values;

  const handleChange = (e) => {
    setFieldValue('isVisibleToStaffOnly', e.target.checked);
  };

  const getVisibilityValue = () => {
    if (isVisibleToStaffOnly) {
      return 'hide';
    }
    if (hideAfterDue) {
      return 'hideDue';
    }
    return 'show';
  };

  const visibilityChanged = (e) => {
    const selected = e.target.value;
    if (selected === 'hide') {
      setFieldValue('isVisibleToStaffOnly', true);
      setFieldValue('hideAfterDue', false);
    } else if (selected === 'hideDue') {
      setFieldValue('isVisibleToStaffOnly', false);
      setFieldValue('hideAfterDue', true);
    } else {
      setFieldValue('isVisibleToStaffOnly', false);
      setFieldValue('hideAfterDue', false);
    }
  };

  const correctnessChanged = (e) => {
    setFieldValue('showCorrectness', e.target.value);
  };

  return (
    <>
      <h5 className="mt-4 text-gray-700">
        {messages.visibilitySectionTitle.defaultMessage}
      </h5>
      <hr />
      {
        isSubsection ? (
          <>
            <Form.RadioSet
              name="subsectionVisibility"
              onChange={visibilityChanged}
              value={getVisibilityValue()}
            >
              <Form.Radio value="show">
                {messages.showEntireSubsection.defaultMessage}
              </Form.Radio>
              <Form.Text>{messages.showEntireSubsectionDescription.defaultMessage}</Form.Text>
              <Form.Text>{messages.hideContentAfterDueDescription.defaultMessage}</Form.Text>
              <Form.Radio value="hide">
                {messages.hideEntireSubsection.defaultMessage}
              </Form.Radio>
              <Form.Text>{messages.hideEntireSubsectionDescription.defaultMessage}</Form.Text>
            </Form.RadioSet>
            {showWarning && (
              <Alert className="mt-2" variant="warning">
                {messages.subsectionVisibilityWarning.defaultMessage}
              </Alert>
            )}
            <h5 className="mt-4 text-gray-700">{messages.assessmentResultsVisibility.defaultMessage}</h5>
            <Form.RadioSet
              name="assessmentResultsVisibility"
              onChange={correctnessChanged}
              value={showCorrectness}
            >
              <Form.Radio value="always">{messages.alwaysShowAssessmentResults.defaultMessage}</Form.Radio>
              <Form.Text>{messages.alwaysShowAssessmentResultsDescription.defaultMessage}</Form.Text>
              <Form.Radio value="never">{messages.neverShowAssessmentResults.defaultMessage}</Form.Radio>
              <Form.Text>{messages.neverShowAssessmentResultsDescription.defaultMessage}</Form.Text>
            </Form.RadioSet>
          </>
        ) : (
          <Form.Checkbox checked={isVisibleToStaffOnly} onChange={handleChange} data-testid="visibility-checkbox">
            <FormattedMessage {...messages.hideFromLearners} />
          </Form.Checkbox>
        )
      }
      {showWarning && !isSubsection && (
        <Alert className="mt-2" variant="warning">
          <FormattedMessage {...messages.sectionVisibilityWarning} />
        </Alert>
      )}
    </>
  );
};

VisibilityTab.propTypes = {
  values: PropTypes.shape({
    isVisibleToStaffOnly: PropTypes.bool.isRequired,
    hideAfterDue: PropTypes.bool.isRequired,
    showCorrectness: PropTypes.string.isRequired,
  }).isRequired,
  setFieldValue: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  showWarning: PropTypes.bool.isRequired,
  isSubsection: PropTypes.bool.isRequired,
};

export default injectIntl(VisibilityTab);
