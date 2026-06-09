export interface SchoolConfig {
  id: number; // ID numérico que coincide con establecimiento_id en DB
  slug: string;
  name: string;
  logo?: string;
  // Fecha de fin de año escolar en formato MM-DD (opcional). Si no está, se usa 12-31.
  schoolYearEnd?: string;
}

// Configuración de los colegios dentro de la MISMA base de datos
export const SCHOOL_CONFIGS: SchoolConfig[] = [
  {
    id: 1,
    slug: 'colegio-san-jose',
    name: 'Colegio San José',
    logo: '/logos/colegio-san-jose.svg'
    ,
    schoolYearEnd: '12-20'
  },
  {
    id: 2,
    slug: 'liceo-bicentenario',
    name: 'Liceo Bicentenario',
    logo: '/logos/liceo-bicentenario.svg'
    ,
    schoolYearEnd: '12-22'
  },
  {
    id: 3,
    slug: 'colegio-santa-maria',
    name: 'Colegio Santa María',
    logo: '/logos/colegio-santa-maria.svg'
    ,
    schoolYearEnd: '12-15'
  }
];
