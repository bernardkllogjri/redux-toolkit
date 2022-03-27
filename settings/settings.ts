export const APP_VERSION = process.env.REACT_APP_VERSION
export const APP_VERSION_SUFFIX = process.env.REACT_APP_VERSION_SUFFIX
export const ACCOUNTSENGINE_URL = process.env.REACT_APP_ACCOUNTS_ENGINE_URL
export const COMPANIES_URL = process.env.REACT_APP_COMPANIES_URL
export const TAGS_URL = process.env.REACT_APP_TAGS_URL
export const CUSTOMER_FIELDS_URL = process.env.REACT_APP_CUSTOMER_FIELDS_URL
export const RESOURCES_URL = process.env.REACT_APP_RESOURCES_URL
export const SERVICES_URL = process.env.REACT_APP_SERVICES_URL
export const COURSES_URL = process.env.REACT_APP_COURSES_URL
export const CUSTOMERS_URL = process.env.REACT_APP_CUSTOMERS_URL
export const PRICINGENGINE_URL = process.env.REACT_APP_PRICING_ENGINE_URL
export const GDPR_DOWNLOAD_URL = process.env.REACT_APP_GDPR_DOWNLOAD_URL
export const PASSWORD_RESET_URL = process.env.REACT_APP_PASSWORD_RESET_URL
export const REGISTRATION_URL = process.env.REACT_APP_REGISTRATION_URL
export const CHARGEBEE_SITE = process.env.REACT_APP_CHARGEBEE_SITE
export const PROFILE_URL = process.env.REACT_APP_PROFILE_URL
export const BOOKING_URL = process.env.REACT_APP_BOOKING_URL
export const PRIVACY_URL = process.env.REACT_APP_PRIVACY_URL
export const TERMS_URL = process.env.REACT_APP_TERMS_URL
export const SERVICE_LEVEL_AGREEMENT = process.env.REACT_APP_SERVICE_LEVEL_AGREEMENT
export const WEBSITE_URL = process.env.REACT_APP_WEBSITE_URL
export const WIDGET_URL = process.env.REACT_APP_WIDGET_URL
export const PERMISSION_TYPES_URL = process.env.REACT_APP_PERMISSION_TYPES_URL
export const NOTIFICATIONS_URL = process.env.REACT_APP_PERMISSION_TYPES_URL
export const FILE_DOWNLOAD_URL = process.env.REACT_APP_FILE_DOWNLOAD_URL
export const WIDGET_ACCOUNT_ID = process.env.REACT_APP_WIDGET_ACCOUNT_ID
export const SERVER_URL = process.env.REACT_APP_SERVER_URL
export const DEV_API_URL = process.env.REACT_APP_DEV_API_URL
export const IS_DESKTOP_APP = process.env.REACT_APP_APPLICATION_TYPE === 'desktop'
export const IS_TABLET_APP = process.env.REACT_APP_APPLICATION_TYPE === 'tablet'
export const REMOTE_LOCALES_URL = process.env.REACT_APP_REMOTE_LOCALES_URL
export const INTERCOM_APP_ID = process.env.REACT_APP_INTERCOM_APP_ID
export const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY
export const FIREBASE_AUTH_DOMAIN = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
export const FIREBASE_DATABASE_URL = process.env.REACT_APP_FIREBASE_DATABASE_URL
export const FIREBASE_PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID
export const FIREBASE_STORAGE_BUCKET = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
export const FIREBASE_MESSAGING_SENDER_ID = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
export const FIREBASE_APP_ID = process.env.REACT_APP_FIREBASE_APP_ID
export const ACCOUNTING_EMAIL = process.env.REACT_APP_ACCOUNTING_EMAIL
export const ONLINE_PAYMENT_METHODS_STRIPE = {
  clientId: process.env.REACT_APP_ONLINE_PAYMENT_METHODS_STRIPE_CLIENT_ID,
  redirectUrl: process.env.REACT_APP_ONLINE_PAYMENT_METHODS_STRIPE_REDIRECT_URL
}
export const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
export const SENTRY_KEY = process.env.REACT_APP_SENTRY_KEY
export const SENTRY_PROJECT = process.env.REACT_APP_SENTRY_PROJECT
export const MAX_GDPR_YEARS = parseInt(process.env.REACT_APP_MAX_GDPR_YEARS) || 3
export const PHRASE_PROJECT_ID = process.env.REACT_APP_PHRASE_PROJECT_ID
export const PATH_TO_S3_LOCALE = process.env.REACT_APP_PATH_TO_S3_LOCALE
export const FILE_UPLOAD_URL = process.env.REACT_APP_FILE_UPLOAD_URL

