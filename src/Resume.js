import React from 'react';
import {StyleSheet, Text, View, ListView, Image} from 'react-native';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import firebase from './Firebase';


class Resume extends React.Component{
    constructor(props){
        super(props);
        this.state={
            experiences: [],
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2)=> row1 !== row2
            }),
            education: new ListView.DataSource({
                rowHasChanged: (row1, row2)=> row1 !== row2
            }),
        }
    }

    componentWillMount(){
        var that =this;
        // Getting the list of experiences from the firebase ref
        firebase.database().ref('Experience/').on('value', function(data){
            that.setState({experiences: data.val()});
            that.setState({dataSource: that.state.dataSource.cloneWithRows(data.val())});
            
        })
        // Getting List of education from the firebase ref
        firebase.database().ref('Education/').on('value', function(data){
            that.setState({education: that.state.education.cloneWithRows(data.val())});
            
        })
    }

    renderRow =(experience) => {
        return(
            <View style={styles.experience_wrapper}>
                <View>
                    <Row>
                        <Col sm='7'>
                            <Text style={styles.organization_text}>
                                {experience.organization} - {experience.position}
                            </Text>
                        </Col>

                        <Col sm='5'>
                            <View style={styles.top}>
                                <Text style={styles.locationText}>{experience.location}</Text>
                                <Text style={styles.durationText}>{experience.duration}</Text>  
                            </View>
                        </Col>
                    </Row>
                </View>
                <View style={styles.descriptionView}>
                    <Text style={styles.normal_text}>{experience.description}</Text>
                    <a href={experience.href} style={{color: 'blue', textDecorationLine: 'underline'}}>
                        {experience.link_title}
                    </a>
                </View>

            </View>
        )
    }
    render(){
        
        return(
            
            <View style={styles.wrapper}>
                <Text style={styles.heading_text}>
                    Resum<mark style={{backgroundColor: '#2D3047', color: 'white', borderRadius: 5}}>e</mark>
                </Text>
                <Text style={styles.title_text}>
                    Experience
                </Text>
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = {this.renderRow}
                    enableEmptySections={true}
                />
                <Text style={styles.title_text}>
                    Education
                </Text>
                <ListView
                    dataSource = {this.state.education}
                    renderRow = {this.renderRow}
                    enableEmptySections={true}
                />
                
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
    experience_wrapper:{
        marginVertical: 10,
        margin: 5,
        padding: 10,
        borderColor: '#D0D1D2',
        borderWidth: 1,
        borderRadius: 10,
        
    },
    title_text:{
        fontWeight:'bold',
        fontSize: 25,
        fontFamily: 'Monospace',
        marginVertical: 10,
    },
    heading_text:{
        fontWeight:'bold',
        fontSize: 27,
        fontFamily: 'Monospace',
        alignSelf:'baseline',
        marginVertical: 10, 
        color: '#2D3047',
    },
    organization_col:{
        display: 'flex',
        flexDirection: 'column',
        
    },
    role_col:{
        display: 'flex',
        flexDirection: 'column',
        //borderLeftWidth: 5,
        paddingLeft: 10,
    },
    organization_text:{
        fontWeight: 'bold',
        marginVertical: 2,
        fontSize: 16,
    },
    locationText: {
        fontStyle: 'italic',
        fontSize: 16,
        marginHorizontal: 10,
    },
    durationText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#585858',
    },
    role_text:{
        fontWeight: 'bold',
        marginVertical: 2,
        fontSize: 17,
    },
    normal_text:{
        fontSize: 16,
        // marginBottom: 10,
    },
    logos:{
        width: 40,
        height: 40,
        marginRight: 10,
    },
    top: {
        width: '100%',
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    descriptionView: {
        paddingVertical: 10,
    }


});

export default Resume;