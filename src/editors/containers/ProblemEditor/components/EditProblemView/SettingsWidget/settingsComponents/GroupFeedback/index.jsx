import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, FormattedMessage, intlShape } from '@edx/frontend-platform/i18n';
import SettingsOption from '../../SettingsOption';
import messages from './messages';
import { groupFeedbackCardHooks, groupFeedbackRowHooks } from './hooks';
import GroupFeedbackRow from './GroupFeedbackRow';
import Button from '../../../../../../../sharedComponents/Button';

const GroupFeedbackCard = ({
  groupFeedbacks,
  updateSettings,
  answers,
  // inject
  intl,
}) => {
  const { summary, handleAdd } = groupFeedbackCardHooks(groupFeedbacks, updateSettings, answers);
  return (null
  );
};

GroupFeedbackCard.propTypes = {
  intl: intlShape.isRequired,
  groupFeedbacks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    feedback: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
    correct: PropTypes.bool,
    id: PropTypes.string,
    selectedFeedback: PropTypes.string,
    title: PropTypes.string,
    unselectedFeedback: PropTypes.string,
  })).isRequired,
  updateSettings: PropTypes.func.isRequired,
};

export const GroupFeedbackCardInternal = GroupFeedbackCard; // For testing only
export default injectIntl(GroupFeedbackCard);
