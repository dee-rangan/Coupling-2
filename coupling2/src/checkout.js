const Receipt = require('./receipt.js')
class Checkout {
  constructor(items) {
    this.items = items
  }

  total() {
    return this.items.reduce((a, b) => a + b.price, 0)
  }

  printReceipt(receiptClass) {
    const receipt = new receiptClass(this.total())
    return receipt.print()
  }
}
  

    // Move the pointer to the dependency from the function body to outside the class or as a default method argument
    //const receipt = new Receipt(this.total())
    //return receipt.print()
  


module.exports = Checkout
