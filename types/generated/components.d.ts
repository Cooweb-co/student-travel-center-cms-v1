import type { Schema, Attribute } from '@strapi/strapi';

export interface ProgramActivityType extends Schema.Component {
  collectionName: 'components_program_activity_types';
  info: {
    displayName: 'Activity Type';
    description: 'Tipo de actividad dentro del programa';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    icon: Attribute.String;
  };
}

export interface ProgramAgencyHelp extends Schema.Component {
  collectionName: 'components_program_agency_helps';
  info: {
    displayName: 'C\u00F3mo ayuda la agencia';
    description: 'Servicios que ofrece la agencia al participante';
  };
  attributes: {
    consultoria: Attribute.Text;
    matricula: Attribute.Text;
    pago: Attribute.Text;
    asesoramiento_visa: Attribute.Text;
    alojamiento_salud_seguro_tiquetes: Attribute.Text;
    reunion_pre_embarque: Attribute.Text;
    bienvenida_destino: Attribute.Text;
    apoyo_destino: Attribute.Text;
    migracion_renovacion: Attribute.Text;
  };
}

export interface ProgramTestimonial extends Schema.Component {
  collectionName: 'components_program_testimonials';
  info: {
    displayName: 'Testimonial';
    description: 'Testimonio de participante del programa';
  };
  attributes: {
    quote: Attribute.Text & Attribute.Required;
    author: Attribute.String & Attribute.Required;
    location: Attribute.String & Attribute.Required;
    rating: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 5;
        },
        number
      >;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'program.activity-type': ProgramActivityType;
      'program.agency-help': ProgramAgencyHelp;
      'program.testimonial': ProgramTestimonial;
    }
  }
}
