'use strict';

/**
 * main-team service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-team.main-team');
