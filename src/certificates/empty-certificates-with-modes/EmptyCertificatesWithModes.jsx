import { useDispatch } from 'react-redux';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Button, ActionRow, Card } from '@openedx/paragon';
import { Add as AddIcon } from '@openedx/paragon/icons';

import { setMode } from '../data/slice';
import { MODE_STATES } from '../data/constants';
import messages from '../messages';

const EmptyCertificatesWithModes = () => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const handleCreateMode = () => {
    dispatch(setMode(MODE_STATES.create));
  };

  return (
    <Card>
      <Card.Section>
        <ActionRow>
          <span className="small">{messages.noCertificatesText.defaultMessage}</span>
          <ActionRow.Spacer />
          <Button
            iconBefore={AddIcon}
            onClick={handleCreateMode}
          >
            {messages.setupCertificateBtn.defaultMessage}
          </Button>
        </ActionRow>
      </Card.Section>
    </Card>
  );
};

export default EmptyCertificatesWithModes;
