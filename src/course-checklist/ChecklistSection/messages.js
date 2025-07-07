import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  welcomeMessageShortDescription: {
    id: 'welcomeMessageShortDescription',
    defaultMessage: 'Добавьте приветственное сообщение',
    description: 'Метка для раздела, который описывает приветственное сообщение для курса',
  },
  welcomeMessageLongDescription: {
    id: 'welcomeMessageLongDescription',
    defaultMessage: 'Лично приветствуйте учащихся в вашем курсе и подготовьте их к положительному опыту прохождения курса.',
    description: 'Описание для раздела, который приглашает пользователя ввести приветственное сообщение для курса',
  },
  gradingPolicyShortDescription: {
    id: 'gradingPolicyShortDescription',
    defaultMessage: 'Создайте политику оценки вашего курса',
    description: 'Метка для раздела, который описывает политику оценки для курса',
  },
  gradingPolicyLongDescription: {
    id: 'gradingPolicyLongDescription',
    defaultMessage: 'Установите политику оценки, включая типы заданий и проходной балл. Все задания суммируются до 100%.',
    description: 'Описание для раздела, который приглашает пользователя ввести политику оценки для курса',
  },
  gradingPolicyComment: {
    id: 'gradingPolicyComment',
    defaultMessage: 'Ваша текущая политика оценки суммируется до {percent}%',
    description: 'Описание для раздела, который отображает общую политику оценки курса',
  },
  certificateShortDescription: {
    id: 'certificateShortDescription',
    defaultMessage: 'Включите сертификат',
    description: 'Метка для раздела, который описывает сертификат за прохождение курса',
  },
  certificateLongDescription: {
    id: 'certificateLongDescription',
    defaultMessage: 'Убедитесь, что все тексты правильны, подписи загружены и сертификат активирован.',
    description: 'Описание для раздела, который приглашает пользователя создать сертификат за прохождение курса',
  },
  courseDatesShortDescription: {
    id: 'courseDatesShortDescription',
    defaultMessage: 'Установите важные даты курса',
    description: 'Метка для раздела, который описывает сертификат за прохождение курса',
  },
  courseDatesLongDescription: {
    id: 'courseDatesLongDescription',
    defaultMessage: 'Установите график курса, включая дату начала и окончания.',
    description: 'Описание для раздела, который приглашает пользователя настроить график курса',
  },
  assignmentDeadlinesShortDescription: {
    id: 'assignmentDeadlinesShortDescription',
    defaultMessage: 'Проверьте сроки заданий',
    description: 'Метка для раздела, который описывает сроки заданий курса',
  },
  assignmentDeadlinesLongDescription: {
    id: 'assignmentDeadlinesLongDescription',
    defaultMessage: 'Убедитесь, что все сроки заданий находятся между датой начала и окончания курса.',
    description: 'Описание для раздела, который приглашает пользователя ввести сроки заданий курса',
  },
  assignmentDeadlinesComment: {
    id: 'assignmentDeadlinesComment',
    defaultMessage: 'Следующие задания имеют сроки, которые не попадают между датой начала и окончания курса:',
    description: 'Описание для раздела, который отображает, какие задания находятся вне дат начала и окончания курса',
  },
  videoDurationShortDescription: {
    id: 'videoDurationShortDescription',
    defaultMessage: 'Проверьте продолжительность видео',
    description: 'Метка для раздела, который описывает продолжительность видео',
  },
  videoDurationLongDescription: {
    id: 'videoDurationLongDescription',
    defaultMessage: 'Учащиеся лучше всего взаимодействуют с короткими видео, за которыми следуют возможности для практики. Убедитесь, что 80% или более видео курса имеют продолжительность менее 10 минут.',
    description: 'Описание для раздела, который приглашает пользователя следовать лучшим практикам для продолжительности видео',
  },
  mobileFriendlyVideoShortDescription: {
    id: 'mobileFriendlyVideoShortDescription',
    defaultMessage: 'Создайте мобильное видео',
    description: 'Метка для раздела, который описывает мобильное видео',
  },
  mobileFriendlyVideoLongDescription: {
    id: 'mobileFriendlyVideoLongDescription',
    defaultMessage: 'Мобильное видео можно просматривать на всех поддерживаемых устройствах. Убедитесь, что хотя бы 90% видео курса являются мобильными, загружая видео курса в конвейер видео edX.',
    description: 'Описание для раздела, который приглашает пользователя следовать лучшим практикам для мобильного видео',
  },
  diverseSequencesShortDescription: {
    id: 'diverseSequencesShortDescription',
    defaultMessage: 'Создайте разнообразные последовательности обучения',
    description: 'Метка для раздела, который описывает разнообразные последовательности образовательного контента',
  },
  diverseSequencesLongDescription: {
    id: 'diverseSequencesLongDescription',
    defaultMessage: 'Исследования показывают, что разнообразный опыт контента стимулирует вовлеченность учащихся. Мы рекомендуем, чтобы 80% или более ваших последовательностей обучения или подразделов включали несколько типов контента (например, видео, обсуждение или задачу).',
    description: 'Описание для раздела, который приглашает пользователя следовать лучшим практикам для разнообразных последовательностей образовательного контента',
  },
  weeklyHighlightsShortDescription: {
    id: 'weeklyHighlightsShortDescription',
    defaultMessage: 'Установите еженедельные ярлыки',
    description: 'Метка для раздела, который описывает еженедельные ярлыки',
  },
  weeklyHighlightsLongDescription: {
    id: 'weeklyHighlightsLongDescription',
    defaultMessage: 'Включите и укажите еженедельные ярлыки, чтобы держать учащихся вовлеченными и на правильном пути в вашем курсе.',
    description: 'Описание для раздела, который приглашает пользователя следовать лучшим практикам для еженедельных ярлыков курса',
  },
  unitDepthShortDescription: {
    id: 'unitDepthShortDescription',
    defaultMessage: 'Управляйте глубиной единиц',
    description: 'Метка для раздела, который описывает глубину единиц курса',
  },
  unitDepthLongDescription: {
    id: 'unitDepthLongDescription',
    defaultMessage: 'Разделение контента курса на управляемые части способствует вовлеченности учащихся. Мы рекомендуем, чтобы единицы содержали не более трех компонентов.',
    description: 'Описание для раздела, который приглашает пользователя следовать лучшим практикам для глубины единиц курса',
  },
  proctoringEmailShortDescription: {
    id: 'proctoringEmailShortDescription',
    defaultMessage: 'Добавьте электронную почту для эскалации прокторинга',
    description: 'Метка для раздела, который описывает электронную почту для эскалации прокторинга',
  },
  proctoringEmailLongDescription: {
    id: 'proctoringEmailLongDescription',
    defaultMessage: 'Курсы, использующие Proctortrack, требуют электронной почты для эскалации. Убедитесь, что учащиеся и поддержка могут связаться с вашей командой курса по вопросам, связанным с прокторингом (например, апелляции, сброс экзамена и т. д.).',
    description: 'Описание для раздела, который приглашает пользователя добавить электронную почту для эскалации Proctortrack для курса',
  },
  updateLinkLabel: {
    id: 'updateLinkLabel',
    defaultMessage: 'Обновить',
    description: 'Метка для ссылки, которая перенаправляет пользователя на страницу, где он может обновить настройки',
  },
  completionCountLabel: {
    id: 'completionCountLabel',
    defaultMessage: '{completed}/{total} завершено',
    description: 'Метка, которая описывает, сколько заданий выполнено из общего количества заданий',
  },
  completedItemLabel: {
    id: 'completedItemLabel',
    defaultMessage: 'завершено',
    description: 'Метка, которая описывает выполненное задание',
  },
  uncompletedItemLabel: {
    id: 'uncompletedItemLabel',
    defaultMessage: 'не завершено',
    description: 'Метка, которая описывает незавершенное задание',
  },
});

export default messages;
