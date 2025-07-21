import { defineMessages } from '@edx/frontend-platform/i18n';
import { MAX_TOTAL_LENGTH } from '../../data/constants';
const messages = defineMessages({
  courseDisplayNameLabel: {
    id: 'course-authoring.create-or-rerun-course.display-name.label',
    defaultMessage: 'Course Display Name',
  },
  courseDisplayNamePlaceholder: {
    id: 'course-authoring.create-or-rerun-course.display-name.placeholder',
    defaultMessage: 'e.g., Analyzing security events with MaxPatrol SIEM',
  },
  courseDisplayNameCreateHelpText: {
    id: 'course-authoring.create-or-rerun-course.create.display-name.help-text',
    defaultMessage: 'The public name of the course. You cannot change it later, but you can set a different name in advanced settings.',
  },
  courseDisplayNameRerunHelpText: {
    id: 'course-authoring.create-or-rerun-course.rerun.display-name.help-text',
    defaultMessage: 'The public name of the new course. (This name often matches the original course name.)',
  },
  courseOrgLabel: {
    id: 'course-authoring.create-or-rerun-course.org.label',
    defaultMessage: 'Course Organization',
  },
  courseOrgPlaceholder: {
    id: 'course-authoring.create-or-rerun-course.org.placeholder',
    defaultMessage: 'e.g., Positive_Technologies',
  },
  courseOrgNoOptions: {
    id: 'course-authoring.create-or-rerun-course.org.no-options',
    defaultMessage: 'No Options',
  },
  courseOrgCreateHelpText: {
    id: 'course-authoring.create-or-rerun-course.create.org.help-text',
    defaultMessage: 'The organization sponsoring the course. {strong}',
  },
  courseOrgRerunHelpText: {
    id: 'course-authoring.create-or-rerun-course.rerun.org.help-text',
    defaultMessage: 'The organization sponsoring the new course. (This name often matches the original organization name.) {strong}',
  },
  courseNoteNoSpaceAllowedStrong: {
    id: 'course-authoring.create-or-rerun-course.no-space-allowed.strong',
    defaultMessage: 'Note: Spaces or special characters are not allowed.',
  },
  courseNoteOrgNameIsPartStrong: {
    id: 'course-authoring.create-or-rerun-course.org.help-text.strong',
    defaultMessage: 'Note: The organization name is part of the course URL.',
  },
  courseNumberLabel: {
    id: 'course-authoring.create-or-rerun-course.number.label',
    defaultMessage: 'Course Identifier',
  },
  courseNumberPlaceholder: {
    id: 'course-authoring.create-or-rerun-course.number.placeholder',
    defaultMessage: 'e.g., SIEM-IIS',
  },
  courseNumberCreateHelpText: {
    id: 'course-authoring.create-or-rerun-course.create.number.help-text',
    defaultMessage: 'A unique identifier for the course in your organization. {strong}',
  },
  courseNumberRerunHelpText: {
    id: 'course-authoring.create-or-rerun-course.rerun.number.help-text',
    defaultMessage: 'A unique identifier for the new course in the organization. (This number will be the same as the original course number and cannot be changed.)',
  },
  courseNotePartCourseURLRequireStrong: {
    id: 'course-authoring.create-or-rerun-course.number.help-text.strong',
    defaultMessage: 'Note: This is part of the course URL, so spaces or special characters are not allowed, and cannot be changed.',
  },
  courseRunLabel: {
    id: 'course-authoring.create-or-rerun-course.run.label',
    defaultMessage: 'Cybersecurity Stream',
  },
  courseRunPlaceholder: {
    id: 'course-authoring.create-or-rerun-course.run.placeholder',
    defaultMessage: 'e.g., Blue_Team',
  },
  courseRunCreateHelpText: {
    id: 'course-authoring.create-or-rerun-course.create.run.help-text',
    defaultMessage: 'The semester in which the course will be run. {strong}',
  },
  courseRunRerunHelpText: {
    id: 'course-authoring.create-or-rerun-course.create.rerun.help-text',
    defaultMessage: 'The semester in which the new course will be run. (This value is often different from the original course run value.) {strong}',
  },
  defaultPlaceholder: {
    id: 'course-authoring.create-or-rerun-course.default-placeholder',
    defaultMessage: 'Label',
  },
  createButton: {
    id: 'course-authoring.create-or-rerun-course.create.button.create',
    defaultMessage: 'Create',
  },
  rerunCreateButton: {
    id: 'course-authoring.create-or-rerun-course.rerun.button.create',
    defaultMessage: 'Create Rerun',
  },
  creatingButton: {
    id: 'course-authoring.create-or-rerun-course.button.creating',
    defaultMessage: 'Creating',
  },
  rerunningCreateButton: {
    id: 'course-authoring.create-or-rerun-course.rerun.button.rerunning',
    defaultMessage: 'Creating Rerun',
  },
  cancelButton: {
    id: 'course-authoring.create-or-rerun-course.button.cancel',
    defaultMessage: 'Cancel',
  },
  requiredFieldError: {
    id: 'course-authoring.create-or-rerun-course.required.error',
    defaultMessage: 'This field is required!',
  },
  disallowedCharsError: {
    id: 'course-authoring.create-or-rerun-course.disallowed-chars.error',
    defaultMessage: 'Please do not use spaces or special characters in this field.',
  },
  noSpaceError: {
    id: 'course-authoring.create-or-rerun-course.no-space.error',
    defaultMessage: 'Please do not use spaces in this field.',
  },
  totalLengthError: {
    id: 'course-authoring.create-or-rerun-course.total-length-error.error',
    defaultMessage: `The combined length of the organization, course number, and run fields cannot exceed ${MAX_TOTAL_LENGTH} characters.`,
  },
  alertErrorExistsAriaLabelledBy: {
    id: 'course-authoring.create-or-rerun-course.error.already-exists.labelledBy',
    defaultMessage: 'alert-already-exists-title',
  },
  alertErrorExistsAriaDescribedBy: {
    id: 'course-authoring.create-or-rerun-course.error.already-exists.aria.describedBy',
    defaultMessage: 'alert-confirmation-description',
  },
});
export default messages;