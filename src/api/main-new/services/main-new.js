'use strict';

/**
 * main-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-new.main-new');
