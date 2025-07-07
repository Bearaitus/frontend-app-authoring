import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  detailsSectionTitle: {
    id: 'course-authoring.certificates.details.section.title',
    defaultMessage: 'Детали сертификата',
    description: 'Название раздела',
  },
  detailsCourseTitle: {
    id: 'course-authoring.certificates.details.course.title',
    defaultMessage: 'Название курса',
    description: 'Метка для отображения официального названия курса в разделе деталей сертификата',
  },
  detailsCourseTitleOverride: {
    id: 'course-authoring.certificates.details.course.title.override',
    defaultMessage: 'Переопределение названия курса',
    description: 'Метка для поля ввода переопределения названия курса',
  },
  detailsCourseTitleOverrideDescription: {
    id: 'course-authoring.certificates.details.course.title.override.description',
    defaultMessage: 'Укажите альтернативу официальному названию курса для отображения на сертификатах. Оставьте поле пустым, чтобы использовать официальное название курса.',
    description: 'Помощный текст под полем ввода переопределения названия курса',
  },
  detailsCourseNumber: {
    id: 'course-authoring.certificates.details.course.number',
    defaultMessage: 'Номер курса',
    description: 'Метка для отображения официального номера курса в разделе деталей сертификата',
  },
  detailsCourseNumberOverride: {
    id: 'course-authoring.certificates.details.course.number.override',
    defaultMessage: 'Переопределение номера курса',
    description: 'Метка для поля ввода переопределения номера курса',
  },
  deleteCertificateConfirmationTitle: {
    id: 'course-authoring.certificates.details.confirm-modal',
    defaultMessage: 'Удалить этот сертификат?',
    description: 'Название модального окна подтверждения при попытке удаления сертификата',
  },
  deleteCertificateMessage: {
    id: 'course-authoring.certificates.details.confirm-modal.message',
    defaultMessage: 'Удаление этого сертификата является постоянным и не может быть отменено.',
    description: 'Предупреждающее сообщение внутри модального окна подтверждения, подчеркивающее постоянный характер действия',
  },
  editCertificateConfirmationTitle: {
    id: 'course-authoring.certificates.details.confirm.edit',
    defaultMessage: 'Редактировать этот сертификат?',
    description: 'Название модального окна подтверждения при попытке редактирования уже активированного (живого) сертификата',
  },
  editCertificateMessage: {
    id: 'course-authoring.certificates.details.confirm.edit.message',
    defaultMessage: 'Этот сертификат уже был активирован и находится в живом режиме. Вы уверены, что хотите продолжить редактирование?',
    description: 'Сообщение, предупреждающее пользователей о последствиях редактирования сертификата, который уже жив, и запрашивающее подтверждение',
  },
});

export default messages;
