import React from "react"
import {View, Text, Image, StyleSheet, TouchableOpacity, ListView, Modal} from "react-native";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import firebase from './Firebase';

class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2)=> row1 !== row2
            }),
            projects: [],
            img_lg1: "",
            img_lg2: "",
            img_lg3: "",
            large_carousel_visible: false,
            modal_visible: false,
            
        }
    }
    componentWillMount(){
        var that =this;
        // Getting the list of projects from the firebase ref
        firebase.database().ref('Projects/').on('value', function(data){
            that.setState({projects: data.val()});
            that.setState({dataSource: that.state.dataSource.cloneWithRows(data.val())});
            
        })
    }
    project =(project)=>{
        return(
            <View style={styles.proj_wrapper}>
                 {/* This view contains main project information */}
                <View>
                <Row>
                    <Col sm="7">
                        {/* Project Title and Image */}
                        <View style = {styles.title_image_view}>
                            <Image style={styles.profile_img} source = {project.logo}/>
                            <View style={styles.title_text_View}>
                                <Text style = {styles.title_text}>{project.title}</Text>
                                <Text style={styles.languages_text}>{project.languages}</Text>
                            </View>
                        </View>
                        {/* Project description*/}
                        <View style={{marginVertical: 10}}>
                            <Text style={styles.descriptionText}>{project.description}</Text>
                        </View>
                    </Col>
                    {/* Column for image carousel*/}
                    <Col style={{marginTop: 70,}} sm="5">
                    <View style={styles.images_view}>
                        <Text style={{fontSize: 17, fontWeight: "bold",}}>Screenshots</Text>
                        <Carousel 
                        onClickItem={()=>{this.largeProjectImgCarousel(project.image1, 
                        project.image2, project.image3)}}
                        autoPlay={true} dynamicHeight={true} stopOnHover={true} infiniteLoop={true}>
                            
                            <div>
                                <img src = {project.image1}/>
                            </div>

                            <div>
                                <img src = {project.image2}/>
                            </div>
                            <div>
                                <img src = {project.image3}/>
                            </div>

                        </Carousel>
                        <Text style={{textAlign: 'center', fontSize: 12}}>Click current slide to expand</Text> 
                    </View>
                    </Col>
                </Row>

                </View>
                {/* View for action buttons */}
                <View style={styles.action_buttons_view}>
                    <TouchableOpacity style={styles.touchable}>
                        <Text style={styles.button_text}>View Demo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable}>
                        <Text style={styles.button_text}>Source Code</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable}>
                        <Text style={styles.button_text}>View Live</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
    largeProjectImgCarousel=(img1, img2, img3)=>{
        // If no modal is visible, show this modal
        if(this.state.modal_visible != true){
            this.setState({
                img_lg1: img1,
                img_lg2: img2,
                img_lg_3: img3,
                large_carousel_visible: true,
                modal_visible: true,
            })
        }
        else{
            return(null);
        }
    }
    
    render(){
        const LargeProjectImgCarousel=()=>{
            // If no modal is visible, show this modal
            if(this.state.large_carousel_visible == true){
                //Display modal carousel with parsed images
                return(
                    
                    <View style={styles.large_img_carousel}>
                        <Carousel>
                            <div>
                                <img src = {this.state.img_lg1}/>
                            </div>

                            <div>
                                <img src = {this.state.img_lg2}/>
                            </div>
                            <div>
                                <img src = {this.state.img_lg3}/>
                            </div>
                        </Carousel>

                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', margin: 20}}>
                        <Button onClick={()=>{this.setState({large_carousel_visible: false,
                            modal_visible: false,})}} 
                            style={{alignSelf: 'flex-end'}} variant="danger">Close</Button>
                        </View>

                    </View>
                    
                )
            }
            else{
                return(null);
            }
        }
        
        return (
            <View style={styles.wrapper}>
                <Text style={styles.heading_text}>
                    Project<mark style={{backgroundColor: 'black', color: 'white'}}>s</mark>
                </Text>
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = {this.project}
                    enableEmptySections={true}
                />
                <LargeProjectImgCarousel/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper:{
        display: 'flex',
        flexDirection: 'column',
        marginVertical: 10,
        padding: 5,  
        
    },
    proj_wrapper:{
        marginVertical: 15,
        borderBottomColor: '#E1E1E1',
        borderBottomWidth: 10,
    },
    title_image_view:{
        display: 'flex',
        flexDirection: 'row',
    },
    profile_img:{
        width: 50,
        height: 50,
        marginRight: 8,
    },
    heading_text:{
        fontWeight:'bold',
        fontSize: 27,
        fontFamily: 'Monospace',
        marginTop: 10,
        marginBottom: 20,
    },
    title_text:{
        fontWeight:'bold',
        fontSize: 25,
        fontFamily: 'Monospace',
    },
    languages_text:{
        fontSize: 15,
        fontFamily: 'Monospace',
    },
    title_text_View:{
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
    },
    descriptionText:{
        fontSize: 15,
        marginVertical: 10,
        
    },
    action_buttons_view:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
    },
    touchable:{
        borderColor: "#D0D1D2",
        borderRadius: 5,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowRadius: 5,
        shadowOpacity: 0.3,
      },
      button_text:{
        color:'black',
        fontSize: 16,
        fontFamily: 'Monospace'
      },
      images_view:{
        width: '100%',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowRadius: 5,
        shadowOpacity: 0.5,
        marginBottom: 10,
        
      },
      large_img_carousel:{
        width: "90%",
        height: 'auto',
        position: 'absolute',
        zIndex: 12,
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowRadius: 5,
        shadowOpacity: 0.5,
      }

});

export default Projects;