import * as Yup from 'yup';

import messages from './messages';

const textbookFormValidationSchema = (intl) => Yup.object().shape({
  tab_title: Yup.string().required(messages.tabTitleValidationText.defaultMessage).max(255),
  chapters: Yup.array().of(
    Yup.object({
      title: Yup.string().required((messages.chapterTitleValidationText.defaultMessage)).max(255),
      url: Yup.string().required(messages.chapterUrlValidationText.defaultMessage).max(255),
    }),
  ).min(1),
});

export default textbookFormValidationSchema;
