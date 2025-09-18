'use strict';

/**
 * Bootstrap function to initialize default data
 */

module.exports = async ({ strapi }) => {
  try {
    // Crear tipos de programas por defecto
    const programTypeService = strapi.service('api::program-type.program-type');
    await programTypeService.createDefaultTypes();
    
    console.log('✅ Tipos de programas inicializados correctamente');
  } catch (error) {
    console.error('❌ Error al inicializar tipos de programas:', error);
  }
};
