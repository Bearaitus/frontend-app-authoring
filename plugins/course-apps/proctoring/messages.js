import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  'authoring.proctoring.alert.error': {
    id: 'authoring.proctoring.alert.error',
    defaultMessage: 'We encountered a technical error while trying to save the proctoring settings. This may be a temporary issue, so please try again in a few minutes. If the issue persists, please contact {support_link} for assistance.',
    description: 'Error message for saving proctoring settings.',
  },
  'authoring.proctoring.alert.forbidden': {
    id: 'authoring.proctoring.alert.forbidden',
    defaultMessage: 'You do not have permission to edit the proctoring settings for this course. If you are a member of the course team and the problem persists, please contact {support_link} for assistance.',
    description: 'Error message for proctoring settings permission.',
  },
  'authoring.proctoring.no': {
    id: 'authoring.proctoring.no',
    defaultMessage: 'No',
    description: '“No” option for a yes/no radio button',
  },
  'authoring.proctoring.yes': {
    id: 'authoring.proctoring.yes',
    defaultMessage: 'Yes',
    description: '“Yes” option for proctoring settings',
  },
  'authoring.proctoring.support.text': {
    id: 'authoring.proctoring.support.text',
    defaultMessage: 'Support Page',
    description: 'Text associated with the support page.',
  },
  'authoring.proctoring.enableproctoredexams.label': {
    id: 'authoring.proctoring.enableproctoredexams.label',
    defaultMessage: 'Proctored Exams',
    description: 'Label for the checkbox to enable proctored exams.',
  },
  'authoring.proctoring.enableproctoredexams.help': {
    id: 'authoring.proctoring.enableproctoredexams.help',
    defaultMessage: 'Enable and configure proctored exams in your course.',
    description: 'Help text for the checkbox to enable proctored exams.',
  },
  'authoring.proctoring.enabled': {
    id: 'authoring.proctoring.enabled',
    defaultMessage: 'Enabled',
    description: 'Text describing that the feature is enabled.',
  },
  'authoring.proctoring.learn.more': {
    id: 'authoring.proctoring.learn.more',
    defaultMessage: 'Learn more about proctoring',
    description: 'Link to learn about proctoring.',
  },
  'authoring.proctoring.provider.label': {
    id: 'authoring.proctoring.provider.label',
    defaultMessage: 'Proctoring Provider',
    description: 'Label for choosing the proctoring provider.',
  },
  'authoring.proctoring.provider.help': {
    id: 'authoring.proctoring.provider.help',
    defaultMessage: 'Select the proctoring provider you would like to use for this course run.',
    description: 'Help text for choosing the proctoring provider.',
  },
  'authoring.proctoring.provider.help.aftercoursestart': {
    id: 'authoring.proctoring.provider.help.aftercoursestart',
    defaultMessage: 'The proctoring provider cannot be changed after the course start date.',
    description: 'Help text notifying the user the provider cannot be changed for a course that has already started.',
  },
  'authoring.proctoring.escalationemail.label': {
    id: 'authoring.proctoring.escalationemail.label',
    defaultMessage: 'Escalation Email Address',
    description: 'Label for the escalation email address field',
  },
  'authoring.proctoring.escalationemail.help': {
    id: 'authoring.proctoring.escalationemail.help',
    defaultMessage: 'Enter the email address where support will be sent for escalations (e.g., appeals, review delays).',
    description: 'Help text explaining the escalation email address field.',
  },
  'authoring.proctoring.escalationemail.error.blank': {
    id: 'authoring.proctoring.escalationemail.error.blank',
    defaultMessage: 'The escalation email address field cannot be blank if {proctoringProviderName} is the selected provider.',
    description: 'Error message for a blank required escalation email address field.',
  },
  'authoring.proctoring.escalationemail.error.invalid': {
    id: 'authoring.proctoring.escalationemail.error.invalid',
    defaultMessage: 'The escalation email address field is in an incorrect format and is not valid.',
    description: 'Error message for an invalid email address format.',
  },
  'authoring.proctoring.allowoptout.label': {
    id: 'authoring.proctoring.allowoptout.label',
    defaultMessage: 'Allow students to opt out of proctoring on proctored exams',
    description: 'Label for the radio button allowing students to opt out of proctoring',
  },
  'authoring.proctoring.createzendesk.label': {
    id: 'authoring.proctoring.createzendesk.label',
    defaultMessage: 'Create Zendesk Tickets for Suspicious Attempts',
    description: 'Label for the radio button to create Zendesk tickets.',
  },
  'authoring.proctoring.error.single': {
    id: 'authoring.proctoring.error.single',
    defaultMessage: 'There is 1 error in this form.',
    description: 'Error message for a single error in the form.',
  },
  'authoring.proctoring.error.multiple': {
    id: 'authoring.proctoring.escalationemail.error.multiple',
    defaultMessage: 'There are {numOfErrors} errors in this form.',
    description: 'Error message for multiple errors in the form.',
  },
  'authoring.proctoring.save': {
    id: 'authoring.proctoring.save',
    defaultMessage: 'Save',
    description: 'Button to save the proctoring settings.',
  },
  'authoring.proctoring.saving': {
    id: 'authoring.proctoring.saving',
    defaultMessage: 'Saving...',
    description: 'Proctoring settings are in the process of being saved.',
  },
  'authoring.proctoring.cancel': {
    id: 'authoring.proctoring.cancel',
    defaultMessage: 'Cancel',
    description: 'Button to cancel changes to the proctoring settings.',
  },
  'authoring.proctoring.studio.link.text': {
    id: 'authoring.proctoring.studio.link.text',
    defaultMessage: 'Return to your course in Studio',
    description: 'Link to return to the course page in Studio.',
  },
});
export default messages;