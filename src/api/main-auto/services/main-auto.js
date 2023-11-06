'use strict';

/**
 * main-auto service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-auto.main-auto');
