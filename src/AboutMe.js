import React from "react";
import {View, Text, StyleSheet} from "react-native";

class AboutMe extends React.Component{
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
                        Who Am I<mark style={{backgroundColor: '#2D3047', color: 'white', borderRadius: 5}}>?</mark>
                    </Text>
                    <Text style ={styles.normalText}>
                    Hi! I graduated Summa Cum Laude from the University of Baltimore with a 
                    Computer Science degree. Right now, I'm a Software Engineer at Amazon Web Services 
                    working on enterprise software. Previously, I worked on AR interfaces for NASA's ARTEMIS mission with the 
                    NASA S.U.I.T.S. program. Outside work, I spend an unhealthy amount of time writing code, running, taking long naps, 
                    and obsessing over algorithmic optimization. Fun life huh?
                    </Text>
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
        // marginTop: 15,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 22,
        fontFamily: 'Monospace',
        marginVertical: 10,
        color: '#2D3047',
    },
    normalText:{
        fontSize: 16,
        marginBottom: 10,
    }
})


export default AboutMe;