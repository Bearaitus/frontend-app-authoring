import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  signatoryTitle: {
    id: 'course-authoring.certificates.signatories.title',
    defaultMessage: 'Signatory',
    description: 'Title for Signatory',
  },
  signatoriesRecommendation: {
    id: 'course-authoring.certificates.signatories.recommendation',
    defaultMessage: 'We recommend including no more than four signatories. If you include additional signatories, preview the certificate in print mode to ensure the certificate will print correctly on one page.',
    description: 'Recommendation for the number of signatories to include on the certificate, emphasizing the importance of checking the print layout',
  },
  signatoriesSectionTitle: {
    id: 'course-authoring.certificates.signatories.section.title',
    defaultMessage: 'Certificate Signatories',
    description: 'Section Title',
  },
  addSignatoryButton: {
    id: 'course-authoring.certificates.signatories.add.signatory.button',
    defaultMessage: 'Add Another Signatory',
    description: 'Text for the button to add a new signatory to the certificate',
  },
  addSignatoryButtonDescription: {
    id: 'course-authoring.certificates.signatories.add.signatory.button.description',
    defaultMessage: '(Add signatories to the certificate)',
    description: 'Helper text for the button used to add signatories',
  },
  nameLabel: {
    id: 'course-authoring.certificates.signatories.name.label',
    defaultMessage: 'Name',
    description: 'Label for the input field where the signatory name is entered',
  },
  namePlaceholder: {
    id: 'course-authoring.certificates.signatories.name.placeholder',
    defaultMessage: 'Signatory name',
    description: 'Placeholder for the signatory name input field',
  },
  nameDescription: {
    id: 'course-authoring.certificates.signatories.name.description',
    defaultMessage: 'The name of this signatory as it should appear on the certificates.',
    description: 'Helper text below the name input field',
  },
  titleLabel: {
    id: 'course-authoring.certificates.signatories.title.label',
    defaultMessage: 'Title',
    description: 'Label for the input field where the signatory title is entered',
  },
  titlePlaceholder: {
    id: 'course-authoring.certificates.signatories.title.placeholder',
    defaultMessage: 'Signatory title',
    description: 'Placeholder for the signatory title input field',
  },
  titleDescription: {
    id: 'course-authoring.certificates.signatories.title.description',
    defaultMessage: 'Titles exceeding 100 characters may prevent the certificate from printing on one page.',
    description: 'Helper text below the title input field',
  },
  organizationLabel: {
    id: 'course-authoring.certificates.signatories.organization.label',
    defaultMessage: 'Course Affiliation',
    description: 'Label for the input field where the signatory\'s Course Affiliation is entered',
  },
  organizationPlaceholder: {
    id: 'course-authoring.certificates.signatories.organization.placeholder',
    defaultMessage: 'Signatory\'s Course Affiliation',
    description: 'Placeholder for the signatory organization input field',
  },
  organizationDescription: {
    id: 'course-authoring.certificates.signatories.organization.description',
    defaultMessage: 'The course affiliation that this signatory belongs to, as it should appear on the certificates.',
    description: 'Helper text below the organization input field',
  },
  imageLabel: {
    id: 'course-authoring.certificates.signatories.image.label',
    defaultMessage: 'Signature Image',
    description: 'Label for the input field where the signatory image is selected',
  },
  imagePlaceholder: {
    id: 'course-authoring.certificates.signatories.image.placeholder',
    defaultMessage: 'Signature image path',
    description: 'Placeholder for the signatory image input field',
  },
  imageDescription: {
    id: 'course-authoring.certificates.signatories.image.description',
    defaultMessage: 'The image should be in PNG format',
    description: 'Helper text below the image input field',
  },
  uploadImageButton: {
    id: 'course-authoring.certificates.signatories.upload.image.button',
    defaultMessage: '{uploadText} signature image',
    description: 'Text for the button to add or replace the signature image',
  },
  uploadModal: {
    id: 'course-authoring.certificates.signatories.upload.modal',
    defaultMessage: 'Upload',
    description: 'Variant of the button text for adding a new signature image',
  },
  uploadModalReplace: {
    id: 'course-authoring.certificates.signatories.upload.modal.replace',
    defaultMessage: 'Replace',
    description: 'Variant of the button text for replacing an existing signature image',
  },
  deleteSignatoryConfirmation: {
    id: 'course-authoring.certificates.signatories.confirm-modal',
    defaultMessage: 'Delete "{name}" from the list of signatories?',
    description: 'Title of the confirmation modal when attempting to delete a signatory, where "{name}" is the name of the signatory to be deleted',
  },
  deleteSignatoryConfirmationMessage: {
    id: 'course-authoring.certificates.signatories.confirm-modal.message',
    defaultMessage: 'This action cannot be undone.',
    description: 'Warning message emphasizing the permanent nature of deleting a signatory',
  },
});
export default messages;