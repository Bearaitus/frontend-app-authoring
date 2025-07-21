import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  heading: {
    id: 'course-authoring.video-uploads.heading',
    defaultMessage: 'Videos',
    description: 'Page heading',
  },
  transcriptSettingsButtonLabel: {
    id: 'course-authoring.video-uploads.transcript-settings.button.toggle',
    defaultMessage: 'Transcription Settings',
    description: 'Transcription settings button text',
  },
  thumbnailAltMessage: {
    id: 'course-authoring.video-uploads.thumbnail.alt',
    defaultMessage: 'Video Thumbnail {displayName}',
    description: 'Alt text for video thumbnail',
  },
  activeCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.activeCheckbox.label',
    defaultMessage: 'Active',
    description: 'Label for the “Active” checkbox in the sort and filter modal',
  },
  inactiveCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.inactiveCheckbox.label',
    defaultMessage: 'Inactive',
    description: 'Label for the “Inactive” checkbox in the sort and filter modal',
  },
  transcribedCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.transcribedCheckbox.label',
    defaultMessage: 'Transcribed',
    description: 'Label for the “Transcribed” checkbox in the sort and filter modal',
  },
  notTranscribedCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.notTranscribedCheckbox.label',
    defaultMessage: 'Not Transcribed',
    description: 'Label for the “Not Transcribed” checkbox in the sort and filter modal',
  },
  processingCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.processingCheckbox.label',
    defaultMessage: 'Processing',
    description: 'Label for the “Processing” checkbox in the sort and filter modal',
  },
  failedCheckboxLabel: {
    id: 'course-authoring.files-and-videos.sort-and-filter.modal.filter.failedCheckbox.label',
    defaultMessage: 'Failed',
    description: 'Label for the “Failed” checkbox in the sort and filter modal',
  },
  videoUploadAlertLabel: {
    id: 'course-authoring.files-and-videos.video-upload-alert',
    defaultMessage: 'Upload in progress. Please wait for the upload to complete before leaving this page.',
    description: 'Video upload alert message',
  },
  videoUploadTrackerModalTitle: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-modal.title',
    defaultMessage: 'Upload in Progress',
    description: 'Upload tracker modal title',
  },
  videoUploadTrackerAlertTitle: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-alert.title',
    defaultMessage: 'Do not close or refresh this page or tab until the upload completes',
    description: 'Upload tracker alert title',
  },
  videoUploadTrackerAlertBodyMessage: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-alert.body.message',
    defaultMessage: 'Exiting now will remove all upload progress. This popup will close after successful upload.',
    description: 'Upload tracker alert body message',
  },
  videoUploadTrackerAlertEditMessage: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-alert.edit.message',
    defaultMessage: 'Do you want to continue editing in Studio during this upload?',
    description: 'Continue editing alert message for the upload tracker',
  },
  videoUploadTrackerAlertEditHyperlinkLabel: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-alert.edit-hyperlink.message',
    defaultMessage: 'Open New Studio Tab',
    description: 'Text for the hyperlink to open a new tab',
  },
  videoUploadTrackerModalBody: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-modal.body.message',
    defaultMessage: 'The following ({uploadCount}) {uploadCount, plural, one {video} other {videos}} are being uploaded:',
    description: 'Message for the upload tracker modal body',
  },
  videoUploadTrackerAlertCancelLabel: {
    id: 'course-authoring.files-and-videos.video-upload-tracker-alert.cancel-button.label',
    defaultMessage: 'Cancel Upload',
    description: 'Text for the cancel button',
  },
});
export default messages;