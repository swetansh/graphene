import React, {Component} from 'react';
import ReciepeImageCard from './reciepeImageCard';
import ChefsReciepeImageCard from './chefsReciepeImageCard';
import RecipeTextCard from './recipeTextCard';

class Recipes extends Component {

    constructor() {
        super();
        this.imageUrlA = "assets/food1.jpg";
        this.imageUrlB = "assets/food2.jpg";
    	this.imageUrlC = "assets/food3.jpg";
        this.titleA = "CHARRED BROCCOLI & CHEAT’S VEGGIE";
        this.titleB = "PINEAPPLE FRUIT SALAD";
        this.titleC = "CHEESE, SPINACH & MUSHROOM STUFFED ";
        this.textA = "It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good   . Find the recipe from the link in our bio!   : @taylormillerphoto";
        this.textB = "Waffle sticks in Copenhagen!     Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [  : @foodwithmichel] #lovefood";
        this.textC = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore";
        this.textD = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure.";
        this.textE = "Getting into long weekend mode like   #pancitpalabok (  @jeepneynyc)";
    }

    render() {
        return (
            <div className="reciepe-wrapper">
                <div className="container u-pos-rel">
                    <div className="u-ib main-title-box">
                        <div className="wrapper-title">
                            <div className="main-title">
                                <div>POPULAR </div>
                                <h1>RECIEPES</h1> 
                            </div>
                            <div className="know-more">SEE ALL</div>
                        </div>
                        <div className="wrapper-title" style={{textAlign:'right'}}>
                            <div className="main-title">
                                <div> </div>
                                <div>DO YOU WANT TO SHARE YOUR OWN RECIEPES?</div> 
                            </div>
                            <div className="know-more" >SEND IT NOW</div>
                        </div>
                    </div>
                    
                    <div className="animate-box down">
                        <ChefsReciepeImageCard imageUrl={this.imageUrlA} /><br />
                        <RecipeTextCard text={this.textA} title={this.titleA}  />
                    </div>

                    <div className="animate-box down">
                        <ReciepeImageCard imageUrl={this.imageUrlB} /><br />
                        <RecipeTextCard text={this.textB} title={this.titleB}  />
                    </div>
                    <div className="animate-box down">
                        <ChefsReciepeImageCard imageUrl={this.imageUrlC} /><br />
                        <RecipeTextCard text={this.textC} title={this.titleC}  />
                    </div>
                    <div className="animate-box down">
                        <ReciepeImageCard imageUrl={this.imageUrlA} /><br />
                        <RecipeTextCard text={this.textA} title={this.titleA}  />
                    </div>
                    <div style={{float:'right',margin:'1%'}}>
                    <img src="assets/back.png" style={{float:'left'}} />
                    <img src="assets/next.png" style={{float:'right'}} />
                    </div>
            
                </div>
            </div>
        )
    }

}

export default Recipes;
