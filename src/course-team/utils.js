import { MODAL_TYPES } from './constants';
import messages from './info-modal/messages';

/**
 * Create an info modal settings dependent on modal type
 * @param {typeof MODAL_TYPES} modalType - one of MODAL_TYPES
 * @param {string} currentEmail - email in current user
 * @param {string} errorEmail - email from wrong request
 * @param {string} courseName - current course name
 * @returns {{
   * title: string,
   * message: string,
   * variant: string,
   * closeButtonText: string,
   * submitButtonText: string,
   * closeButtonVariant: string
 * }}
 */

const getInfoModalSettings = (modalType, currentEmail, errorMessage, courseName, intl) => {
  switch (modalType) {
    case MODAL_TYPES.delete:
      return {
        title: messages.deleteModalTitle.defaultMessage,
        message: intl.formatMessage(messages.deleteModalMessage, { email: currentEmail, courseName }),
        variant: '',
        closeButtonText: messages.deleteModalCancelButton.defaultMessage,
        submitButtonText: messages.deleteModalDeleteButton.defaultMessage,
        closeButtonVariant: 'tertiary',
      };
    case MODAL_TYPES.error:
      return {
        title: messages.errorModalTitle.defaultMessage,
        message: errorMessage,
        variant: 'danger',
        closeButtonText: messages.errorModalOkButton.defaultMessage,
        closeButtonVariant: 'primary',
      };
    case MODAL_TYPES.warning:
      return {
        title: messages.warningModalTitle.defaultMessage,
        message: intl.formatMessage(messages.warningModalMessage, { email: currentEmail, courseName }),
        variant: 'warning',
        closeButtonText: messages.warningModalReturnButton.defaultMessage,
        mainButtonVariant: 'primary',
      };
    default:
      return '';
  }
};

// eslint-disable-next-line import/prefer-default-export
export { getInfoModalSettings };
