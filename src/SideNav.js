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
    if(window.innerWidth >250 && window.innerWidth <=400) {
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
      img_width = 10;
      leftMargin = 10;
      // alert("900 - 1000 : " + leftMargin);
    }
    else if(window.innerWidth > 1000 && window.innerWidth <=1200){
      this.setState({img_width: 200, device_width: window.innerWidth})
      img_width = 180;
      leftMargin = 5;
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
        <View style={styles.main}>
          <View style={{width: 'auto', alignItems: "center", justifyContent: "center"}}>
            <Image style={{width: img_width, height: img_width,
              borderRadius: '50%'}} source={this.state.profile_img}  />
          </View>
          <View style={{width: 'auto', alignItems: "center", justifyContent: "center", flexDirection: 'column'}}>
            <Text style = {styles.nameText}> Michael Vandi</Text>
            <Text style ={styles.posText}>Software Engineer</Text>
          </View>
          <View>
            <div className="navbar" style={{flexDirection: 'column'}}>
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
            </div>
          </View>
          {/* <Button title="Home" onPress={() => history.push("/")} />
          <Button title="Second" onPress={() => history.push("/second")} /> */}
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
    width: 'auto',
    backgroundColor: "white",
    height: device_height * 0.91,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    position: 'fixed',
    marginLeft: leftMargin,
    marginTop: 25,
    // marginBottom: 30,
  
  },
  button:{
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: "#D0D1D2",
    borderBottomWidth: 1,
    width:'100%',
    padding: 5,
    marginBottom: 5,
  },
  text:{
    fontSize: 15,
  },
  profile_img:{
    borderRadius: "50%",
    width: img_width,
    height: img_width,
  },
  nameText:{
    fontWeight:"bold",
    fontSize: 19,
    fontFamily:'Monospace',
    color: '#2D3047',
  },
  posText:{
    fontSize: 13,
    fontFamily:'Monospace'
  },
  copyrightText:{
    width: "100%",
    textAlign:"center",
  }
});

export default withRouter(SideNav);
