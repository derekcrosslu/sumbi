import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { faker, fakerES_MX } from '@faker-js/faker';
import Papa from 'papaparse';

// Interfaces

interface ImportedData {
  id: number;
  nombreCliente?: string;
  codigo?: string;
  concepto?: string;
  fechaVencimiento?: string;
  fechaBloqueo?: string;
  periodosFacturados?: string;
  importeMaxCobrarDeuda?: string;
  importeMinCobrarDeuda?: string;
  informacionAdicional?: string;
  codSubConcepto01?: string;
  valorSubConcepto01?: string;
  codSubConcepto02?: string;
  valorSubConcepto02?: string;
  codSubConcepto03?: string;
  valorSubConcepto03?: string;
  codSubConcepto04?: string;
  valorSubConcepto04?: string;
  codSubConcepto05?: string;
  valorSubConcepto05?: string;
  codSubConcepto06?: string;
  valorSubConcepto06?: string;
  codSubConcepto07?: string;
  valorSubConcepto07?: string;
  codSubConcepto08?: string;
  valorSubConcepto08?: string;
  numeroCtaCliente?: string;
  tipoIdentificacion?: string;
  nroIdentificacion?: string;
}

interface Role {
  id: number;
  nombre: string;
  descripcion?: string;
}

interface User {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  nombre?: string;
  apellido?: string;
  role_id: number;
  is_active: boolean;
  fecha_creacion: Date;
  ultima_actualizacion: Date;
}

interface Familia {
  id: number;
  apellido_familia: string;
  codigo_cliente?: string;
  ruc?: string;
  nombres_madre?: string;
  apellido_materno_madre?: string;
  apellido_paterno_madre?: string;
  tipo_identificacion_madre?: string;
  nro_identificacion_madre?: string;
  direccion_madre?: string;
  correo_madre?: string;
  telefono_madre?: string;
  nombres_padre?: string;
  apellido_paterno_padre?: string;
  apellido_materno_padre?: string;
  tipo_identificacion_padre?: string;
  nro_identificacion_padre?: string;
  direccion_padre?: string;
  correo_padre?: string;
  telefono_padre?: string;
  responsable_pago?: string;
  nombre_banco?: string;
  tipo_cuenta?: string;
  numero_cuenta?: string;
  cuenta_recaudadora?: string;
  oficina_recaudadora?: string;
  canal_entrada?: string;
  tipo_valor?: string;
  ingresado_sistema_contable: boolean;
  fecha_pago_preferencial?: Date;
  fecha_vencimiento?: Date;
  fecha_bloqueo?: Date;
  importe_max_cobrar?: number;
  importe_min_cobrar?: number;
  credito: number;
  al_dia_con_pagos: boolean;
  deuda_total: number;
  nota?: string;
  api_key?: string;
  ultima_actualizacion_api?: Date;
  user_id?: number;
  escalas?: string;
  estado?: string;
}

interface Hijo {
  id: number;
  familia_id: number;
  nombres: string;
  apellidos: string;
  fecha_nacimiento?: Date;
  genero?: string;
  nivel_educativo?: string;
  necesidades_especiales?: string;
  escala?: string;
}

interface Pago {
  id: number;
  familia_id: number;
  monto: number;
  fecha_pago: Date;
  metodo_pago?: string;
  estado?: string;
}

interface Factura {
  id: number;
  familia_id: number;
  numero_factura: string;
  monto: number;
  fecha_factura: Date;
  escala?: string;
  estado?: string;
}

interface Notificacion {
  id: number;
  familia_id: number;
  user_id?: number;
  pago_id?: number;
  bloqueo_id?: number;
  tipo_notificacion: string;
  contenido: string;
  fecha_envio: Date;
  estado?: string;
}

interface Bloqueo {
  id: number;
  familia_id: number;
  fecha_inicio: Date;
  fecha_fin?: Date;
  motivo?: string;
  estado?: string;
}

