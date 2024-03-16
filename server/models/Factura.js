import mongoose from 'mongoose';

const facturaSchema = new mongoose.Schema({
  dateCreation: {
    fecha: String,
    hora: String,
  },
  codRecibo: String,
  dateRecepcion: {},
  Modalidad: String,
  Nombre: String,
  Items: [
    {
      identificador: String,
      tipo: String,
      item: String,
      simboloMedida: String,
      cantidad: Number,
      descripcion: String,
      precio: String,
      total: String,
    },
  ],
  celular: String,
  Pago: String,
  ListPago: [
    {
      date: {
        fecha: String,
        hora: String,
      },
      metodoPago: String,
      total: Number,
      idUser: String,
      idCuadre: String,
    },
  ],
  datePrevista: {},
  dateEntrega: {},
  descuento: String,
  estadoPrenda: String,
  estado: String,
  //
  index: Number,
  dni: String,
  subTotal: String,
  totalNeto: String,
  cargosExtras: {},
  factura: Boolean,
  modeRegistro: String,
  notas: [],
  modoDescuento: String,
  gift_promo: [],
  location: Number,
  attendedBy: {
    name: String,
    rol: String,
  },
  lastEdit: [],
  typeRegistro: String,
});

const Factura = mongoose.model('Factura', facturaSchema);

export default Factura;
