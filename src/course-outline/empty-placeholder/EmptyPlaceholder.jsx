import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Add as IconAdd } from '@openedx/paragon/icons/es5';
import { Button, OverlayTrigger, Tooltip } from '@openedx/paragon';

import messages from './messages';

const EmptyPlaceholder = ({
  onCreateNewSection,
  childAddable,
}) => {
  const intl = useIntl();

  return (
    <div className="outline-empty-placeholder bg-gray-100" data-testid="empty-placeholder">
      <p className="mb-0 text-gray-500">{messages.title.defaultMessage}</p>
      {childAddable && (
        <OverlayTrigger
          placement="bottom"
          overlay={(
            <Tooltip id={messages.tooltip.defaultMessage}>
              {messages.tooltip.defaultMessage}
            </Tooltip>
          )}
        >
          <Button
            variant="primary"
            size="sm"
            iconBefore={IconAdd}
            onClick={onCreateNewSection}
          >
            {messages.button.defaultMessage}
          </Button>
        </OverlayTrigger>
      )}
    </div>
  );
};

EmptyPlaceholder.propTypes = {
  onCreateNewSection: PropTypes.func.isRequired,
  childAddable: PropTypes.bool.isRequired,
};

export default EmptyPlaceholder;