export const DISCOUNT_VALIDATION_REGEX = /^[1-9][0-9]?$|^100$/
export const NAME_VALIDATION_REGEX = /^[a-zA-Z ]{2,30}$/
export const EMAIL_VALIDATION_REGEX = /^([\w.'+-]+)@([\w.-]+)((\.(\w){2,63})+)$/i
export const NUMBERS_VALIDATION_REGEX = /^\d+$/
export const FLOAT_VALIDATION_REGEX = /^\d+(\.\d+)?$/
export const PHONE_VALIDATION_REGEX = /^(((\+[1-9][0-9]*)|\([0-9]+\))[/\- ]?)?[0-9]+([- ]?[0-9]+)*$/
export const PRICE_VALIDATION_REGEX = /^(?!.*(,,|,\.|\.,|\.\.))[\d.,]+$/
export const EMOJIS_REGEX = '[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]'
export const SINGLE_URL_REGEX = /^http(s)?:\/\/.(www\.)?[-a-zA-Z0-9@:%._+~#//=]{2,256}\.[a-z]{2,}\b([-a-zA-Z0-9@:%_+~#?&//=]*)$/gi
export const URL_REGEX = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
export const HTTP_REGEX = /^https?:\/\//i
export const SLUG_REGEX = /^[a-zA-Z0-9-_]*$/gi

export const CHART_DEFAULTS = {
  width: 460,
  widthInner: 420,
  height: 180,
  strokeDasharry: '2 2',
  margin: {
    line: {
      top: 20,
      right: 10,
      left: -30,
      bottom: 0
    },
    pie: {
      top: 40,
      left: 60,
      right: 10,
      bottom: 0
    }
  },
  lineDote: {
    fill: '#cb3b43',
    stroke: 'none'
  },
  lineTooltipCursor: { stroke: '#cb3b43' },
  barTooltipCursor: { fill: '#c1c8cd' },
  weeklyVerticalPoints: [30, 90, 150, 210, 270, 330, 390, 450],
  weeklyVerticalPointsInner: [30, 84.25, 138.5, 193, 247, 301.5, 355.75, 410],
  monthlyVerticalPointsInner: [30, 61.75, 93.25, 125, 156.75, 188.5, 220, 251.75, 283.5, 314.75, 346.5, 378.25, 410]
}
export const PATH_TO_CIRCLE_FLAGS = 'circleFlags'
export const FIVE_MINUTES_INTERVAL_TIMES = [...Array(1441).keys()].filter(time => time % 5 === 0)
export const HOURS = [...Array(24).keys()]
export const DEFAULT_RESOURCES_PAGE_SIZE = 16
export const DEFAULT_BOOKING_BUTTON_POSITION = 'flexible'
export const DEFAULT_SUBJECT_HEXCOLOR = '#ebb65d'
export const DEFAULT_SERVICE_HEXCOLOR = '#385f87'
export const DEFAULT_COURSE_HEXCOLOR = '#b26492'
export const DEFAULT_TAG_HEXCOLOR = '#385f87'
export const AVAILABLE_SERVICE_HEXCOLORS = [
  '#82a774', '#b22e53', '#ebb65d',
  '#95c5a6', '#b26492', '#cc9e52',
  '#8ebec3', '#a476ca', '#e5774c',
  '#385f87', '#5d5a79', '#c46f4e',
  '#7684ca', '#8b8b8b', '#7b6161'
]
export const AVAILABLE_COURSE_HEXCOLORS = [
  '#82a774', '#b22e53', '#ebb65d',
  '#95c5a6', '#b26492', '#cc9e52',
  '#8ebec3', '#a476ca', '#e5774c',
  '#385f87', '#5d5a79', '#c46f4e',
  '#7684ca', '#8b8b8b', '#7b6161'
]

export const COLORS_CLASS_NAMES = {
  green: '#82A774',
  red: '#B22E53',
  breaks: '#EBB65D',
  'light-green': '#95C5A6',
  course: '#B26492',
  ocher: '#CC9E52',
  aqua: '#8EBEC3',
  violet: '#A476CA',
  orange: '#E5774C',
  purple: '#7684CA',
  dusk: '#5D5A79',
  grey: '#8B8B8B',
  brown: '#C46F4E',
  wood: '#7B6161',
  'light-blue': '#6882B0',
  default: '#385f87',
  white: '#FFFFFF'
}
export const DEFAULT_DATE_FORMAT = ''
export const AVAILABLE_TAGS_HEXCOLORS = {
  green: '#82A774',
  red: '#B22E53',
  breaks: '#EBB65D',
  'light-green': '#95C5A6',
  course: '#B26492',
  ocher: '#CC9E52',
  aqua: '#8EBEC3',
  violet: '#A476CA',
  orange: '#E5774C',
  purple: '#7684CA',
  dusk: '#5D5A79',
  grey: '#8B8B8B',
  brown: '#C46F4E',
  wood: '#7B6161',
  'light-blue': '#6882B0',
  default: '#385f87'
}

export const DEFAULT_LOCALE = 'en-gb'
export const DEFAULT_LOCALE_COUNTRY_CODE = 'GB'
export const SUPPORTED_LOCALES = [
  'bg-bg',
  'de-de', 'de-at', 'de-ch',
  'en-au', 'en-ca', 'en-gb', 'en-ie', 'en-in', 'en-mt', 'en-ph', 'en-sg', 'en-us',
  'et-ee',
  'fi-fi',
  'hu-hu',
  'ru-ru',
  'sv-se',
  'pl-pl',
  'es-es', 'es-mx', 'es-co', 'es-cl',
  'fr-be', 'fr-ca', 'fr-ch', 'fr-fr', 'fr-lu',
  'it-it',
  'nl-be', 'nl-nl',
  'cs-cz',
  'pt-pt',
  'ja-jp',
  'ko-kr'
]
export const AVAILABLE_LANGUAGES = [{
  name: 'Български',
  locale: 'bg-bg'
}, {
  name: 'Czech',
  locale: 'cs-cz'
}, {
  name: 'English (US)',
  locale: 'en-us'
}, {
  name: 'English (UK)',
  locale: 'en-gb'
}, {
  name: 'English (AU)',
  locale: 'en-au'
}, {
  name: 'Deutsch',
  locale: 'de-de'
}, {
  name: 'Español',
  locale: 'es-es'
}, {
  name: 'Français',
  locale: 'fr-fr'
}, {
  name: 'Nederlands',
  locale: 'nl-nl'
}, {
  name: 'Italiano',
  locale: 'it-it'
}, {
  name: 'Portuguese',
  locale: 'pt-pt'
}, {
  name: 'Swedish',
  locale: 'sv-se'
}, {
  name: '日本',
  locale: 'ja-jp'
}, {
  name: '한국인',
  locale: 'ko-kr'
}]
export const BOOKING_SETTINGS_DEFAULTS = {
  cancellationLeadTime: [1, 2, 4, 6, 12, 24, 48],
  bookingReminder: [1, 2, 4, 6, 12, 24, 48, 72],
  rescheduling: [2, 4, 6, 12, 24, 48],
  maximumLeadTimeDurationOptions: ['MONTHS', 'WEEKS'],
  minimumLeadTimeDurationOptions: ['HOURS', 'DAYS'],
  dateFormatPositionDefault: 'DD MM YYYY',
  dateFormatPositionOptions: [
    { value: 'YYYY MM DD', label: 'settings.section.dateFormat.dateFormatPosition.options.yearMonthDay' },
    { value: 'DD MM YYYY', label: 'settings.section.dateFormat.dateFormatPosition.options.dayMonthYear' },
    { value: 'MM DD YYYY', label: 'settings.section.dateFormat.dateFormatPosition.options.monthDayYear' }
  ],
  dateFormatYearDefault: 'YYYY',
  dateFormatYearOptions: [
    { value: 'YY', label: 'settings.section.dateFormat.dateFormatYear.options.twoDigits' },
    { value: 'YYYY', label: 'settings.section.dateFormat.dateFormatYear.options.fourDigits' }
  ],
  dateFormatMonthDefault: 'MM',
  dateFormatMonthOptions: [
    { value: 'M', label: 'settings.section.dateFormat.dateFormatMonth.options.oneDigit' },
    { value: 'MM', label: 'settings.section.dateFormat.dateFormatMonth.options.twoDigits' }
  ],
  dateFormatDayDefault: 'DD',
  dateFormatDayOptions: [
    { value: 'D', label: 'settings.section.dateFormat.dateFormatDay.options.oneDigit' },
    { value: 'DD', label: 'settings.section.dateFormat.dateFormatDay.options.twoDigits' },
    { value: 'ddd. DD', label: 'settings.section.dateFormat.dateFormatDay.options.threeLetters' },
    { value: 'dddd DD', label: 'settings.section.dateFormat.dateFormatDay.options.full' }
  ],
  dateFormatSeparatorDefault: '/',
  dateFormatSeparatorOptions: [
    { value: '/', label: 'settings.section.dateFormat.dateFormatSeparator.options.slash' },
    { value: '.', label: 'settings.section.dateFormat.dateFormatSeparator.options.dot' },
    { value: '-', label: 'settings.section.dateFormat.dateFormatSeparator.options.hyphen' },
    { value: ' ', label: 'settings.section.dateFormat.dateFormatSeparator.options.space' }
  ],
  timeFormatTypeDefault: '24',
  timeFormatTypeOptions: [
    { value: '12', label: 'settings.section.timeFormat.timeFormatType.options.twelve' },
    { value: '24', label: 'settings.section.timeFormat.timeFormatType.options.twentyFour' }
  ],
  timeFormatTwelveDefault: 'noSpacing',
  timeFormatTwelveOptions: [
    { value: 'dotWithSpacing', label: 'settings.section.timeFormat.timeFormatTwelve.options.dotWithSpacing' },
    { value: 'capital', label: 'settings.section.timeFormat.timeFormatTwelve.options.capital' },
    { value: 'withSpacing', label: 'settings.section.timeFormat.timeFormatTwelve.options.withSpacing' },
    { value: 'noSpacing', label: 'settings.section.timeFormat.timeFormatTwelve.options.noSpacing' }
  ],
  timeFormatTwentyFourDefault: ':',
  timeFormatTwentyFourOptions: [
    { value: '.', label: 'settings.section.timeFormat.timeFormatTwentyFour.options.dot' },
    { value: ':', label: 'settings.section.timeFormat.timeFormatTwentyFour.options.colon' }
  ]
}
export const SERVICE_DEFAULTS = {
  serviceReminder: [1, 2, 4, 6, 12, 24, 48, 72]
}
export const PLUGINS = {
  joomla: {
    downloadUrl: 'https://github.com/timify/joomla-plugin/archive/master.zip',
    documentationUrl: 'https://cdn.timify.com/download/en/TIMIFY-Joomla-Plugin.pdf'
  },
  wordpress: {
    downloadUrl: 'https://timify.github.io/wordpress-plugin/',
    documentationUrl: 'https://data.timify.com/download/timify-wordpress-plugin-%WORDPRESS_DOCUMENTATION_LANGUAGE%.pdf'
  },
  drupal: {
    downloadUrl: 'https://timify.github.io/drupal-plugin/',
    documentationUrl: 'https://cdn.timify.com/download/en/TIMIFY-Drupal8-Plugin.pdf'
  },
  // wix: {
  //   downloadUrl: 'https://',
  //   documentationUrl: 'https://'
  // },
  // weebly: {
  //   downloadUrl: 'https://',
  //   documentationUrl: 'https://'
  // },
  notListed: {
    url: 'https://timify.typeform.com/to/dSH7Fx'
  }
}
export const AVAILABLE_CALENDAR_VIEWS = ['daily', 'weekly', 'monthly', 'shiftplan', 'agenda']
export const DEFAULT_CALENDAR_VIEW = 'weekly'
export const CALENDAR_DIMENSIONS = {
  margin: 20,
  head: 30,
  weeklyHead: 88,
  dayHead: 48,
  shiftPlanHead: 48,
  footer: 10
}
export const DEFAULT_AVAILABLE_BOOKING_TIMES = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
export const BRANCHES = []
export const GDPR_DOWNLOAD_URLS = {
  DE: 'https://cdn.timify.com/legal/TerminApp-GmbH-AV-DE.pdf',
  EN: 'https://cdn.timify.com/legal/TerminApp-GmbH_AV-EN.pdf'
}
export const PLANS_WEIGHTS = {
  CLASSIC: 1,
  PREMIUM: 2,
  ENTERPRISE: 3
}
export const AVAILABLE_ICONS = [
  'user',
  'user-tie',
  'user-secret',
  'user-clock',
  'house-user',
  'user-md',
  'user-nurse',
  'user-headset',
  'user-hard-hat',
  'user-crown',
  'user-cowboy',
  'user-ninja',
  'user-astronaut',
  'user-alien',
  'user-robot'
]
export const FOOTFALL_COLORS = {
  GREEN: '#82a774',
  YELLOW: '#ebb65d',
  ORANGE: '#e5774c',
  RED: '#b22e53'
}
export const FOOTFALL_STATUS = {
  GREEN: 'settings.footfall.low',
  YELLOW: 'settings.footfall.belowAverage',
  ORANGE: 'settings.footfall.aboveAverage',
  RED: 'settings.footfall.high'
}
export const FOOTFALLS_ORDER = [
  'weekdays.su.long',
  'weekdays.mo.long',
  'weekdays.tu.long',
  'weekdays.we.long',
  'weekdays.th.long',
  'weekdays.fr.long',
  'weekdays.sa.long'
]
export const SESSION_LENGTH_DEFAULT = {
  value: '4',
  mode: 'DAYS'
}
export const MAX_LEAD_TIME_MAXIMUMS = {
  MONTHS: 12,
  WEEKS: 52
}
export const MIN_LEAD_TIME_MAXIMUMS = {
  DAYS: 60,
  HOURS: 1440
}
export const UPLOAD_FILE_FORMATS = [
  { value: 'JPG', label: '.jpg', hideInWidget: false },
  { value: 'JPEG', label: '.jpeg', hideInWidget: false },
  { value: 'PNG', label: '.png', hideInWidget: false },
  { value: 'GIF', label: '.gif', hideInWidget: false },
  { value: 'PDF', label: '.pdf', hideInWidget: false },
  { value: 'HEIC', label: '.heic', hideInWidget: false },
  { value: 'HEIF', label: '.heif', hideInWidget: false },
  { value: 'XLSX', label: '.xlsx', hideInWidget: true },
  { value: 'DOCX', label: '.docx', hideInWidget: true },
  { value: 'PPTX', label: '.pptx', hideInWidget: true }
]
export const UPLOAD_FILES_LIMIT = 25
export const UPLOAD_FILE_SIZE_LIMIT = '15MB'

export const CANCELATION_LEAD_TIME_MAXIMUMS = {
  DAYS: 2,
  HOURS: 48
}

export const DEFAULT_LOCALES_BY_LANG = {
  cs: 'cs-cz',
  de: 'de-de',
  en: 'en-gb',
  es: 'es-es',
  fr: 'fr-fr',
  it: 'it-it',
  nl: 'nl-nl',
  pt: 'pt-pt',
  sv: 'sv-se',
  bg: 'bg-bg'
}

export const DEFAULT_AVAILABILITY_MIN = '09:00'

export const DEFAULT_AVAILABILITY_MAX = '17:00'

export const AGENDA_RANGE_LIMIT_DAYS = 6 * 31
export const PASSWORD_MAX_LENGTH = 40
export const PASSWORD_MIN_LENGTH = 8