// Store interface
interface Store {
  roles: Role[];
  users: User[];
  familias: Familia[];
  hijos: Hijo[];
  pagos: Pago[];
  facturas: Factura[];
  notificaciones: Notificacion[];
  bloqueos: Bloqueo[];
  menu: boolean;
  importedData: ImportedData[]; // Add importedData property
  addRole: (role: Role) => void;
  addUser: (user: User) => void;
  addFamilia: (familia: Familia) => void;
  addHijo: (hijo: Hijo) => void;
  addPago: (pago: Pago) => void;
  addFactura: (factura: Factura) => void;
  addNotificacion: (notificacion: Notificacion) => void;
  addBloqueo: (bloqueo: Bloqueo) => void;
  setMenu: () => void;
  resetAllData: () => void;
  getUserById: (id: number) => User | undefined;
  getRoleById: (id: number) => Role | undefined;
  getFamiliaById: (id: number) => Familia | undefined;
  getHijosByFamiliaId: (familiaId: number) => Hijo[];
  getPagosByFamiliaId: (familiaId: number) => Pago[];
  getNotificacionesByFamiliaId: (familiaId: number) => Notificacion[];
  getBloqueosByFamiliaId: (familiaId: number) => Bloqueo[];
  getUserFamilias: (userId: number) => Familia[];
  getNotificacionesByUserId: (userId: number) => Notificacion[];
  getPagoById: (id: number) => Pago | undefined;
  getBloqueoById: (id: number) => Bloqueo | undefined;
  importCSV: (csvContent: string) => void;
  exportCSV: () => void;
  getEscalasByFamiliaId: (familiaId: number) => string | undefined;
}

