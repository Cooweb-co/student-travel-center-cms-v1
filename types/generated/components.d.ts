import type { Schema, Attribute } from '@strapi/strapi';

export interface BenefitsLugaresIconicosItem extends Schema.Component {
  collectionName: 'components_benefits_lugares_iconicos_items';
  info: {
    displayName: 'Lugar Ic\u00F3nico Item';
    description: 'Elemento individual de lugar ic\u00F3nico para beneficios';
  };
  attributes: {
    nombre: Attribute.String & Attribute.Required;
    descripcion: Attribute.Text & Attribute.Required;
  };
}

export interface BenefitsLugaresIconicos extends Schema.Component {
  collectionName: 'components_benefits_lugares_iconicos';
  info: {
    displayName: 'Lugares Ic\u00F3nicos';
    description: 'Lugar ic\u00F3nico destacado';
  };
  attributes: {
    item: Attribute.Component<'benefits.lugares-iconicos-item', true>;
  };
}

export interface BenefitsPais extends Schema.Component {
  collectionName: 'components_benefits_paises';
  info: {
    displayName: 'Pa\u00EDs';
    description: 'Elemento de pa\u00EDs para beneficios del programa';
  };
  attributes: {
    item: Attribute.Component<'benefits.program-item', true>;
  };
}

export interface BenefitsProgramItem extends Schema.Component {
  collectionName: 'components_benefits_program_items';
  info: {
    displayName: 'Program Item';
    description: 'Elemento individual para el apartado de programa';
  };
  attributes: {
    item: Attribute.Text & Attribute.Required;
  };
}

export interface BenefitsProgram extends Schema.Component {
  collectionName: 'components_benefits_programs';
  info: {
    displayName: 'Program';
    description: 'Elemento de beneficio del programa';
  };
  attributes: {
    item: Attribute.Component<'benefits.program-item', true>;
  };
}

export interface BenefitsRazonesExperienciaItem extends Schema.Component {
  collectionName: 'components_benefits_razones_experiencia_items';
  info: {
    displayName: 'Raz\u00F3n Experiencia Item';
    description: 'Elemento individual de raz\u00F3n de experiencia';
  };
  attributes: {
    titulo: Attribute.String & Attribute.Required;
    icono: Attribute.String;
    descripcion: Attribute.Text;
  };
}

export interface BenefitsRazonesExperiencia extends Schema.Component {
  collectionName: 'components_benefits_razones_experiencia';
  info: {
    displayName: 'Razones Experiencia';
    description: 'Raz\u00F3n para elegir la experiencia';
  };
  attributes: {
    item: Attribute.Component<'benefits.razones-experiencia-item', true>;
  };
}

