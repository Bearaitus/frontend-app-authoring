import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Button,
  Stack,
  Icon,
  IconButton,
  Dropdown,
  ActionRow,
} from '@openedx/paragon';
import { FileUpload, MoreHoriz } from '@openedx/paragon/icons';
import {
  FormattedMessage,
  injectIntl,
  intlShape,
} from '@edx/frontend-platform/i18n';

import { actions, selectors } from '../../../../../../data/redux';
import * as hooks from './hooks';
import messages from './messages';

import { FileInput } from '../../../../../../sharedComponents/FileInput';
import ErrorAlert from '../../../../../../sharedComponents/ErrorAlerts/ErrorAlert';
import UploadErrorAlert from '../../../../../../sharedComponents/ErrorAlerts/UploadErrorAlert';
import CollapsibleFormWidget from '../CollapsibleFormWidget';
import { ErrorContext } from '../../../../hooks';
import { RequestKeys } from '../../../../../../data/constants/requests';

/**
 * Collapsible Form widget controlling video handouts
 */
const HandoutWidget = ({
  // injected
  intl,
  // redux
  isLibrary,
  handout,
  getHandoutDownloadUrl,
  updateField,
  isUploadError,
}) => {
  const [error] = React.useContext(ErrorContext).handout;
  const { fileSizeError } = hooks.fileSizeError();
  const fileInput = hooks.fileInput({ fileSizeError });
  const handoutName = hooks.parseHandoutName({ handout });
  const downloadLink = getHandoutDownloadUrl({ handout });

  return (null);
};

HandoutWidget.propTypes = {
  // injected
  intl: intlShape.isRequired,
  // redux
  isLibrary: PropTypes.bool.isRequired,
  handout: PropTypes.shape({}).isRequired,
  updateField: PropTypes.func.isRequired,
  isUploadError: PropTypes.bool.isRequired,
  getHandoutDownloadUrl: PropTypes.func.isRequired,
};
export const mapStateToProps = (state) => ({
  isLibrary: selectors.app.isLibrary(state),
  handout: selectors.video.handout(state),
  getHandoutDownloadUrl: selectors.video.getHandoutDownloadUrl(state),
  isUploadError: selectors.requests.isFailed(state, { requestKey: RequestKeys.uploadAsset }),
});

export const mapDispatchToProps = (dispatch) => ({
  updateField: (payload) => dispatch(actions.video.updateField(payload)),
});

export const HandoutWidgetInternal = HandoutWidget; // For testing only
export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(HandoutWidget));
