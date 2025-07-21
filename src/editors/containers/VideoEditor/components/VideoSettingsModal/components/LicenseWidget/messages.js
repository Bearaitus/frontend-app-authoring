import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  title: {
    id: 'authoring.videoeditor.license.title',
    defaultMessage: 'License',
    description: 'Title for the license widget',
  },
  licenseTypeLabel: {
    id: 'authoring.videoeditor.license.licenseType.label',
    defaultMessage: 'License Type',
    description: 'Label for the license type selection field',
  },
  detailsSubsectionTitle: {
    id: 'authoring.videoeditor.license.detailsSubsection.title',
    defaultMessage: 'License Details',
    description: 'Title for the license details section',
  },
  displaySubsectionTitle: {
    id: 'authoring.videoeditor.license.displaySubsection.title',
    defaultMessage: 'License Display',
    description: 'Title for the license display section',
  },
  addLicenseButtonLabel: {
    id: 'authoring.videoeditor.license.add.label',
    defaultMessage: 'Add a license to this video',
    description: 'Label for the add license button',
  },
  deleteLicenseSelection: {
    id: 'authoring.videoeditor.license.deleteLicenseSelection',
    defaultMessage: 'Remove and apply the course-level license',
    description: 'Message displayed to the user for removing the license selection',
  },
  allRightsReservedIconsLabel: {
    id: 'authoring.videoeditor.license.allRightsReservedIcons.label',
    defaultMessage: 'All Rights Reserved',
    description: 'Label for the set of “All Rights Reserved” icons',
  },
  creativeCommonsIconsLabel: {
    id: 'authoring.videoeditor.license.creativeCommonsIcons.label',
    defaultMessage: 'Some rights reserved',
    description: 'Label for the set of Creative Commons icons',
  },
  viewLicenseDetailsLabel: {
    id: 'authoring.videoeditor.license.viewLicenseDetailsLabel.label',
    defaultMessage: 'View License Details',
    description: 'Label for the view license details button',
  },
  courseLevelDescription: {
    id: 'authoring.videoeditor.license.courseLevelDescription.helperText',
    defaultMessage: 'This license is set at the course level',
    description: 'Tooltip for license type when using the course license',
  },
  courseLicenseDescription: {
    id: 'authoring.videoeditor.license.courseLicenseDescription.message',
    defaultMessage: 'Licenses set at the course level appear at the bottom of course material pages.',
    description: 'Message explaining where course-level licenses are displayed',
  },
  libraryLevelDescription: {
    id: 'authoring.videoeditor.license.libraryLevelDescription.helperText',
    defaultMessage: 'This license is set at the library level',
    description: 'Tooltip for license type when using the library license',
  },
  libraryLicenseDescription: {
    id: 'authoring.videoeditor.license.libraryLicenseDescription.message',
    defaultMessage: 'Licenses set at the library level appear on the specific library video.',
    description: 'Message explaining where library-level licenses are displayed',
  },
  defaultLevelDescription: {
    id: 'authoring.videoeditor.license.defaultLevelDescription.helperText',
    defaultMessage: 'This license is set specifically for this video',
    description: 'Tooltip for license type when selected for a specific video',
  },
  defaultLicenseDescription: {
    id: 'authoring.videoeditor.license.defaultLicenseDescription.message',
    defaultMessage: 'When a video has a license different from the overall course license, learners will see the license at the bottom of the video player.',
    description: 'Message explaining where licenses are seen by users for specific videos',
  },
  attributionCheckboxLabel: {
    id: 'authoring.videoeditor.license.attributionCheckboxLabel',
    defaultMessage: 'Attribution',
    description: 'Label for the “Attribution” field',
  },
  attributionSectionDescription: {
    id: 'authoring.videoeditor.license.attributionSectionDescription',
    defaultMessage: 'Allow others to copy, distribute, display, and perform your copyrighted work but only if they attribute the work to you as you require. This is currently required.',
    description: 'Section description for the attribution license',
  },
  noncommercialCheckboxLabel: {
    id: 'authoring.videoeditor.license.noncommercialCheckboxLabel',
    defaultMessage: 'Noncommercial',
    description: 'Label for the “Noncommercial” field',
  },
  noncommercialSectionDescription: {
    id: 'authoring.videoeditor.license.noncommercialSectionDescription',
    defaultMessage: 'Allow others to copy, distribute, display, and perform your work—and derivative works based on it—only for noncommercial purposes.',
    description: 'Section description for the noncommercial license',
  },
  noDerivativesCheckboxLabel: {
    id: 'authoring.videoeditor.license.noDerivativesCheckboxLabel',
    defaultMessage: 'No Derivatives',
    description: 'Label for the “No Derivatives” field',
  },
  noDerivativesSectionDescription: {
    id: 'authoring.videoeditor.license.noDerivativesSectionDescription',
    defaultMessage: 'Allow others to copy, distribute, display, and perform only verbatim copies of your work, not derivative works based on it. This option is incompatible with “Share Alike”.',
    description: 'Section description for the “No Derivatives” license',
  },
  shareAlikeCheckboxLabel: {
    id: 'authoring.videoeditor.license.shareAlikeCheckboxLabel',
    defaultMessage: 'Share Alike (Same License)',
    description: 'Label for the “Share Alike” field',
  },
  shareAlikeSectionDescription: {
    id: 'authoring.videoeditor.license.shareAlikeSectionDescription',
    defaultMessage: 'Allow others to distribute derivative works only under a license identical to the license that governs your work. This option is incompatible with “No Derivatives”.',
    description: 'Section description for the “Share Alike” license',
  },
  allRightsReservedSectionMessage: {
    id: 'authoring.videoeditor.license.allRightsReservedSectionMessage',
    defaultMessage: 'You retain all rights to your work.',
    description: 'Message for the “All Rights Reserved” section',
  },
});
export default messages;