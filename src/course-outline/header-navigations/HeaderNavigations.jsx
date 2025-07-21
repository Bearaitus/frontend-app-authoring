import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Button, OverlayTrigger, Tooltip } from '@openedx/paragon';
import {
  Add as IconAdd,
  ArrowDropDown as ArrowDownIcon,
  ArrowDropUp as ArrowUpIcon,
} from '@openedx/paragon/icons';

import messages from './messages';

const HeaderNavigations = ({
  headerNavigationsActions,
  isReIndexShow,
  isSectionsExpanded,
  isDisabledReindexButton,
  hasSections,
  courseActions,
  errors,
}) => {
  const intl = useIntl();
  const {
    handleNewSection, handleReIndex, handleExpandAll, lmsLink,
  } = headerNavigationsActions;

  return (
    <nav className="header-navigations ml-auto">
      {courseActions.childAddable && (
        <OverlayTrigger
          placement="bottom"
          overlay={(
            <Tooltip id={messages.newSectionButtonTooltip.defaultMessage}>
              {messages.newSectionButtonTooltip.defaultMessage}
            </Tooltip>
          )}
        >
          <Button
            iconBefore={IconAdd}
            onClick={handleNewSection}
            disabled={errors?.outlineIndexApi}
          >
            New module
          </Button>
        </OverlayTrigger>
      )}
      {isReIndexShow && (
        <OverlayTrigger
          placement="bottom"
          overlay={!isDisabledReindexButton ? (
            <Tooltip id={messages.reindexButtonTooltip.defaultMessage}>
              {messages.reindexButtonTooltip.defaultMessage}
            </Tooltip>
          ) : <React.Fragment key="reindex close" />}
        >
          <Button
            onClick={handleReIndex}
            data-testid="course-reindex"
            variant="outline-primary"
            disabled={isDisabledReindexButton}
          >
            Reindex Course
          </Button>
        </OverlayTrigger>
      )}

    </nav>
  );
};

HeaderNavigations.defaultProps = {
  errors: {},
};

HeaderNavigations.propTypes = {
  isReIndexShow: PropTypes.bool.isRequired,
  isSectionsExpanded: PropTypes.bool.isRequired,
  isDisabledReindexButton: PropTypes.bool.isRequired,
  headerNavigationsActions: PropTypes.shape({
    handleNewSection: PropTypes.func.isRequired,
    handleReIndex: PropTypes.func.isRequired,
    handleExpandAll: PropTypes.func.isRequired,
    lmsLink: PropTypes.string.isRequired,
  }).isRequired,
  hasSections: PropTypes.bool.isRequired,
  courseActions: PropTypes.shape({
    deletable: PropTypes.bool.isRequired,
    draggable: PropTypes.bool.isRequired,
    childAddable: PropTypes.bool.isRequired,
    duplicable: PropTypes.bool.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    outlineIndexApi: PropTypes.shape({
      data: PropTypes.string,
      type: PropTypes.string.isRequired,
    }),
    reindexApi: PropTypes.shape({
      data: PropTypes.string,
      type: PropTypes.string.isRequired,
    }),
    sectionLoadingApi: PropTypes.shape({
      data: PropTypes.string,
      type: PropTypes.string.isRequired,
    }),
    courseLaunchApi: PropTypes.shape({
      data: PropTypes.string,
      type: PropTypes.string.isRequired,
    }),
  }),
};

export default HeaderNavigations;
