class MySQLDatabase {
  public create(order: Order) {
    // create and insert to database
  }
  public update(order: Order) {
    // update database
  }
}

class OrderService {
  database: MySQLDatabase;
  public create(order: Order): void {
    this.database.create(order)
  }
  public update(order: Order): void {
    this.database.update
  }
}

