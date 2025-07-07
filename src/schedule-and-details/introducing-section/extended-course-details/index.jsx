import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Form } from '@openedx/paragon';

import messages from './messages';

const ExtendedCourseDetails = ({
  title,
  subtitle,
  duration,
  description,
  onChange,
}) => {
  const intl = useIntl();
  const paramsForExtendedFields = [
    {
      value: title,
      label: messages.extendedTitleLabel.defaultMessage,
      helpText: messages.extendedTitleHelpText.defaultMessage,
      ariaLabel: messages.extendedTitleAriaLabel.defaultMessage,
      controlName: 'title',
      maxLength: 50,
    },
    {
      value: subtitle,
      label: messages.extendedSubtitleLabel.defaultMessage,
      helpText: messages.extendedSubtitleHelpText.defaultMessage,
      ariaLabel: messages.extendedSubtitleAriaLabel.defaultMessage,
      controlName: 'subtitle',
      maxLength: 150,
    },
    {
      value: duration,
      label: messages.extendedDurationLabel.defaultMessage,
      helpText: messages.extendedDurationHelpText.defaultMessage,
      ariaLabel: messages.extendedDurationAriaLabel.defaultMessage,
      controlName: 'duration',
      maxLength: 50,
    },
    {
      value: description,
      label: messages.extendedDescriptionLabel.defaultMessage,
      helpText: messages.extendedDescriptionHelpText.defaultMessage,
      ariaLabel: messages.extendedDescriptionAriaLabel.defaultMessage,
      controlName: 'description',
      maxLength: 1000,
      asTextarea: true,
    },
  ];
  return (
    <>
      {paramsForExtendedFields.map((param) => (
        <Form.Group className="form-group-custom" key={param.label}>
          <Form.Label>{param.label}</Form.Label>
          <Form.Control
            as={param.asTextarea ? TextareaAutosize : 'input'}
            value={param.value}
            name={param.controlName}
            maxLength={param.maxLength}
            onChange={(e) => onChange(e.target.value, param.controlName)}
            aria-label={param.ariaLabel}
          />
          <Form.Control.Feedback>{param.helpText}</Form.Control.Feedback>
        </Form.Group>
      ))}
    </>
  );
};

ExtendedCourseDetails.defaultProps = {
  title: '',
  subtitle: '',
  duration: '',
  description: '',
};

ExtendedCourseDetails.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  duration: PropTypes.string,
  description: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default ExtendedCourseDetails;
