export const DEFAULT_PURCHASE = {
  supplierId: "",
  invoiceNumber: "",
  invoiceDate: new Date()
    .toISOString()
    .substring(0, 10),
  discount: 0,
  transportCharges: 0,
  remarks: ""
};