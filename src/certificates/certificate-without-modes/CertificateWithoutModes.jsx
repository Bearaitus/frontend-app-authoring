import { useIntl } from '@edx/frontend-platform/i18n';
import { Card } from '@openedx/paragon';

import messages from '../messages';

const CertificateWithoutModes = () => {
  const intl = useIntl();
  return (
    <Card>
      <Card.Section className="d-flex justify-content-center">
        <span className="small">{messages.withoutModesText.defaultMessage}</span>
      </Card.Section>
    </Card>
  );
};

export default CertificateWithoutModes;