// Create the store
export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      roles: [],
      users: [],
      familias: [],
      hijos: [],
      pagos: [],
      facturas: [],
      notificaciones: [],
      bloqueos: [],
      menu: false,
      importedData: [], // Add importedData property
      addRole: (role) => set((state) => ({ roles: [...state.roles, role] })),
      addUser: (user) => set((state) => ({ users: [...state.users, user] })),
      addFamilia: (familia) =>
        set((state) => ({ familias: [...state.familias, familia] })),
      addHijo: (hijo) => set((state) => ({ hijos: [...state.hijos, hijo] })),
      addPago: (pago) => set((state) => ({ pagos: [...state.pagos, pago] })),
      addFactura: (factura) =>
        set((state) => ({ facturas: [...state.facturas, factura] })),
      addNotificacion: (notificacion) =>
        set((state) => ({
          notificaciones: [...state.notificaciones, notificacion],
        })),
      addBloqueo: (bloqueo) =>
        set((state) => ({ bloqueos: [...state.bloqueos, bloqueo] })),
      setMenu: () => set((state) => ({ menu: !state.menu })),
      resetAllData: () =>
        set({
          roles: [],
          users: [],
          familias: [],
          hijos: [],
          pagos: [],
          notificaciones: [],
          bloqueos: [],
          facturas: [],
          // importedData: [],
          menu: false,
        }),
      getEscalasByFamiliaId: (familiaId: number) =>
        get().familias.find((familia) => familia.id === familiaId)?.escalas,
      getUserById: (id) => get().users.find((user) => user.id === id),
      getRoleById: (id) => get().roles.find((role) => role.id === id),
      getFamiliaById: (id) =>
        get().familias.find((familia) => familia.id === id),
      getHijosByFamiliaId: (familiaId) =>
        get().hijos.filter((hijo) => hijo.familia_id === familiaId),
      getPagosByFamiliaId: (familiaId) =>
        get().pagos.filter((pago) => pago.familia_id === familiaId),
      getNotificacionesByFamiliaId: (familiaId) =>
        get().notificaciones.filter(
          (notificacion) => notificacion.familia_id === familiaId
        ),
      getBloqueosByFamiliaId: (familiaId) =>
        get().bloqueos.filter((bloqueo) => bloqueo.familia_id === familiaId),
      getUserFamilias: (userId) =>
        get().familias.filter((familia) => familia.user_id === userId),
      getNotificacionesByUserId: (userId) =>
        get().notificaciones.filter(
          (notificacion) => notificacion.user_id === userId
        ),
      getPagoById: (id) => get().pagos.find((pago) => pago.id === id),
      getBloqueoById: (id) =>
        get().bloqueos.find((bloqueo) => bloqueo.id === id),
      importCSV: (csvContent: string) => {
        const result = Papa.parse(csvContent, { header: true });
        const importedData: ImportedData[] = result.data.map(
          (row: any, index: number) => ({
            id: index + 1,
            nombreCliente: row['NOMBRE CLIENTE (30)'] || '',
            codigo: row['CODIGO'] || '',
            concepto: row['CONCEPTO'] || '',
            fechaVencimiento: row['FECHA VENCIMIENTO'] || '',
            fechaBloqueo: row['FECHA BLOQUEO'] || '',
            periodosFacturados: row['PERIODOS FACTURADOS'] || '',
            importeMaxCobrarDeuda: row['IMPORTE MAX A COBRAR DEUDA'] || '',
            importeMinCobrarDeuda: row['IMPORTE MIN A COBRAR DEUDA'] || '',
            informacionAdicional: row['INFORMACION ADICIONAL'] || '',
            codSubConcepto01: row['COD. SUB CONCEPTO 01'] || '',
            valorSubConcepto01: row['VALOR SUB CONCEPTO 01'] || '',
            codSubConcepto02: row['COD. SUB CONCEPTO 02'] || '',
            valorSubConcepto02: row['VALOR SUB CONCEPTO 02'] || '',
            codSubConcepto03: row['COD. SUB CONCEPTO 03'] || '',
            valorSubConcepto03: row['VALOR SUB CONCEPTO 03'] || '',
            codSubConcepto04: row['COD. SUB CONCEPTO 04'] || '',
            valorSubConcepto04: row['VALOR SUB CONCEPTO 04'] || '',
            codSubConcepto05: row['COD. SUB CONCEPTO 05'] || '',
            valorSubConcepto05: row['VALOR SUB CONCEPTO 05'] || '',
            codSubConcepto06: row['COD. SUB CONCEPTO 06'] || '',
            valorSubConcepto06: row['VALOR SUB CONCEPTO 06'] || '',
            codSubConcepto07: row['COD. SUB CONCEPTO 07'] || '',
            valorSubConcepto07: row['VALOR SUB CONCEPTO 07'] || '',
            codSubConcepto08: row['COD. SUB CONCEPTO 08'] || '',
            valorSubConcepto08: row['VALOR SUB CONCEPTO 08'] || '',
            numeroCtaCliente: row['NUMERO CTA.CLIENTE'] || '',
            tipoIdentificacion: row['TIPO IDENTIFICACION'] || '',
            nroIdentificacion: row['NRO IDENTIFICACION'] || '',
          })
        );
        set((state) => ({
          importedData: [...state.importedData, ...importedData],
        }));
      },
      exportCSV: () => {
        const familias = get().familias;
        const csv = Papa.unparse(familias);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        if (link.download !== undefined) {
          const url = URL.createObjectURL(blob);
          link.setAttribute('href', url);
          link.setAttribute('download', 'familias_export.csv');
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      },
    }),
    {
      name: 'sumbi-store',
      getStorage: () => localStorage,
    }
  )
);

