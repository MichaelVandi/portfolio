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

                                        <Row style={{width: "99%", margin: 0, padding: 0}}>

                                            <Col xs="4">
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>Java</Text>
                                                </View>
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>Python</Text>
                                                </View>
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>JavaScript</Text>
                                                </View>
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>Go</Text>
                                                </View>
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>Ruby</Text>
                                                </View>
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>C++</Text>
                                                </View>
                                            </Col>

                                            <Col xs="4">
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>React</Text>
                                                </View>
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>ReactNative</Text>
                                                </View>
                                                
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>C#</Text>
                                                </View>
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>Bash</Text>
                                                </View>
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>  
                                                    <Text style = {styles.skillText}>PHP</Text>
                                                </View>
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>MagicScript</Text>
                                                </View>
                                                
                                            </Col>

                                            <Col xs="4">
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>JQuery</Text>
                                                </View>
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>Ajax</Text>
                                                </View>
                                                
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>VB.net</Text>
                                                </View>
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>HTML(5)</Text>
                                                </View>
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>CSS(3)</Text>
                                                </View>
                                            </Col>

                                        </Row>
                                       
                                        
                                        
                                        
                                    </View>

                                </View>


                            </Col>

                            <Col md="6">

                                <View style={styles.bundleView1}>
                                    <View style={styles.iconView}>
                                        <FaDatabase size ="1.5em" color="#2D3047" style={{marginRight: 10}}/>
                                    </View>
                                    <View style={styles.skillsContainer}>

                                        <Row style={{width: "99%", margin: 0, padding: 0}}>

                                            <Col xs="4">


                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>GraphQL</Text>
                                                </View>
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>MongoDB</Text>
                                                </View>
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>SQL</Text>
                                                </View>
                                               
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>PostgreSQL</Text>
                                                </View>
                                            </Col>

                                            <Col xs="8">
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>Amazon Web Services</Text>
                                                </View>
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>Firebase</Text>
                                                </View>
                                               
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>Microsoft Azure</Text>
                                                </View>
                                                <View style={styles.oneSkillView}>
                                                    <View style={styles.dot}/>
                                                    <Text style = {styles.skillText}>ORMs</Text>
                                                </View>
                                            </Col>

                                        </Row>
                                        
                                        
                                        
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
        fontSize: 22,
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
        borderColor: '#e9e9e9',
        borderWidth: 0.7,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 10,
        height: 340,
        width: '100%',
        marginBottom: 10,
    },
    skillsContainer: {
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 10,
        width: "100%"
    },
    oneSkillView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        width: '100%',
    },
    columnView: {
        border: "1px solid black",
    },
    skillText: {
        fontSize: 16,
        fontWeight: 'normal',
        marginRight: 12
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#2D3047',
        marginRight: 7,
    },
    iconView: {
        padding: 10,
        // backgroundColor: 'red',
        // 536271, 3E4C5E, 2C3D55
    }
})


export default Skills;