import React from 'react';
import messages from './messages';

/**
 * Get formatted sidebar messages for render
 * @param {object} docsLinks - Docs links object from store
 * @returns {Array<{
 *   title: string,
 *   descriptions: Array<string>,
 *   link?: {
 *     text: string,
 *     href: string
 *   }
 * }>}
 */
const getFormattedSidebarMessages = (docsLinks, intl) => {
  const { learnMoreOutlineUrl, learnMoreGradingUrl, learnMoreVisibilityUrl } = docsLinks;

  return [
    {
      title: messages.section_1_title.defaultMessage,
      descriptions: [
        messages.section_1_descriptions_1.defaultMessage,
        messages.section_1_descriptions_2.defaultMessage,
      ],
    },
    {
      title: messages.section_2_title.defaultMessage,
      descriptions: [
        messages.section_2_descriptions_1.defaultMessage,
      ],
      link: {
        text: messages.section_2_link.defaultMessage,
        href: learnMoreOutlineUrl,
      },
    },
    {
      title: messages.section_3_title.defaultMessage,
      descriptions: [
        messages.section_3_descriptions_1.defaultMessage,
      ],
      link: {
        text: messages.section_3_link.defaultMessage,
        href: learnMoreGradingUrl,
      },
    },
    {
      title: messages.section_4_title.defaultMessage,
      descriptions: [
        messages.section_4_descriptions_1.defaultMessage,
        intl.formatMessage(
          messages.section_4_descriptions_2,
          { hide: <strong>{messages.section_4_descriptions_2_hide.defaultMessage}</strong> },
        ),
        intl.formatMessage(
          messages.section_4_descriptions_3,
          { hide: <strong>{messages.section_4_descriptions_3_hide.defaultMessage}</strong> },
        ),
      ],
      link: {
        text: messages.section_4_link.defaultMessage,
        href: learnMoreVisibilityUrl,
      },
    },
  ];
};

// eslint-disable-next-line import/prefer-default-export
export { getFormattedSidebarMessages };
