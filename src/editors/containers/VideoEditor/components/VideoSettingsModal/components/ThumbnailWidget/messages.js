import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  title: {
    id: 'authoring.videoeditor.thumbnail.title',
    defaultMessage: 'Thumbnail',
    description: 'Title for the thumbnail widget',
  },
  unavailableSubtitle: {
    id: 'authoring.videoeditor.thumbnail.unavailable.subtitle',
    defaultMessage: 'Unavailable',
    description: 'Subtitle for the unavailable thumbnail widget',
  },
  noneSubtitle: {
    id: 'authoring.videoeditor.thumbnail.none.subtitle',
    defaultMessage: 'None',
    description: 'Subtitle for no thumbnail in the widget',
  },
  yesSubtitle: {
    id: 'authoring.videoeditor.thumbnail.yes.subtitle',
    defaultMessage: 'Yes',
    description: 'Subtitle for a thumbnail existing in the widget',
  },
  unavailableMessage: {
    id: 'authoring.videoeditor.thumbnail.unavailable.message',
    defaultMessage:
      'Select a video from your library to enable this feature (only applies to courses hosted on edx.org).',
    description: 'Message for the unavailable thumbnail widget',
  },
  uploadButtonLabel: {
    id: 'authoring.videoeditor.thumbnail.upload.label',
    defaultMessage: 'Upload Thumbnail',
    description: 'Label for the upload button',
  },
  addThumbnail: {
    id: 'authoring.videoeditor.thumbnail.upload.message',
    defaultMessage: 'Upload an image that users will see before playing the video.',
    description: 'Message for adding a thumbnail',
  },
  aspectRequirements: {
    id: 'authoring.videoeditor.thumbnail.upload.aspectRequirements',
    defaultMessage: 'Images should be 16:9 aspect ratio (1280x720 pixels recommended)',
    description: 'Message for thumbnail requirements',
  },
  thumbnailAltText: {
    id: 'authoring.videoeditor.thumbnail.altText',
    defaultMessage: 'Image used as a thumbnail for the video',
    description: 'Alt text for the thumbnail',
  },
  deleteThumbnail: {
    id: 'authoring.videoeditor.thumbnail.deleteThumbnail',
    defaultMessage: 'Delete',
    description: 'Message displayed to the user for the delete thumbnail action',
  },
  fileSizeError: {
    id: 'authoring.videoeditor.thumbnail.error.fileSizeError',
    defaultMessage:
      'Thumbnail file size must be greater than 2KB and less than 2MB. Please reduce the image size and try again.',
    description:
      'Message displayed to the user when the image file size is less than 2KB or greater than 2MB',
  },
});
export default messages;