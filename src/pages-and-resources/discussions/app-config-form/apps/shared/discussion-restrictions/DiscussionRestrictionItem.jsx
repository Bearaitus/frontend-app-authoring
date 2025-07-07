import React, { useState, useCallback } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Form } from '@openedx/paragon';
import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import _ from 'lodash';

import messages from '../../../messages';
import RestrictDatesInput from './RestrictDatesInput';
import { formatRestrictedDates } from '../../../utils';
import {
  restrictedDatesStatus as constants,
  deleteRestrictedDatesHelperText,
  badgeVariant,
} from '../../../../data/constants';
import CollapsableEditor from '../../../../../../generic/CollapsableEditor';
import ConfirmationPopup from '../../../../../../generic/ConfirmationPopup';
import CollapseCardHeading from './CollapseCardHeading';

const DiscussionRestrictionItem = ({
  restrictedDate,
  onDelete,
  hasError,
  onClose,
  fieldNameCommonBase,
}) => {
  const restrictedDateError = !restrictedDate.startDate || !restrictedDate.endDate || hasError;
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [collapseIsOpen, setCollapseOpen] = useState(restrictedDateError);
  const { setFieldTouched } = useFormikContext();
  const intl = useIntl();

  const handleToggle = useCallback((isOpen) => {
    if (!isOpen && hasError) {
      return setCollapseOpen(true);
    }
    return setCollapseOpen(isOpen);
  }, [hasError]);

  const handleOnClose = useCallback(() => {
    ['startDate', 'startTime', 'endDate', 'endTime'].forEach(field => (
      setFieldTouched(`${fieldNameCommonBase}.${field}`, true)
    ));
    if (!hasError) {
      onClose();
    }
  }, [hasError, onClose]);

  const getHeading = useCallback((isOpen) => (
    <CollapseCardHeading
      isOpen={isOpen}
      expandHeadingText={messages.configureRestrictedDates.defaultMessage}
      collapseHeadingText={formatRestrictedDates(restrictedDate)}
      badgeVariant={badgeVariant[restrictedDate.status]}
      badgeStatus={intl.formatMessage(messages.restrictedDatesStatus, {
        status: _.startCase(_.toLower(restrictedDate.status)),
      })}
    />
  ), [restrictedDate]);

  const handleShowDeletePopup = useCallback(() => {
    setShowDeletePopup(true);
  }, []);

  const handleCancelDeletePopup = useCallback(() => {
    setShowDeletePopup(false);
  }, []);

  if (showDeletePopup) {
    return (
      <ConfirmationPopup
        label={restrictedDate.status === constants.ACTIVE
          ? messages.activeRestrictedDatesDeletionLabel.defaultMessage
          : messages.restrictedDatesDeletionLabel.defaultMessage}
        bodyText={intl.formatMessage(deleteRestrictedDatesHelperText[restrictedDate.status])}
        onConfirm={onDelete}
        confirmLabel={messages.deleteButton.defaultMessage}
        onCancel={handleCancelDeletePopup}
        cancelLabel={messages.cancelButton.defaultMessage}
        confirmVariant="plain"
        confirmButtonClass="text-danger-500 border-gray-300 rounded-0"
      />
    );
  }

  return (
    <CollapsableEditor
      open={collapseIsOpen}
      onToggle={handleToggle}
      title={getHeading(collapseIsOpen)}
      onDelete={handleShowDeletePopup}
      expandAlt={messages.expandAltText.defaultMessage}
      collapseAlt={messages.collapseAltText.defaultMessage}
      deleteAlt={messages.deleteAltText.defaultMessage}
      data-testid={restrictedDate.id}
      onClose={handleOnClose}
    >
      <Form.Row className="mx-2 pt-3">
        <RestrictDatesInput
          value={restrictedDate.startDate}
          type="date"
          label={messages.startDateLabel.defaultMessage}
          helpText={messages.restrictedStartDateHelp.defaultMessage}
          fieldName="startDate"
          formGroupClasses="pl-md-0"
          fieldClasses="pr-md-2"
          dataTestId="startDate"
          fieldNameCommonBase={fieldNameCommonBase}
        />
        <RestrictDatesInput
          value={restrictedDate.startTime}
          type="time"
          label={intl.formatMessage(messages.startTimeLabel, { zone: 'UTC' })}
          helpText={messages.restrictedStartTimeHelp.defaultMessage}
          fieldName="startTime"
          formGroupClasses="pr-md-0"
          fieldClasses="ml-md-2"
          feedbackClasses="ml-md-2"
          dataTestId="startTime"
          fieldNameCommonBase={fieldNameCommonBase}
        />
      </Form.Row>
      <hr className="mx-2 my-2 border-light-400" />
      <Form.Row className="mx-2 pt-4">
        <RestrictDatesInput
          value={restrictedDate.endDate}
          type="date"
          label={messages.endDateLabel.defaultMessage}
          helpText={messages.restrictedEndDateHelp.defaultMessage}
          fieldName="endDate"
          formGroupClasses="pl-md-0"
          fieldClasses="pr-md-2"
          dataTestId="endDate"
          fieldNameCommonBase={fieldNameCommonBase}
        />
        <RestrictDatesInput
          value={restrictedDate.endTime}
          type="time"
          label={intl.formatMessage(messages.endTimeLabel, { zone: 'UTC' })}
          helpText={messages.restrictedEndTimeHelp.defaultMessage}
          fieldName="endTime"
          formGroupClasses="pr-md-0"
          fieldClasses="ml-md-2"
          feedbackClasses="ml-md-2"
          dataTestId="endTime"
          fieldNameCommonBase={fieldNameCommonBase}
        />
      </Form.Row>
    </CollapsableEditor>
  );
};

DiscussionRestrictionItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  hasError: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fieldNameCommonBase: PropTypes.string.isRequired,
  restrictedDate: PropTypes.shape({
    id: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default React.memo(DiscussionRestrictionItem);
