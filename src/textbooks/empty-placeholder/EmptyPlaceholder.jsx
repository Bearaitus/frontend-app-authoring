import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Add as IconAdd } from '@openedx/paragon/icons';
import { Button } from '@openedx/paragon';

import messages from './messages';

const EmptyPlaceholder = ({ onCreateNewTextbook }) => {
  const intl = useIntl();

  return (
    <div className="textbooks-empty-placeholder bg-white" data-testid="textbooks-empty-placeholder">
      <p className="mb-0 small text-gray-700">{messages.title.defaultMessage}</p>
      <Button iconBefore={IconAdd} onClick={onCreateNewTextbook}>
        {messages.button.defaultMessage}
      </Button>
    </div>
  );
};

EmptyPlaceholder.propTypes = {
  onCreateNewTextbook: PropTypes.func.isRequired,
};

export default EmptyPlaceholder;
