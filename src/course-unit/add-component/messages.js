import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  title: {
    id: 'course-authoring.course-unit.add.component.title',
    defaultMessage: 'Add New Component',
  },
  buttonText: {
    id: 'course-authoring.course-unit.add.component.button.text',
    defaultMessage: 'Add Component:',
  },
  modalBtnText: {
    id: 'course-authoring.course-unit.modal.button.text',
    defaultMessage: 'Select',
  },
  modalContainerTitle: {
    id: 'course-authoring.course-unit.modal.container.title',
    defaultMessage: 'Add Component {componentTitle}',
  },
  modalContainerCancelBtnText: {
    id: 'course-authoring.course-unit.modal.container.cancel.button.text',
    defaultMessage: 'Cancel',
  },
  modalComponentSupportLabelFullySupported: {
    id: 'course-authoring.course-unit.modal.component.support.label.fully-supported',
    defaultMessage: 'Fully Supported',
    description: 'Label for the support status of an advanced problem type that is fully supported by the platform',
  },
  modalComponentSupportLabelProvisionallySupported: {
    id: 'course-authoring.course-unit.modal.component.support.label.provisionally-support',
    defaultMessage: 'Provisionally Supported',
    description: 'Label for the support status of an advanced problem type that is partially supported by the platform',
  },
  modalComponentSupportLabelNotSupported: {
    id: 'course-authoring.course-unit.modal.component.support.label.not-supported',
    defaultMessage: 'Not Supported',
    description: 'Label for the support status of an advanced problem type that is not supported by the platform',
  },
  modalComponentSupportTooltipFullySupported: {
    id: 'course-authoring.course-unit.modal.component.support.tooltip.fully-supported',
    defaultMessage: 'Fully supported tools and features are available on edX, are fully tested, have UI where applicable, and are documented in the official edX guides available at docs.edx.org.',
    description: 'Message for the support status tooltip for fully supported modules',
  },
  modalComponentSupportTooltipNotSupported: {
    id: 'course-authoring.course-unit.modal.component.support.tooltip.not-supported',
    defaultMessage: 'Unsupported tools are not maintained by edX and may be deprecated in the future. They are not recommended for use in courses due to a failure to meet one or more basic requirements, such as testing, accessibility, internationalization, and documentation.',
    description: 'Message for the support status tooltip for unsupported modules',
  },
  modalComponentSupportTooltipProvisionallySupported: {
    id: 'course-authoring.course-unit.modal.component.support.tooltip.provisionally-support',
    defaultMessage: 'Provisionally supported tools may not have all the functionality you need for your courses. edX does not have control over the quality of software or content that can be provided using these tools. Thoroughly test these tools before using them in your course, especially in assessment sections. Full documentation may not be available for Provisionally Supported tools or may be available from sources other than edX.',
    description: 'Message for the support status tooltip for partially supported modules',
  },
});
export default messages;