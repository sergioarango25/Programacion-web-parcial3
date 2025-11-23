<script setup>
import { ref, onMounted } from 'vue';
import { getUsuarios, createUsuario, deleteUsuario } from '../services/usuariosService';

const usuarios = ref([]);
const nuevoUsuario = ref({ nombre: '', email: '' });

const cargarUsuarios = async () => {
  const res = await getUsuarios();
  usuarios.value = res.data;
};

const agregarUsuario = async () => {
  await createUsuario(nuevoUsuario.value);
  nuevoUsuario.value = { nombre: '', email: '' };
  cargarUsuarios();
};

const eliminarUsuario = async (id) => {
  await deleteUsuario(id);
  cargarUsuarios();
};

onMounted(cargarUsuarios);
</script>

<template>
  <div>
    <h1>Usuarios</h1>
    <div>
      <input v-model="nuevoUsuario.nombre" placeholder="Nombre" />
      <input v-model="nuevoUsuario.email" placeholder="Email" />
      <button @click="agregarUsuario">Agregar</button>
    </div>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">
        {{ usuario.nombre }} - {{ usuario.email }}
        <button @click="eliminarUsuario(usuario.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>
