import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, } from "react-native";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import {Link} from "react-scroll";

var device_height = Dimensions.get("window").height;
var device_width = Dimensions.get("window").width;
var home_height = device_height * 0.97;
let carouselFont = 29;
let carouselTextWidth = "55%";

var img_width;
if(device_width>250 && device_width<400){
  var home_height = device_height * 0.6;
  carouselFont = 18;
  carouselTextWidth = "60%";
}
else if(device_width>400 && device_width<500){
  var home_height = device_height * 0.65;
  carouselFont = 20;
  carouselTextWidth = "60%";
}
else if(device_width>500 && device_width<700){
  var home_height = device_height * 0.7;
  carouselFont = 25;
  carouselTextWidth = "57%";
}
else if(device_width>700){
  var home_height = device_height * 0.806;
  carouselFont = 29;
  carouselTextWidth = "55%";
}
class HomeScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      cover: require('./img/cover.png'),
    }
  }

  render(){
    const HomeComponent = () => {
      return (
        <View style = {styles.container}>
        <View style={{width: '100%'}}>
          <View>
            <img style={{width: "100%", height: "auto", borderRadius: 10,}} 
                alt="Workspace" src={this.state.cover}/>
          </View>
          {/* <Carousel style={styles.carousel} autoPlay={true} showThumbs ={false} infiniteLoop={true} 
            interval={5000} stopOnHover={false}>
            <div>
              <img style={{width: "100%", height: "auto", borderRadius: 10,}} 
                alt="Workspace" src={this.state.cover}/>
            </div>

          </Carousel> */}
          <Text style={styles.carousel_text}>Hi! I'm Michael and ...I write cod
            <mark style={{backgroundColor: 'white', color: 'black', marginLeft: 1, borderRadius: 5}}>e</mark></Text>
          </View>

          <View style={styles.button_container}>
            <Link activeClass="active" to="resume" spy={true} smooth={true} offset={-60} duration={500}>
                <TouchableOpacity style={styles.touchable}>
                  <Text style={styles.button_text}>Resume</Text>
                </TouchableOpacity>
              </Link>

            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-60} duration={500}>
              <TouchableOpacity style={styles.touchable}>
                <Text style={styles.button_text}>Projects</Text>
              </TouchableOpacity>
            </Link>

            <TouchableOpacity style={styles.touchable}>
            <a style={{color:'white', fontSize: 15, fontWeight:'bold',}}
              href ="https://github.com/MichaelVandi/" target="_blank">
              Github</a>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchable}>
            <a style={{color:'white', fontSize: 15, fontWeight:'bold',}}
              href ="https://www.youtube.com/channel/UCZOiUkaF2fy8Mn0gZiKiDyQ/" target="_blank">
              YouTube</a>
            </TouchableOpacity>
          </View>
        </View>
      );
    };
    return(
      <HomeComponent/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: "100%",
    height: home_height,
    // paddingTop: 62,
    
    
  },
  carousel: {
    width: "100%",
    backgroundColor:'transparent',
  },
  carousel_text:{
    color: 'white',
    fontWeight: 'bold',
    width: carouselTextWidth,
    fontSize: carouselFont,
    position: 'absolute',
    bottom: 0,
    left: 0,
    marginBottom: 50,
    marginLeft: 8,
    zIndex: 4,
    textAlign: "left",
    fontFamily: 'Monospace',
    
  },
  touchable:{
    borderRadius: 7,
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 5,
    backgroundColor: '#2D3047',
  },
  button_container:{
    display:'inline-flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
  },
  button_text:{
    color:'white',
    fontSize: 15,
    // fontFamily: 'Monospace',
    fontWeight:'bold',
  }
});

export default HomeScreen;
