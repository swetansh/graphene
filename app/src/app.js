import React, {Component} from 'react';
import Banner from './components/banner';
import Meet from './components/meet';
import Location from './components/location';
import Menu from './components/menu';
import Recipes from './components/reciepes';
import Collaborate from './components/collaborate';
import Footer from './components/footer';

class App extends Component {

    constructor() {
        super();

        this.state = {
            sectionCount : 7,
            activeSection : 0
        };

        this.scrollPosition = 0;
        this.scrollEventHandler = this.scrollEventHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.limit = 500;
    }

    scrollEventHandler() {
        console.log(this.menuElements);
        if(window.scrollY > this.scrollPosition){
            // moving down
            if(window.scrollY > this.bannerHeight - this.limit){
                this.meetUpElements.forEach(val => {
                    val.classList.remove("down");
                });
            }
            if(window.scrollY > this.bannerHeight + this.meetWrapperHeight + this.locationWrapperHeight - this.limit){
                this.menuElements.forEach(val => {
                    val.classList.remove("down");
                    val.classList.remove("up");
                });
            }
        }
        if(this.bannerHeight > window.scrollY){
            this.setState({
                activeSection : 0
            })
        }
        else if(this.meetWrapperHeight > window.scrollY){
            this.setState({
                activeSection : 1
            })
        }
        else if(this.locationWrapperHeight + this.meetWrapperHeight > window.scrollY){
            this.setState({
                activeSection : 2
            })
        }
        else if(this.menuWrapperHeight + this.locationWrapperHeight + this.meetWrapperHeight > window.scrollY){
            this.setState({
                activeSection : 3
            })
        }
        else if(this.recipeWrapperHeight + this.menuWrapperHeight + this.locationWrapperHeight + this.meetWrapperHeight > window.scrollY){
            this.setState({
                activeSection : 4
            })
        }
        else if(this.collaborateHeight + this.recipeWrapperHeight + this.menuWrapperHeight + this.locationWrapperHeight + this.meetWrapperHeight > window.scrollY){
            this.setState({
                activeSection : 5
            })
        }
        else if(this.footerHeight > window.scrollY){
            this.setState({
                activeSection : 6
            })
        }
        this.scrollPosition = window.scrollY;
    }

    clickHandler() {
        let section = event.target.attributes["data-section"];
        if(section){
            this.setState({
                activeSection : section.value
            });
            if(section.value == 0){
                window.scrollTo(0, 0);
            }
            else if(section.value == 1){
                window.scrollTo(0, this.bannerHeight);
            }
            else if(section.value == 3){
                window.scrollTo(0, this.menuWrapperHeight);
            }
        
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.bannerHeight = document.querySelector(".banner-wrapper").offsetHeight;
        this.meetWrapperHeight = document.querySelector(".meet-wrapper").offsetHeight;
        this.locationWrapperHeight = document.querySelector(".location-wrapper").offsetHeight;
        this.menuWrapperHeight = document.querySelector(".menu-wrapper").offsetHeight;
        this.recipeWrapperHeight = document.querySelector(".reciepe-wrapper").offsetHeight;
        this.collaborateHeight = document.querySelector(".Collaborate-form-page").offsetHeight;
        this.footerHeight = document.querySelector(".footer").offsetHeight;
        this.meetUpElements = document.querySelectorAll(".animate-box");
        this.menuElements = document.querySelectorAll(".animate-box-menu");
        window.addEventListener("scroll", this.scrollEventHandler);
        document.querySelector(".header").addEventListener("click", this.clickHandler);
    }

    render() {
        return (
            <div>
                <Banner sectionCount={this.state.sectionCount} activeSection={this.state.activeSection} />
                <Meet />
                <Location />
                <Menu />
                <Recipes />
                <Collaborate />
                <Footer />
            </div>
        )
    }

}

export default App;
