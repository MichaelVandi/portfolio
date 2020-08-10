import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {FaCode, FaDatabase, FaCircle} from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Skills extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }
    render(){
        const AboutComponent =()=>{

            return(
                <View style = {styles.container}>
                    <Text style= {styles.heading}>
                        Skill<mark style={{backgroundColor: '#2D3047', color: 'white', borderRadius: 5}}>s</mark>
                    </Text>
                    <Container fluid={true}>

                        <Row>

                            <Col md="6">

                                <View style={styles.bundleView1}>
                                    <View style={styles.iconView}>
                                        <FaCode size ="1.5em" color="#2D3047" style={{marginRight: 10}}/>
                                    </View>
                                    <View style={styles.skillsContainer}>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>Java</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>Python</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>JavaScript</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>Go</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>MagicScript</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>React</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>ReactNative</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>C++</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>C#</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>JQuery</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>Ajax</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>PHP</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>VB.net</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>HTML(5)</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>CSS(3)</Text>
                                        </View>
                                    </View>

                                </View>


                            </Col>

                            <Col md="6">

                                <View style={styles.bundleView1}>
                                    <View style={styles.iconView}>
                                        <FaDatabase size ="1.5em" color="#2D3047" style={{marginRight: 10}}/>
                                    </View>
                                    <View style={styles.skillsContainer}>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>GraphQL</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>SQL</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>MySQL</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>PostgreSQL</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>Firebase</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>MongoDB</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>ORMs</Text>
                                        </View>
                                        <View style={styles.oneSkillView}>
                                            <FaCircle size ="0.7em" color="#2D3047" style={{marginRight: 7, marginTop: 10}}/>
                                            <Text style = {styles.skillText}>Microsoft Azure</Text>
                                        </View>
                                        
                                    </View>

                                </View>


                            </Col>
                        </Row>
                    </Container>
                    {/* <Text style= {styles.heading}>
                        Skill<mark style={{backgroundColor: '#2D3047', color: 'white', borderRadius: 5}}>s</mark>
                    </Text>

                    <View>
                        <Text style={styles.normalText}>
                        <FaCode style={{marginRight: 5}}/>
                        <strong style={{fontsize: 18, marginRight: 10}}>Programming:</strong>Java, C++, React [Native and JS] , JavaScript, Python, C#, JQuery, Ajax, 
                        PHP, VB.net, HTML (5), CSS (3)
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.normalText}>
                        <FaPalette style={{marginRight: 5}}/>
                        <strong style={{fontsize: 18, marginRight: 10}}>U.I. Design:</strong>
                        XML, HTML (5), CSS (3), Bootstrap, Jinja 2
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.normalText}>
                        <FaLayerGroup style={{marginRight: 5}}/>
                        <strong style={{fontsize: 18, marginRight: 10}}>Databases:</strong>
                        PostgreSQL, Firebase, Azure, ORMs , Microsoft Access
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.normalText}>
                        <FaLock style={{marginRight: 5}}/>
                        <strong style={{fontsize: 18, marginRight: 10}}>Security and Administration:</strong>
                        Junit, Linux, Microsoft Azure
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.normalText}>
                        <FaFilm style={{marginRight: 5}}/>
                        <strong style={{fontsize: 18, marginRight: 10}}>Multimedia Editing:</strong>
                        Adobe [Flash, Photoshop, Premier Pro, Audition, Dreamweaver]
                        </Text>
                    </View> */}

                </View>
            )
        }
        return(
            <AboutComponent/>
        )
    }

}
const styles = StyleSheet.create({
    container:{
        width: "100%",
        // marginTop: 10,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 27,
        fontFamily: 'Monospace',
        marginVertical: 7,
        color: '#2D3047',
    },
    normalText:{
        fontSize: 16,
        marginTop: 4
    },
    sub_heading:{
        fontWeight: 'bold',
        fontSize: 18,
        marginRight: 15,
    },
    bundleView1: {
        borderColor: '#D0D1D2',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 10,
        height: 250,
    },
    skillsContainer: {
        display:'inline-flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 10,
    },
    oneSkillView: {
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
    },
    skillText: {
        fontSize: 18,
        fontWeight: 'normal',
        marginRight: 12
    },
    iconView: {
        padding: 10,
        // backgroundColor: 'red',
        // 536271, 3E4C5E, 2C3D55
    }
})


export default Skills;