import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  titleLabel: {
    id: 'authoring.videoeditor.handout.title.label',
    defaultMessage: 'Materials',
    description: 'Title for the handouts widget',
  },
  uploadButtonLabel: {
    id: 'authoring.videoeditor.handout.upload.label',
    defaultMessage: 'Upload Materials',
    description: 'Label for the upload button',
  },
  addHandoutMessage: {
    id: 'authoring.videoeditor.handout.upload.addHandoutMessage',
    defaultMessage: `Add materials to this video. Users can download
    this file by clicking “Download Materials” below the video.`,
    description: 'Message displayed when uploading materials',
  },
  uploadHandoutError: {
    id: 'authoring.videoeditor.handout.error.uploadHandoutError',
    defaultMessage: 'Failed to upload materials. Please try again.',
    description: 'Message displayed to the user when materials upload fails',
  },
  fileSizeError: {
    id: 'authoring.videoeditor.handout.error.fileSizeError',
    defaultMessage: 'Handout files must be 20MB or less. Please reduce the file size and try again.',
    description: 'Message displayed to the user when the handout file size is too large',
  },
  handoutHelpMessage: {
    id: 'authoring.videoeditor.handout.handoutHelpMessage',
    defaultMessage: 'Users can download this file by clicking “Download Materials” below the video.',
    description: 'Message displayed to the user when handouts are available',
  },
  deleteHandout: {
    id: 'authoring.videoeditor.handout.deleteHandout',
    defaultMessage: 'Delete',
    description: 'Message displayed to the user for the delete action',
  },
  replaceHandout: {
    id: 'authoring.videoeditor.handout.replaceHandout',
    defaultMessage: 'Replace',
    description: 'Message displayed to the user for the replace action',
  },
  downloadHandout: {
    id: 'authoring.videoeditor.handout.downloadHandout',
    defaultMessage: 'Download',
    description: 'Message displayed to the user for the download action',
  },
});
export default messages;