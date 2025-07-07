import React from 'react';
import {
  injectIntl,
  intlShape,
} from '@edx/frontend-platform/i18n';
import { Layout } from '@openedx/paragon';

import messages from './messages';

const ExportFooter = ({ intl }) => (
  <footer className="mt-4 small">
    <Layout
      lg={[{ span: 5 }, { span: 2 }, { span: 5 }]}
      md={[{ span: 5 }, { span: 2 }, { span: 5 }]}
      sm={[{ span: 5 }, { span: 2 }, { span: 5 }]}
      xs={[{ span: 5 }, { span: 2 }, { span: 5 }]}
      xl={[{ span: 5 }, { span: 2 }, { span: 5 }]}
    >
      <Layout.Element>
        <h4>{messages.exportedDataTitle.defaultMessage}</h4>
        <ul className="export-footer-list">
          <li>{messages.exportedDataItem1.defaultMessage}</li>
          <li>{messages.exportedDataItem2.defaultMessage}</li>
          <li>{messages.exportedDataItem3.defaultMessage}</li>
          <li>{messages.exportedDataItem4.defaultMessage}</li>
          <li>{messages.exportedDataItem5.defaultMessage}</li>
          <li>{messages.exportedDataItem6.defaultMessage}</li>
          <li>{messages.exportedDataItem7.defaultMessage}</li>
        </ul>
      </Layout.Element>
      <Layout.Element />
      <Layout.Element>
        <h4>{messages.notExportedDataTitle.defaultMessage}</h4>
        <ul className="export-footer-list">
          <li>{messages.notExportedDataItem1.defaultMessage}</li>
          <li>{messages.notExportedDataItem2.defaultMessage}</li>
          <li>{messages.notExportedDataItem3.defaultMessage}</li>
          <li>{messages.notExportedDataItem4.defaultMessage}</li>
        </ul>
      </Layout.Element>
    </Layout>
  </footer>
);

ExportFooter.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(ExportFooter);
