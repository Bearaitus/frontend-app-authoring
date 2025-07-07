import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headerSubtitle: {
    id: 'course-authoring.content-tags-drawer.header.subtitle',
    defaultMessage: 'Управление тегами',
  },
  addTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.collapsible.add-tags.button',
    defaultMessage: 'Добавить теги',
  },
  loadingMessage: {
    id: 'course-authoring.content-tags-drawer.spinner.loading',
    defaultMessage: 'Загрузка',
  },
  loadingTagsDropdownMessage: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.spinner.loading',
    defaultMessage: 'Загрузка тегов',
  },
  loadMoreTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.load-more-tags.button',
    defaultMessage: 'Загрузить еще',
  },
  noTagsFoundMessage: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.no-tags-found',
    defaultMessage: 'Не найдено тегов с поисковым термином "{searchTerm}"',
  },
  noTagsInTaxonomyMessage: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.no-tags-in-taxonomy',
    defaultMessage: 'Нет тегов в этой таксономии еще',
    description: 'Сообщение, когда пользователь использует селектор тегов пустой таксономии',
  },
  taxonomyTagChecked: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.tag-checked',
    defaultMessage: 'Проверено',
  },
  taxonomyTagUnchecked: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.tag-unchecked',
    defaultMessage: 'Не проверено',
  },
  taxonomyTagImplicit: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.tag-implicit',
    defaultMessage: 'Неявно',
  },
  taxonomyTagActionInstructionsAriaLabel: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.tag-action-instructions.aria.label',
    defaultMessage: '{tagState} Тег: {tag}. Используйте клавиши-стрелки, чтобы перемещаться среди тегов в этой таксономии. Нажмите пробел, чтобы выбрать тег.',
  },
  taxonomyTagActionsAriaLabel: {
    id: 'course-authoring.content-tags-drawer.tags-dropdown-selector.tag-actions.aria.label',
    defaultMessage: '{tagState} Тег: {tag}',
  },
  taxonomyTagsAriaLabel: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.selectable-box.selection.aria.label',
    defaultMessage: 'выбор тегов таксономии',
  },
  manageTagsButton: {
    id: 'course-authoring.content-tags-drawer.button.manage',
    defaultMessage: 'Управление тегами',
    description: 'Метка в кнопке, которая открывает ящик для редактирования тегов контента',
  },
  tagsSidebarTitle: {
    id: 'course-authoring.course-unit.sidebar.tags.title',
    defaultMessage: 'Теги блока',
    description: 'Название боковой панели тегов',
  },
  collapsibleAddTagsPlaceholderText: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.custom-menu.placeholder-text',
    defaultMessage: 'Добавить тег',
  },
  collapsibleNoTagsAddedText: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.custom-menu.no-tags-added-text',
    defaultMessage: 'Теги еще не добавлены.',
  },
  collapsibleAddStagedTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.custom-menu.save-staged-tags',
    defaultMessage: 'Добавить теги',
  },
  collapsibleCancelStagedTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.custom-menu.cancel-staged-tags',
    defaultMessage: 'Отмена',
  },
  collapsibleInlineAddStagedTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.content-tags-collapsible.custom-menu.inline-save-staged-tags',
    defaultMessage: 'Добавить',
  },
  tagsDrawerCancelButtonText: {
    id: 'course-authoring.content-tags-drawer.cancel',
    defaultMessage: 'Отмена',
    description: 'Кнопка для отмены редактирования тегов.',
  },
  tagsDrawerSaveButtonText: {
    id: 'course-authoring.content-tags-drawer.save',
    defaultMessage: 'Сохранить',
    description: 'Кнопка для сохранения отредактированных тегов.',
  },
  tagsDrawerCloseButtonText: {
    id: 'course-authoring.content-tags-drawer.close',
    defaultMessage: 'Закрыть',
    description: 'Кнопка для закрытия ящика управления тегами.',
  },
  tagsDrawerEditTagsButtonText: {
    id: 'course-authoring.content-tags-drawer.edit-tags',
    defaultMessage: 'Редактировать теги',
    description: 'Кнопка для редактирования тегов в ящике управления тегами.',
  },
  tagsSaveToastTextTypeAdded: {
    id: 'course-authoring.content-tags-drawer.toast.added',
    defaultMessage: 'Добавлено {tagsAdded} тегов.',
    description: 'Текст уведомления после сохранения, когда пользователь добавил теги.',
  },
  tagsSaveToastTextTypeRemoved: {
    id: 'course-authoring.content-tags-drawer.toast.removed',
    defaultMessage: 'Удалено {tagsRemoved} тегов.',
    description: 'Текст уведомления после сохранения, когда пользователь удалил теги.',
  },
  tagsDeleteAltText: {
    id: 'course-authoring.content-tags-drawer.tag.delete',
    defaultMessage: 'Удалить',
    description: 'Альтернативная метка для кнопки удаления тега.',
  },
  otherTagsHeader: {
    id: 'course-authoring.content-tags-drawer.other-tags.header',
    defaultMessage: 'Другие теги',
    description: 'Название раздела "Другие теги" в ящике тегов',
  },
  otherTagsDescription: {
    id: 'course-authoring.content-tags-drawer.other-tags.description',
    defaultMessage: 'Эти теги уже применены, но вы не можете добавлять новые, поскольку у вас нет доступа к их таксономиям.',
    description: 'Описание раздела "Другие теги" в ящике тегов',
  },
  emptyDrawerContent: {
    id: 'course-authoring.content-tags-drawer.empty',
    defaultMessage: 'Чтобы использовать теги, пожалуйста {link} или свяжитесь с вашим администратором.',
    description: 'Сообщение, когда нет таксономий.',
  },
  emptyDrawerContentLink: {
    id: 'course-authoring.content-tags-drawer.empty-link',
    defaultMessage: 'включить таксономию',
    description: 'Сообщение ссылки, используемой в пустом сообщении ящика.',
  },
});

export default messages;
