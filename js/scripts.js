function Pizza(size,userTopping1,userTopping2,userTopping3 ){
  this.size = size;
  this.userTopping1 = userTopping1;
  this.userTopping2 = userTopping2;
  this.userTopping3 = userTopping3
}

Pizza.prototype.price = function() {
  const total = this.userTopping1 + this.userTopping2 + this.userTopping3 + this.size;

  return total;
 
}


