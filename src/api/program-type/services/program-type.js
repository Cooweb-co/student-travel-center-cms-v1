'use strict';

/**
 * program-type service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::program-type.program-type', ({ strapi }) => ({
  // Método personalizado para obtener tipos activos
  async findActiveTypes() {
    const types = await strapi.entityService.findMany('api::program-type.program-type', {
      filters: { 
        active: true,
        publishedAt: { $notNull: true }
      },
      sort: { name: 'asc' }
    });

    return types;
  },

  // Método para crear tipos de programas por defecto
  async createDefaultTypes() {
    const defaultTypes = [
      { name: 'Work and Travel Camp USA', slug: 'work-and-travel-camp-usa', description: 'Programa de trabajo y viaje en campamentos de Estados Unidos' },
      { name: 'Work and Study', slug: 'work-and-study', description: 'Programa de trabajo y estudio' },
      { name: 'Study Abroad', slug: 'study-abroad', description: 'Programa de estudios en el extranjero' },
      { name: 'Volunteer', slug: 'volunteer', description: 'Programa de voluntariado' },
      { name: 'Internship', slug: 'internship', description: 'Programa de pasantías' },
      { name: 'Au Pair', slug: 'au-pair', description: 'Programa Au Pair' },
      { name: 'Internship USA', slug: 'internship-usa', description: 'Pasantías en Estados Unidos' },
      { name: 'Internship España', slug: 'internship-espana', description: 'Pasantías en España' },
      { name: 'Internship Qatar', slug: 'internship-qatar', description: 'Pasantías en Qatar' },
      { name: 'Internship Thailand', slug: 'internship-thailand', description: 'Pasantías en Tailandia' }
    ];

    const createdTypes = [];
    
    for (const typeData of defaultTypes) {
      const existingType = await strapi.entityService.findMany('api::program-type.program-type', {
        filters: { slug: typeData.slug }
      });

      if (existingType.length === 0) {
        const createdType = await strapi.entityService.create('api::program-type.program-type', {
          data: {
            ...typeData,
            publishedAt: new Date()
          }
        });
        createdTypes.push(createdType);
      }
    }

    return createdTypes;
  }
}));
