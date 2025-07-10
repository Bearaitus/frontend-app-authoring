import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headingTitle: {
    id: 'course-authoring.studio-home.heading.title',
    defaultMessage: 'Домашняя страница {studioShortName}',
  },
  addNewCourseBtnText: {
    id: 'course-authoring.studio-home.add-new-course.btn.text',
    defaultMessage: 'Новый курс',
  },
  addNewLibraryBtnText: {
    id: 'course-authoring.studio-home.add-new-library.btn.text',
    defaultMessage: 'Новая библиотека',
  },
  homePageLoadFailedMessage: {
    id: 'course-authoring.studio-home.page-load.failed.message',
    defaultMessage: 'Не удалось загрузить домашнюю страницу Studio. Пожалуйста, попробуйте позже.',
  },
  emailStaffBtnText: {
    id: 'course-authoring.studio-home.email-staff.btn.text',
    defaultMessage: 'Отправить письмо сотрудникам для создания курса',
  },
  defaultSection_1_Title: {
    id: 'course-authoring.studio-home.default-section-1.title',
    defaultMessage: 'Вы сотрудник существующего курса {studioShortName}?',
  },
  defaultSection_1_Description: {
    id: 'course-authoring.studio-home.default-section-1.description',
    defaultMessage: 'Создатель курса должен предоставить вам доступ к курсу. Свяжитесь с создателем курса или администратором курса, над которым вы помогаете.',
  },
  defaultSection_2_Title: {
    id: 'course-authoring.studio-home.default-section-2.title',
    defaultMessage: 'Создайте первый курс',
  },
  defaultSection_2_Description: {
    id: 'course-authoring.studio-home.default-section-2.description',
    defaultMessage: 'От созданного курса вас отделяет всего 1 кнопка... Просто нажмите её!',
  },
  btnAddNewCourseText: {
    id: 'course-authoring.studio-home.btn.add-new-course.text',
    defaultMessage: 'Создать курс',
  },
  btnReRunText: {
    id: 'course-authoring.studio-home.btn.re-run.text',
    defaultMessage: 'Перезапустить курс',
  },
  viewLiveBtnText: {
    id: 'course-authoring.studio-home.btn.view-live.text',
    defaultMessage: 'Просмотреть онлайн',
  },
  organizationTitle: {
    id: 'course-authoring.studio-home.organization.title',
    defaultMessage: 'Настройки организации и библиотеки',
  },
  organizationLabel: {
    id: 'course-authoring.studio-home.organization.label',
    defaultMessage: 'Показать все курсы в организации:',
  },
  organizationSubmitBtnText: {
    id: 'course-authoring.studio-home.organization.btn.submit.text',
    defaultMessage: 'Отправить',
  },
  organizationInputPlaceholder: {
    id: 'course-authoring.studio-home.organization.input.placeholder',
    defaultMessage: 'Например, MITx',
  },
  organizationInputNoOptions: {
    id: 'course-authoring.studio-home.organization.input.no-options',
    defaultMessage: 'Нет вариантов',
  },
});

export default messages;
