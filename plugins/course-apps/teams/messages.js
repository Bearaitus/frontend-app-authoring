import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  heading: {
    id: 'authoring.pagesAndResources.teams.heading',
    defaultMessage: 'Team Settings',
  },
  enableTeamsLabel: {
    id: 'authoring.pagesAndResources.teams.enableTeams.label',
    defaultMessage: 'Teams',
  },
  enableTeamsHelp: {
    id: 'authoring.pagesAndResources.teams.enableTeams.help',
    defaultMessage: 'Allow learners to collaborate on specific projects or assignments.',
  },
  enableTeamsLink: {
    id: 'authoring.pagesAndResources.teams.enableTeams.link',
    defaultMessage: 'Learn more about teams',
  },
  teamSize: {
    id: 'authoring.pagesAndResources.teams.teamSize.heading',
    defaultMessage: 'Team Size',
  },
  maxTeamSize: {
    id: 'authoring.pagesAndResources.teams.teamSize.maxTeamSize',
    defaultMessage: 'Maximum Team Size',
  },
  maxTeamSizeHelp: {
    id: 'authoring.pagesAndResources.teams.teamSize.maxTeamSizeHelp',
    defaultMessage: 'The maximum number of learners who can join a team.',
  },
  maxTeamSizeEmpty: {
    id: 'authoring.pagesAndResources.teams.teamSize.maxTeamSizeEmpty',
    defaultMessage: 'Enter the maximum team size',
  },
  maxTeamSizeInvalid: {
    id: 'authoring.pagesAndResources.teams.teamSize.maxTeamSizeInvalid',
    defaultMessage: 'Maximum team size must be a positive number greater than zero.',
  },
  maxTeamSizeTooHigh: {
    id: 'authoring.pagesAndResources.teams.teamSize.maxTeamSizeTooHigh',
    defaultMessage: 'Maximum team size cannot be greater than {max}.',
  },
  groups: {
    id: 'authoring.pagesAndResources.teams.groups.heading',
    defaultMessage: 'Groups',
  },
  groupsHelp: {
    id: 'authoring.pagesAndResources.teams.groups.help',
    defaultMessage: 'Groups are spaces where users can create or join teams.',
  },
  configureGroup: {
    id: 'authoring.pagesAndResources.teams.configureGroup.heading',
    defaultMessage: 'Configure Group',
  },
  groupFormNameLabel: {
    id: 'authoring.pagesAndResources.teams.group.name.label',
    defaultMessage: 'Name',
  },
  groupFormNameHelp: {
    id: 'authoring.pagesAndResources.teams.group.name.help',
    defaultMessage: 'Choose a unique name for this group.',
  },
  groupFormNameEmpty: {
    id: 'authoring.pagesAndResources.teams.group.name.error.empty',
    defaultMessage: 'Enter a unique name for this group.',
  },
  groupFormNameExists: {
    id: 'authoring.pagesAndResources.teams.group.name.error.exists',
    defaultMessage: 'It looks like that name is already taken.',
  },
  groupFormDescriptionLabel: {
    id: 'authoring.pagesAndResources.teams.group.description.label',
    defaultMessage: 'Description',
  },
  groupFormDescriptionHelp: {
    id: 'authoring.pagesAndResources.teams.group.description.help',
    defaultMessage: 'Enter details about this group.',
  },
  groupFormDescriptionError: {
    id: 'authoring.pagesAndResources.teams.group.description.error',
    defaultMessage: 'Enter a description for this group.',
  },
  groupFormTypeLabel: {
    id: 'authoring.pagesAndResources.teams.group.type.label',
    defaultMessage: 'Type',
  },
  groupFormTypeHelp: {
    id: 'authoring.pagesAndResources.teams.group.type.help',
    defaultMessage: 'Control who can see, create, and join teams.',
  },
  groupTypeOpen: {
    id: 'authoring.pagesAndResources.teams.group.types.open',
    defaultMessage: 'Open',
  },
  groupTypeOpenManaged: {
    id: 'authoring.pagesAndResources.teams.group.types.open_managed',
    defaultMessage: 'Open (Managed)',
  },
  groupTypeOpenManagedDescription: {
    id: 'authoring.pagesAndResources.teams.group.types.open_managed.description',
    defaultMessage: 'Only course staff can create teams. Users can see, join, and leave teams.',
  },
  groupTypeOpenDescription: {
    id: 'authoring.pagesAndResources.teams.group.types.open.description',
    defaultMessage: 'Users can create, join, leave, and see other teams.',
  },
  groupTypePublicManaged: {
    id: 'authoring.pagesAndResources.teams.group.types.public_managed',
    defaultMessage: 'Public (Managed)',
  },
  groupTypePublicManagedDescription: {
    id: 'authoring.pagesAndResources.teams.group.types.public_managed.description',
    defaultMessage: 'Only course staff can control teams and membership. Users can see other teams.',
  },
  groupTypePrivateManaged: {
    id: 'authoring.pagesAndResources.teams.group.types.private_managed',
    defaultMessage: 'Private (Managed)',
  },
  groupTypePrivateManagedDescription: {
    id: 'authoring.pagesAndResources.teams.group.types.private_managed.description',
    defaultMessage: 'Only course staff can control teams, membership, and see other teams.',
  },
  groupFormMaxSizeLabel: {
    id: 'authoring.pagesAndResources.teams.group.maxSize.label',
    defaultMessage: 'Maximum Team Size (Optional)',
  },
  groupFormMaxSizeHelp: {
    id: 'authoring.pagesAndResources.teams.group.maxSize.help',
    defaultMessage: 'Override the global maximum team size.',
  },
  addGroup: {
    id: 'authoring.pagesAndResources.teams.addGroup.button',
    defaultMessage: 'Add Group',
  },
  deleteAlt: {
    id: 'authoring.pagesAndResources.teams.group.delete',
    defaultMessage: 'Delete',
  },
  expandAlt: {
    id: 'authoring.pagesAndResources.teams.group.expand',
    defaultMessage: 'Expand Group Editor',
  },
  collapseAlt: {
    id: 'authoring.pagesAndResources.teams.group.collapse',
    defaultMessage: 'Collapse Group Editor',
  },
  delete: {
    id: 'authoring.pagesAndResources.teams.deleteGroup.initiateDelete',
    defaultMessage: 'Delete',
  },
  cancel: {
    id: 'authoring.pagesAndResources.teams.deleteGroup.cancel-delete.button',
    defaultMessage: 'Cancel',
  },
  groupDeleteHeading: {
    id: 'authoring.pagesAndResources.teams.deleteGroup.heading',
    defaultMessage: 'Delete this Group?',
  },
  groupDeleteBody: {
    id: 'authoring.pagesAndResources.teams.deleteGroup.body',
    defaultMessage: ``,
    description: 'Message displayed to administrators when deleting a group.  Ensure line breaks are included for proper rendering of the final text.',
  },
  noGroupsErrorTitle: {
    id: 'authoring.pagesAndResources.teams.enableGroups.error.noGroupsFound.title',
    defaultMessage: 'No Groups',
    description: 'Title of error message shown when a user tries to enable teams but no groups are defined.',
  },
  noGroupsErrorMessage: {
    id: 'authoring.pagesAndResources.teams.enableGroups.error.noGroupsFound.message',
    defaultMessage: 'Add one or more groups to enable teams.',
    description: 'Error message text shown when a user tries to enable teams but no groups are defined.',
  },
});
export default messages;