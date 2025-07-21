import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  detailsSectionTitle: {
    id: 'course-authoring.certificates.details.section.title',
    defaultMessage: 'Certificate Details',
    description: 'Section Title',
  },
  detailsCourseTitle: {
    id: 'course-authoring.certificates.details.course.title',
    defaultMessage: 'Course Title',
    description: 'Label for displaying the official course title in the certificate details section',
  },
  detailsCourseTitleOverride: {
    id: 'course-authoring.certificates.details.course.title.override',
    defaultMessage: 'Course Title Override',
    description: 'Label for the course title override input field',
  },
  detailsCourseTitleOverrideDescription: {
    id: 'course-authoring.certificates.details.course.title.override.description',
    defaultMessage: 'Provide an alternative to the official course title to display on certificates. Leave blank to use the official course title.',
    description: 'Helper text below the course title override input field',
  },
  detailsCourseNumber: {
    id: 'course-authoring.certificates.details.course.number',
    defaultMessage: 'Course Number',
    description: 'Label for displaying the official course number in the certificate details section',
  },
  detailsCourseNumberOverride: {
    id: 'course-authoring.certificates.details.course.number.override',
    defaultMessage: 'Course Number Override',
    description: 'Label for the course number override input field',
  },
  deleteCertificateConfirmationTitle: {
    id: 'course-authoring.certificates.details.confirm-modal',
    defaultMessage: 'Delete this certificate?',
    description: 'Title of the confirmation modal when attempting to delete a certificate',
  },
  deleteCertificateMessage: {
    id: 'course-authoring.certificates.details.confirm-modal.message',
    defaultMessage: 'Deleting this certificate is permanent and cannot be undone.',
    description: 'Warning message inside the confirmation modal, emphasizing the permanent nature of the action',
  },
  editCertificateConfirmationTitle: {
    id: 'course-authoring.certificates.details.confirm.edit',
    defaultMessage: 'Edit this certificate?',
    description: 'Title of the confirmation modal when attempting to edit an already activated (live) certificate',
  },
  editCertificateMessage: {
    id: 'course-authoring.certificates.details.confirm.edit.message',
    defaultMessage: 'This certificate has already been activated and is live. Are you sure you want to continue editing?',
    description: 'Message warning users about the consequences of editing a certificate that is already live and requesting confirmation',
  },
});
export default messages;