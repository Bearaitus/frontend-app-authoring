import React, { useContext, useEffect } from 'react';
import _ from 'lodash';
import { PropTypes } from 'prop-types';
import { injectIntl, intlShape, FormattedMessage } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';
import {
  Button,
  DataTableContext,
  Dropdown,
  useToggle,
} from '@openedx/paragon';
import { Add, Tune } from '@openedx/paragon/icons';
import messages from '../messages';
import SortAndFilterModal from './sort-and-filter-modal';

const TableActions = ({
  selectedFlatRows,
  fileInputControl,
  handleSort,
  handleBulkDownload,
  handleOpenDeleteConfirmation,
  encodingsDownloadUrl,
  fileType,
  setInitialState,
  // injected
  intl,
}) => {
  const [isSortOpen, openSort, closeSort] = useToggle(false);
  const { state } = useContext(DataTableContext);

  // This useEffect saves DataTable state so it can persist after table re-renders due to data reload.
  useEffect(() => {
    setInitialState(state);
  }, [state]);

  return (
    <>
      <Button variant="outline-primary" onClick={openSort} iconBefore={Tune} className='mx-2'>
        <FormattedMessage {...messages.sortButtonLabel} />
      </Button>
      <Button iconBefore={Add} onClick={fileInputControl.click}>
        Добавить файл
      </Button>
      <SortAndFilterModal {...{ isSortOpen, closeSort, handleSort }} />
    </>
  );
};

TableActions.defaultProps = {
  selectedFlatRows: null,
};
TableActions.propTypes = {
  selectedFlatRows: PropTypes.arrayOf(
    PropTypes.shape({
      original: PropTypes.shape({
        displayName: PropTypes.string.isRequired,
        wrapperType: PropTypes.string.isRequired,
        locked: PropTypes.bool,
        externalUrl: PropTypes.string,
        thumbnail: PropTypes.string,
        id: PropTypes.string.isRequired,
        portableUrl: PropTypes.string,
      }).isRequired,
    }),
  ),
  fileInputControl: PropTypes.shape({
    click: PropTypes.func.isRequired,
  }).isRequired,
  handleOpenDeleteConfirmation: PropTypes.func.isRequired,
  handleBulkDownload: PropTypes.func.isRequired,
  encodingsDownloadUrl: PropTypes.string,
  handleSort: PropTypes.func.isRequired,
  fileType: PropTypes.string.isRequired,
  setInitialState: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

TableActions.defaultProps = {
  encodingsDownloadUrl: null,
};

export default injectIntl(TableActions);
