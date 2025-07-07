import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  signatoryTitle: {
    id: 'course-authoring.certificates.signatories.title',
    defaultMessage: 'Подписант',
    description: 'Название для подписанта',
  },
  signatoriesRecommendation: {
    id: 'course-authoring.certificates.signatories.recommendation',
    defaultMessage: 'Рекомендуется включать не более четырех подписантов. Если вы включите дополнительных подписантов, предварительно просмотрите сертификат в режиме печати, чтобы убедиться, что сертификат будет печататься правильно на одной странице.',
    description: 'Рекомендация по количеству подписантов, которые следует включать в сертификат, подчеркивающая важность проверки макета печати',
  },
  signatoriesSectionTitle: {
    id: 'course-authoring.certificates.signatories.section.title',
    defaultMessage: 'Подписанты сертификата',
    description: 'Название раздела',
  },
  addSignatoryButton: {
    id: 'course-authoring.certificates.signatories.add.signatory.button',
    defaultMessage: 'Добавить дополнительного подписанта',
    description: 'Текст кнопки для добавления нового подписанта в сертификат',
  },
  addSignatoryButtonDescription: {
    id: 'course-authoring.certificates.signatories.add.signatory.button.description',
    defaultMessage: '(Добавить подписантов для сертификата)',
    description: 'Помощный текст для кнопки, используемой для добавления подписантов',
  },
  nameLabel: {
    id: 'course-authoring.certificates.signatories.name.label',
    defaultMessage: 'Имя',
    description: 'Метка для поля ввода, где вводится имя подписанта',
  },
  namePlaceholder: {
    id: 'course-authoring.certificates.signatories.name.placeholder',
    defaultMessage: 'Имя подписанта',
    description: 'Плейсхолдер для поля ввода имени подписанта',
  },
  nameDescription: {
    id: 'course-authoring.certificates.signatories.name.description',
    defaultMessage: 'Имя этого подписанта, как оно должно появиться на сертификатах.',
    description: 'Помощный текст под полем ввода имени',
  },
  titleLabel: {
    id: 'course-authoring.certificates.signatories.title.label',
    defaultMessage: 'Должность',
    description: 'Метка для поля ввода, где вводится должность подписанта',
  },
  titlePlaceholder: {
    id: 'course-authoring.certificates.signatories.title.placeholder',
    defaultMessage: 'Должность подписанта',
    description: 'Плейсхолдер для поля ввода должности подписанта',
  },
  titleDescription: {
    id: 'course-authoring.certificates.signatories.title.description',
    defaultMessage: 'Должности, превышающие 100 символов, могут предотвратить печать сертификата на одной странице.',
    description: 'Помощный текст под полем ввода должности',
  },
  organizationLabel: {
    id: 'course-authoring.certificates.signatories.organization.label',
    defaultMessage: 'Организация',
    description: 'Метка для поля ввода, где вводится организация подписанта',
  },
  organizationPlaceholder: {
    id: 'course-authoring.certificates.signatories.organization.placeholder',
    defaultMessage: 'Организация подписанта',
    description: 'Плейсхолдер для поля ввода организации подписанта',
  },
  organizationDescription: {
    id: 'course-authoring.certificates.signatories.organization.description',
    defaultMessage: 'Организация, к которой принадлежит этот подписант, как она должна появиться на сертификатах.',
    description: 'Помощный текст под полем ввода организации',
  },
  imageLabel: {
    id: 'course-authoring.certificates.signatories.image.label',
    defaultMessage: 'Изображение подписи',
    description: 'Метка для поля ввода, где выбирается изображение подписанта',
  },
  imagePlaceholder: {
    id: 'course-authoring.certificates.signatories.image.placeholder',
    defaultMessage: 'Путь к изображению подписи',
    description: 'Плейсхолдер для поля ввода изображения подписанта',
  },
  imageDescription: {
    id: 'course-authoring.certificates.signatories.image.description',
    defaultMessage: 'Изображение должно быть в формате PNG',
    description: 'Помощный текст под полем ввода изображения',
  },
  uploadImageButton: {
    id: 'course-authoring.certificates.signatories.upload.image.button',
    defaultMessage: '{uploadText} изображение подписи',
    description: 'Текст кнопки для добавления или замены изображения подписи',
  },
  uploadModal: {
    id: 'course-authoring.certificates.signatories.upload.modal',
    defaultMessage: 'Загрузить',
    description: 'Вариант текста кнопки для добавления нового изображения подписи',
  },
  uploadModalReplace: {
    id: 'course-authoring.certificates.signatories.upload.modal.replace',
    defaultMessage: 'Заменить',
    description: 'Вариант текста кнопки для замены существующего изображения подписи',
  },
  deleteSignatoryConfirmation: {
    id: 'course-authoring.certificates.signatories.confirm-modal',
    defaultMessage: 'Удалить "{name}" из списка подписантов?',
    description: 'Название модального окна подтверждения при попытке удаления подписанта, где "{name}" - имя подписанта, который будет удален',
  },
  deleteSignatoryConfirmationMessage: {
    id: 'course-authoring.certificates.signatories.confirm-modal.message',
    defaultMessage: 'Это действие нельзя отменить.',
    description: 'Предупреждающее сообщение, подчеркивающее постоянный характер действия удаления подписанта',
  },
});

export default messages;
