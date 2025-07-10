import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
  Form,
  Button,
  Dropdown,
  ActionRow,
  StatefulButton,
  TransitionReplace,
} from '@openedx/paragon';
import { Info as InfoIcon } from '@openedx/paragon/icons';
import TypeaheadDropdown from '../../editors/sharedComponents/TypeaheadDropdown';
import AlertMessage from '../alert-message';
import { STATEFUL_BUTTON_STATES } from '../../constants';
import { RequestStatus, TOTAL_LENGTH_KEY } from '../../data/constants';
import { getSavingStatus } from '../data/selectors';
import { getStudioHomeData } from '../../studio-home/data/selectors';
import { updatePostErrors } from '../data/slice';
import { updateCreateOrRerunCourseQuery } from '../data/thunks';
import { useCreateOrRerunCourse } from './hooks';
import messages from './messages';

const CreateOrRerunCourseForm = ({
  title,
  isCreateNewCourse,
  initialValues,
  onClickCancel,
}) => {
  const { courseId } = useParams();
  const savingStatus = useSelector(getSavingStatus);
  const { allowToCreateNewOrg } = useSelector(getStudioHomeData);
  const runFieldReference = useRef(null);
  const displayNameFieldReference = useRef(null);
  const {
    errors,
    values,
    postErrors,
    isFormFilled,
    isFormInvalid,
    organizations,
    showErrorBanner,
    dispatch,
    handleBlur,
    handleChange,
    hasErrorField,
    setFieldValue,
  } = useCreateOrRerunCourse(initialValues);

  const newCourseFields = [
    {
      label: messages.courseDisplayNameLabel.defaultMessage,
      name: 'displayName',
      value: values.displayName,
      placeholder: messages.courseDisplayNamePlaceholder.defaultMessage,
      disabled: false,
      ref: displayNameFieldReference,
    },
    {
      label: messages.courseOrgLabel.defaultMessage,
      name: 'org',
      value: values.org,
      options: organizations,
      placeholder: messages.courseOrgPlaceholder.defaultMessage,
      disabled: false,
    },
    {
      label: messages.courseNumberLabel.defaultMessage,
      name: 'number',
      value: values.number,
      placeholder: messages.courseNumberPlaceholder.defaultMessage,
      disabled: !isCreateNewCourse,
    },
    {
      label: messages.courseRunLabel.defaultMessage,
      name: 'run',
      value: values.run,
      placeholder: messages.courseRunPlaceholder.defaultMessage,
      disabled: false,
      ref: runFieldReference,
    },
  ];

  const errorMessage = errors[TOTAL_LENGTH_KEY] || postErrors?.errMsg;

  const createButtonState = {
    labels: {
      default: isCreateNewCourse ? messages.createButton.defaultMessage : messages.rerunCreateButton.defaultMessage,
      pending: isCreateNewCourse ? messages.creatingButton.defaultMessage : messages.rerunningCreateButton.defaultMessage,
    },
    disabledStates: [STATEFUL_BUTTON_STATES.pending],
  };

  const handleOnClickCreate = () => {
    const courseData = isCreateNewCourse ? values : { ...values, sourceCourseKey: courseId };
    dispatch(updateCreateOrRerunCourseQuery(courseData));
  };

  const handleOnClickCancel = () => {
    dispatch(updatePostErrors({}));
    onClickCancel();
  };

  const handleCustomBlurForDropdown = (e) => {
    const { value, name } = e.target;
    setFieldValue(name, value);
    handleBlur(e);
  };

  const renderOrgField = (field) => (allowToCreateNewOrg ? (
    // <TypeaheadDropdown
    //   readOnly={false}
    //   name={field.name}
    //   value={field.value}
    //   controlClassName={classNames({ 'is-invalid': hasErrorField(field.name) })}
    //   options={field.options}
    //   placeholder={field.placeholder}
    //   handleBlur={handleCustomBlurForDropdown}
    //   handleChange={(value) => setFieldValue(field.name, value)}
    //   noOptionsMessage={messages.courseOrgNoOptions.defaultMessage}
    //   helpMessage=""
    //   errorMessage=""
    //   floatingLabel=""
    // />
    null
  ) : (
    null
    // <Dropdown className="mr-2">
    //   <Dropdown.Toggle id={`${field.name}-dropdown`} variant="outline-primary">
    //     {field.value || messages.courseOrgNoOptions.defaultMessage}
    //   </Dropdown.Toggle>
    //   <Dropdown.Menu>
    //     {field.options?.map((value) => (
    //       <Dropdown.Item
    //         key={value}
    //         onClick={() => setFieldValue(field.name, value)}
    //       >
    //         {value}
    //       </Dropdown.Item>
    //     ))}
    //   </Dropdown.Menu>
    // </Dropdown>
  ));

  useEffect(() => {
    if (!isCreateNewCourse) {
      runFieldReference?.current?.focus();
    } else {
      displayNameFieldReference?.current?.focus();
    }
  }, []);

  return (
    <div className="create-or-rerun-course-form">
      <TransitionReplace>
        {(errors[TOTAL_LENGTH_KEY] || showErrorBanner) ? (
          <AlertMessage
            variant="danger"
            icon={InfoIcon}
            title={errorMessage}
            aria-hidden="true"
            aria-labelledby={messages.alertErrorExistsAriaLabelledBy.defaultMessage}
            aria-describedby={messages.alertErrorExistsAriaDescribedBy.defaultMessage}
          />
        ) : null}
      </TransitionReplace>
      <h3 className="mb-3">{title}</h3>
      <Form>
        {newCourseFields.map((field) => (
          <Form.Group
            className={classNames('form-group-custom', {
              'form-group-custom_isInvalid': hasErrorField(field.name),
            })}
            key={field.label}
          >
            <Form.Label>{field.label}</Form.Label>
            {field.name !== 'org' ? (
              <Form.Control
                value={field.value}
                placeholder={field.placeholder}
                name={field.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={hasErrorField(field.name)}
                disabled={field.disabled}
                ref={field?.ref}
              />
            ) : renderOrgField(field)}
            {hasErrorField(field.name) && (
              <Form.Control.Feedback
                className="feedback-error"
                type="invalid"
                hasIcon={false}
              >
                {errors[field.name]}
              </Form.Control.Feedback>
            )}
          </Form.Group>
        ))}
        <ActionRow className="justify-content-start">
          <Button
            variant="outline-primary"
            onClick={handleOnClickCancel}
          >
            {messages.cancelButton.defaultMessage}
          </Button>
          <StatefulButton
            key="save-button"
            className="ml-3"
            onClick={handleOnClickCreate}
            disabled={!isFormFilled || isFormInvalid}
            state={
              savingStatus === RequestStatus.PENDING
                ? STATEFUL_BUTTON_STATES.pending
                : STATEFUL_BUTTON_STATES.default
            }
            {...createButtonState}
          />
        </ActionRow>
      </Form>
    </div>
  );
};

CreateOrRerunCourseForm.defaultProps = {
  title: '',
  isCreateNewCourse: false,
};

CreateOrRerunCourseForm.propTypes = {
  title: PropTypes.string,
  initialValues: PropTypes.shape({
    displayName: PropTypes.string.isRequired,
    org: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    run: PropTypes.string.isRequired,
  }).isRequired,
  isCreateNewCourse: PropTypes.bool,
  onClickCancel: PropTypes.func.isRequired,
};

export default CreateOrRerunCourseForm;