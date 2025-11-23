<script setup>
import { ref, onMounted } from 'vue';
import { getPedidos, createPedido, deletePedido } from '../services/pedidosService';

const pedidos = ref([]);
const nuevoPedido = ref({ usuarioId: '', platoId: '', cantidad: 1 });

const cargarPedidos = async () => {
  const res = await getPedidos();
  pedidos.value = res.data;
};

const agregarPedido = async () => {
  await createPedido(nuevoPedido.value);
  nuevoPedido.value = { usuarioId: '', platoId: '', cantidad: 1 };
  cargarPedidos();
};

const eliminarPedido = async (id) => {
  await deletePedido(id);
  cargarPedidos();
};

onMounted(cargarPedidos);
</script>

<template>
  <div>
    <h1>Pedidos</h1>
    <div>
      <input v-model="nuevoPedido.usuarioId" placeholder="ID Usuario" />
      <input v-model="nuevoPedido.platoId" placeholder="ID Plato" />
      <input v-model="nuevoPedido.cantidad" type="number" placeholder="Cantidad" />
      <button @click="agregarPedido">Agregar</button>
    </div>
    <ul>
      <li v-for="pedido in pedidos" :key="pedido.id">
        Usuario: {{ pedido.usuarioId }}, Plato: {{ pedido.platoId }}, Cantidad: {{ pedido.cantidad }}
        <button @click="eliminarPedido(pedido.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>
