import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  uploadImageDropzoneText: {
    id: 'course-authoring.certificates.modal-dropzone.text',
    defaultMessage: 'Drag an image here or click to upload',
    description: 'Dropzone block description',
  },
  uploadImageDropzoneAlt: {
    id: 'course-authoring.certificates.modal-dropzone.dropzone-alt',
    defaultMessage: 'Uploaded course certificate image',
    description: 'Description of the uploaded image',
  },
  uploadImageValidationText: {
    id: 'course-authoring.certificates.modal-dropzone.validation.text',
    defaultMessage: 'Only {types} files can be uploaded. Please select a file with extensions {extensions} to upload.',
    description: 'Error message when choosing the wrong file type',
  },
  cancelModal: {
    id: 'course-authoring.certificates.modal-dropzone.cancel.modal',
    defaultMessage: 'Cancel',
    description: 'Text for the cancel button in the modal',
  },
  uploadModal: {
    id: 'course-authoring.certificates.modal-dropzone.upload.modal',
    defaultMessage: 'Upload',
    description: 'Text for the upload button in the modal',
  },
  uploadImageDropzoneInvalidSizeMore: {
    id: 'course-authoring.certificates.modal-dropzone.validation.invalid-size-more',
    defaultMessage: 'The image size must be less than {maxSize}MB.',
    description: 'Error message when the uploaded image size exceeds the limit',
  },
});
export default messages;