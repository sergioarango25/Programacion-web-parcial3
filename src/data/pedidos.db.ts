export interface Pedido {
  id: number;
  usuarioId: number;
  platoId: number;
  cantidad: number;
  total: number;
}

export let pedidos: Pedido[] = [];
