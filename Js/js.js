const ap1 = Vue.createApp({
    data() {
        return {
            nuevoProducto: {
                nombre: '',
                cantidad: 0,
                precio: 0
            },
            productos: [],
            cantidadMensaje: '',
            nextId: 1 
        };
    },
    computed: {
        totalInvertido() {
            let total = 0;
            for (let i = 0; i < this.productos.length; i++) {
                total += this.productos[i].cantidad * this.productos[i].precio;
            }
            return total;
        },
        stock() {
            let totalStock = 0;
            for (let i = 0; i < this.productos.length; i++) {
                totalStock += this.productos[i].cantidad;
            }
            return totalStock;
        },
        cantidadValida() {
            if (this.nuevoProducto.cantidad > 12) {
                this.cantidadMensaje = 'Ingresaste mas de 12 cantidades';
                return false;
            } else {
                this.cantidadMensaje = 'Cantidad valida';
                return true;
            }
        }
    },
    methods: {
        agregarProducto() {
            if (this.nuevoProducto.nombre && this.cantidadValida && this.nuevoProducto.precio > 0) {
                const productoConId = { 
                    id: this.nextId, 
                    nombre: this.nuevoProducto.nombre,
                    cantidad: this.nuevoProducto.cantidad,
                    precio: this.nuevoProducto.precio 
                };
                this.productos.push(productoConId);
                this.nextId++;
                this.reiniciar();
            }
        },
        reiniciar() {
            this.nuevoProducto.nombre = '';
            this.nuevoProducto.cantidad = 0;
            this.nuevoProducto.precio = 0;
            this.cantidadMensaje = '';
        }
    }
}).mount('#sabe');
