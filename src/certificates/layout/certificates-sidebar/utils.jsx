// eslint-disable-next-line import/prefer-default-export
export const getSidebarData = ({ messages, intl }) => [
  {
    title: messages.workingWithCertificatesTitle.defaultMessage,
    paragraphs: [
      messages.workingWithCertificatesFirstParagraph.defaultMessage,
      intl.formatMessage(
        messages.workingWithCertificatesSecondParagraph,
        { strongText: <strong>{messages.workingWithCertificatesSecondParagraph_strong.defaultMessage}</strong> },
      ),
      intl.formatMessage(
        messages.workingWithCertificatesThirdParagraph,
        { strongText: <strong>{messages.workingWithCertificatesThirdParagraph_strong.defaultMessage}</strong> },
      ),
    ],
  },
  {
    title: messages.issuingCertificatesTitle.defaultMessage,
    paragraphs: [
      intl.formatMessage(
        messages.issuingCertificatesFirstParagraph,
        { strongText: <strong>{messages.issuingCertificatesFirstParagraph_strong.defaultMessage}</strong> },
      ),
      intl.formatMessage(
        messages.issuingCertificatesSecondParagraph,
        { strongText: <strong>{messages.issuingCertificatesSecondParagraph_strong.defaultMessage}</strong> },
      ),
    ],
  },
];
