import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  alertFailedGeneric: {
    id: 'course-authoring.course-unit.general.alert.error.description',
    defaultMessage: 'Не удалось {actionName} {type}. Пожалуйста, попробуйте снова.',
  },
  alertUnpublishedVersion: {
    id: 'course-authoring.course-unit.general.alert.unpublished-version.description',
    defaultMessage: 'Примечание: Последняя опубликованная версия этого блока доступна. Опубликовав изменения, вы измените опыт студентов.',
  },
  pasteButtonText: {
    id: 'course-authoring.course-unit.paste-component.btn.text',
    defaultMessage: 'Вставить компонент',
  },
});

export default messages;
