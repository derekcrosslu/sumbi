import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { faker } from '@faker-js/faker';

// Interfaces
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
}

interface Pago {
  id: number;
  familia_id: number;
  monto: number;
  fecha_pago: Date;
  metodo_pago?: string;
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
  notificaciones: Notificacion[];
  bloqueos: Bloqueo[];
  menu: boolean;
  addRole: (role: Role) => void;
  addUser: (user: User) => void;
  addFamilia: (familia: Familia) => void;
  addHijo: (hijo: Hijo) => void;
  addPago: (pago: Pago) => void;
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
      notificaciones: [],
      bloqueos: [],
      menu: false,
      addRole: (role) => set((state) => ({ roles: [...state.roles, role] })),
      addUser: (user) => set((state) => ({ users: [...state.users, user] })),
      addFamilia: (familia) => set((state) => ({ familias: [...state.familias, familia] })),
      addHijo: (hijo) => set((state) => ({ hijos: [...state.hijos, hijo] })),
      addPago: (pago) => set((state) => ({ pagos: [...state.pagos, pago] })),
      addNotificacion: (notificacion) => set((state) => ({ notificaciones: [...state.notificaciones, notificacion] })),
      addBloqueo: (bloqueo) => set((state) => ({ bloqueos: [...state.bloqueos, bloqueo] })),
      setMenu: () => set((state) => ({ menu: !state.menu })),
      resetAllData: () => set({ roles: [], users: [], familias: [], hijos: [], pagos: [], notificaciones: [], bloqueos: [], menu: false }),
      getUserById: (id) => get().users.find((user) => user.id === id),
      getRoleById: (id) => get().roles.find((role) => role.id === id),
      getFamiliaById: (id) => get().familias.find((familia) => familia.id === id),
      getHijosByFamiliaId: (familiaId) => get().hijos.filter((hijo) => hijo.familia_id === familiaId),
      getPagosByFamiliaId: (familiaId) => get().pagos.filter((pago) => pago.familia_id === familiaId),
      getNotificacionesByFamiliaId: (familiaId) => get().notificaciones.filter((notificacion) => notificacion.familia_id === familiaId),
      getBloqueosByFamiliaId: (familiaId) => get().bloqueos.filter((bloqueo) => bloqueo.familia_id === familiaId),
      getUserFamilias: (userId) => get().familias.filter((familia) => familia.user_id === userId),
      getNotificacionesByUserId: (userId) => get().notificaciones.filter((notificacion) => notificacion.user_id === userId),
      getPagoById: (id) => get().pagos.find((pago) => pago.id === id),
      getBloqueoById: (id) => get().bloqueos.find((bloqueo) => bloqueo.id === id),
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
  const roles = ['Admin', 'Parent', 'Teacher'];
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
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password_hash: faker.internet.password(),
      nombre: faker.person.firstName(),
      apellido: faker.person.lastName(),
      role_id: faker.number.int({ min: 1, max: 3 }),
      is_active: faker.datatype.boolean(),
      fecha_creacion: faker.date.past(),
      ultima_actualizacion: faker.date.recent(),
    });
  }

  // Generate familias
  for (let i = 0; i < 10; i++) {
    store.addFamilia({
      id: i + 1,
      apellido_familia: faker.person.lastName(),
      codigo_cliente: faker.string.alphanumeric(8),
      ruc: faker.string.numeric(11),
      nombres_madre: faker.person.firstName('female'),
      apellido_materno_madre: faker.person.lastName(),
      apellido_paterno_madre: faker.person.lastName(),
      tipo_identificacion_madre: faker.helpers.arrayElement(['DNI', 'Pasaporte', 'Carnet de Extranjería']),
      nro_identificacion_madre: faker.string.numeric(8),
      direccion_madre: faker.location.streetAddress(),
      correo_madre: faker.internet.email(),
      telefono_madre: faker.phone.number(),
      nombres_padre: faker.person.firstName('male'),
      apellido_paterno_padre: faker.person.lastName(),
      apellido_materno_padre: faker.person.lastName(),
      tipo_identificacion_padre: faker.helpers.arrayElement(['DNI', 'Pasaporte', 'Carnet de Extranjería']),
      nro_identificacion_padre: faker.string.numeric(8),
      direccion_padre: faker.location.streetAddress(),
      correo_padre: faker.internet.email(),
      telefono_padre: faker.phone.number(),
      responsable_pago: faker.helpers.arrayElement(['Madre', 'Padre', 'Ambos']),
      nombre_banco: faker.company.name(),
      tipo_cuenta: faker.helpers.arrayElement(['Ahorros', 'Corriente']),
      numero_cuenta: faker.finance.accountNumber(),
      cuenta_recaudadora: faker.finance.accountNumber(),
      oficina_recaudadora: faker.company.name(),
      canal_entrada: faker.helpers.arrayElement(['Web', 'Móvil', 'Presencial']),
      tipo_valor: faker.helpers.arrayElement(['Efectivo', 'Cheque', 'Transferencia']),
      ingresado_sistema_contable: faker.datatype.boolean(),
      fecha_pago_preferencial: faker.date.future(),
      fecha_vencimiento: faker.date.future(),
      fecha_bloqueo: faker.date.future(),
      importe_max_cobrar: parseFloat(faker.finance.amount({ min: 500, max: 5000, dec: 2 })),
      importe_min_cobrar: parseFloat(faker.finance.amount({ min: 100, max: 500, dec: 2 })),
      credito: parseFloat(faker.finance.amount({ min: 0, max: 1000, dec: 2 })),
      al_dia_con_pagos: faker.datatype.boolean(),
      deuda_total: parseFloat(faker.finance.amount({ min: 0, max: 500, dec: 2 })),
      nota: faker.lorem.sentence(),
      api_key: faker.string.uuid(),
      ultima_actualizacion_api: faker.date.recent(),
      user_id: i + 1,
    });
  }

  // Generate hijos
  for (let i = 0; i < 20; i++) {
    const familiaId = Math.floor(i / 2) + 1;
    store.addHijo({
      id: i + 1,
      familia_id: familiaId,
      nombres: faker.person.firstName(),
      apellidos: faker.person.lastName(),
      fecha_nacimiento: faker.date.past({ years: 10 }),
      genero: faker.helpers.arrayElement(['Male', 'Female', 'Other']),
      nivel_educativo: faker.helpers.arrayElement(['Preschool', 'Elementary', 'Middle School']),
      necesidades_especiales: faker.datatype.boolean() ? faker.lorem.sentence() : undefined,
    });
  }

  // Generate pagos
  for (let i = 0; i < 100; i++) {
    const familiaId = (i % 10) + 1;
    store.addPago({
      id: i + 1,
      familia_id: familiaId,
      monto: parseFloat(faker.finance.amount({ min: 100, max: 1000, dec: 2 })),
      fecha_pago: faker.date.recent(),
      metodo_pago: faker.helpers.arrayElement(['Cash', 'Credit Card', 'Bank Transfer']),
      estado: faker.helpers.arrayElement(['Completed', 'Pending', 'Failed']),
    });
  }

  // Generate notificaciones
  for (let i = 0; i < 30; i++) {
    const familiaId = (i % 10) + 1;
    store.addNotificacion({
      id: i + 1,
      familia_id: familiaId,
      user_id: faker.number.int({ min: 1, max: 10 }),
      pago_id: faker.datatype.boolean() ? faker.number.int({ min: 1, max: 100 }) : undefined,
      bloqueo_id: faker.datatype.boolean() ? faker.number.int({ min: 1, max: 5 }) : undefined,
      tipo_notificacion: faker.helpers.arrayElement(['Payment', 'Reminder', 'Block']),
      contenido: faker.lorem.sentence(),
      fecha_envio: faker.date.recent(),
      estado: faker.helpers.arrayElement(['Sent', 'Delivered', 'Read']),
    });
  }

  // Generate bloqueos
  for (let i = 0; i < 5; i++) {
    store.addBloqueo({
      id: i + 1,
      familia_id: i * 2 + 1,
      fecha_inicio: faker.date.past(),
      fecha_fin: faker.datatype.boolean() ? faker.date.future() : undefined,
      motivo: faker.lorem.sentence(),
      estado: faker.helpers.arrayElement(['Active', 'Resolved', 'Pending']),
    });
  }
};