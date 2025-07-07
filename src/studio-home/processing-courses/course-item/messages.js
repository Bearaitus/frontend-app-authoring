import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  itemInProgressFooterText: {
    id: 'course-authoring.studio-home.processing.course-item.footer.in-progress',
    defaultMessage: 'Новый курс будет добавлен в ваш список курсов в течение 5-10 минут. Вернитесь на эту страницу или {refresh}, чтобы обновить список курсов. Новый курс потребует некоторой ручной настройки.',
  },
  itemInProgressFooterHyperlink: {
    id: 'course-authoring.studio-home.processing.course-item.footer.in-progress.hyperlink',
    defaultMessage: 'обновить его',
  },
  itemInProgressActionText: {
    id: 'course-authoring.studio-home.processing.course-item.action.in-progress',
    defaultMessage: 'Настройка как повторный запуск',
  },
  itemIsFailedActionText: {
    id: 'course-authoring.studio-home.processing.course-item.action.failed',
    defaultMessage: 'Ошибка настройки',
  },
  itemFailedFooterText: {
    id: 'course-authoring.studio-home.processing.course-item.footer.failed',
    defaultMessage: 'Произошла системная ошибка при обработке вашего курса. Пожалуйста, перейдите к исходному курсу, чтобы повторить попытку, или обратитесь к вашему менеджеру проекта за помощью.',
  },
  itemFailedFooterButton: {
    id: 'course-authoring.studio-home.processing.course-item.footer.failed.button',
    defaultMessage: 'Отменить',
  },
});

export default messages;
