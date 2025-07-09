// @ts-check
import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  headerTitle: {
    id: 'course-authoring.taxonomy-manage-orgs.header.title',
    defaultMessage: 'Назначить организациям',
  },
  bodyText: {
    id: 'course-authoring.taxonomy-manage-orgs.body.text',
    defaultMessage: 'Управляйте тем, какие организации могут получить доступ к таксономии, назначая их в меню ниже. Вы также можете назначить таксономию всем организациям.',
  },
  assignOrgs: {
    id: 'course-authoring.taxonomy-manage-orgs.assign-orgs',
    defaultMessage: 'Назначить организации',
  },
  currentAssignments: {
    id: 'course-authoring.taxonomy-manage-orgs.current-assignments',
    defaultMessage: 'В настоящее время назначено:',
  },
  addOrganizations: {
    id: 'course-authoring.taxonomy-manage-orgs.add-orgs',
    defaultMessage: 'Добавить другую организацию:',
  },
  searchOrganizations: {
    id: 'course-authoring.taxonomy-manage-orgs.search-orgs',
    defaultMessage: 'Найти организацию',
  },
  noOrganizationAssigned: {
    id: 'course-authoring.taxonomy-manage-orgs.no-orgs',
    defaultMessage: 'Организации не назначены',
  },
  assignAll: {
    id: 'course-authoring.taxonomy-manage-orgs.assign-all',
    defaultMessage: 'Назначить всем организациям',
  },
  cancelButton: {
    id: 'course-authoring.taxonomy-manage-orgs.button.cancel',
    defaultMessage: 'Отмена',
  },
  saveButton: {
    id: 'course-authoring.taxonomy-manage-orgs.button.save',
    defaultMessage: 'Сохранить',
  },
  confirmUnassignTitle: {
    id: 'course-authoring.taxonomy-manage-orgs.confirm-dialog.title',
    defaultMessage: 'Отменить назначение таксономии',
  },
  confirmUnassignText: {
    id: 'course-authoring.taxonomy-manage-orgs.confirm-dialog.text',
    defaultMessage: 'Авторы контента из отмененных организаций не смогут добавлять теги к контенту курса с помощью {taxonomyName}. Вы уверены, что хотите продолжить?',
  },
  continueButton: {
    id: 'course-authoring.taxonomy-manage-orgs.confirm-dialog.button.continue',
    defaultMessage: 'Продолжить',
  },
  assignOrgsSuccess: {
    id: 'course-authoring.taxonomy-manage-orgs.toast.assign-orgs-success',
    defaultMessage: 'Назначение организаций обновлено',
  },
  removeOrg: {
    id: 'course-authoring.taxonomy-manage-orgs.remove-org',
    defaultMessage: 'Удалить {org}',
    description: 'Кнопка для удаления определенной организации из таксономии',
  },
});
export default messages;