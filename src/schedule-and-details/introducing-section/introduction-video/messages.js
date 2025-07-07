import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  courseIntroductionVideoLabel: {
    id: 'course-authoring.schedule-section.introducing.introduction-video.label',
    defaultMessage: 'Видео-интродукция курса',
  },
  courseIntroductionVideoDelete: {
    id: 'course-authoring.schedule-section.introducing.introduction-video.delete',
    defaultMessage: 'Удалить текущее видео',
  },
  courseIntroductionVideoHelpText: {
    id: 'course-authoring.schedule-section.introducing.introduction-video.help-text',
    defaultMessage: 'Введите ID вашего видео на YouTube (вместе с любыми параметрами ограничения)',
  },
  courseIntroductionVideoPlaceholder: {
    id: 'course-authoring.schedule-section.introducing.introduction-video.placeholder',
    defaultMessage: 'ID видео на YouTube',
  },
});

export default messages;
