import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  uploadImageHelpText: {
    id: 'course-authoring.schedule-section.introducing.upload-image.help-text',
    defaultMessage: 'Please provide the correct path and name of your {identifierFieldText} (Note: only JPEG or PNG formats are supported)',
  },
  uploadImageFilesAndUploads: {
    id: 'course-authoring.schedule-section.introducing.upload-image.file-and-uploads',
    defaultMessage: 'files and uploads',
  },
  uploadImageDropzoneText: {
    id: 'course-authoring.schedule-section.introducing.upload-image.dropzone-text',
    defaultMessage: 'Drag your {identifierFieldText} here or click to upload.',
  },
  uploadImageDropzoneAlt: {
    id: 'course-authoring.schedule-section.introducing.upload-image.dropzone-alt',
    defaultMessage: 'Uploaded course image',
  },
  uploadImageEmpty: {
    id: 'course-authoring.schedule-section.introducing.upload-image.empty',
    defaultMessage: 'Your course currently does not have an image. Please upload one (JPEG or PNG format, recommended minimum dimensions of 375px wide and 200px high)',
  },
  uploadImageIconAlt: {
    id: 'course-authoring.schedule-section.introducing.upload-image.icon-alt',
    defaultMessage: 'File upload icon',
  },
  uploadImageBodyFilled: {
    id: 'course-authoring.schedule-section.introducing.upload-image.manage',
    defaultMessage: 'You can manage this image along with all of your other {hyperlink}',
  },
  uploadImageInputPlaceholder: {
    id: 'course-authoring.schedule-section.introducing.upload-image.input.placeholder',
    defaultMessage: 'Your {identifierFieldText} URL',
  },
});
export default messages;