export interface BlogTagsTag extends Schema.Component {
  collectionName: 'components_blog_tags_tags';
  info: {
    displayName: 'Tag';
    description: 'Etiqueta de blog';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

export interface CasosExitoCasosExito extends Schema.Component {
  collectionName: 'components_casos_exito';
  info: {
    displayName: 'Casos de \u00C9xito';
    description: 'Success stories component with testimonials';
  };
  attributes: {
    nombre: Attribute.String & Attribute.Required;
    estrellas: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 5;
        },
        number
      >;
    testimonio: Attribute.Text & Attribute.Required;
    carrera: Attribute.String & Attribute.Required;
    destino: Attribute.String & Attribute.Required;
  };
}

export interface ComoAyudaAgenciaComoAyudaAgencia extends Schema.Component {
  collectionName: 'components_como_ayuda_agencia';
  info: {
    displayName: 'Como Ayuda Agencia';
    description: 'How the agency helps component with service descriptions';
  };
  attributes: {
    pago: Attribute.Text;
    matricula: Attribute.Text;
    consultoria: Attribute.Text;
    apoyo_destino: Attribute.Text;
    asesoramiento_visa: Attribute.Text;
    bienvenida_destino: Attribute.Text;
    migracion_renovacion: Attribute.Text;
    reunion_pre_embarque: Attribute.Text;
    alojamiento_salud_seguro_tiquetes: Attribute.Text;
  };
}

export interface DestinationStatisticsStatistic extends Schema.Component {
  collectionName: 'components_destination_statistics_statistic';
  info: {
    displayName: 'Statistic';
    description: 'Dato puntual para la secci\u00F3n de estad\u00EDsticas del destino';
  };
  attributes: {
    label: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    value: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface DurationDuration extends Schema.Component {
  collectionName: 'components_durations';
  info: {
    displayName: 'Duration';
    description: 'Duration component with min, max values and unit';
  };
  attributes: {
    min: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    max: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    unit: Attribute.Enumeration<['weeks', 'months', 'years']> &
      Attribute.Required &
      Attribute.DefaultTo<'weeks'>;
  };
}

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faqs';
  info: {
    displayName: 'FAQ';
    description: 'Frequently Asked Questions component';
  };
  attributes: {
    pregunta: Attribute.String & Attribute.Required;
    respuesta: Attribute.Text & Attribute.Required;
  };
}

export interface OportunidadesLaboralesOportunidadesLaborales
  extends Schema.Component {
  collectionName: 'components_oportunidades_laborales';
  info: {
    displayName: 'Oportunidades Laborales';
    description: 'Job opportunities component with employment details';
  };
  attributes: {
    descripcion: Attribute.Text & Attribute.Required;
    sectores_empleo: Attribute.JSON;
    nivel_ingles: Attribute.String;
    tiempo_empleo: Attribute.String;
    salario_promedio: Attribute.JSON;
    restricciones: Attribute.Text;
  };
}

export interface OverviewFeature extends Schema.Component {
  collectionName: 'components_overview_feature';
  info: {
    displayName: 'Overview Feature';
    description: 'Elemento individual para destacar una caracter\u00EDstica del destino';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface OverviewHighlight extends Schema.Component {
  collectionName: 'components_overview_highlight';
  info: {
    displayName: 'Overview Highlight';
    description: 'Elemento destacado con icono para resaltar puntos clave del destino';
  };
  attributes: {
    icon: Attribute.Enumeration<
      [
        'Star',
        'GraduationCap',
        'Globe2',
        'Calendar',
        'TrendingUp',
        'Utensils',
        'Palm',
        'Building',
        'Network',
        'Crown',
        'Briefcase',
        'Users',
        'Heart',
        'MapPin',
        'Landmark',
        'Plane',
        '\uD83C\uDF93',
        '\uD83D\uDCDD',
        '\uD83D\uDCB6',
        '\uD83D\uDCBC'
      ]
    > &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface OverviewOverview extends Schema.Component {
  collectionName: 'components_overview_overviews';
  info: {
    displayName: 'Overview';
    description: 'Resumen estructurado del destino con secciones de caracter\u00EDsticas y puntos destacados';
  };
  attributes: {
    features: Attribute.Component<'overview.feature', true>;
    highlights: Attribute.Component<'overview.highlight', true>;
  };
}

export interface ProgramBeneficiosProgramBeneficios extends Schema.Component {
  collectionName: 'components_program_beneficios';
  info: {
    displayName: 'Program Beneficios';
    description: 'Program benefits component with multiple categories';
  };
  attributes: {
    programa: Attribute.JSON;
    pais: Attribute.JSON;
    razones_experiencia: Attribute.JSON;
    lugares_iconicos: Attribute.JSON;
  };
}

export interface ProgramCarreraAfinProgramCarreraAfin extends Schema.Component {
  collectionName: 'components_program_carreras_afines';
  info: {
    displayName: 'Program Carrera Af\u00EDn';
    description: 'Elemento de carrera af\u00EDn del programa';
  };
  attributes: {
    item: Attribute.Text & Attribute.Required;
  };
}

export interface ProgramFeaturesFeature extends Schema.Component {
  collectionName: 'components_program_features';
  info: {
    displayName: 'Program Feature';
    description: 'Elemento para destacar una caracter\u00EDstica del programa';
  };
  attributes: {
    feature: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

export interface ProgramNoincluyeProgramNoincluye extends Schema.Component {
  collectionName: 'components_program_noincluye';
  info: {
    displayName: 'Program No Incluye';
    description: 'Elemento de cosas no incluidas en el programa';
  };
  attributes: {
    item: Attribute.Text & Attribute.Required;
  };
}

export interface ProgramPlanificacionProgramPlanificacion
  extends Schema.Component {
  collectionName: 'components_program_planificacion';
  info: {
    displayName: 'Program Planificacion';
    description: 'Program planning component';
  };
  attributes: {
    duracion_programa: Attribute.String;
  };
}

export interface ProgramRequirementsProgramRequirements
  extends Schema.Component {
  collectionName: 'components_program_requirements';
  info: {
    displayName: 'Program Requirements';
    description: 'Requirements component for programs';
  };
  attributes: {
    generales: Attribute.Component<
      'program-requirements.requirement-item',
      true
    >;
    age: Attribute.Component<'program-requirements.requirement-item', true>;
    language: Attribute.Component<
      'program-requirements.requirement-item',
      true
    >;
    documents: Attribute.Component<
      'program-requirements.requirement-item',
      true
    >;
    personal: Attribute.Component<
      'program-requirements.requirement-item',
      true
    >;
    academic: Attribute.Component<
      'program-requirements.requirement-item',
      true
    >;
    estudios_6_meses_o_menos: Attribute.Component<
      'program-requirements.requirement-item',
      true
    >;
    estudios_mas_de_6_meses: Attribute.Component<
      'program-requirements.requirement-item',
      true
    >;
  };
}

export interface ProgramRequirementsRequirementItem extends Schema.Component {
  collectionName: 'components_program_requirement_items';
  info: {
    displayName: 'Requirement Item';
    description: 'Elemento individual de requisito de programa';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
  };
}

export interface ProgramVacanteProgramVacante extends Schema.Component {
  collectionName: 'components_program_vacantes';
  info: {
    displayName: 'Program Vacante Disponible';
    description: 'Elemento de vacante disponible del programa';
  };
  attributes: {
    item: Attribute.Text & Attribute.Required;
  };
}

export interface ProgramVisaProgramVisa extends Schema.Component {
  collectionName: 'components_program_visa';
  info: {
    displayName: 'Program Visa';
    description: 'Program visa information component';
  };
  attributes: {
    tipos_visa: Attribute.JSON;
    diferencias_visas: Attribute.Text;
    proceso_visado: Attribute.JSON;
  };
}

export interface RequirementGroupRequirementGroup extends Schema.Component {
  collectionName: 'components_requirement_group_requirement_groups';
  info: {
    displayName: 'Requirement Group';
    description: 'Componente temporal para migrar requisitos antiguos';
  };
  attributes: {
    title: Attribute.String;
    items: Attribute.Text;
  };
}

export interface RequirementRequirement extends Schema.Component {
  collectionName: 'components_requirements';
  info: {
    displayName: 'Requirement';
    description: 'Program requirement component';
  };
  attributes: {
    requirement: Attribute.String & Attribute.Required;
  };
}

export interface RequirementsAcademic extends Schema.Component {
  collectionName: 'components_requirements_academic';
  info: {
    displayName: 'Requirements Academic';
    description: 'Requisitos acad\u00E9micos del programa';
  };
  attributes: {
    items: Attribute.Component<'program-requirements.requirement-item', true>;
  };
}

export interface RequirementsAge extends Schema.Component {
  collectionName: 'components_requirements_age';
  info: {
    displayName: 'Requirements Age';
    description: 'Requisitos de edad del programa';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
  };
}

export interface RequirementsDocuments extends Schema.Component {
  collectionName: 'components_requirements_documents';
  info: {
    displayName: 'Requirements Documents';
    description: 'Requisitos de documentos del programa';
  };
  attributes: {
    items: Attribute.Component<'program-requirements.requirement-item', true>;
  };
}

export interface RequirementsEstudios6MesesOMenos extends Schema.Component {
  collectionName: 'components_requirements_estudios_6_meses_o_menos';
  info: {
    displayName: 'Requirements Estudios 6 meses o menos';
    description: 'Requisitos para estudios de 6 meses o menos';
  };
  attributes: {
    items: Attribute.Component<'program-requirements.requirement-item', true>;
  };
}

export interface RequirementsEstudiosMasDe6Meses extends Schema.Component {
  collectionName: 'components_requirements_estudios_mas_de_6_meses';
  info: {
    displayName: 'Requirements Estudios m\u00E1s de 6 meses';
    description: 'Requisitos para estudios de m\u00E1s de 6 meses';
  };
  attributes: {
    items: Attribute.Component<'program-requirements.requirement-item', true>;
  };
}

export interface RequirementsGenerales extends Schema.Component {
  collectionName: 'components_requirements_generales';
  info: {
    displayName: 'Requirements Generales';
    description: 'Requisitos generales del programa';
  };
  attributes: {
    items: Attribute.Component<'program-requirements.requirement-item', true>;
  };
}

export interface RequirementsLanguage extends Schema.Component {
  collectionName: 'components_requirements_language';
  info: {
    displayName: 'Requirements Language';
    description: 'Requisitos de idioma del programa';
  };
  attributes: {
    items: Attribute.Component<'program-requirements.requirement-item', true>;
  };
}

export interface RequirementsPersonal extends Schema.Component {
  collectionName: 'components_requirements_personal';
  info: {
    displayName: 'Requirements Personal';
    description: 'Requisitos personales del programa';
  };
  attributes: {
    items: Attribute.Component<'program-requirements.requirement-item', true>;
  };
}

export interface SharedAuthor extends Schema.Component {
  collectionName: 'shared_authors';
  info: {
    displayName: 'Author';
    description: 'Informaci\u00F3n del autor de una publicaci\u00F3n';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    avatar: Attribute.Media & Attribute.Required;
    role: Attribute.String;
    bio: Attribute.Text;
  };
}

export interface SimpleRequirementsSimpleRequirements extends Schema.Component {
  collectionName: 'components_simple_requirements';
  info: {
    displayName: 'Simple Requirements';
    description: 'Simple requirements component with icon and title';
  };
  attributes: {
    icon: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface TestimonialsTestimonials extends Schema.Component {
  collectionName: 'components_testimonials';
  info: {
    displayName: 'Testimonials';
    description: 'Testimonials component with quote, author, location, rating, and image';
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
    image: Attribute.Media & Attribute.Required;
  };
}

export interface TiposActividadesTiposActividades extends Schema.Component {
  collectionName: 'components_tipos_actividades';
  info: {
    displayName: 'Tipos de Actividades';
    description: 'Activity types component with name, image, and description';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface TiposProgramasEducacionSuperiorItem extends Schema.Component {
  collectionName: 'components_tipos_programas_educacion_superior_items';
  info: {
    displayName: '\u00C1rea de Educaci\u00F3n Superior';
    description: '\u00C1rea o campo de estudio para educaci\u00F3n superior';
  };
  attributes: {
    nombre: Attribute.String & Attribute.Required;
  };
}

export interface TiposProgramasIdioma extends Schema.Component {
  collectionName: 'components_tipos_programas_idiomas';
  info: {
    displayName: 'Idioma de Programa';
    description: 'Idioma y pa\u00EDses donde se ofrece';
  };
  attributes: {
    nombre: Attribute.String & Attribute.Required;
    paises: Attribute.Component<'tipos-programas.pais', true>;
  };
}

export interface TiposProgramasPais extends Schema.Component {
  collectionName: 'components_tipos_programas_paises';
  info: {
    displayName: 'Pa\u00EDs de Idioma';
    description: 'Pa\u00EDs donde se ofrece el idioma del programa';
  };
  attributes: {
    nombre: Attribute.String & Attribute.Required;
  };
}

export interface TiposProgramasTiposProgramas extends Schema.Component {
  collectionName: 'components_tipos_programas';
  info: {
    displayName: 'Tipos de Programas';
    description: 'Program types component with languages, education fields, and duration';
  };
  attributes: {
    idiomas: Attribute.Component<'tipos-programas.idioma', true>;
    educacion_superior: Attribute.Component<
      'tipos-programas.educacion-superior-item',
      true
    >;
    duracion: Attribute.Text;
  };
}

export interface TravelTipsTip extends Schema.Component {
  collectionName: 'components_travel_tips_tips';
  info: {
    displayName: 'Travel Tip';
    description: 'Consejo de viaje con t\u00EDtulo y detalle';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 150;
      }>;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface WhyProgramWhyProgram extends Schema.Component {
  collectionName: 'components_why_program';
  info: {
    displayName: 'Why Program';
    description: 'Component for program benefits and features';
  };
  attributes: {
    icon: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface WhyStcWhyStc extends Schema.Component {
  collectionName: 'components_why_stc';
  info: {
    displayName: 'Why STC';
    description: 'Why choose Student Travel Center component';
  };
  attributes: {
    icon: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'benefits.lugares-iconicos-item': BenefitsLugaresIconicosItem;
      'benefits.lugares-iconicos': BenefitsLugaresIconicos;
      'benefits.pais': BenefitsPais;
      'benefits.program-item': BenefitsProgramItem;
      'benefits.program': BenefitsProgram;
      'benefits.razones-experiencia-item': BenefitsRazonesExperienciaItem;
      'benefits.razones-experiencia': BenefitsRazonesExperiencia;
      'blog-tags.tag': BlogTagsTag;
      'casos-exito.casos-exito': CasosExitoCasosExito;
      'como-ayuda-agencia.como-ayuda-agencia': ComoAyudaAgenciaComoAyudaAgencia;
      'destination-statistics.statistic': DestinationStatisticsStatistic;
      'duration.duration': DurationDuration;
      'faq.faq': FaqFaq;
      'oportunidades-laborales.oportunidades-laborales': OportunidadesLaboralesOportunidadesLaborales;
      'overview.feature': OverviewFeature;
      'overview.highlight': OverviewHighlight;
      'overview.overview': OverviewOverview;
      'program-beneficios.program-beneficios': ProgramBeneficiosProgramBeneficios;
      'program-carrera-afin.program-carrera-afin': ProgramCarreraAfinProgramCarreraAfin;
      'program-features.feature': ProgramFeaturesFeature;
      'program-noincluye.program-noincluye': ProgramNoincluyeProgramNoincluye;
      'program-planificacion.program-planificacion': ProgramPlanificacionProgramPlanificacion;
      'program-requirements.program-requirements': ProgramRequirementsProgramRequirements;
      'program-requirements.requirement-item': ProgramRequirementsRequirementItem;
      'program-vacante.program-vacante': ProgramVacanteProgramVacante;
      'program-visa.program-visa': ProgramVisaProgramVisa;
      'requirement-group.requirement-group': RequirementGroupRequirementGroup;
      'requirement.requirement': RequirementRequirement;
      'requirements.academic': RequirementsAcademic;
      'requirements.age': RequirementsAge;
      'requirements.documents': RequirementsDocuments;
      'requirements.estudios-6-meses-o-menos': RequirementsEstudios6MesesOMenos;
      'requirements.estudios-mas-de-6-meses': RequirementsEstudiosMasDe6Meses;
      'requirements.generales': RequirementsGenerales;
      'requirements.language': RequirementsLanguage;
      'requirements.personal': RequirementsPersonal;
      'shared.author': SharedAuthor;
      'simple-requirements.simple-requirements': SimpleRequirementsSimpleRequirements;
      'testimonials.testimonials': TestimonialsTestimonials;
      'tipos-actividades.tipos-actividades': TiposActividadesTiposActividades;
      'tipos-programas.educacion-superior-item': TiposProgramasEducacionSuperiorItem;
      'tipos-programas.idioma': TiposProgramasIdioma;
      'tipos-programas.pais': TiposProgramasPais;
      'tipos-programas.tipos-programas': TiposProgramasTiposProgramas;
      'travel-tips.tip': TravelTipsTip;
      'why-program.why-program': WhyProgramWhyProgram;
      'why-stc.why-stc': WhyStcWhyStc;
    }
  }
}
