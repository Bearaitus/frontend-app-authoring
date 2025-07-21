import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  headerSubtitle: {
    id: 'course-authoring.content-tags-drawer.header.subtitle',
    defaultMessage: 'Manage Tags',
  },
  addTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.collapsible.add-tags.button',
    defaultMessage: 'Add Tags',
  },
  loadingMessage: {
    id: 'course-authoring.content-tags-drawer.spinner.loading',
    defaultMessage: 'Loading',
  },
  loadingTagsDropdownMessage: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.spinner.loading',
    defaultMessage: 'Loading Tags',
  },
  loadMoreTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.load-more-tags.button',
    defaultMessage: 'Load More',
  },
  noTagsFoundMessage: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.no-tags-found',
    defaultMessage: 'No tags found with the search term "{searchTerm}"',
  },
  noTagsInTaxonomyMessage: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.no-tags-in-taxonomy',
    defaultMessage: 'There are no tags in this taxonomy yet',
    description: 'Message when the user is using the tag selector for an empty taxonomy',
  },
  taxonomyTagChecked: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.tag-checked',
    defaultMessage: 'Checked',
  },
  taxonomyTagUnchecked: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.tag-unchecked',
    defaultMessage: 'Unchecked',
  },
  taxonomyTagImplicit: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.tag-implicit',
    defaultMessage: 'Implicit',
  },
  taxonomyTagActionInstructionsAriaLabel: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.tag-action-instructions.aria.label',
    defaultMessage: '{tagState} Tag: {tag}. Use arrow keys to navigate among tags in this taxonomy. Press Space to select the tag.',
  },
  taxonomyTagActionsAriaLabel: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.tag-actions.aria.label',
    defaultMessage: '{tagState} Tag: {tag}',
  },
  taxonomyTagsAriaLabel: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.selectable-box.selection.aria.label',
    defaultMessage: 'taxonomy tags selection',
  },
  manageTagsButton: {
    id: 'course-authoring.content-tags-drawer.button.manage',
    defaultMessage: 'Manage Tags',
    description: 'Label on the button that opens the drawer for editing content tags',
  },
  tagsSidebarTitle: {
    id: 'course-authoring.course-unit.sidebar.tags.title',
    defaultMessage: 'Block Tags',
    description: 'Title of the tags sidebar',
  },
  collapsibleAddTagsPlaceholderText: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.custom-menu.placeholder-text',
    defaultMessage: 'Add tag',
  },
  collapsibleNoTagsAddedText: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.custom-menu.no-tags-added-text',
    defaultMessage: 'No tags have been added yet.',
  },
  collapsibleAddStagedTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.custom-menu.save-staged-tags',
    defaultMessage: 'Add Tags',
  },
  collapsibleCancelStagedTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.custom-menu.cancel-staged-tags',
    defaultMessage: 'Cancel',
  },
  collapsibleInlineAddStagedTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.custom-menu.inline-save-staged-tags',
    defaultMessage: 'Add',
  },
  tagsDrawerCancelButtonText: {
    id: 'course-authoring.content-tags-drawer.cancel',
    defaultMessage: 'Cancel',
    description: 'Button to cancel tag editing',
  },
  tagsDrawerSaveButtonText: {
    id: 'course-authoring.content-tags-drawer.save',
    defaultMessage: 'Save',
    description: 'Button to save the edited tags.',
  },
  tagsDrawerCloseButtonText: {
    id: 'course-authoring.content-tags-drawer.close',
    defaultMessage: 'Close',
    description: 'Button to close the tag management drawer',
  },
  tagsDrawerEditTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.edit-tags',
    defaultMessage: 'Edit Tags',
    description: 'Button to edit tags in the tag management drawer.',
  },
  tagsSaveToastTextTypeAdded: {
    id: 'course-authoring.content-tags-drawer.toast.added',
    defaultMessage: '{tagsAdded} tags added.',
    description: 'Toast message text after saving, when user added tags.',
  },
  tagsSaveToastTextTypeRemoved: {
    id: 'course-authoring.content-tags-drawer.toast.removed',
    defaultMessage: '{tagsRemoved} tags removed.',
    description: 'Toast message text after saving, when user removed tags.',
  },
  tagsDeleteAltText: {
    id: 'course-authoring.content-tags-drawer.tag.delete',
    defaultMessage: 'Delete',
    description: 'Alternate label for the delete tag button.',
  },
  otherTagsHeader: {
    id: 'course-authoring.content-tags-drawer.other-tags.header',
    defaultMessage: 'Other Tags',
    description: 'Header for the "Other Tags" section in the tag drawer',
  },
  otherTagsDescription: {
    id: 'course-authoring.content-tags-drawer.other-tags.description',
    defaultMessage: 'These tags are already applied, but you cannot add new ones as you do not have access to their taxonomies.',
    description: 'Description for the "Other Tags" section in the tag drawer',
  },
  emptyDrawerContent: {
    id: 'course-authoring.content-tags-drawer.empty',
    defaultMessage: 'To use tags, please {link} or contact your administrator.',
    description: 'Message when there are no taxonomies.',
  },
  emptyDrawerContentLink: {
    id: 'course-authoring.content-tags-drawer.empty-link',
    defaultMessage: 'enable taxonomy',
    description: 'Link message used in the empty drawer message.',
  },
});
export default messages;