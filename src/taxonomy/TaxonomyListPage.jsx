// @ts-check
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CardView,
  Container,
  DataTable,
  Dropdown,
  OverlayTrigger,
  Spinner,
  Tooltip,
  SelectMenu,
  MenuItem,
  useToggle,
} from '@openedx/paragon';
import {
  Add,
  Check,
} from '@openedx/paragon/icons';
import { useIntl } from '@edx/frontend-platform/i18n';

import { Helmet } from 'react-helmet';

import { useOrganizationListData } from '../generic/data/apiHooks';
import SubHeader from '../generic/sub-header/SubHeader';
import getPageHeadTitle from '../generic/utils';
import { ALL_TAXONOMIES, apiUrls, UNASSIGNED } from './data/api';
import { useTaxonomyList } from './data/apiHooks';
import { ImportTagsWizard } from './import-tags';
import messages from './messages';
import TaxonomyCard from './taxonomy-card';

const TaxonomyListHeaderButtons = ({ canAddTaxonomy }) => {
  const intl = useIntl();

  const [isImportModalOpen, importModalOpen, importModalClose] = useToggle(false);

  return (
    <>
      {isImportModalOpen && (
        <ImportTagsWizard
          isOpen={isImportModalOpen}
          onClose={importModalClose}
        />
      )}
      <OverlayTrigger
        placement="top"
        overlay={(
          <Tooltip id="download-template-tooltip">
            {messages.downloadTemplateButtonHint.defaultMessage}
          </Tooltip>
        )}
      >
        <Dropdown id="download-template-dropdown">
          <Dropdown.Toggle
            id="download-template-dropdown-toggle"
            variant="outline-primary"
            data-testid="taxonomy-download-template"
          >
            {messages.downloadTemplateButtonLabel.defaultMessage}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              href={apiUrls.taxonomyTemplate('csv')}
              data-testid="taxonomy-download-template-csv"
            >
              {messages.downloadTemplateButtonCSVLabel.defaultMessage}
            </Dropdown.Item>
            <Dropdown.Item
              href={apiUrls.taxonomyTemplate('json')}
              data-testid="taxonomy-download-template-json"
            >
              {messages.downloadTemplateButtonJSONLabel.defaultMessage}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </OverlayTrigger>
      <Button
        iconBefore={Add}
        onClick={importModalOpen}
        data-testid="taxonomy-import-button"
        disabled={!canAddTaxonomy}
      >
        {messages.importButtonLabel.defaultMessage}
      </Button>
    </>
  );
};

const OrganizationFilterSelector = ({
  isOrganizationListLoaded,
  organizationListData,
  selectedOrgFilter,
  setSelectedOrgFilter,
}) => {
  const intl = useIntl();
  const isOrgSelected = (value) => (value === selectedOrgFilter ? <Check /> : null);
  const selectOptions = [
    <MenuItem
      key="all-orgs-taxonomies"
      className="x-small"
      iconAfter={() => isOrgSelected(ALL_TAXONOMIES)}
      onClick={() => setSelectedOrgFilter(ALL_TAXONOMIES)}
    >
      { isOrgSelected(ALL_TAXONOMIES)
        ? messages.orgInputSelectDefaultValue.defaultMessage
        : messages.orgAllValue.defaultMessage}
    </MenuItem>,
    <MenuItem
      key="unassigned-taxonomies"
      className="x-small"
      iconAfter={() => isOrgSelected(UNASSIGNED)}
      onClick={() => setSelectedOrgFilter(UNASSIGNED)}
    >
      { messages.orgUnassignedValue.defaultMessage }
    </MenuItem>,
  ];

  if (isOrganizationListLoaded && organizationListData) {
    organizationListData.forEach(org => (
      selectOptions.push(
        <MenuItem
          key={`${org}-taxonomies`}
          className="x-small"
          iconAfter={() => isOrgSelected(org)}
          onClick={() => setSelectedOrgFilter(org)}
        >
          {org}
        </MenuItem>,
      )
    ));
  }

  return (
    <SelectMenu
      className="flex-d x-small taxonomy-orgs-filter-selector"
      variant="tertiary"
      defaultMessage={messages.orgInputSelectDefaultValue.defaultMessage}
      data-testid="taxonomy-orgs-filter-selector"
    >
      { isOrganizationListLoaded
        ? selectOptions
        : (
          <Spinner
            animation="border"
            size="xl"
            screenReaderText={messages.usageLoadingMessage.defaultMessage}
          />
        )}
    </SelectMenu>
  );
};

const TaxonomyListPage = () => {
  const intl = useIntl();
  const [selectedOrgFilter, setSelectedOrgFilter] = useState(ALL_TAXONOMIES);

  const {
    data: organizationListData,
    isSuccess: isOrganizationListLoaded,
  } = useOrganizationListData();

  const {
    data: taxonomyListData,
    isSuccess: isLoaded,
  } = useTaxonomyList(selectedOrgFilter);
  const canAddTaxonomy = taxonomyListData?.canAddTaxonomy ?? false;

  const getOrgSelect = () => (
    // Initialize organization select component
    <OrganizationFilterSelector
      isOrganizationListLoaded={isOrganizationListLoaded}
      organizationListData={organizationListData}
      selectedOrgFilter={selectedOrgFilter}
      setSelectedOrgFilter={setSelectedOrgFilter}
    />
  );

  return (
    <>
      <Helmet>
        <title>{getPageHeadTitle('', messages.headerTitle.defaultMessage)}</title>
      </Helmet>
      <div className="pt-4.5 pr-4.5 pl-4.5 pb-2 bg-light-100 box-shadow-down-2">
        <Container size="xl">
          <SubHeader
            title={messages.headerTitle.defaultMessage}
            titleActions={getOrgSelect()}
            headerActions={<TaxonomyListHeaderButtons canAddTaxonomy={canAddTaxonomy} />}
            hideBorder
          />
        </Container>
      </div>
      <div className="bg-light-400 mt-1">
        <Container size="xl">
          {isLoaded && taxonomyListData && (
            <DataTable
              disableElevation
              data={taxonomyListData.results}
              itemCount={taxonomyListData.results.length}
              columns={[
                {
                  Header: 'id',
                  accessor: 'id',
                },
                {
                  Header: 'name',
                  accessor: 'name',
                },
                {
                  Header: 'description',
                  accessor: 'description',
                },
                {
                  Header: 'systemDefined',
                  accessor: 'systemDefined',
                },
                {
                  Header: '',
                  accessor: 'tagsCount',
                },
              ]}
            >
              <CardView
                className="bg-light-400 p-5"
                CardComponent={(row) => TaxonomyCard(row)}
              />
            </DataTable>
          )}
          {!isLoaded && (
            <Container className="d-flex justify-content-center mt-6">
              <Spinner
                animation="border"
                size="xl"
                screenReaderText={messages.usageLoadingMessage.defaultMessage}
              />
            </Container>
          )}
        </Container>
      </div>
    </>
  );
};

TaxonomyListHeaderButtons.propTypes = {
  canAddTaxonomy: PropTypes.bool.isRequired,
};

OrganizationFilterSelector.propTypes = {
  isOrganizationListLoaded: PropTypes.bool.isRequired,
  organizationListData: PropTypes.arrayOf(PropTypes.string),
  selectedOrgFilter: PropTypes.string.isRequired,
  setSelectedOrgFilter: PropTypes.func.isRequired,
};

OrganizationFilterSelector.defaultProps = {
  organizationListData: null,
};

TaxonomyListPage.propTypes = {};

export default TaxonomyListPage;
