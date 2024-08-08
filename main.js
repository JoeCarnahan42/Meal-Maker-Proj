let menu = {
  generateRandomMeal() {
    let appetizer = this.getRandomDishFromCourse("appetizers")
    let main = this.getRandomDishFromCourse("mains")
    let dessert = this.getRandomDishFromCourse("desserts")
    let totalPrice = appetizer.price + main.price + dessert.price
    return appetizer.name + ", " + main.name + ", " + dessert.name + "," + " Total price: " + "$" + totalPrice
  },
  getRandomDishFromCourse(courseName) {
      let dishes = menu.courses[courseName]
      let num = Math.floor(Math.random() * dishes.length)
      return dishes[num]
  },
  addDishToCourse: function makeDish(courseName, dishName, dishPrice) {
    let dish = new Object()
    dish.course = courseName
    dish.name = dishName
    dish.price = dishPrice
    if (dish.course === "mains") {
      menu.courses.mains.push(dish)
    }else if (dish.course === "appetizers") {
      menu.courses.appetizers.push(dish)
    }else if (dish.course === "desserts") {
      menu.courses.desserts.push(dish)
    }
  },
  courses:{
    appetizers: [],
    mains: [],
    desserts: []
  }
}

menu.addDishToCourse("mains", "steak", 20)
menu.addDishToCourse("mains", "cheeseburger", 15)
menu.addDishToCourse("mains", "pasta", 17)
menu.addDishToCourse("appetizers", "fried pickles", 6)
menu.addDishToCourse("appetizers", "chips & salsa", 3)
menu.addDishToCourse("appetizers", "chicken wings", 10)
menu.addDishToCourse("desserts", "cheesecake", 12)
menu.addDishToCourse("desserts", "carrot cake", 9)
menu.addDishToCourse("desserts", "ice cream", 5)
menu.getRandomDishFromCourse("desserts")
let meal = menu.generateRandomMeal()
console.log(meal)
