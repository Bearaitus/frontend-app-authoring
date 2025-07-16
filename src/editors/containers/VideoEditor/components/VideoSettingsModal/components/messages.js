import { defineMessages } from '@edx/frontend-platform/i18n';
const messages = defineMessages({
  expandAltText: {
    id: 'authoring.videoeditor.expand',
    defaultMessage: 'Развернуть',
  },
  collapseAltText: {
    id: 'authoring.videoeditor.collapse',
    defaultMessage: 'Свернуть',
  },
  validateErrorTitle: {
    id: 'authoring.videoeditor.validate.error.title',
    defaultMessage: 'Не удалось добавить видео.',
    description: 'Заголовок ошибки валидации.',
  },
  validateErrorBody: {
    id: 'authoring.videoeditor.validate.error.body',
    defaultMessage: 'Пожалуйста, проверьте введенные данные и попробуйте еще раз.',
    description: 'Текст ошибки валидации.',
  },
  durationTitle: {
    id: 'authoring.videoeditor.duration.title',
    defaultMessage: 'Длительность',
    description: 'Заголовок виджета "Длительность".',
  },
  durationDescription: {
    id: 'authoring.videoeditor.duration.description',
    defaultMessage: 'Укажите определенный фрагмент видео для воспроизведения.',
    description: 'Описание виджета "Длительность".',
  },
  startTimeLabel: {
    id: 'authoring.videoeditor.duration.startTime.label',
    defaultMessage: 'Начальное время',
    description: 'Подпись поля ввода начального времени.',
  },
  stopTimeLabel: {
    id: 'authoring.videoeditor.duration.stopTime.label',
    defaultMessage: 'Конечное время',
    description: 'Подпись поля ввода конечного времени.',
  },
  durationHint: {
    id: 'authoring.videoeditor.duration.hint',
    defaultMessage: 'Введите время в формате ЧЧ:ММ:СС',
    description: 'Всплывающая подсказка для полей ввода начального и конечного времени.',
  },
  fullVideoLength: {
    id: 'authoring.videoeditor.duration.fullVideoLength',
    defaultMessage: 'Полная длина видео',
    description: 'Текст, описывающий видео без указания начального или конечного времени.',
  },
  startsAt: {
    id: 'authoring.videoeditor.duration.startsAt',
    defaultMessage: 'Начинается с {startTime}',
    description: 'Текст, описывающий видео с указанным начальным временем и стандартным конечным.',
  },
  total: {
    id: 'authoring.videoeditor.duration.total',
    defaultMessage: 'Всего: {total}',
    description: 'Текст, описывающий видео с указанным начальным и конечным временем или только конечным временем.',
  },
  custom: {
    id: 'authoring.videoeditor.duration.custom',
    defaultMessage: 'Настраиваемое: {total}',
    description: 'Текст, описывающий видео с указанным начальным и конечным временем или только конечным временем для свернутого виджета.',
  },
  noTranscriptsAdded: {
    id: 'authoring.videoeditor.transcripts.empty',
    defaultMessage: 'Транскрипты не добавлены',
    description: 'Сообщение, показываемое, когда пользователь не выбрал транскрипты для видео.',
  },
  videoTypeYoutube: {
    id: 'authoring.videoeditor.videotype.youtube',
    defaultMessage: 'Видео с YouTube',
    description: 'Отображается на превью-карточке, если видео с youtube.com.',
  },
  videoTypeOther: {
    id: 'authoring.videoeditor.videotype.other',
    defaultMessage: 'Другое видео',
    description: 'Отображается на превью-карточке, если источник видео не удалось определить.',
  },
});
export default messages;