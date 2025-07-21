import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  titleLabel: {
    id: 'authoring.videoeditor.videoSource.title.label',
    defaultMessage: 'Video Source',
    description: 'Title for the video source widget',
  },
  videoIdLabel: {
    id: 'authoring.videoeditor.videoSource.videoId.label',
    defaultMessage: 'Video ID',
    description: 'Label for the video ID field',
  },
  videoIdFeedback: {
    id: 'authoring.videoeditor.videoSource.videoId.feedback',
    defaultMessage: 'If you have been assigned a video ID, enter it here.',
    description: 'Helper text for the video ID field',
  },
  videoUrlLabel: {
    id: 'authoring.videoeditor.videoSource.videoUrl.label',
    defaultMessage: 'Video URL',
    description: 'Label for the video URL field',
  },
  videoUrlFeedback: {
    id: 'authoring.videoeditor.videoSource.videoUrl.feedback',
    defaultMessage: `Your video URL. This can be a YouTube URL or a link to a video file (.mp4, .ogg, or .webm) hosted elsewhere on the web.`,
    description: 'Helper text for the video URL field',
  },
  videoIdChangeAlert: {
    id: 'authoring.videoeditor.videoIdChangeAlert.message',
    defaultMessage: 'Video ID field has been changed, please review the video URL and fallback URL values and update them if necessary.',
    description: 'Message for the alert that appears when the video ID is changed',
  },
  fallbackVideoTitle: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.title',
    defaultMessage: 'Fallback Videos',
    description: 'Title for the fallback videos section',
  },
  fallbackVideoMessage: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.message',
    defaultMessage: `To ensure all users can access the video, we recommended providing additional videos in the .mp4 and .webm formats. The first listed video compatible with a learner’s device will play.`,
    description: 'Text explaining the reason for fallback videos',
  },
  fallbackVideoLabel: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.label',
    defaultMessage: 'Video URL',
    description: 'Label for the fallback video URL field',
  },
  deleteFallbackVideo: {
    id: 'authoring.videoeditor.videoSource.deleteFallbackVideo',
    defaultMessage: 'Delete',
    description: 'Message displayed to the user for the action of deleting a fallback video',
  },
  allowDownloadCheckboxLabel: {
    id: 'authoring.videoeditor.videoSource.allowDownloadCheckboxLabel',
    defaultMessage: 'Allow video download',
    description: 'Label for the allow video download checkbox',
  },
  allowDownloadTooltipMessage: {
    id: 'authoring.videoeditor.videoSource.allowDownloadTooltipMessage',
    defaultMessage: `Allow learners to download versions of this video in different formats if they can’t use the video player or don’t have access to YouTube.`,
    description: 'Message for the allow video download checkbox',
  },
  allowVideoSharingCheckboxLabel: {
    id: 'authoring.videoeditor.videoSource.allowVideoSharingCheckboxLabel',
    defaultMessage: 'Allow this video to be shared on social media.',
    description: 'Label for the allow video sharing checkbox',
  },
  allowVideoSharingTooltipMessage: {
    id: 'authoring.videoeditor.videoSource.allowVideoSharingTooltipMessage',
    defaultMessage: `Allow learners to share this video publicly on social media. The video will be accessible to everyone.  Links to the course page and course enrollment will be displayed alongside the video.`,
    description: 'Message for the allow video sharing checkbox',
  },
  addButtonLabel: {
    id: 'authoring.videoeditor.videoSource.fallbackVideo.addButtonLabel',
    defaultMessage: 'Add Video URL',
    description: 'Label for the button to add a video URL',
  },
});
export default messages;