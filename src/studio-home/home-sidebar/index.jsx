import React from 'react';
import { useSelector } from 'react-redux';
import { MailtoLink } from '@openedx/paragon';
import { useHelpUrls } from '../../help-urls/hooks';
import { HelpSidebar, HelpSidebarLink } from '../../generic/help-sidebar';
import { getStudioHomeData } from '../data/selectors';
import messages from './messages';
const HomeSidebar = () => {
  const {
    studioName,
    platformName,
    studioShortName,
    studioRequestEmail,
    techSupportEmail,
    courseCreatorStatus,
  } = useSelector(getStudioHomeData);
  const { home: aboutHomeLink } = useHelpUrls(['home']);

  const isShowMailToGetInstruction = courseCreatorStatus === COURSE_CREATOR_STATES.disallowedForThisSite
    && !!studioRequestEmail;
  const isShowUnrequestedInstruction = courseCreatorStatus === COURSE_CREATOR_STATES.unrequested;
  const isShowDeniedInstruction = courseCreatorStatus === COURSE_CREATOR_STATES.denied;

  return (
    <HelpSidebar>
      <h4 className="help-sidebar-about-title">
        {messages.aboutTitle.defaultMessage({ studioName })}
      </h4>
      <p className="help-sidebar-about-descriptions">
        {messages.aboutDescription.defaultMessage({ studioShortName })}
      </p>
      <HelpSidebarLink
        as="span"
        pathToPage={aboutHomeLink || ''}
        title={messages.studioHomeLinkToGettingStarted.defaultMessage({ studioName })}
      />
      {isShowMailToGetInstruction && (
        <>
          <hr />
          <h4 className="help-sidebar-about-title">
            {messages.sidebarHeader2.defaultMessage({ studioName })}
          </h4>
          <p className="help-sidebar-about-descriptions">
            {messages.sidebarDescription2.defaultMessage({
              studioName,
              mailTo: (
                <MailtoLink to={studioRequestEmail}>
                  {messages.sidebarDescription2MailTo.defaultMessage({ platformName })}
                </MailtoLink>
              ),
            })}
          </p>
        </>
      )}
      {isShowUnrequestedInstruction && (
        <>
          <hr />
          <h4 className="help-sidebar-about-title">
            {messages.sidebarHeader3.defaultMessage({ studioName })}
          </h4>
          <p className="help-sidebar-about-descriptions">
            {messages.sidebarDescription3.defaultMessage({ studioName })}
          </p>
        </>
      )}
      {isShowDeniedInstruction && (
        <>
          <hr />
          <h4 className="help-sidebar-about-title">
            {messages.sidebarHeader4.defaultMessage({ studioName })}
          </h4>
          <p className="help-sidebar-about-descriptions">
            {messages.sidebarDescription4.defaultMessage({
              studioName,
              mailTo: (
                <MailtoLink to={techSupportEmail}>
                  {messages.sidebarDescription4MailTo.defaultMessage({ platformName })}
                </MailtoLink>
              ),
            })}
          </p>
        </>
      )}
    </HelpSidebar>
  );
};
export default HomeSidebar;