import React from 'react';
import { v4 as uuid } from 'uuid';
import { Hyperlink } from '@openedx/paragon';
import { FormattedDate, useIntl } from '@edx/frontend-platform/i18n';

import { useHelpUrls } from '../../help-urls/hooks';
import { HelpSidebar } from '../../generic/help-sidebar';
import messages from './messages';

const CourseRerunSideBar = () => {
  const intl = useIntl();
  const { default: learnMoreUrl } = useHelpUrls(['default']);
  const defaultCourseDate = new Date(Date.UTC(2030, 0, 1, 0, 0));
  const localizedCourseDate = (
    <FormattedDate
      value={defaultCourseDate}
      year="numeric"
      month="long"
      day="2-digit"
      hour="numeric"
      minute="numeric"
    />
  );

  const sidebarMessages = [
    {
      title: messages.sectionTitle1.defaultMessage,
      description: `${messages.sectionDescription1.defaultMessage}`,
      date: localizedCourseDate,
    },
    {
      title: messages.sectionTitle2.defaultMessage,
      description: messages.sectionDescription2.defaultMessage,
    },
    {
      title: messages.sectionTitle3.defaultMessage,
      description: messages.sectionDescription3.defaultMessage,
    },
    {
      link: {
        text: messages.sectionLink4.defaultMessage,
        href: learnMoreUrl,
      },
    },
  ];

  return (
    <HelpSidebar
      intl={intl}
      showOtherSettings={false}
      className="mt-3"
    >
      {sidebarMessages.map(({
        title,
        description,
        link,
        date,
      }, index) => {
        const isLastSection = index === sidebarMessages.length - 1;

        return (
          <div key={uuid()}>
            <h4 className="help-sidebar-about-title">{title}</h4>
            <p className="help-sidebar-about-descriptions">{description} {date}</p>
            {!!link && (
              <Hyperlink
                className="small"
                destination={link.href || ''}
                target="_blank"
                showLaunchIcon={false}
              >
                {link.text}
              </Hyperlink>
            )}
            {!isLastSection && <hr className="my-3.5" />}
          </div>
        );
      })}
    </HelpSidebar>
  );
};

export default CourseRerunSideBar;