// Generate mock data function
export const generateMockData = () => {
  const store = useStore.getState();

  // Generate roles
  const roles = ['Admin', 'Padre', 'Maestra'];
  roles.forEach((roleName, index) => {
    store.addRole({
      id: index + 1,
      nombre: roleName,
      descripcion: `Role for ${roleName}`,
    });
  });

  // Generate users
  for (let i = 0; i < 10; i++) {
    store.addUser({
      id: i + 1,
      username: fakerES_MX.internet.userName(),
      email: fakerES_MX.internet.email(),
      password_hash: fakerES_MX.internet.password(),
      nombre: fakerES_MX.person.firstName(),
      apellido: fakerES_MX.person.lastName(),
      role_id: fakerES_MX.number.int({ min: 1, max: 3 }),
      is_active: fakerES_MX.datatype.boolean(),
      fecha_creacion: fakerES_MX.date.past(),
      ultima_actualizacion: fakerES_MX.date.recent(),
    });
  }

  // Generate familias
  for (let i = 0; i < 10; i++) {
    store.addFamilia({
      id: i + 1,
      apellido_familia: fakerES_MX.person.lastName(),
      codigo_cliente: fakerES_MX.string.alphanumeric(8),
      ruc: fakerES_MX.string.numeric(11),
      nombres_madre: fakerES_MX.person.firstName('female'),
      apellido_materno_madre: fakerES_MX.person.lastName(),
      apellido_paterno_madre: fakerES_MX.person.lastName(),
      tipo_identificacion_madre: fakerES_MX.helpers.arrayElement([
        'DNI',
        'Pasaporte',
        'Carnet de Extranjería',
      ]),
      nro_identificacion_madre: fakerES_MX.string.numeric(8),
      direccion_madre: fakerES_MX.location.streetAddress(),
      correo_madre: fakerES_MX.internet.email(),
      telefono_madre: fakerES_MX.phone.number(),
      nombres_padre: fakerES_MX.person.firstName('male'),
      apellido_paterno_padre: fakerES_MX.person.lastName(),
      apellido_materno_padre: fakerES_MX.person.lastName(),
      tipo_identificacion_padre: fakerES_MX.helpers.arrayElement([
        'DNI',
        'Pasaporte',
        'Carnet de Extranjería',
      ]),
      nro_identificacion_padre: fakerES_MX.string.numeric(8),
      direccion_padre: fakerES_MX.location.streetAddress(),
      correo_padre: fakerES_MX.internet.email(),
      telefono_padre: fakerES_MX.phone.number(),
      responsable_pago: fakerES_MX.helpers.arrayElement([
        'Madre',
        'Padre',
        'Ambos',
      ]),
      nombre_banco: fakerES_MX.company.name(),
      tipo_cuenta: fakerES_MX.helpers.arrayElement(['Ahorros', 'Corriente']),
      numero_cuenta: fakerES_MX.finance.accountNumber(),
      cuenta_recaudadora: fakerES_MX.finance.accountNumber(),
      oficina_recaudadora: fakerES_MX.company.name(),
      canal_entrada: fakerES_MX.helpers.arrayElement([
        'Web',
        'Móvil',
        'Presencial',
      ]),
      tipo_valor: fakerES_MX.helpers.arrayElement([
        'Efectivo',
        'Cheque',
        'Transferencia',
      ]),
      ingresado_sistema_contable: fakerES_MX.datatype.boolean(),
      fecha_pago_preferencial: fakerES_MX.date.future(),
      fecha_vencimiento: fakerES_MX.date.future(),
      fecha_bloqueo: fakerES_MX.date.future(),
      importe_max_cobrar: parseFloat(
        fakerES_MX.finance.amount({ min: 500, max: 5000, dec: 2 })
      ),
      importe_min_cobrar: parseFloat(
        fakerES_MX.finance.amount({ min: 100, max: 500, dec: 2 })
      ),
      credito: parseFloat(
        fakerES_MX.finance.amount({ min: 0, max: 1000, dec: 2 })
      ),
      al_dia_con_pagos: fakerES_MX.datatype.boolean(),
      deuda_total: parseFloat(
        fakerES_MX.finance.amount({ min: 0, max: 500, dec: 2 })
      ),
      nota: fakerES_MX.lorem.sentence(),
      api_key: fakerES_MX.string.uuid(),
      ultima_actualizacion_api: fakerES_MX.date.recent(),
      user_id: i + 1,
      escalas: fakerES_MX.helpers.arrayElement(['A', 'B', 'C', 'D', 'E']),
    });
  }

  // Generate hijos
  for (let i = 0; i < 20; i++) {
    const familiaId = Math.floor(i / 2) + 1;
    store.addHijo({
      id: i + 1,
      familia_id: familiaId,
      nombres: fakerES_MX.person.firstName(),
      apellidos: fakerES_MX.person.lastName(),
      fecha_nacimiento: fakerES_MX.date.past({ years: 10 }),
      genero: fakerES_MX.helpers.arrayElement(['Masculino', 'Femenino']),
      nivel_educativo: fakerES_MX.helpers.arrayElement([
        'Preschool',
        'Elementary',
        'Middle School',
      ]),
      necesidades_especiales: fakerES_MX.datatype.boolean()
        ? fakerES_MX.lorem.sentence()
        : undefined,
      escala: fakerES_MX.helpers.arrayElement(['A', 'B', 'C', 'D', 'E']),
    });
  }

  // Generate pagos
  for (let i = 0; i < 100; i++) {
    const familiaId = (i % 10) + 1;
    store.addPago({
      id: i + 1,
      familia_id: familiaId,
      monto: parseFloat(
        fakerES_MX.finance.amount({ min: 50, max: 500, dec: 2 })
      ),
      fecha_pago: fakerES_MX.date.recent(),
      metodo_pago: fakerES_MX.helpers.arrayElement([
        'EFFECTIVO',
        'CARGO EN CUENTA',
        'CHEQUE PROPIO BANCO',
        'CHEQUE OTRO BANCO',
        'TRANSFERENCIA',
        'TARJETA DE CREDITO',
      ]),
      estado: fakerES_MX.helpers.arrayElement([
        'Completado',
        'Pendiente',
        'Error',
      ]),
    });
  }

  // Generate facturas
  for (let i = 0; i < 100; i++) {
    const familiaId = (i % 10) + 1;
    store.addFactura({
      id: i + 1,
      familia_id: familiaId,
      numero_factura: faker.finance.accountNumber(5),
      monto: parseFloat(
        fakerES_MX.finance.amount({ min: 50, max: 500, dec: 2 })
      ),
      fecha_factura: fakerES_MX.date.recent(),
      estado: fakerES_MX.helpers.arrayElement([
        'Emitida',
        'Pagada',
        'Notificada',
      ]),
    });
  }

  // Generate notificaciones
  for (let i = 0; i < 30; i++) {
    const familiaId = (i % 10) + 1;
    store.addNotificacion({
      id: i + 1,
      familia_id: familiaId,
      user_id: fakerES_MX.number.int({ min: 1, max: 10 }),
      pago_id: fakerES_MX.datatype.boolean()
        ? fakerES_MX.number.int({ min: 1, max: 100 })
        : undefined,
      bloqueo_id: fakerES_MX.datatype.boolean()
        ? fakerES_MX.number.int({ min: 1, max: 5 })
        : undefined,
      tipo_notificacion: fakerES_MX.helpers.arrayElement([
        'Pago',
        'Notificacion',
        'Bloqueo',
      ]),
      contenido: fakerES_MX.lorem.sentence(),
      fecha_envio: fakerES_MX.date.recent(),
      estado: fakerES_MX.helpers.arrayElement([
        'Enviado',
        'Entregado',
        'Leido',
      ]),
    });
  }

  // Generate bloqueos
  for (let i = 0; i < 5; i++) {
    store.addBloqueo({
      id: i + 1,
      familia_id: i * 2 + 1,
      fecha_inicio: fakerES_MX.date.past(),
      fecha_fin: fakerES_MX.datatype.boolean()
        ? fakerES_MX.date.future()
        : undefined,
      motivo: fakerES_MX.lorem.sentence(),
      estado: fakerES_MX.helpers.arrayElement([
        'Activo',
        'Resuelto',
        'Pendiente',
      ]),
    });
  }
};
