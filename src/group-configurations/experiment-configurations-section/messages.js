import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.group-configurations.experiment-configuration.title',
    defaultMessage: 'Конфигурации групп экспериментов',
    description: 'Заголовок для страницы, отображающей конфигурации групп экспериментов.',
  },
  addNewGroup: {
    id: 'course-authoring.group-configurations.experiment-group.add-new-group',
    defaultMessage: 'Новая конфигурация группы',
    description: 'Метка для добавления новой конфигурации группы эксперимента.',
  },
  experimentConfigurationName: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.name',
    defaultMessage: 'Название конфигурации группы',
    description: 'Метка для поля ввода для ввода названия конфигурации группы эксперимента.',
  },
  experimentConfigurationId: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.id',
    defaultMessage: 'ID конфигурации группы {id}',
    description: 'Метка, отображающая ID конфигурации группы эксперимента.',
  },
  experimentConfigurationNameFeedback: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.name.feedback',
    defaultMessage: 'Название или краткое описание конфигурации.',
    description: 'Сообщение обратной связи для поля ввода названия/описания конфигурации группы эксперимента.',
  },
  experimentConfigurationNamePlaceholder: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.name.placeholder',
    defaultMessage: 'Это название конфигурации группы',
    description: 'Плейсхолдер текста для поля ввода названия конфигурации группы эксперимента.',
  },
  experimentConfigurationNameRequired: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.name.required',
    defaultMessage: 'Название конфигурации группы обязательно.',
    description: 'Сообщение об ошибке, отображаемое, когда название конфигурации группы эксперимента обязательно, но не предоставлено.',
  },
  experimentConfigurationDescription: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.description',
    defaultMessage: 'Описание',
    description: 'Метка для поля ввода описания конфигурации группы эксперимента.',
  },
  experimentConfigurationDescriptionFeedback: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.description.feedback',
    defaultMessage: 'Необязательное длинное описание.',
    description: 'Сообщение обратной связи для поля ввода описания конфигурации группы эксперимента.',
  },
  experimentConfigurationDescriptionPlaceholder: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.description.placeholder',
    defaultMessage: 'Это описание конфигурации группы',
    description: 'Плейсхолдер текста для поля ввода описания конфигурации группы эксперимента.',
  },
  experimentConfigurationGroups: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups',
    defaultMessage: 'Группы',
    description: 'Метка для раздела, отображающего группы внутри конфигурации группы эксперимента.',
  },
  experimentConfigurationGroupsFeedback: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.feedback',
    defaultMessage: 'Название групп, к которым будут присвоены студенты, например, Контроль, Видео, Задачи. Вы должны иметь две или более группы.',
    description: 'Сообщение обратной связи для раздела групп конфигурации группы эксперимента.',
  },
  experimentConfigurationGroupsNameRequired: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.name.required',
    defaultMessage: 'Все группы должны иметь название.',
    description: 'Сообщение об ошибке, отображаемое, когда название группы внутри конфигурации группы эксперимента обязательно, но не предоставлено.',
  },
  experimentConfigurationGroupsNameUnique: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.name.unique',
    defaultMessage: 'Все группы должны иметь уникальное название.',
    description: 'Сообщение об ошибке, отображаемое, когда названия групп внутри конфигурации группы эксперимента не уникальны.',
  },
  experimentConfigurationGroupsRequired: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.required',
    defaultMessage: 'Должно быть хотя бы одна группа.',
    description: 'Сообщение об ошибке, отображаемое, когда хотя бы одна группа обязательна внутри конфигурации группы эксперимента.',
  },
  experimentConfigurationGroupsTooltip: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.tooltip',
    defaultMessage: 'Удалить',
    description: 'Сообщение подсказки для действия удаления внутри раздела групп конфигурации группы эксперимента.',
  },
  experimentConfigurationGroupsAdd: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.groups.add',
    defaultMessage: 'Добавить еще одну группу',
    description: 'Метка для кнопки добавления еще одной группы внутри раздела групп конфигурации группы эксперимента.',
  },
  experimentConfigurationDeleteRestriction: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.delete.restriction',
    defaultMessage: 'Нельзя удалить, если используется в эксперименте',
    description: 'Сообщение об ошибке, указывающее, что конфигурацию группы эксперимента нельзя удалить, потому что она в настоящее время используется экспериментом.',
  },
  experimentConfigurationCancel: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.cancel',
    defaultMessage: 'Отмена',
    description: 'Метка для кнопки отмены внутри конфигурации группы эксперимента.',
  },
  experimentConfigurationSave: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.save',
    defaultMessage: 'Сохранить',
    description: 'Метка для кнопки сохранения внутри конфигурации группы эксперимента.',
  },
  experimentConfigurationCreate: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.create',
    defaultMessage: 'Создать',
    description: 'Метка для кнопки создания внутри конфигурации группы эксперимента.',
  },
  experimentConfigurationAlert: {
    id: 'course-authoring.group-configurations.experiment-configuration.container.alert',
    defaultMessage: 'Эта конфигурация в настоящее время используется в экспериментах с контентом. Если вы внесете изменения в группы, вам может потребоваться редактировать эти эксперименты.',
    description: 'Сообщение предупреждения, указывающее, что конфигурация группы эксперимента в настоящее время используется в экспериментах с контентом и что изменения могут потребовать редактирования этих экспериментов.',
  },
  emptyExperimentGroup: {
    id: 'course-authoring.group-configurations.experiment-card.empty-experiment-group',
    defaultMessage: 'Эта конфигурация группы не используется. Начните с добавления эксперимента с контентом к любой единице через {outlineComponentLink}.',
    description: 'Сообщение, отображаемое, когда конфигурация группы эксперимента не используется и предлагает добавление эксперимента с контентом.',
  },
  courseOutline: {
    id: 'course-authoring.group-configurations.experiment-card.course-outline',
    defaultMessage: 'План курса',
    description: 'Метка для раздела плана курса внутри карты эксперимента.',
  },
  actionEdit: {
    id: 'course-authoring.group-configurations.experiment-card.action.edit',
    defaultMessage: 'Редактировать',
    description: 'Метка для действия редактирования внутри карты эксперимента.',
  },
  actionDelete: {
    id: 'course-authoring.group-configurations.experiment-card.action.delete',
    defaultMessage: 'Удалить',
    description: 'Метка для действия удаления внутри карты эксперимента.',
  },
  subtitleModalDelete: {
    id: 'course-authoring.group-configurations.experiment-card.delete-modal.subtitle',
    defaultMessage: 'конфигурации групп',
    description: 'Подстрока для модального окна удаления, указывающая тип сущности, которая удаляется.',
  },
  deleteRestriction: {
    id: 'course-authoring.group-configurations.experiment-card.delete-restriction',
    defaultMessage: 'Нельзя удалить, если используется в единице',
    description: 'Сообщение об ошибке, указывающее, что карту эксперимента нельзя удалить, потому что она в настоящее время используется единицей.',
  },
});

export default messages;
