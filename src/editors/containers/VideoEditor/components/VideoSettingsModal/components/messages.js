import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  expandAltText: {
    id: 'authoring.videoeditor.expand',
    defaultMessage: 'Expand',
  },
  collapseAltText: {
    id: 'authoring.videoeditor.collapse',
    defaultMessage: 'Collapse',
  },
  validateErrorTitle: {
    id: 'authoring.videoeditor.validate.error.title',
    defaultMessage: 'Failed to Add Video',
    description: 'Validation Error Title.',
  },
  validateErrorBody: {
    id: 'authoring.videoeditor.validate.error.body',
    defaultMessage: 'Please check the entered information and try again.',
    description: 'Validation Error Body.',
  },
  durationTitle: {
    id: 'authoring.videoeditor.duration.title',
    defaultMessage: 'Duration',
    description: 'Title for the Duration widget.',
  },
  durationDescription: {
    id: 'authoring.videoeditor.duration.description',
    defaultMessage: 'Specify a portion of the video to play.',
    description: 'Description for the Duration widget.',
  },
  startTimeLabel: {
    id: 'authoring.videoeditor.duration.startTime.label',
    defaultMessage: 'Start Time',
    description: 'Label for the Start Time input field.',
  },
  stopTimeLabel: {
    id: 'authoring.videoeditor.duration.stopTime.label',
    defaultMessage: 'End Time',
    description: 'Label for the End Time input field.',
  },
  durationHint: {
    id: 'authoring.videoeditor.duration.hint',
    defaultMessage: 'Enter time in HH:MM:SS format',
    description: 'Tooltip for the Start and End Time input fields.',
  },
  fullVideoLength: {
    id: 'authoring.videoeditor.duration.fullVideoLength',
    defaultMessage: 'Full Video Length',
    description: 'Text describing the video with no start or end time specified.',
  },
  startsAt: {
    id: 'authoring.videoeditor.duration.startsAt',
    defaultMessage: 'Starts at {startTime}',
    description: 'Text describing the video with a specified start time and default end time.',
  },
  total: {
    id: 'authoring.videoeditor.duration.total',
    defaultMessage: 'Total: {total}',
    description: 'Text describing the video with a specified start and end time or only an end time.',
  },
  custom: {
    id: 'authoring.videoeditor.duration.custom',
    defaultMessage: 'Custom: {total}',
    description: 'Text describing the video with a specified start and end time or only an end time for the collapsed widget',
  },
  noTranscriptsAdded: {
    id: 'authoring.videoeditor.transcripts.empty',
    defaultMessage: 'No transcripts added',
    description: 'Message shown when a user has not selected transcripts for the video.',
  },
  videoTypeYoutube: {
    id: 'authoring.videoeditor.videotype.youtube',
    defaultMessage: 'YouTube Video',
    description: 'Displayed on preview card if the video is from youtube.com.',
  },
  videoTypeOther: {
    id: 'authoring.videoeditor.videotype.other',
    defaultMessage: 'Other Video',
    description: 'Displayed on preview card if the video source can’t be determined.',
  },
});
export default messages;