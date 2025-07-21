import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  welcomeMessageShortDescription: {
    id: 'welcomeMessageShortDescription',
    defaultMessage: 'Add a welcome message',
    description: 'Label for the section describing the course welcome message',
  },
  welcomeMessageLongDescription: {
    id: 'welcomeMessageLongDescription',
    defaultMessage: 'Personally welcome learners to your course and set them up for a positive learning experience.',
    description: 'Description for the section inviting the user to enter a welcome message for the course',
  },
  gradingPolicyShortDescription: {
    id: 'gradingPolicyShortDescription',
    defaultMessage: 'Create your course grading policy',
    description: 'Label for the section describing the course grading policy',
  },
  gradingPolicyLongDescription: {
    id: 'gradingPolicyLongDescription',
    defaultMessage: 'Set the grading policy, including assignment types and passing score. All assignments sum to 100%.',
    description: 'Description for the section inviting the user to enter the grading policy for the course',
  },
  gradingPolicyComment: {
    id: 'gradingPolicyComment',
    defaultMessage: 'Your current grading policy sums to {percent}%',
    description: 'Description for the section displaying the courses overall grading policy',
  },
  certificateShortDescription: {
    id: 'certificateShortDescription',
    defaultMessage: 'Enable a certificate',
    description: 'Label for the section describing the course completion certificate',
  },
  certificateLongDescription: {
    id: 'certificateLongDescription',
    defaultMessage: 'Ensure all text is correct, signatures are uploaded, and the certificate is activated.',
    description: 'Description for the section inviting the user to create a course completion certificate',
  },
  courseDatesShortDescription: {
    id: 'courseDatesShortDescription',
    defaultMessage: 'Set important course dates',
    description: 'Label for the section describing the course dates',
  },
  courseDatesLongDescription: {
    id: 'courseDatesLongDescription',
    defaultMessage: 'Set the course schedule, including start and end dates.',
    description: 'Description for the section inviting the user to set up the course schedule',
  },
  assignmentDeadlinesShortDescription: {
    id: 'assignmentDeadlinesShortDescription',
    defaultMessage: 'Review assignment deadlines',
    description: 'Label for the section describing the course assignment deadlines',
  },
  assignmentDeadlinesLongDescription: {
    id: 'assignmentDeadlinesLongDescription',
    defaultMessage: 'Ensure that all assignment deadlines fall between the course start and end dates.',
    description: 'Description for the section inviting the user to enter assignment deadlines for the course',
  },
  assignmentDeadlinesComment: {
    id: 'assignmentDeadlinesComment',
    defaultMessage: 'The following assignments have deadlines that fall outside of the course start and end dates:',
    description: 'Description for the section displaying which assignments are outside the start and end dates',
  },
  videoDurationShortDescription: {
    id: 'videoDurationShortDescription',
    defaultMessage: 'Review video duration',
    description: 'Label for the section describing video duration',
  },
  videoDurationLongDescription: {
    id: 'videoDurationLongDescription',
    defaultMessage: 'Learners engage best with short videos followed by opportunities for practice. Ensure 80% or more of the videos in your course are less than 10 minutes in length.',
    description: 'Description for the section inviting the user to follow best practices for video duration',
  },
  mobileFriendlyVideoShortDescription: {
    id: 'mobileFriendlyVideoShortDescription',
    defaultMessage: 'Create mobile-friendly video',
    description: 'Label for the section describing mobile video',
  },
  mobileFriendlyVideoLongDescription: {
    id: 'mobileFriendlyVideoLongDescription',
    defaultMessage: 'Mobile video can be viewed on all supported devices. Ensure at least 90% of your course videos are mobile by uploading course videos to the edX video pipeline.',
    description: 'Description for the section inviting the user to follow best practices for mobile video',
  },
  diverseSequencesShortDescription: {
    id: 'diverseSequencesShortDescription',
    defaultMessage: 'Create diverse learning sequences',
    description: 'Label for the section describing diverse learning content sequences',
  },
  diverseSequencesLongDescription: {
    id: 'diverseSequencesLongDescription',
    defaultMessage: 'Research shows that diverse content experiences drive learner engagement. We recommend that 80% or more of your learning sequences or sub-sections include multiple types of content (e.g., video, discussion, or assignment).',
    description: 'Description for the section inviting the user to follow best practices for diverse learning content sequences',
  },
  weeklyHighlightsShortDescription: {
    id: 'weeklyHighlightsShortDescription',
    defaultMessage: 'Set weekly highlights',
    description: 'Label for the section describing weekly highlights',
  },
  weeklyHighlightsLongDescription: {
    id: 'weeklyHighlightsLongDescription',
    defaultMessage: 'Enable and define weekly highlights to keep learners engaged and on track in your course.',
    description: 'Description for the section inviting the user to follow best practices for weekly course highlights',
  },
  unitDepthShortDescription: {
    id: 'unitDepthShortDescription',
    defaultMessage: 'Manage unit depth',
    description: 'Label for the section describing course unit depth',
  },
  unitDepthLongDescription: {
    id: 'unitDepthLongDescription',
    defaultMessage: 'Breaking course content into manageable chunks fosters learner engagement. We recommend units contain no more than three components.',
    description: 'Description for the section inviting the user to follow best practices for course unit depth',
  },
  proctoringEmailShortDescription: {
    id: 'proctoringEmailShortDescription',
    defaultMessage: 'Add proctoring escalation email',
    description: 'Label for the section describing the proctoring escalation email',
  },
  proctoringEmailLongDescription: {
    id: 'proctoringEmailLongDescription',
    defaultMessage: 'Courses using Proctortrack require an escalation email. Ensure learners and support can reach your course team regarding proctoring concerns (e.g., appeals, exam resets, etc.).',
    description: 'Description for the section inviting the user to add a Proctortrack escalation email for the course',
  },
  updateLinkLabel: {
    id: 'updateLinkLabel',
    defaultMessage: 'Update',
    description: 'Label for the link that redirects the user to the page where they can update settings',
  },
  completionCountLabel: {
    id: 'completionCountLabel',
    defaultMessage: '{completed}/{total} completed',
    description: 'Label that describes how many assignments are completed out of the total assignments',
  },
  completedItemLabel: {
    id: 'completedItemLabel',
    defaultMessage: 'completed',
    description: 'Label that describes a completed assignment',
  },
  uncompletedItemLabel: {
    id: 'uncompletedItemLabel',
    defaultMessage: 'uncompleted',
    description: 'Label that describes an uncompleted assignment',
  },
});
export default messages;