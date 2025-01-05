export class CreateOrderDto {
    status: Status;
    totalAmount: Number;

}

export class CreateOrderItem {
    unitPrice: Number;
    totalPrice: Number;
    quantity: Number;
}


enum Status {
    PENDING,
    COMPLETED,
    CANCELED
}
