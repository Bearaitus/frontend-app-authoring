import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import {
  Dropdown,
  IconButton,
  Icon,
} from '@openedx/paragon';
import { MoreHoriz } from '@openedx/paragon/icons';
import messages from './messages';

const FileMenu = ({
  externalUrl,
  handleLock,
  locked,
  onDownload,
  openAssetInfo,
  openDeleteConfirmation,
  portableUrl,
  id,
  fileType,
  // injected
  intl,
}) => (
  <Dropdown data-testid={`file-menu-dropdown-${id}`}>
    <Dropdown.Toggle
      id={`file-menu-dropdown-${id}`}
      as={IconButton}
      src={MoreHoriz}
      iconAs={Icon}
      variant="primary"
      alt="file-menu-toggle"
    />
    <Dropdown.Menu>
      {fileType === 'video' ? (
        <Dropdown.Item
          onClick={() => navigator.clipboard.writeText(id)}
        >
          {messages.copyVideoIdTitle.defaultMessage}
        </Dropdown.Item>
      ) : (
        <>
          <Dropdown.Item
            onClick={() => navigator.clipboard.writeText(portableUrl)}
          >
            {messages.copyStudioUrlTitle.defaultMessage}
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => navigator.clipboard.writeText(externalUrl)}
          >
            {messages.copyWebUrlTitle.defaultMessage}
          </Dropdown.Item>
          <Dropdown.Item onClick={handleLock}>
            {locked ? messages.unlockMenuTitle.defaultMessage : messages.lockMenuTitle.defaultMessage}
          </Dropdown.Item>
        </>
      )}
      <Dropdown.Item onClick={onDownload}>
        {messages.downloadTitle.defaultMessage}
      </Dropdown.Item>
      <Dropdown.Item onClick={openAssetInfo}>
        {messages.infoTitle.defaultMessage}
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        data-testid="open-delete-confirmation-button"
        onClick={openDeleteConfirmation}
      >
        {messages.deleteTitle.defaultMessage}
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

FileMenu.propTypes = {
  externalUrl: PropTypes.string,
  handleLock: PropTypes.func,
  locked: PropTypes.bool,
  onDownload: PropTypes.func.isRequired,
  openAssetInfo: PropTypes.func.isRequired,
  openDeleteConfirmation: PropTypes.func.isRequired,
  portableUrl: PropTypes.string,
  id: PropTypes.string.isRequired,
  fileType: PropTypes.string.isRequired,
  // injected
  intl: intlShape.isRequired,
};

FileMenu.defaultProps = {
  externalUrl: null,
  handleLock: null,
  locked: null,
  portableUrl: null,
};

export default injectIntl(FileMenu);
