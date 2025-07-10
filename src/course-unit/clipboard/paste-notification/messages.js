import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  hasConflictingErrorsTitle: {
    id: 'course-authoring.course-unit.paste-notification.has-conflicting-errors.title',
    defaultMessage: 'Файлы необходимо обновить вручную.',
    description: 'Заголовок для уведомления, указывающего, что файлы необходимо обновить вручную из-за конфликта в буфере обмена.',
  },
  hasConflictingErrorsDescription: {
    id: 'course-authoring.course-unit.paste-notification.has-conflicting-errors.description',
    defaultMessage: 'Следующие файлы необходимо обновить вручную, чтобы компоненты работали должным образом:',
    description: 'Описание уведомления, указывающего, какие файлы необходимо обновить вручную из-за конфликта в буфере обмена.',
  },
  hasConflictingErrorsButtonText: {
    id: 'course-authoring.course-unit.paste-notification.has-conflicting-errors.button.text',
    defaultMessage: 'Загрузить файлы',
    description: 'Текст кнопки, предлагающий пользователям загрузить файлы для устранения конфликта в буфере обмена.',
  },
  hasErrorsTitle: {
    id: 'course-authoring.course-unit.paste-notification.has-errors.title',
    defaultMessage: 'Произошли некоторые ошибки',
    description: 'Заголовок для уведомления, указывающего, что произошли некоторые ошибки, вероятно, связанные с конфликтами файлов.',
  },
  hasErrorsDescription: {
    id: 'course-authoring.course-unit.paste-notification.has-errors.description',
    defaultMessage: 'Следующие необходимые файлы не удалось добавить в курс:',
    description: 'Описание уведомления, указывающего, какие необходимые файлы не удалось добавить в курс из-за ошибок.',
  },
  hasNewFilesTitle: {
    id: 'course-authoring.course-unit.paste-notification.has-new-files.title',
    defaultMessage: 'Новый файл(ы) добавлен(ы) в Файлы и загрузки.',
    description: 'Заголовок для уведомления, указывающего, что новые файлы были добавлены в раздел Файлы и загрузки.',
  },
  hasNewFilesDescription: {
    id: 'course-authoring.course-unit.paste-notification.has-new-files.description',
    defaultMessage: 'Следующие необходимые файлы были импортированы в этот курс:',
    description: 'Описание уведомления, указывающего, какие необходимые файлы были импортированы в курс.',
  },
  hasNewFilesButtonText: {
    id: 'course-authoring.course-unit.paste-notification.has-new-files.button.text',
    defaultMessage: 'Посмотреть файлы',
    description: 'Текст кнопки, предлагающий пользователям просмотреть новые файлы, импортированные в курс.',
  },
});
export default messages;