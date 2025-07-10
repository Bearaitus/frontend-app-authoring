import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'course-authoring.course-outline.configure-modal.title',
    defaultMessage: '{title} настройки',
  },
  componentTitle: {
    id: 'course-authoring.course-outline.configure-modal.component.title',
    defaultMessage: 'Редактирование доступа для: {title}',
    description: 'Название модального окна видимости для блока',
  },
  basicTabTitle: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.title',
    defaultMessage: 'Базовые настройки',
  },
  notGradedTypeOption: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.notGradedTypeOption',
    defaultMessage: 'Не оценивается',
  },
  releaseDateAndTime: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.release-date-and-time',
    defaultMessage: 'Дата и время открытия курса',
  },
  releaseDate: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.release-date',
    defaultMessage: 'Дата открытия:',
  },
  releaseTimeUTC: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.release-time-UTC',
    defaultMessage: 'Время открытия в UTC:',
  },
  visibilityTabTitle: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.title',
    defaultMessage: 'Видимость',
  },
  visibilitySectionTitle: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.section-visibility',
    defaultMessage: '{visibilityTitle} видимость',
  },
  unitVisibility: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.unit-visibility',
    defaultMessage: 'Видимость блока',
  },
  unitAccess: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.unit-access',
    defaultMessage: 'Доступ к блоку',
  },
  discussionEnabledSectionTitle: {
    id: 'course-authoring.course-outline.configure-modal.discussion-enabled.section-title',
    defaultMessage: 'Обсуждение',
  },
  discussionEnabledCheckbox: {
    id: 'course-authoring.course-outline.configure-modal.discussion-enabled.checkbox',
    defaultMessage: 'Включить обсуждение',
  },
  discussionEnabledDescription: {
    id: 'course-authoring.course-outline.configure-modal.discussion-enabled.description',
    defaultMessage: 'Темы для неопубликованных блоков не будут созданы',
  },
  hideFromLearners: {
    id: 'course-authoring.course-outline.configure-modal.visibility.hide-from-learners',
    defaultMessage: 'Скрыть от учащихся',
  },
  restrictAccessTo: {
    id: 'course-authoring.course-outline.configure-modal.visibility.restrict-access-to',
    defaultMessage: 'Ограничить доступ к',
  },
  sectionVisibilityWarning: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.section-visibility-warning',
    defaultMessage: 'Если вы сделаете этот раздел видимым для учащихся, учащиеся смогут увидеть его содержимое после истечения срока выпуска и после публикации раздела. Только блоки, которые явно скрыты от учащихся, останутся скрытыми после того, как вы очистите эту опцию для раздела.',
  },
  unitVisibilityWarning: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-visibility-warning',
    defaultMessage: 'Если блок ранее был опубликован и выпущен для учащихся, любые изменения, которые вы внесли в блок, когда он был скрыт, теперь будут видны для учащихся.',
  },
  subsectionVisibilityWarning: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.subsection-visibility-warning',
    defaultMessage: 'Если вы выберете опцию, отличную от "Скрыть весь подраздел", опубликованные блоки в этом подразделе станут доступны для учащихся, если они не будут явно скрыты.',
  },
  unitSelectGroup: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-select-group',
    defaultMessage: 'Выберите одну или несколько групп:',
  },
  unitSelectGroupType: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-select-group-type',
    defaultMessage: 'Выберите тип группы',
  },
  unitSelectDeletedGroupErrorMessage: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-select-group-deleted-error-message',
    defaultMessage: 'Эта группа больше не существует. Выберите другую группу или удалите ограничение доступа.',
    description: 'Текст предупреждения о недоступной группе',
  },
  unitAllLearnersAndStaff: {
    id: 'course-authoring.course-outline.configure-modal.unit-tab.unit-all-learners-staff',
    defaultMessage: 'Все учащиеся и персонал',
  },
  cancelButton: {
    id: 'course-authoring.course-outline.configure-modal.button.cancel',
    defaultMessage: 'Отмена',
  },
  saveButton: {
    id: 'course-authoring.course-outline.configure-modal.button.label',
    defaultMessage: 'Сохранить',
  },
  grading: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.grading',
    defaultMessage: 'Оценка',
  },
  gradeAs: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.grade-as',
    defaultMessage: 'Оценить как:',
  },
  dueDate: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.due-date',
    defaultMessage: 'Срок сдачи:',
  },
  dueTimeUTC: {
    id: 'course-authoring.course-outline.configure-modal.basic-tab.due-time-UTC',
    defaultMessage: 'Время сдачи в UTC:',
  },
  subsectionVisibility: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.subsection-visibility',
    defaultMessage: 'Видимость подраздела',
  },
  showEntireSubsection: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-entire-subsection',
    defaultMessage: 'Показать весь подраздел',
  },
  showEntireSubsectionDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-entire-subsection-description',
    defaultMessage: 'Учащиеся видят опубликованный подраздел и могут получить доступ к его содержимому',
  },
  hideContentAfterDue: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-content-after-due',
    defaultMessage: 'Скрыть содержимое после срока сдачи',
  },
  hideContentAfterDueDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-content-after-due-description',
    defaultMessage: 'После истечения срока сдачи подраздела учащиеся больше не могут получить доступ к его содержимому. Подраздел не включается в расчет оценок.',
  },
  hideEntireSubsection: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-entire-subsection',
    defaultMessage: 'Скрыть весь подраздел',
  },
  hideEntireSubsectionDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.hide-entire-subsection-description',
    defaultMessage: 'Учащиеся не видят подраздел в плане курса. Подраздел не включается в расчет оценок.',
  },
  assessmentResultsVisibility: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.assessment-results-visibility',
    defaultMessage: 'Видимость результатов оценки',
  },
  alwaysShowAssessmentResults: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.always-show-assessment-results',
    defaultMessage: 'Всегда показывать результаты оценки',
  },
  alwaysShowAssessmentResultsDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.always-show-assessment-results-description',
    defaultMessage: 'Когда учащиеся подают ответ на оценку, они сразу видят, правильный ли ответ или нет, и полученную оценку.',
  },
  neverShowAssessmentResults: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.never-show-assessment-results',
    defaultMessage: 'Никогда не показывать результаты оценки',
  },
  neverShowAssessmentResultsDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.never-show-assessment-results-description',
    defaultMessage: 'Учащиеся никогда не видят, правильны ли их ответы на оценки или нет, и не видят полученную оценку.',
  },
  showAssessmentResultsPastDue: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-assessment-results-past-due',
    defaultMessage: 'Показать результаты оценки после срока сдачи',
  },
  showAssessmentResultsPastDueDescription: {
    id: 'course-authoring.course-outline.configure-modal.visibility-tab.show-assessment-results-past-due-description',
    defaultMessage: 'Учащиеся не видят, правильны ли их ответы на оценки или нет, и не видят полученную оценку, пока не истечет срок сдачи подраздела. Если подраздел не имеет срока сдачи, учащиеся всегда видят свои оценки, когда подают ответы на оценки.',
  },
  setSpecialExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.set-special-exam',
    defaultMessage: 'Установить как специальный экзамен',
  },
  none: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.none',
    defaultMessage: 'Нет',
  },
  timed: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.timed',
    defaultMessage: 'С ограничением по времени',
  },
  timedDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.timed-description',
    defaultMessage: 'Используйте экзамен с ограничением по времени, чтобы ограничить время, которое учащиеся могут потратить на задачи в этом подразделе. Учащиеся должны подать ответы до истечения времени. Вы можете разрешить дополнительное время для отдельных учащихся через панель инструктора.',
  },
  proctoredExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctoredExam',
    defaultMessage: 'Прокторинг',
  },
  proctoredExamDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctored-exam-description',
    defaultMessage: 'Экзамены с прокторингом являются экзаменами с ограничением по времени и записывают видео каждого учащегося, проходящего экзамен. Видео затем проверяются, чтобы убедиться, что учащиеся следуют всем правилам экзамена. Пожалуйста, обратите внимание, что установка этого экзамена как экзамена с прокторингом изменит настройки видимости на "Скрыть содержимое после срока сдачи".',
  },
  onboardingExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.onboardingExam',
    defaultMessage: 'Onboarding',
  },
  onboardingExamDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.onboarding-exam-description',
    defaultMessage: 'Используйте Onboarding, чтобы познакомить учащихся с прокторингом, проверить их личность и создать профиль Onboarding. Учащиеся должны завершить шаг создания профиля Onboarding до того, как они смогут пройти экзамен с прокторингом. Проверка профилей занимает 2+ рабочих дня.',
  },
  practiceExam: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.practiceExam',
    defaultMessage: 'Практический экзамен с прокторингом',
  },
  practiceExamDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.practice-exam-description',
    defaultMessage: 'Используйте практический экзамен с прокторингом, чтобы познакомить учащихся с инструментами и процессами прокторинга. Результаты практического экзамена не влияют на оценку учащегося.',
  },
  advancedTabTitle: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.title',
    defaultMessage: 'Расширенные настройки',
  },
  timeAllotted: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.time-allotted',
    defaultMessage: 'Выделенное время (ЧЧ:ММ):',
  },
  timeLimitDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.time-limit-description',
    defaultMessage: 'Выберите время, выделенное для экзамена. Если оно превышает 24 часа, введите количество времени. Вы можете предоставить отдельным учащимся дополнительное время для завершения экзамена через панель инструктора.',
  },
  prereqTitle: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.prereqTitle',
    defaultMessage: 'Использовать как предварительное требование',
  },
  prereqCheckboxLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.prereqCheckboxLabel',
    defaultMessage: 'Сделать этот подраздел доступным как предварительное требование для другого контента',
  },
  limitAccessTitle: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.limitAccessTitle',
    defaultMessage: 'Ограничить доступ',
  },
  limitAccessDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.limitAccessDescription',
    defaultMessage: 'Выберите подраздел-предварительное требование и введите минимальный процент оценки и минимальный процент завершения, чтобы ограничить доступ к этому подразделу. Допускаются значения от 0 до 100',
  },
  noPrerequisiteOption: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.noPrerequisiteOption',
    defaultMessage: 'Нет предварительного требования',
  },
  prerequisiteSelectLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.prerequisiteSelectLabel',
    defaultMessage: 'Предварительное требование:',
  },
  minScoreLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minScoreLabel',
    defaultMessage: 'Минимальная оценка:',
  },
  minCompletionLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minCompletionLabel',
    defaultMessage: 'Минимальное завершение:',
  },
  minScoreError: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minScoreError',
    defaultMessage: 'Минимальный процент оценки должен быть целым числом от 0 до 100.',
  },
  minCompletionError: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.minCompletionError',
    defaultMessage: 'Минимальный процент завершения должен быть целым числом от 0 до 100.',
  },
  proctoredExamLockedAndisNotProctoredExamAlert: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctoredExamLockedAndisNotProctoredExamAlert',
    defaultMessage: 'Этот подраздел был выпущен для учащихся как экзамен с прокторингом, но был изменен обратно на базовый или экзамен с ограничением по времени. Вы не можете настроить его как экзамен с прокторингом сейчас. Свяжитесь с поддержкой edX для получения помощи.',
  },
  proctoredExamLockedAndisProctoredExamAlert: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.proctoredExamLockedAndisProctoredExamAlert',
    defaultMessage: 'Этот экзамен с прокторингом был выпущен для учащихся. Вы не можете преобразовать его в другой тип специального экзамена. Вы можете изменить этот подраздел обратно на базовый экзамен, выбрав "Нет", или на экзамен с ограничением по времени, но вы не сможете настроить его как экзамен с прокторингом в будущем.',
  },
  reviewRulesLabel: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesLabel',
    defaultMessage: 'Правила проверки',
  },
  reviewRulesDescription: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescription',
    defaultMessage: 'Укажите любые правила или исключения из правил, которые команда проверки прокторинга должна соблюдать при проверке видео. Например, вы можете указать, что калькуляторы разрешены. Эти указанные правила видны для учащихся до начала экзамена.',
  },
  reviewRulesDescriptionWithLink: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescriptionWithLink',
    defaultMessage: 'Укажите любые правила или исключения из правил, которые команда проверки прокторинга должна соблюдать при проверке видео. Например, вы можете указать, что калькуляторы разрешены. Эти указанные правила видны для учащихся до начала экзамена, вместе с {hyperlink}.',
  },
  reviewRulesDescriptionLinkText: {
    id: 'course-authoring.course-outline.configure-modal.advanced-tab.reviewRulesDescriptionLinkText',
    defaultMessage: 'общие правила экзамена с прокторингом',
  },
});

export default messages;
