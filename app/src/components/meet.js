import React, {Component} from 'react';
import ImageCard from './imageCard';
import TextCard from './textCard';

class Meet extends Component {

    constructor() {
        super();
        this.imageUrlA = "assets/food1.jpg";
        this.imageUrlB = "assets/food2.jpg";
    	this.imageUrlC = "assets/food3.jpg";
        this.titleA = "@buzzfeedfood";
        this.titleB = "@love_food";
        this.titleC = "@buzzfeedfood";
        this.textA = "It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good   . Find the recipe from the link in our bio!   : @taylormillerphoto";
        this.textB = "Waffle sticks in Copenhagen!     Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [  : @foodwithmichel] #lovefood";
        this.textC = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore";
        this.textD = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure.";
        this.textE = "Getting into long weekend mode like   #pancitpalabok (  @jeepneynyc)";
    }

    render() {
        return (
            <div className="meet-wrapper">
                <div className="container u-pos-rel">
                    <img className="bg-detail-plus u-pos-abs" src="assets/bg-detail.png" />
                    <img className="bg-detail-dots u-pos-abs" src="assets/detail03.png" />
                    <img className="bg-detail-stripes u-pos-abs" src="assets/detail01.png" />
                    <div className="u-ib main-title-box">
                        <div className="wrapper-title">
                            <div className="main-title">
                                <div>Meet our</div>
                                <div>Community</div> 
                            </div>
                            <div className="know-more">know more</div>
                            <div className="bottom-text">LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA ENTALTO</div>
                        </div>
                    </div>
                    
                    <div className="animate-box down">
                        <ImageCard imageUrl={this.imageUrlA} />
                        <TextCard text={this.textA} title={this.titleA}  />
                    </div>

                    <div className="animate-box down">
                        <TextCard text={this.textB} title={this.titleB}  />
                        <ImageCard imageUrl={this.imageUrlB} />
                        <TextCard text={this.textC} title=""  color="grey" />
                        <TextCard text="" title=""  color="grey" />                        
                    </div>

                    <div className="animate-box down">
                        <TextCard text={this.textD} title="" color="grey" />
                        <TextCard text="" title="" color="grey" />
                        <TextCard text={this.textE} title={this.titleC} />
                        <ImageCard imageUrl={this.imageUrlC} />
                    </div>

                </div>
            </div>
        )
    }

}

export default Meet;
