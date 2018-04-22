import React, {Component} from 'react';
import MenuTextCard from './menuTextCard';

class Menu extends Component {

    constructor() {
        super();
        this.titleA = "QUINOA CROQUETTAS";
        this.titleB = "CHIFA CHICHARRONES";
        this.titleC = "CALAMARES";
        this.titleD = "EL CLASICO";
        this.titleE = "TIRADITO CALLAO";
        this.titleF = "SUPER POLLO";
        this.titleG = "PATATAS FRITAS";
        this.titleH = "ICECREAM";
        this.titleI = "TIRAMISU";
        this.titleJ = "BROWNIE";
        this.textA = "Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)";
        this.textB = "Slow cooked, crispy pork belly with sweet soy sauce";
        this.textC = "Crispy baby squid with pickled jalapeño miso salsa";
        this.textD = "Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)";
        this.textE = "Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche & sweet potato crunchies";
        this.textF = "Marinated corn fed chicken pieces with rocotto salsa";
        this.textG = "Sweet potato fries with aji rocotto mayonnaise (v)";
        this.textH = "Lorem ipsum dolor sit amet salerma petrum sea";
        this.textI = "Lorem ipsum dolor sit amet salerma petrum sea";
    }

    render() {
        return (
            <div className="menu-wrapper">
                <div className="container u-pos-rel">
                    <div className="u-ib main-title-box" style={{textAlign:'center'}}>
                        <div className="wrapper-title" style={{textAlign:'center'}}>
                            <div className="main-title">
                                <div>OUR MENU </div>
                            </div>
                            <div className="know-more">KNOW MORE</div>
                        </div>
                    </div>
                    
                    <div className="animate-box-menu up">
                        <div className="main-title-box">
                            <div className="wrapper-title">
                                <div className="main-title">
                                    <div>STARTERS </div>
                                </div>
                            </div>
                        </div>
                        <MenuTextCard text={this.textA} title={this.titleA}  />
                        <MenuTextCard text={this.textB} title={this.titleB}  />
                        <MenuTextCard text={this.textC} title={this.titleC}  />
                    </div>
                    <div className="animate-box-menu down">
                        <div className="main-title-box">
                            <div className="wrapper-title">
                                <div className="main-title">
                                    <div>MAIN </div>
                                    <div>COURSES </div>
                                </div>
                            </div>
                        </div>
                        <MenuTextCard text={this.textD} title={this.titleD}  />
                        <MenuTextCard text={this.textE} title={this.titleE}  />
                    </div>
                    <div className="animate-box-menu up">
                        <div className="main-title-box">
                            <div className="wrapper-title">
                                <div className="main-title">
                                    <div>SIDES </div>
                                </div>
                            </div>
                        </div>
                        <MenuTextCard text={this.textF} title={this.titleF}  />
                        <MenuTextCard text={this.textG} title={this.titleG}  />
                    </div>
                    <div className="animate-box-menu down">
                        <div className="main-title-box">
                            <div className="wrapper-title">
                                <div className="main-title">
                                    <div>DESSERTS </div>
                                </div>
                            </div>
                        </div>
                        <MenuTextCard text={this.textH} title={this.titleH}  />
                        <MenuTextCard text={this.textI} title={this.titleI}  />
                        <MenuTextCard text={this.textI} title={this.titleJ}  />
                    </div>
        
                </div>
            </div>
        )
    }

}

export default Menu;
