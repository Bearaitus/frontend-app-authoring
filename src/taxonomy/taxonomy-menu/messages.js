// @ts-check
import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  actionsButtonLabel: {
    id: 'course-authoring.taxonomy-menu.action.button.label',
    defaultMessage: 'Действия',
  },
  actionsButtonAlt: {
    id: 'course-authoring.taxonomy-menu.action.button.alt',
    defaultMessage: 'Действия {name}',
  },
  importMenu: {
    id: 'course-authoring.taxonomy-menu.import.label',
    defaultMessage: 'Повторно импортировать',
  },
  manageOrgsMenu: {
    id: 'course-authoring.taxonomy-menu.assign-orgs.label',
    defaultMessage: 'Управлять Компания-разработчик курсами',
  },
  exportMenu: {
    id: 'course-authoring.taxonomy-menu.export.label',
    defaultMessage: 'Экспортировать',
  },
  deleteMenu: {
    id: 'course-authoring.taxonomy-menu.delete.label',
    defaultMessage: 'Удалить',
  },
  taxonomyDeleteToast: {
    id: 'course-authoring.taxonomy-list.toast.delete',
    defaultMessage: '"{name}" удален',
  },
});

export default messages;
