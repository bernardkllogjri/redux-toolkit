const menu = [{
  id: 'company',
  translationKey: 'global.account',
  icon: 'briefcase',
  iconType: 'solid',
  routes: ['company', 'companyEdit'],
  to: '/account',
  submenu: [
    {
      id: 'companyDetails',
      translationKey: 'global.details',
      routes: ['company', 'companyEdit'],
      to: '/account'
    }, {
      id: 'billing',
      translationKey: 'global.billing',
      routes: ['billing', 'billingAdd', 'billingEdit', 'paymentMethods', 'paymentMethodsPreview', 'paymentMethodsAdd', 'paymentMethodsEdit'],
      to: '/account/billing'
    },
    {
      id: 'invoices',
      translationKey: 'global.invoices',
      routes: ['invoices'],
      to: '/account/invoices',
      hideWhenOffline: true
    }
  ]
}, {
  id: 'statistics',
  translationKey: 'global.statistics',
  routes: ['statistics'],
  to: '/statistics',
  icon: 'chart-bar',
  iconType: 'solid',
  hideWhenOffline: true
}, {
  id: 'notifications',
  translationKey: 'global.notifications',
  routes: ['notifications', 'activityLog'],
  to: '/notifications/activity',
  icon: 'bell',
  iconType: 'solid',
  notifications: 0,
  hideWhenOffline: true,
  submenu: [{
    id: 'notificationsActivityLog',
    translationKey: 'global.activityLog',
    routes: ['activityLog'],
    to: '/notifications/activity'
  }, {
    id: 'notificationsEmailDeliveryStatus',
    translationKey: 'global.emailDeliveryStatus',
    routes: ['emailDeliveryStatus'],
    to: '/notifications/email-delivery-status'
  }, {
    id: 'notificationsProductNews',
    translationKey: 'global.productNews',
    routes: ['productNews'],
    to: '/notifications/product-news'
  }]
}, {
  id: 'customers',
  translationKey: 'global.customers',
  to: '/customers',
  icon: 'user',
  iconType: 'solid',
  routes: ['customers', 'customerPreview', 'customersEdit', 'customersAdd'],
  hideWhenOffline: true,
  submenu: [{
    id: 'customersList',
    translationKey: 'global.customerList',
    routes: ['customers', 'customerPreview', 'customersEdit', 'customersAdd'],
    to: '/customers'
  }, {
    id: 'customersCustomerFields',
    translationKey: 'global.customerFields',
    routes: [
      'customerFieldsCategoryAdd',
      'customerFieldsCategoryEdit',
      'customerFieldsCategoriesPreview',
      'customerFields',
      'customerFieldsPreview',
      'customerFieldsEdit',
      'customerFieldsAdd',
      'customerFieldsReorder'
    ],
    to: '/customers/customer-fields'
  }, {
    id: 'customersTags',
    translationKey: 'global.customerTags',
    routes: ['tags', 'tagPreview', 'tagAdd', 'tagEdit', 'tagsReorder'],
    to: '/customers/tags'
  }]
}, {
  id: 'management',
  translationKey: 'global.management',
  to: '/management',
  icon: 'toolbox',
  iconType: 'solid',
  submenu: [{
    id: 'managementResources',
    translationKey: 'global.resources',
    routes: ['management', 'resources', 'resourcePreview', 'resourceAdd', 'resourceEdit', 'resourceCategoryAdd', 'resourceCategoryEdit'],
    to: '/management/resources'
  }, {
    id: 'managementPermissionTypes',
    translationKey: 'global.permissionTypes',
    routes: ['management', 'permissionTypes', 'permissionTypePreview', 'permissionTypeEdit', 'permissionTypeAdd'],
    to: '/management/permission-types'
  }, {
    id: 'managementServices',
    translationKey: 'global.services',
    routes: ['management', 'services', 'servicePreview', 'serviceAdd', 'serviceCombinationAdd', 'serviceEdit', 'serviceCombinationEdit', 'serviceCategoryAdd', 'serviceCategoryEdit', 'servicesReorder'],
    to: '/management/services'
  }, {
    id: 'managementCourses',
    translationKey: 'global.groups',
    routes: ['management', 'courses', 'coursePreview', 'courseAdd', 'courseEdit', 'courseCategoryAdd', 'courseCategoryEdit', 'coursesReorder'],
    to: '/management/courses'
  }]
}, {
  id: 'settings',
  translationKey: 'global.settings',
  to: '/settings/bookings',
  icon: 'cogs',
  iconType: 'solid',
  routes: ['settingsBookingSetup', 'settingsBookingSetupEdit'],
  submenu: [{
    id: 'settingsBooking',
    translationKey: 'global.booking',
    routes: ['settingsBookingSetup', 'settingsBookingSetupEdit'],
    to: '/settings/bookings'
  }, {
    id: 'settingsNotifications',
    translationKey: 'navigation.settings.emails',
    routes: ['settingsNotifications', 'settingsNotificationsEdit'],
    to: '/settings/notifications'
  }, {
    id: 'settingsCustomers',
    translationKey: 'global.customers',
    routes: ['settingsCustomers', 'settingsCustomersEdit'],
    to: '/settings/customers'
  }, {
    id: 'settingsSecurity',
    translationKey: 'global.security',
    routes: ['settingsSecurity', 'settingsSecurityEdit'],
    to: '/settings/security'
  }, {
    id: 'settingsOnlinePaymentMethods',
    translationKey: 'global.onlinePayment',
    routes: ['onlinePaymentMethods', 'onlinePaymentMethodsStripeCallback'],
    to: '/settings/online-payment-methods'
  }]
}, {
  id: 'offers',
  translationKey: 'global.offers',
  routes: ['offers', 'offerPreview', 'offerAdd', 'offerEdit'],
  icon: 'bullhorn',
  iconType: 'solid',
  to: '/offers',
  hideWhenOffline: true
}, {
  id: 'integration',
  translationKey: 'global.integration',
  to: '/integration/booking-link',
  icon: 'puzzle-piece',
  iconType: 'solid',
  submenu: [{
    id: 'integrationBookingLink',
    translationKey: 'onlineBooking.list.heading',
    routes: ['bookingLink'],
    to: '/integration/booking-link'
  }, {
    id: 'integrationProfile',
    translationKey: 'global.profile',
    routes: ['bookingProfile', 'bookingProfileEdit'],
    to: '/integration/profile'
  }, {
    id: 'integrationWidget',
    translationKey: 'global.widget',
    routes: ['widget'],
    to: '/integration/widget',
    hideWhenOffline: true
  }]
}, {
  id: 'apps',
  translationKey: 'global.apps',
  routes: ['apps', 'appsPreview'],
  icon: 'th',
  iconType: 'solid',
  to: '/apps',
  hideWhenOffline: true
}, {
  id: 'testFireBase',
  // translationKey: 'navigation.callCentre',
  label: 'Test Firebase',
  routes: [],
  icon: 'phone-square',
  iconType: 'solid',
  to: '/test-firebase'
}]

export default menu
