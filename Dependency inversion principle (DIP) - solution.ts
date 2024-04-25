interface Database {
  create(order: Order): void;
  update(order: Order): void;
}

class MySQLDatabase implements Database {
  public create(order: Order) {
    // create and insert to database
  }
  public update(order: Order) {
    // update database
  }
}

class OrderService {
  database: Database;
  public create(order: Order): void {
    this.database.create(order);
  }
  public update(order: Order): void {
    this.database.update(order);
  }
