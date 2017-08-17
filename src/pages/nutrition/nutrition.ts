 /*Ahmed Muneer */ 
 /*import liabraries */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'nutrition',
  templateUrl: 'nutrition.html'
})
//class of the page
export class NutritionPage {
//array list
  list: Array<{Name: string, Design: string, Image: any}>;

  constructor(public navCtrl: NavController) {
    //list data 
    this.list = [
      { Name: 'Nutrient Know-How', Design: 'Like everyone else, guys and girls who have CF should eat a balanced diet that includes plenty of fruits and veggies, whole grains, dairy products, and protein. In addition, people with CF have some specific nutritional needs to help them stay healthy. Here are some of the nutrients they need to get more of:', Image:'Know-How.jpg' },
      { Name: 'Important Facts', Design: 'Since the teen years are a time of rapid growth, a balanced diet, which includes optimal calories, vitamins and minerals, is important for good nutritional health for any teen with EPI due to CF. Remember that teens with CF need more calories, vitamins and salt than teens who do not have CF. Even if teens eat a diet that is well-balanced, they may also need to take additional vitamin supplements in order to maintain normal vitamin levels', Image:'teen.jpg' },
      { Name: 'Meals and Munchies', Design: 'Peoples  with CF may need to eat more regularly than some of their friends do, but that doesn t mean they have to eat differently. Check out this sample meal plan that provides approximately 3,750 calories. The links to some of these foods will give you recipes for high-calorie foods that teens with CF can make: \n\n \u2022 Breakfast — 3 frozen pancakes with 1 tablespoon butter and 3 tablespoons syrup; ½ cup of strawberries; Mighty Milk, \n\n\u2022 Morning snack — 1 cup whole-milk yogurt; ½ cup granola; ½ banana; water, \n\n\u2022 Lunch — Sandwich made with 4 ounces of turkey, 1 ounce of cheese, 1 tablespoon mayonnaise, 3 teaspoons mustard, lettuce, tomato, and/or onion; 10 baby carrots with 2 tablespoons ranch dressing; one apple; 14 pretzels; water, \n\n\u2022 Afternoon snack — ½ cup trail mix and 1 cup Mighty Milk \n\n\u2022 Dinner — Creamy chicken fettuccine with broccoli; water', Image:'meal.jpg' },
  
        ];
    
  }
//list item function
  public Listitem(l)
  {
    this.navCtrl.push(DetailsPage,{item:l});

  }

}