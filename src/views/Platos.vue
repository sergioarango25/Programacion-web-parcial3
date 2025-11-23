<script setup>
import { ref, onMounted } from 'vue';
import { getPlatos, createPlato, updatePlato, deletePlato } from '../services/platosService';

const platos = ref([]);
const nuevoPlato = ref({ nombre: '', descripcion: '', precio: 0 });

const cargarPlatos = async () => {
  const res = await getPlatos();
  platos.value = res.data;
};

const agregarPlato = async () => {
  await createPlato(nuevoPlato.value);
  nuevoPlato.value = { nombre: '', descripcion: '', precio: 0 };
  cargarPlatos();
};

const eliminarPlato = async (id) => {
  await deletePlato(id);
  cargarPlatos();
};

onMounted(cargarPlatos);
</script>

<template>
  <div>
    <h1>Platos</h1>
    <div>
      <input v-model="nuevoPlato.nombre" placeholder="Nombre" />
      <input v-model="nuevoPlato.descripcion" placeholder="Descripción" />
      <input v-model="nuevoPlato.precio" type="number" placeholder="Precio" />
      <button @click="agregarPlato">Agregar</button>
    </div>
    <ul>
      <li v-for="plato in platos" :key="plato.id">
        {{ plato.nombre }} - {{ plato.precio }}
        <button @click="eliminarPlato(plato.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>
