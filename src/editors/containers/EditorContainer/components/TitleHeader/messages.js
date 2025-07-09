import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  loading: {
    id: 'authoring.texteditor.title.loading',
    defaultMessage: 'Загрузка...',
    description: 'Сообщение, отображаемое во время загрузки контента',
  },
  cancelChangesLabel: {
    id: 'authoring.texteditor.header.cancelChangesLabel',
    defaultMessage: 'Отменить изменения и вернуться к обучению',
    description: 'Текст для скринридера для иконки кнопки возврата к контексту обучения',
  },
  editTitleLabel: {
    id: 'authoring.texteditor.header.editTitleLabel',
    defaultMessage: 'Редактировать заголовок',
    description: 'Текст для скринридера для иконки кнопки редактирования заголовка блока',
  },
  cancelTitleEdit: {
    id: 'authoring.texteditor.header.cancelTitleEdit',
    defaultMessage: 'Отмена',
    description: 'Текст для скринридера для иконки кнопки отмены редактирования заголовка блока',
  },
  saveTitleEdit: {
    id: 'authoring.texteditor.header.saveTitleEdit',
    defaultMessage: 'Сохранить',
    description: 'Текст для скринридера для иконки кнопки сохранения редактирования заголовка блока',
  },
});
export default messages;