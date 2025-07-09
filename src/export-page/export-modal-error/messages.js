import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  errorTitle: {
    id: 'course-authoring.export.modal.error.title',
    defaultMessage: 'Произошла ошибка при экспорте.',
  },
  errorDescriptionNotUnit: {
    id: 'course-authoring.export.modal.error.description.not.unit',
    defaultMessage: 'Курс не удалось экспортировать в XML. Недостаточно информации для определения неисправного компонента. Проверьте свой курс, чтобы найти проблемные компоненты, и попробуйте еще раз. Исходное сообщение об ошибке: {errorMessage}',
  },
  errorDescriptionUnit: {
    id: 'course-authoring.export.modal.error.description.unit',
    defaultMessage: 'При экспорте в XML хотя бы одного компонента произошла ошибка. Рекомендуется перейти на страницу редактирования и исправить ошибку перед повторной попыткой экспорта. Убедитесь, что все компоненты на странице действительны и не отображают никаких сообщений об ошибках. Исходное сообщение об ошибке: {errorMessage}',
  },
  errorCancelButtonUnit: {
    id: 'course-authoring.export.modal.error.button.cancel.unit',
    defaultMessage: 'Вернуться к экспорту',
  },
  errorCancelButtonNotUnit: {
    id: 'course-authoring.export.modal.error.button.cancel.not.unit',
    defaultMessage: 'Отмена',
  },
  errorActionButtonNotUnit: {
    id: 'course-authoring.export.modal.error.button.action.not.unit',
    defaultMessage: 'Перейти на главную страницу курса',
  },
  errorActionButtonUnit: {
    id: 'course-authoring.export.modal.error.button.action.unit',
    defaultMessage: 'Исправить неисправный компонент',
  },
});
export default messages;