import * as Yup from 'yup';

import { REQUEST_TYPES } from '../constants';
import messages from './messages';

/**
 * Get Update form settings depending on requestType
 * @param {typeof REQUEST_TYPES} requestType - one of REQUEST_TYPES
 * @param {object} courseUpdatesInitialValues - form initial values depending on requestType
 * @returns {{
  *  currentContent: string,
  *  validationSchema: object,
  *  formTitle: string,
  *  submitButtonText: string,
  *  contentFieldName: string
 *  }}
 */
const geUpdateFormSettings = (requestType, courseUpdatesInitialValues, intl) => {
  const updatesValidationSchema = Yup.object().shape({
    id: Yup.number().required(),
    date: Yup.date().required(),
    content: Yup.string(),
  });

  switch (requestType) {
    case REQUEST_TYPES.edit_handouts:
      return {
        currentContent: courseUpdatesInitialValues.data,
        formTitle: messages.editHandoutsTitle.defaultMessage,
        validationSchema: Yup.object().shape(),
        contentFieldName: 'data',
        submitButtonText: messages.saveButton.defaultMessage,
      };
    case REQUEST_TYPES.add_new_update:
      return {
        currentContent: courseUpdatesInitialValues.content,
        formTitle: messages.addNewUpdateTitle.defaultMessage,
        validationSchema: updatesValidationSchema,
        contentFieldName: 'content',
        submitButtonText: messages.postButton.defaultMessage,
      };
    case REQUEST_TYPES.edit_update:
      return {
        currentContent: courseUpdatesInitialValues.content,
        formTitle: messages.editUpdateTitle.defaultMessage,
        validationSchema: updatesValidationSchema,
        contentFieldName: 'content',
        submitButtonText: messages.postButton.defaultMessage,
      };
    default:
      return '';
  }
};

// eslint-disable-next-line import/prefer-default-export
export { geUpdateFormSettings };
