import { DivisionSchemes } from '../../../data/constants';

export const generatePiazzaApiResponse = (piiSharingAllowed = false) => ({
  context_key: 'course-v1:edX+DemoX+Demo_Course',
  enabled: true,
  provider_type: 'piazza',
  lti_configuration: {
    lti_1p1_client_key: 'client_key_123',
    lti_1p1_client_secret: 'client_secret_123',
    lti_1p1_launch_url: 'https://localhost/example',
    pii_sharing_allowed: piiSharingAllowed,
    pii_share_email: false,
    pii_share_username: false,
    version: 'lti_1p1',
  },
  plugin_configuration: {},
});

export const generateProvidersApiResponse = (piazzaAdminOnlyConfig = false, activeProvider = 'piazza') => ({
  active: activeProvider,
  features: [
    { id: 'discussion-page', feature_support_type: 'basic' },
    { id: 'embedded-course-sections', feature_support_type: 'full' },
    { id: 'wcag-2.1', feature_support_type: 'partial' },
    { id: 'basic-configuration', feature_support_type: 'common' },
  ],
  available: {
    legacy: {
      features: [
        'discussion-page',
        'embedded-course-sections',
        'wcag-2.1',
      ],
      external_links: {
        learn_more: '',
        configuration: '',
        general: '',
        accessibility: '',
        contact_email: '',
      },
      messages: [],
      has_full_support: true,
      admin_only_config: false,
    },
    openedx: {
      features: [
        'basic-configuration',
        'discussion-page',
        'embedded-course-sections',
        'wcag-2.1',
      ],
      external_links: {
        learn_more: '',
        configuration: '',
        general: '',
        accessibility: '',
        contact_email: '',
      },
      messages: [],
      has_full_support: true,
      admin_only_config: false,
    },
    piazza: {
      features: [
        // We give piazza all features just so we can test our "full support" text.
        'discussion-page',
        'embedded-course-sections',
        'wcag-2.1',
        'basic-configuration',
      ],
      external_links: {
        learn_more: '',
        configuration: '',
        general: '',
        accessibility: '',
        contact_email: '',
      },
      messages: [],
      has_full_support: false,
      admin_only_config: piazzaAdminOnlyConfig,
    },
    discourse: {
      features: [
        'discussion-page',
        'embedded-course-sections',
        'wcag-2.1',
        'lti',
      ],
      external_links: {
        learn_more: '',
        configuration: '',
        general: '',
        accessibility: '',
        contact_email: '',
      },
      messages: [],
      has_full_support: false,
      admin_only_config: false,
    },
  },
});

export const generateLegacyApiResponse = () => ({
  context_key: 'course-v1:edX+DemoX+Demo_Course',
  enabled: true,
  posting_restrictions: 'scheduled',
  provider_type: 'legacy',
  lti_configuration: {},
  plugin_configuration: {
    allow_anonymous: false,
    allow_anonymous_to_peers: false,
    reported_content_email_notifications: false,
    always_divide_inline_discussions: false,
    available_division_schemes: ['enrollment_track'],
    discussion_topics: {
      Edx: { id: '13f106c6-6735-4e84-b097-0456cff55960' },
      General: { id: 'course' },
    },
    divided_course_wide_discussions: [],
    division_scheme: DivisionSchemes.COHORT,
    // Note, this gets stringified when normalized into the app, but the API returns it as an
    // actual array.  Argh.
    discussion_blackouts: [],
  },
  providers: {
    active: 'legacy',
    available: {
      legacy: {
        features: [
          'discussion-page',
          'embedded-course-sections',
          'wcag-2.1',
        ],
        external_links: {
          learn_more: '',
          configuration: '',
          general: '',
          accessibility: '',
          contact_email: '',
        },
        messages: [],
        has_full_support: true,
      },
      piazza: {
        features: [
          // We give piazza all features just so we can test our "full support" text.
          'discussion-page',
          'embedded-course-sections',
          'wcag-2.1',
          'basic-configuration',
        ],
        external_links: {
          learn_more: '',
          configuration: '',
          general: '',
          accessibility: '',
          contact_email: '',
        },
        messages: [],
        has_full_support: false,
      },
    },
  },
});
export const legacyApiResponse = generateLegacyApiResponse();

export const emptyAppApiResponse = {
  context_key: '',
  enabled: null,
  provider_type: '',
  features: [],
  lti_configuration: {},
  plugin_configuration: {},
  providers: {
    active: 'legacy',
    available: {
    },
  },
};

export const piazzaApiResponse = generatePiazzaApiResponse();

export const courseDetailResponse = {
  blocks_url: 'http://localhost:18000/api/courses/v2/blocks/?course_id=course-v1%3AedX%2BDemoX%2BDemo_Course',
  course_id: 'course-v1:edX+DemoX+Demo_Course',
  effort: null,
  end: null,
  enrollment_end: null,
  enrollment_start: null,
  hidden: false,
  id: 'course-v1:edX+DemoX+Demo_Course',
  invitation_only: false,
  media: {
    banner_image: {
      uri: '/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg',
      uri_absolute: 'http://localhost:18000/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg',
    },
    course_image: {
      uri: '/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg',
    },
    course_video: {
      uri: null,
    },
    image: {
      large: 'http://localhost:18000/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg',
      raw: 'http://localhost:18000/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg',
      small: 'http://localhost:18000/asset-v1:edX+DemoX+Demo_Course+type@asset+block@images_course_image.jpg',
    },
  },
  mobile_available: false,
  name: 'Demonstration Course',
  number: 'DemoX',
  org: 'edX',
  overview: '',
  pacing: 'instructor',
  short_description: null,
  start: '2013-02-05T05:00:00Z',
  start_display: 'Feb. 5, 2013',
  start_type: 'timestamp',
};
