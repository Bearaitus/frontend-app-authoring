import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  addNewGroup: {
    id: 'course-authoring.group-configurations.content-groups.add-new-group',
    defaultMessage: 'Новая группа контента',
    description: 'Метка для добавления новой группы контента.',
  },
  newGroupHeader: {
    id: 'course-authoring.group-configurations.content-groups.new-group.header',
    defaultMessage: 'Название группы контента *',
    description: 'Заголовок текста для поля ввода для ввода названия новой группы контента.',
  },
  newGroupInputPlaceholder: {
    id: 'course-authoring.group-configurations.content-groups.new-group.input.placeholder',
    defaultMessage: 'Это название группы',
    description: 'Плейсхолдер текста для поля ввода, где вводится название новой группы контента.',
  },
  invalidMessage: {
    id: 'course-authoring.group-configurations.content-groups.new-group.invalid-message',
    defaultMessage: 'Все группы должны иметь уникальное название.',
    description: 'Сообщение об ошибке, отображаемое, когда название новой группы контента не уникально.',
  },
  cancelButton: {
    id: 'course-authoring.group-configurations.content-groups.new-group.cancel',
    defaultMessage: 'Отмена',
    description: 'Метка для кнопки отмены при создании новой группы контента.',
  },
  deleteButton: {
    id: 'course-authoring.group-configurations.content-groups.edit-group.delete',
    defaultMessage: 'Удалить',
    description: 'Метка для кнопки удаления при редактировании группы контента.',
  },
  createButton: {
    id: 'course-authoring.group-configurations.content-groups.new-group.create',
    defaultMessage: 'Создать',
    description: 'Метка для кнопки создания при создании новой группы контента.',
  },
  saveButton: {
    id: 'course-authoring.group-configurations.content-groups.edit-group.save',
    defaultMessage: 'Сохранить',
    description: 'Метка для кнопки сохранения при редактировании группы контента.',
  },
  requiredError: {
    id: 'course-authoring.group-configurations.content-groups.new-group.required-error',
    defaultMessage: 'Название группы обязательно',
    description: 'Сообщение об ошибке, отображаемое, когда название группы контента обязательно, но не предоставлено.',
  },
  alertGroupInUsage: {
    id: 'course-authoring.group-configurations.content-groups.edit-group.alert-group-in-usage',
    defaultMessage: 'Эта группа контента используется в одной или нескольких единицах.',
    description: 'Сообщение предупреждения, отображаемое при попытке удалить группу контента, которая в настоящее время используется одной или несколькими единицами.',
  },
  deleteRestriction: {
    id: 'course-authoring.group-configurations.content-groups.delete-restriction',
    defaultMessage: 'Нельзя удалить, если используется в единице',
    description: 'Сообщение, указывающее, что группу контента нельзя удалить, потому что она в настоящее время используется единицей.',
  },
  emptyContentGroups: {
    id: 'course-authoring.group-configurations.container.empty-content-groups',
    defaultMessage: 'В {outlineComponentLink}, используйте эту группу для контроля доступа к компоненту.',
    description: 'Сообщение, отображаемое, когда нет доступных групп контента, предлагающее, как использовать их в плане курса.',
  },
  courseOutline: {
    id: 'course-authoring.group-configurations.container.course-outline',
    defaultMessage: 'План курса',
    description: 'Метка для ссылки на план курса.',
  },
  actionEdit: {
    id: 'course-authoring.group-configurations.container.action.edit',
    defaultMessage: 'Редактировать',
    description: 'Метка для действия редактирования в контейнере.',
  },
  actionDelete: {
    id: 'course-authoring.group-configurations.container.action.delete',
    defaultMessage: 'Удалить',
    description: 'Метка для действия удаления в контейнере.',
  },
  subtitleModalDelete: {
    id: 'course-authoring.group-configurations.container.delete-modal.subtitle',
    defaultMessage: 'группа контента',
    description: 'Подстрока для модального окна удаления, указывающая тип сущности, которая удаляется.',
  },
});

export default messages;
