export interface Pedido {
  id: number;
  usuarioId: number;
  platoId: number;
  cantidad: number;
}

export let pedidos: Pedido[] = [];
