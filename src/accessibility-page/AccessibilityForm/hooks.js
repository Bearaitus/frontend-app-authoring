import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { RequestStatus } from '../../data/constants';
import messages from './messages';

const useAccessibility = (initialValues, intl) => {
  const dispatch = useDispatch();
  const savingStatus = useSelector(state => state.accessibilityPage.savingStatus);
  const [isFormFilled, setFormFilled] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(
      messages.accessibilityPolicyFormValidName.defaultMessage,
    ),
    email: Yup.string()
      .email(messages.accessibilityPolicyFormValidEmail.defaultMessage)
      .required(messages.accessibilityPolicyFormValidEmail.defaultMessage),
    message: Yup.string().required(
      messages.accessibilityPolicyFormValidMessage.defaultMessage,
    ),
  });

  const {
    values, errors, touched, handleChange, handleBlur, handleReset,
  } = useFormik({
    initialValues,
    enableReinitialize: true,
    validateOnBlur: false,
    validationSchema,
  });

  useEffect(() => {
    setFormFilled(Object.values(values).every((i) => i));
  }, [values]);

  useEffect(() => {
    if (savingStatus === RequestStatus.SUCCESSFUL) {
      handleReset();
    }
  }, [savingStatus]);

  const hasErrorField = (fieldName) => !!errors[fieldName] && !!touched[fieldName];

  return {
    errors,
    values,
    isFormFilled,
    dispatch,
    handleBlur,
    handleChange,
    hasErrorField,
    savingStatus,
  };
};

export default useAccessibility;
