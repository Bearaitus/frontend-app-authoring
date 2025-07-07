import PropTypes from 'prop-types';
import {
  Image, Icon, Stack, IconButtonWithTooltip,
} from '@openedx/paragon';
import {
  EditOutline as EditOutlineIcon,
} from '@openedx/paragon/icons';
import { useIntl } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';

import commonMessages from '../../messages';
import messages from '../messages';

const Signatory = ({
  index,
  name,
  title,
  organization,
  signatureImagePath,
  handleEdit,
}) => {
  const intl = useIntl();

  return (
    <div className="bg-light-200 p-2.5 signatory" data-testid="signatory">
      <Stack className="signatory__header" gap={3}>
        <h3 className="section-title m-0">{`${messages.signatoryTitle.defaultMessage} ${index + 1}`}</h3>
        <Stack className="signatory__text-fields-stack">
          <p className="signatory__text"><b>{messages.nameLabel.defaultMessage}</b> {name}</p>
          <p className="signatory__text"><b>{messages.titleLabel.defaultMessage}</b> {title}</p>
          <p className="signatory__text"><b>{messages.organizationLabel.defaultMessage}</b> {organization}</p>
        </Stack>
      </Stack>

      <IconButtonWithTooltip
        className="signatory__action-button"
        src={EditOutlineIcon}
        iconAs={Icon}
        alt={intl.formatMessage(commonMessages.editTooltip)}
        tooltipContent={<div>{intl.formatMessage(commonMessages.editTooltip)}</div>}
        onClick={handleEdit}
      />
      <div className="signatory__image-container">
        {signatureImagePath && (
          <Image
            src={`${getConfig().STUDIO_BASE_URL}${signatureImagePath}`}
            fluid
            alt={messages.imageLabel.defaultMessage}
            className="signatory__image"
          />
        )}
      </div>
    </div>
  );
};

Signatory.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  signatureImagePath: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default Signatory;
