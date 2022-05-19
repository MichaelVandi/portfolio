import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { withRouter } from "react-router-dom";
import {FaHome, FaInfoCircle, FaCode, FaMobile, FaGraduationCap, FaEnvelope} from 'react-icons/fa';
import {Link} from "react-scroll";

var device_width = Dimensions.get("window").width;
var device_height = Dimensions.get("window").height;
var img_width = device_width * 0.2;

class SideNavMobile extends React.Component {
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
    if(window.innerWidth >250 && window.innerWidth <=400) {
      this.setState({img_width: 80, device_width: window.innerWidth})
      img_width = 80
    } else if(window.innerWidth > 400 && window.innerWidth <=500) {
      this.setState({img_width: 100, device_width: window.innerWidth})
      img_width = 80
    }
    else if(window.innerWidth > 500 && window.innerWidth <=700){
      this.setState({img_width: 160, device_width: window.innerWidth})
      img_width = 80
    }
    else if(window.innerWidth > 700 && window.innerWidth <=800){
      this.setState({img_width: 200, device_width: window.innerWidth})
      img_width = 100
    }
    else if(window.innerWidth > 800 && window.innerWidth <=900){
      this.setState({img_width: 200, device_width: window.innerWidth})
      img_width = 120
    }
    else if(window.innerWidth > 900 && window.innerWidth <=1000){
      this.setState({img_width: 200, device_width: window.innerWidth})
      img_width = 10
    }
    else if(window.innerWidth > 1000 && window.innerWidth <=1200){
      this.setState({img_width: 200, device_width: window.innerWidth})
      img_width = 180
    }
    else if(window.innerWidth > 1200){
      this.setState({img_width: 200, device_width: window.innerWidth})
      img_width = 200
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
    const Nav = () => {
      return (
        <View style={styles.main}>
          <View style={{width: 'auto', alignItems: "center", justifyContent: "center"}}>
            <Image style={{width: img_width, height: img_width,
              borderRadius: '50%'}} source={this.state.profile_img}  />
          </View>
          <View style={{width: 'auto', alignItems: "center", justifyContent: "center", flexDirection: 'column', marginBottom: 20}}>
            <Text style = {styles.nameText}> Michael Vandi</Text>
            <Text style ={styles.posText}> Software Engineer</Text>
          </View>
          <View>
          <div className="navbar" style={{flexDirection: 'column'}}>
              <Link style={{width: '100%'}} activeClass="active" to="home" spy={true} smooth={true} offset={-60} duration={500}>
                <TouchableOpacity style = {styles.button}>
                  <FaHome size ="1.5em" color="grey" style={{marginRight: 10}}/>
                  <Text style = {styles.text}> Home</Text>
                </TouchableOpacity>
              </Link>

              <Link style={{width: '100%'}} activeClass="active" to="about" spy={true} smooth={true} offset={-60} duration={500}>
                <TouchableOpacity style = {styles.button}>
                  <FaInfoCircle size ="1.5em" color="grey" style={{marginRight: 10}}/>
                  <Text style = {styles.text}> About</Text>
                </TouchableOpacity>
              </Link>

              <Link style={{width: '100%'}} activeClass="active" to="skills" spy={true} smooth={true} offset={-60} duration={500}>
                <TouchableOpacity style = {styles.button}>
                  <FaCode size ="1.5em" color="grey" style={{marginRight: 10}}/>
                  <Text style = {styles.text}> Skills</Text>
                </TouchableOpacity>
              </Link>

              <Link style={{width: '100%'}} activeClass="active" to="projects" spy={true} smooth={true} offset={-60} duration={500}>
                <TouchableOpacity style = {styles.button}>
                  <FaMobile size ="1.5em" color="grey" style={{marginRight: 10}}/>
                  <Text style = {styles.text}> Projects</Text>
                </TouchableOpacity>
              </Link>

              <Link style={{width: '100%'}} activeClass="active" to="resume" spy={true} smooth={true} offset={-60} duration={500}>
                <TouchableOpacity style = {styles.button}>
                  <FaGraduationCap size ="1.5em" color="grey" style={{marginRight: 10}}/>
                  <Text style = {styles.text}> Resume</Text>
                </TouchableOpacity>
              </Link>

              <Link style={{width: '100%'}} activeClass="active" to="contact" spy={true} smooth={true} offset={-60} duration={500}>
                <TouchableOpacity style = {styles.button}>
                  <FaEnvelope size ="1.5em" color="grey" style={{marginRight: 10}}/>
                  <Text style = {styles.text}> Contact</Text>
                </TouchableOpacity>
              </Link>
                <Text style={styles.copyrightText}>
                © 2019 All rights reserved
                </Text>
            </div>
          </View>
          {/* <Button title="Home" onPress={() => history.push("/")} />
          <Button title="Second" onPress={() => history.push("/second")} /> */}
        </View>
    
      );
    };
    return(
      <Nav/>
    );
  }
}



const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    width: 'auto',
    // backgroundColor: "#ECECEC",
    backgroundColor: "#fdfdfd",
    height: '100%',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0.5
    },
    shadowRadius: 5,
    shadowOpacity: 0.7,
    // padding: 10,
    // borderRadius: 10,
    position: 'fixed',
    left: 0,
    zIndex:210,
    marginTop: 40,
    paddingTop: 20,
  
  },
  button:{
    display: 'flex',
    flexDirection: 'row',
    // borderBottomColor: "#D0D1D2",
    // borderBottomWidth: 1,
    borderBottomColor: "#e9e9e9",
    borderBottomWidth: 0.7,
    // borderColor: '#e9e9e9',
    // borderWidth: 0.7,
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
    fontSize: 13,
    // fontFamily:'Monospace'
  },
  copyrightText:{
    paddingTop: 10,
    width: "97%",
    fontSize: 12,
    textAlign:"center",
  }
});

export default withRouter(SideNavMobile);
