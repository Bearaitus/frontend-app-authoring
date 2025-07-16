import React from 'react';
import { useDispatch } from 'react-redux';

import {
  Form,
  IconButtonWithTooltip,
  ActionRow,
  Icon,
  Button,
  Tooltip,
  OverlayTrigger,
} from '@openedx/paragon';
import { DeleteOutline, InfoOutline, Add } from '@openedx/paragon/icons';
import {
  FormattedMessage,
  injectIntl,
  intlShape,
} from '@edx/frontend-platform/i18n';

import * as widgetHooks from '../hooks';
import * as hooks from './hooks';
import messages from './messages';

import ErrorAlert from '../../../../../../sharedComponents/ErrorAlerts/ErrorAlert';
import CollapsibleFormWidget from '../CollapsibleFormWidget';

/**
 * Collapsible Form widget controlling video source as well as fallback sources
 */
const VideoSourceWidget = ({
  // injected
  intl,
}) => {
  const dispatch = useDispatch();
  const {
    videoId,
    videoSource: source,
    fallbackVideos,
    allowVideoDownloads: allowDownload,
  } = widgetHooks.widgetValues({
    dispatch,
    fields: {
      [widgetHooks.selectorKeys.videoSource]: widgetHooks.genericWidget,
      [widgetHooks.selectorKeys.videoId]: widgetHooks.genericWidget,
      [widgetHooks.selectorKeys.fallbackVideos]: widgetHooks.arrayWidget,
      [widgetHooks.selectorKeys.allowVideoDownloads]: widgetHooks.genericWidget,
    },
  });
  const { videoIdChangeAlert } = hooks.videoIdChangeAlert();
  const { updateVideoId, updateVideoURL } = hooks.sourceHooks({
    dispatch,
    previousVideoId: videoId.formValue,
    setAlert: videoIdChangeAlert.set,
  });
  const {
    addFallbackVideo,
    deleteFallbackVideo,
  } = hooks.fallbackHooks({ fallbackVideos: fallbackVideos.formValue, dispatch });

  return (
    <CollapsibleFormWidget
      fontSize="x-small"
      title={messages.titleLabel.defaultMessage}
    >
      <ErrorAlert
        dismissError={videoIdChangeAlert.dismiss}
        hideHeading
        isError={videoIdChangeAlert.show}
      >
        <FormattedMessage {...messages.videoIdChangeAlert} />
      </ErrorAlert>

      <div className="border-primary-100 border-bottom pb-4">
        <Form.Group>
          <Form.Control
            floatingLabel={messages.videoIdLabel.defaultMessage}
            onChange={videoId.onChange}
            onBlur={updateVideoId}
            value={videoId.local}
          />
          <Form.Control.Feedback className="text-primary-300 mb-4">
            <FormattedMessage {...messages.videoIdFeedback} />
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            floatingLabel={messages.videoUrlLabel.defaultMessage}
            onChange={source.onChange}
            onBlur={(e) => updateVideoURL(e, videoId.local)}
            value={source.local}
          />
          <Form.Control.Feedback className="text-primary-300">
            <FormattedMessage {...messages.videoUrlFeedback} />
          </Form.Control.Feedback>
        </Form.Group>
      </div>
      
      <div className="my-4 border-primary-100 border-bottom" />
      <Button
        className="text-primary-500 font-weight-bold pl-0"
        size="sm"
        iconBefore={Add}
        variant="link"
        onClick={() => addFallbackVideo()}
      >
        <FormattedMessage {...messages.addButtonLabel} />
      </Button>
    </CollapsibleFormWidget>
  );
};
VideoSourceWidget.propTypes = {
  // injected
  intl: intlShape.isRequired,
};

export const VideoSourceWidgetInternal = VideoSourceWidget; // For testing only
export default injectIntl(VideoSourceWidget);
