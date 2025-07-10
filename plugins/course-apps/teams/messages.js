import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  heading: {
    id: 'authoring.pagesAndResources.teams.heading',
    defaultMessage: 'Настройка команд',
  },
  enableTeamsLabel: {
    id: 'authoring.pagesAndResources.teams.enableTeams.label',
    defaultMessage: 'Команды',
  },
  enableTeamsHelp: {
    id: 'authoring.pagesAndResources.teams.enableTeams.help',
    defaultMessage: 'Разрешить учащимся работать вместе над конкретными проектами или занятиями.',
  },
  enableTeamsLink: {
    id: 'authoring.pagesAndResources.teams.enableTeams.link',
    defaultMessage: 'Узнать больше о командах',
  },
  teamSize: {
    id: 'authoring.pagesAndResources.teams.teamSize.heading',
    defaultMessage: 'Размер команды',
  },
  maxTeamSize: {
    id: 'authoring.pagesAndResources.teams.teamSize.maxTeamSize',
    defaultMessage: 'Максимальный размер команды',
  },
  maxTeamSizeHelp: {
    id: 'authoring.pagesAndResources.teams.teamSize.maxTeamSizeHelp',
    defaultMessage: 'Максимальное количество учащихся, которые могут присоединиться к команде',
  },
  maxTeamSizeEmpty: {
    id: 'authoring.pagesAndResources.teams.teamSize.maxTeamSizeEmpty',
    defaultMessage: 'Введите максимальный размер команды',
  },
  maxTeamSizeInvalid: {
    id: 'authoring.pagesAndResources.teams.teamSize.maxTeamSizeInvalid',
    defaultMessage: 'Максимальный размер команды должен быть положительным числом, большим чем ноль.',
  },
  maxTeamSizeTooHigh: {
    id: 'authoring.pagesAndResources.teams.teamSize.maxTeamSizeTooHigh',
    defaultMessage: 'Максимальный размер команды не может быть больше {max}',
  },
  groups: {
    id: 'authoring.pagesAndResources.teams.groups.heading',
    defaultMessage: 'Группы',
  },
  groupsHelp: {
    id: 'authoring.pagesAndResources.teams.groups.help',
    defaultMessage: 'Группы - это пространства, где пользователи могут создавать или присоединяться к командам.',
  },
  configureGroup: {
    id: 'authoring.pagesAndResources.teams.configureGroup.heading',
    defaultMessage: 'Настройка группы',
  },
  groupFormNameLabel: {
    id: 'authoring.pagesAndResources.teams.group.name.label',
    defaultMessage: 'Название',
  },
  groupFormNameHelp: {
    id: 'authoring.pagesAndResources.teams.group.name.help',
    defaultMessage: 'Выберите уникальное название для этой группы',
  },
  groupFormNameEmpty: {
    id: 'authoring.pagesAndResources.teams.group.name.error.empty',
    defaultMessage: 'Введите уникальное название для этой группы',
  },
  groupFormNameExists: {
    id: 'authoring.pagesAndResources.teams.group.name.error.exists',
    defaultMessage: 'Похоже, это название уже используется',
  },
  groupFormDescriptionLabel: {
    id: 'authoring.pagesAndResources.teams.group.description.label',
    defaultMessage: 'Описание',
  },
  groupFormDescriptionHelp: {
    id: 'authoring.pagesAndResources.teams.group.description.help',
    defaultMessage: 'Введите подробности о этой группе',
  },
  groupFormDescriptionError: {
    id: 'authoring.pagesAndResources.teams.group.description.error',
    defaultMessage: 'Введите описание для этой группы',
  },
  groupFormTypeLabel: {
    id: 'authoring.pagesAndResources.teams.group.type.label',
    defaultMessage: 'Тип',
  },
  groupFormTypeHelp: {
    id: 'authoring.pagesAndResources.teams.group.type.help',
    defaultMessage: 'Контролируйте, кто может видеть, создавать и присоединяться к командам',
  },
  groupTypeOpen: {
    id: 'authoring.pagesAndResources.teams.group.types.open',
    defaultMessage: 'Открытая',
  },
  groupTypeOpenManaged: {
    id: 'authoring.pagesAndResources.teams.group.types.open_managed',
    defaultMessage: 'Открытая с управлением',
  },
  groupTypeOpenManagedDescription: {
    id: 'authoring.pagesAndResources.teams.group.types.open_managed.description',
    defaultMessage: 'Только персонал курса может создавать команды. Пользователи могут видеть, присоединяться и покидать команды.',
  },
  groupTypeOpenDescription: {
    id: 'authoring.pagesAndResources.teams.group.types.open.description',
    defaultMessage: 'Пользователи могут создавать, присоединяться, покидать и видеть другие команды',
  },
  groupTypePublicManaged: {
    id: 'authoring.pagesAndResources.teams.group.types.public_managed',
    defaultMessage: 'Публичная с управлением',
  },
  groupTypePublicManagedDescription: {
    id: 'authoring.pagesAndResources.teams.group.types.public_managed.description',
    defaultMessage: 'Только персонал курса может контролировать команды и членство. Пользователи могут видеть другие команды.',
  },
  groupTypePrivateManaged: {
    id: 'authoring.pagesAndResources.teams.group.types.private_managed',
    defaultMessage: 'Частная с управлением',
  },
  groupTypePrivateManagedDescription: {
    id: 'authoring.pagesAndResources.teams.group.types.private_managed.description',
    defaultMessage: 'Только персонал курса может контролировать команды, членство и видеть другие команды',
  },
  groupFormMaxSizeLabel: {
    id: 'authoring.pagesAndResources.teams.group.maxSize.label',
    defaultMessage: 'Максимальный размер команды (необязательно)',
  },
  groupFormMaxSizeHelp: {
    id: 'authoring.pagesAndResources.teams.group.maxSize.help',
    defaultMessage: 'Переопределить глобальный максимальный размер команды',
  },
  addGroup: {
    id: 'authoring.pagesAndResources.teams.addGroup.button',
    defaultMessage: 'Добавить группу',
  },
  deleteAlt: {
    id: 'authoring.pagesAndResources.teams.group.delete',
    defaultMessage: 'Удалить',
  },
  expandAlt: {
    id: 'authoring.pagesAndResources.teams.group.expand',
    defaultMessage: 'Расширить редактор группы',
  },
  collapseAlt: {
    id: 'authoring.pagesAndResources.teams.group.collapse',
    defaultMessage: 'Закрыть редактор группы',
  },
  delete: {
    id: 'authoring.pagesAndResources.teams.deleteGroup.initiateDelete',
    defaultMessage: 'Удалить',
  },
  cancel: {
    id: 'authoring.pagesAndResources.teams.deleteGroup.cancel-delete.button',
    defaultMessage: 'Отмена',
  },
  groupDeleteHeading: {
    id: 'authoring.pagesAndResources.teams.deleteGroup.heading',
    defaultMessage: 'Удалить эту группу?',
  },
  groupDeleteBody: {
    id: 'authoring.pagesAndResources.teams.deleteGroup.body',
    defaultMessage: `edX рекомендует не удалять группы после начала курса.
    Ваша группа больше не будет видна в LMS, и пользователи не смогут покинуть команды, связанные с ней.
    Пожалуйста, удалите учащихся из команд перед удалением связанной группы.`,
    description: 'Сообщение, отображаемое администраторам при удалении группы. Убедитесь, что включили разрывы строк, чтобы окончательный текст был отображен правильно.',
  },
  noGroupsErrorTitle: {
    id: 'authoring.pagesAndResources.teams.enableGroups.error.noGroupsFound.title',
    defaultMessage: 'Нет групп',
    description: 'Название сообщения об ошибке, отображаемого, когда пользователь пытается включить команды, но нет определенной группы.',
  },
  noGroupsErrorMessage: {
    id: 'authoring.pagesAndResources.teams.enableGroups.error.noGroupsFound.message',
    defaultMessage: 'Добавьте одну или несколько групп, чтобы включить команды.',
    description: 'Текст сообщения об ошибке, отображаемого, когда пользователь пытается включить команды, но нет определенной группы.',
  },
});

export default messages;
