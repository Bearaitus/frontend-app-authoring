import messages from './sidebar/messages';
import addComponentMessages from './add-component/messages';

export const getUnitReleaseStatus = (intl) => ({
  release: messages.releaseStatusTitle.defaultMessage,
  released: messages.releasedStatusTitle.defaultMessage,
  scheduled: messages.scheduledStatusTitle.defaultMessage,
});

export const UNIT_VISIBILITY_STATES = {
  staffOnly: 'staff_only',
  live: 'live',
  ready: 'ready',
};

export const ICON_COLOR_VARIANTS = {
  BLACK: '#000',
  GREEN: '#0D7D4D',
};

export const PUBLISH_TYPES = {
  republish: 'republish',
  discardChanges: 'discard_changes',
  makePublic: 'make_public',
};

export const getXBlockSupportMessages = (intl) => ({
  fs: { // Fully supported
    label: intl.formatMessage(addComponentMessages.modalComponentSupportLabelFullySupported),
    tooltip: intl.formatMessage(addComponentMessages.modalComponentSupportTooltipFullySupported),
  },
  ps: { // Provisionally supported
    label: intl.formatMessage(addComponentMessages.modalComponentSupportLabelProvisionallySupported),
    tooltip: intl.formatMessage(addComponentMessages.modalComponentSupportTooltipProvisionallySupported),
  },
  us: { // Not supported
    label: intl.formatMessage(addComponentMessages.modalComponentSupportLabelNotSupported),
    tooltip: intl.formatMessage(addComponentMessages.modalComponentSupportTooltipNotSupported),
  },
});
