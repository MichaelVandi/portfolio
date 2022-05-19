import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { withRouter } from "react-router-dom";
import {FaHome, FaInfoCircle, FaCode, FaMobile, FaGraduationCap, FaEnvelope} from 'react-icons/fa';
import {Link} from "react-scroll";

var device_width = Dimensions.get("window").width;
var device_height = Dimensions.get("window").height * 0.95;
var img_width = device_width * 0.2;
var leftMargin = 25;

class SideNav extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      profile_img: require("./img/ted_x1.jpg"),
      img_width: 200,
      device_width: device_width,
    }
  }
      /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    if(window.innerWidth <=400) {
      this.setState({img_width: 80, device_width: window.innerWidth})
      img_width = 80;
      leftMargin = 2;
      // alert("250 - 400 : " + leftMargin);
    } else if(window.innerWidth > 400 && window.innerWidth <=500) {
      this.setState({img_width: 100, device_width: window.innerWidth})
      img_width = 80;
      leftMargin = 3;
      // alert("400 - 500 : " + leftMargin);
    }
    else if(window.innerWidth > 500 && window.innerWidth <=700){
      this.setState({img_width: 160, device_width: window.innerWidth})
      img_width = 80;
      leftMargin = 5;
      // alert("500 - 700 : " + leftMargin);
    }
    else if(window.innerWidth > 700 && window.innerWidth <=800){
      this.setState({img_width: 200, device_width: window.innerWidth})
      img_width = 100;
      leftMargin = 5;
      // alert("700 - 800 : " + leftMargin);
    }
    else if(window.innerWidth > 800 && window.innerWidth <=900){
      this.setState({img_width: 200, device_width: window.innerWidth})
      img_width = 120;
      leftMargin = 5;
      // alert("800 - 900 : " + leftMargin);
    }
    else if(window.innerWidth > 900 && window.innerWidth <=1000){
      this.setState({img_width: 200, device_width: window.innerWidth})
      img_width = 122;
      leftMargin = 8;
      // alert("900 - 1000 : " + leftMargin);
    }
    else if(window.innerWidth > 1000 && window.innerWidth <=1200){
      this.setState({img_width: 200, device_width: window.innerWidth})
      img_width = 180;
      leftMargin = 20;
      // alert("1000 - 1200 : " + leftMargin);
    }
    else if(window.innerWidth > 1200){
      this.setState({img_width: 200, device_width: window.innerWidth})
      img_width = 200;
      leftMargin = 30;
      // alert("1200 >: " + leftMargin);
    }
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render (){
    const TopNav = () => {
      return (
        <View style={{width: '100%'}}>

        
        <View style={styles.main}>
          <View style={{width: '100%', alignItems: "center", justifyContent: "center", padding: 10}}>
            <Image style={{width: img_width, height: img_width,
              borderRadius: '50%',}} source={this.state.profile_img}  />
          </View>
          <View style={{width: '100%', alignItems: "center", justifyContent: "center", flexDirection: 'column', marginBottom: 20}}>
            <Text style = {styles.nameText}> Michael Vandi</Text>
            <Text style ={styles.posText}>Software Engineer</Text>
          </View>
          <View style={{flexDirection: 'column', 
            width: '98%', alignItems: "center", justifyContent: "center", }}>
            <View  style={{flexDirection: 'column', 
            width: '95%', alignItems: "center", justifyContent: "center",}}>
              <Link style={{width: '100%'}} activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>
                <TouchableOpacity style = {styles.button}>
                  <FaHome size ="1.5em" color="grey" style={{marginRight: 10}}/>
                  <Text style = {styles.text}> Home</Text>
                </TouchableOpacity>
              </Link>

              <Link style={{width: '100%'}} activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
                <TouchableOpacity style = {styles.button}>
                  <FaInfoCircle size ="1.5em" color="grey" style={{marginRight: 10}}/>
                  <Text style = {styles.text}> About</Text>
                </TouchableOpacity>
              </Link>


              <Link style={{width: '100%'}} activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500}>
                <TouchableOpacity style = {styles.button}>
                  <FaCode size ="1.5em" color="grey" style={{marginRight: 10}}/>
                  <Text style = {styles.text}> Skills</Text>
                </TouchableOpacity>
              </Link>

              <Link style={{width: '100%'}} activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>
                <TouchableOpacity style = {styles.button}>
                  <FaMobile size ="1.5em" color="grey" style={{marginRight: 10}}/>
                  <Text style = {styles.text}> Projects</Text>
                </TouchableOpacity>
              </Link>

              <Link style={{width: '100%'}} activeClass="active" to="resume" spy={true} smooth={true} offset={-70} duration={500}>
                <TouchableOpacity style = {styles.button}>
                  <FaGraduationCap size ="1.5em" color="grey" style={{marginRight: 10}}/>
                  <Text style = {styles.text}> Resume</Text>
                </TouchableOpacity>
              </Link>

              <Link style={{width: '100%'}} activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                <TouchableOpacity style = {styles.button}>
                  <FaEnvelope size ="1.5em" color="grey" style={{marginRight: 10}}/>
                  <Text style = {styles.text}> Contact</Text>
                </TouchableOpacity>
              </Link>
                <Text style={styles.copyrightText}>
                © 2019 All rights reserved
                </Text>
            </View>
          </View>
          {/* <Button title="Home" onPress={() => history.push("/")} />
          <Button title="Second" onPress={() => history.push("/second")} /> */}
        </View>

        </View>
    
      );
    };
    return(
      <TopNav/>
    );
  }
}



const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    // width: 'auto',
    backgroundColor: "white",
    height: device_height * 0.91,
    marginBottom: 10,
    padding: 2,
    borderRadius: 10,
    position: 'fixed',
    // borderColor: 'red',
    // borderWidth: 2,
    marginLeft: leftMargin,
    marginTop: 25,
    // marginBottom: 30,
    shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 1.35,
      shadowOpacity: 0.5,
  
  },
  button:{
    display: 'flex',
    flexDirection: 'row',
    // borderBottomColor: "#D0D1D2",
    // borderBottomWidth: 1,
    borderBottomColor: "#e9e9e9",
    borderBottomWidth: 0.7,
    width:'100%',
    padding: 5,
    marginBottom: 5,
  },
  text:{
    fontSize: 14,
  },
  profile_img:{
    borderRadius: "50%",
    width: img_width,
    height: img_width,
  },
  nameText:{
    fontWeight:"bold",
    fontSize: 19,
    // fontFamily:'Monospace',
    color: '#2D3047',
  },
  posText:{
    fontSize: 14,
    // fontFamily:'Monospace'
  },
  copyrightText:{
    paddingTop: 10,
    width: "97%",
    fontSize: 12,
    textAlign:"center",
  }
});

export default withRouter(SideNav);
