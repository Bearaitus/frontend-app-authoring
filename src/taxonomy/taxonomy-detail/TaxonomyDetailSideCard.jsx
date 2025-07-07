import { useIntl } from '@edx/frontend-platform/i18n';
import {
  Card,
} from '@openedx/paragon';
import PropTypes from 'prop-types';

import messages from './messages';

const TaxonomyDetailSideCard = ({ taxonomy }) => {
  const intl = useIntl();
  return (
    <Card>
      <Card.Header title={messages.taxonomyDetailsHeader.defaultMessage} />
      <Card.Section title={messages.taxonomyDetailsName.defaultMessage}>
        {taxonomy.name}
      </Card.Section>
      <Card.Divider className="ml-3 mr-3" />
      <Card.Section title={messages.taxonomyDetailsDescription.defaultMessage}>
        {taxonomy.description}
      </Card.Section>
      <Card.Section title={messages.taxonomyDetailsExportID.defaultMessage}>
        {taxonomy.exportId}
      </Card.Section>
    </Card>
  );
};

TaxonomyDetailSideCard.propTypes = {
  taxonomy: PropTypes.shape({
    name: PropTypes.string.isRequired,
    exportId: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default TaxonomyDetailSideCard;
