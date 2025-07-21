import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  title: {
    id: 'course-authoring.group-configurations.experiment-configuration.title',
    defaultMessage: 'Experiment Group Configurations',
    description: 'Title for the page displaying experiment group configurations.',
  },
  addNewGroup: {
    id: 'course-authoring.group-configurations.experiment-group.add-new-group',
    defaultMessage: 'New Group Configuration',
    description: 'Label for adding a new experiment group configuration.',
  },
  experimentConfigurationName: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.name',
    defaultMessage: 'Group Configuration Name',
    description: 'Label for the input field for entering the name of the experiment group configuration.',
  },
  experimentConfigurationId: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.id',
    defaultMessage: 'Group Configuration ID {id}',
    description: 'Label displaying the ID of the experiment group configuration.',
  },
  experimentConfigurationNameFeedback: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.name.feedback',
    defaultMessage: 'Name or brief description of the configuration.',
    description: 'Feedback message for the input field for the name/description of the experiment group configuration.',
  },
  experimentConfigurationNamePlaceholder: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.name.placeholder',
    defaultMessage: 'This is the group configuration name',
    description: 'Placeholder text for the input field for the name of the experiment group configuration.',
  },
  experimentConfigurationNameRequired: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.name.required',
    defaultMessage: 'The group configuration name is required.',
    description: 'Error message displayed when the group configuration name is required but not provided.',
  },
  experimentConfigurationDescription: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.description',
    defaultMessage: 'Description',
    description: 'Label for the input field for the description of the experiment group configuration.',
  },
  experimentConfigurationDescriptionFeedback: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.description.feedback',
    defaultMessage: 'Optional detailed description.',
    description: 'Feedback message for the input field for the description of the experiment group configuration.',
  },
  experimentConfigurationDescriptionPlaceholder: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.description.placeholder',
    defaultMessage: 'This is the group configuration description',
    description: 'Placeholder text for the input field for the description of the experiment group configuration.',
  },
  experimentConfigurationGroups: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups',
    defaultMessage: 'Groups',
    description: 'Label for the section displaying the groups within the experiment group configuration.',
  },
  experimentConfigurationGroupsFeedback: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.feedback',
    defaultMessage: 'Names of groups to which users will be assigned, such as Control, Video, and Assignments. You must have two or more groups.',
    description: 'Feedback message for the groups section of the experiment group configuration.',
  },
  experimentConfigurationGroupsNameRequired: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.name.required',
    defaultMessage: 'All groups must have a name.',
    description: 'Error message displayed when a group name within the experiment group configuration is required but not provided.',
  },
  experimentConfigurationGroupsNameUnique: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.name.unique',
    defaultMessage: 'All groups must have a unique name.',
    description: 'Error message displayed when the group names within the experiment group configuration are not unique.',
  },
  experimentConfigurationGroupsRequired: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.required',
    defaultMessage: 'At least one group is required.',
    description: 'Error message displayed when at least one group is required within the experiment group configuration.',
  },
  experimentConfigurationGroupsTooltip: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.tooltip',
    defaultMessage: 'Remove',
    description: 'Tooltip message for the remove action within the groups section of the experiment group configuration.',
  },
  experimentConfigurationGroupsAdd: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.add',
    defaultMessage: 'Add Another Group',
    description: 'Label for the button to add another group within the groups section of the experiment group configuration.',
  },
  experimentConfigurationDeleteRestriction: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.delete.restriction',
    defaultMessage: 'Cannot be deleted if in use in an experiment.',
    description: 'Error message indicating that the experiment group configuration cannot be deleted because it is currently in use by an experiment.',
  },
  experimentConfigurationCancel: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.cancel',
    defaultMessage: 'Cancel',
    description: 'Label for the Cancel button within the experiment group configuration.',
  },
  experimentConfigurationSave: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.save',
    defaultMessage: 'Save',
    description: 'Label for the Save button within the experiment group configuration.',
  },
  experimentConfigurationCreate: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.create',
    defaultMessage: 'Create',
    description: 'Label for the Create button within the experiment group configuration.',
  },
  experimentConfigurationAlert: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.alert',
    defaultMessage: 'This configuration is currently in use in content experiments. If you make changes to the groups, you may need to edit those experiments.',
    description: 'Warning message indicating that the experiment group configuration is currently in use in content experiments and changes may require editing those experiments.',
  },
  emptyExperimentGroup: {
    id: 'course-authoring.group-configurations.experiment-card.empty-experiment-group',
    defaultMessage: 'This group configuration is not in use. Start by adding a content experiment to any unit through {outlineComponentLink}.',
    description: 'Message displayed when the experiment group configuration is not in use and suggests adding a content experiment.',
  },
  courseOutline: {
    id: 'course-authoring.group-configurations.experiment-card.course-outline',
    defaultMessage: 'Course Outline',
    description: 'Label for the course outline section within the experiment card.',
  },
  actionEdit: {
    id: 'course-authoring.group-configurations.experiment-card.action.edit',
    defaultMessage: 'Edit',
    description: 'Label for the edit action within the experiment card.',
  },
  actionDelete: {
    id: 'course-authoring.group-configurations.experiment-card.action.delete',
    defaultMessage: 'Delete',
    description: 'Label for the delete action within the experiment card.',
  },
  subtitleModalDelete: {
    id: 'course-authoring.group-configurations.experiment-card.delete-modal.subtitle',
    defaultMessage: 'group configurations',
    description: 'Subtext for the delete modal, indicating the type of entity being deleted.',
  },
  deleteRestriction: {
    id: 'course-authoring.group-configurations.experiment-card.delete-restriction',
    defaultMessage: 'Cannot be deleted if in use in a unit.',
    description: 'Error message indicating that the experiment card cannot be deleted because it is currently in use by a unit.',
  },
});
export default messages;