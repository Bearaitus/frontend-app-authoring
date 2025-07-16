import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  cancelConfirmTitle: {
    id: 'authoring.editorContainer.cancelConfirm.title',
    defaultMessage: 'Выйти из редактора?',
    description: 'Заголовок модального окна подтверждения выхода',
  },
  cancelConfirmDescription: {
    id: 'authoring.editorContainer.cancelConfirm.description',
    defaultMessage: 'Вы уверены, что хотите выйти из редактора? Все несохраненные изменения будут потеряны.',
    description: 'Текст описания для модального окна подтверждения выхода',
  },
  exitButtonAlt: {
    id: 'authoring.editorContainer.exitButton.alt',
    defaultMessage: 'Выйти из редактора',
    description: 'Alt текст для кнопки «Выйти»',
  },
  okButtonLabel: {
    id: 'authoring.editorContainer.okButton.label',
    defaultMessage: 'OK',
    description: 'Текст для кнопки «OK»',
  },
  modalTitle: {
    id: 'authoring.editorContainer.accessibleTitle',
    defaultMessage: 'Диалоговое окно редактора',
    description: 'Текст, отображаемый для незрячих пользователей для обозначения модального окна редактора',
  },
  contentSaveFailed: {
    id: 'authoring.editorfooter.save.error',
    defaultMessage: 'Ошибка: не удалось сохранить контент. Пожалуйста, проверьте последние изменения и попробуйте еще раз.',
    description: 'Сообщение об ошибке, отображаемое при неудачной попытке сохранения контента.',
  },
  cancelButtonAriaLabel: {
    id: 'authoring.editorfooter.cancelButton.ariaLabel',
    defaultMessage: 'Отменить изменения и вернуться к учебному контексту',
    description: 'Текст для скринридера для кнопки «Отменить»',
  },
  cancelButtonLabel: {
    id: 'authoring.editorfooter.cancelButton.label',
    defaultMessage: 'Отменить',
    description: 'Текст для кнопки «Отменить»',
  },
  saveButtonAriaLabel: {
    id: 'authoring.editorfooter.savebutton.ariaLabel',
    defaultMessage: 'Сохранить изменения и вернуться к учебному контексту',
    description: 'Текст для скринридера для кнопки «Сохранить»',
  },
  saveButtonLabel: {
    id: 'authoring.editorfooter.savebutton.label',
    defaultMessage: 'Сохранить',
    description: 'Текст для кнопки «Сохранить»',
  },
});
export default messages;