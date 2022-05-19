import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaEnvelope, FaGithub, FaPhone, FaLinkedin, FaInstagram} from 'react-icons/fa';
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import * as emailjs from 'emailjs-com'
import Global from './Global';
import Recaptcha from 'react-recaptcha';

var emailId = Global.getEmailJsId();
var recaptchaSiteKey = Global.getRecaptchaSiteKey();
class ContactMe extends React.Component{
    constructor(props){
        super(props);

        this.state={
            from_name: '',
            from_email: '',
            subject: '',
            message: '',
            success_msg: '',
            fail_msg: '',
            isHuman: false,
            
        }
        this.from_name = React.createRef();
        //this.handleChange = this.handleChange.bind(this);
    }
    handleInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    sendEmail =()=>{
        if(this.state.isHuman === true){
            let templateParams = {
                from_name: this.state.from_name,
                to_name: 'Michael',
                subject: this.state.subject,
                message_html: this.state.message,
                reply_to: this.state.from_email,
           }
           var that = this;
           emailjs.send('zoho', 'template_83TGLJXz', templateParams, emailId)
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            that.setState({success_msg: 'Message sent successfully!!'})
            }, function(error) {
            console.log('FAILED...', error);
            that.setState({fail_msg: 'Something went wrong, please try again later'})
            });
            this.resetForm();
        }
        else{
            alert("Please verify you're human");
        }
        
    }
    resetForm =()=>{
        this.setState({
            from_name: '',
            from_email: '',
            subject: '',
            message: '',
        })
    }
    callback=()=>{
        console.log("Recaptcha loaded")
    }
    verifyCallback=(response)=>{
        if(response){
            this.setState({
                isHuman: true,
            });
        }
    }
    onSendClick =()=>{
        if(!this.state.from_email.toUpperCase().match("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$")){
            alert("Invalid Email address")
            return null;
        }
        if(this.state.from_email.trim() =="" || this.state.from_name.trim() ==""
        || this.state.subject.trim() =="" || this.state.message.trim() ==""){
            alert("Please enter all fields")
            
        }
        // First test passed, now performing regex and other tests
        else if(this.state.from_name.trim().length >1 && 
            this.state.from_email.toUpperCase().match("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$")&&
            this.state.subject.trim().length >1 && this.state.message.trim().length >1){
            // Test passed send email now
            this.sendEmail();
        }
    }

    render(){

        return(
            <View>
                <Text style={styles.heading_text}>
                    Get in Touc<mark style={{backgroundColor: '#2D3047', color: 'white', borderRadius: 5}}>h</mark>
                </Text>
                <View style={{marginTop: 20, marginBottom: 50}}>
                    {/* Contact row */}
                    <Row>
                        {/* Col for main contact info */}
                        <Col style={{marginBottom: 15}}>
                            <View style={styles.message_card}>
                                {/* Contains the contact me card header */}
                                <View>
                                    <View>
                                        <Text style={styles.message_header_text}>Contact Info</Text>
                                    </View>
                                    

                                    <Text style={styles.info_text}> 
                                    <FaEnvelope style={{marginRight: 5}}/>
                                    mvandi@mvandi.com</Text>

                                    <Text style={styles.info_text}> 
                                    <FaGithub style={{marginRight: 5}}/> Github: <a href ="https://github.com/MichaelVandi/" target="_blank">
                                    MichaelVandi</a></Text>

                                    <Text style={styles.info_text}> 
                                    <FaPhone style={{marginRight: 5}}/> <a href ="">
                                    +1(443) 582 9119 </a> (it's a bot)</Text>
                                    
                                    <Text style={styles.info_text}> 
                                    <FaLinkedin style={{marginRight: 5}}/>LinkedIn: <a href ="https://www.linkedin.com/in/michael-vandi/" target="_blank">
                                    Michael Vandi</a></Text>

                                    <Text style={styles.info_text}> 
                                    <FaInstagram style={{marginRight: 5}}/>Instagram: <a href ="https://www.instagram.com/mike_ehl_/" target="_blank">
                                    mike_ehl_</a></Text>

                                </View>
                                {/* Contains the contact me inputs */}
                                <View>

                                </View>


                            </View>

                        </Col>
                        {/* Col for sending emails */}
                        <Col style={{marginBottom: 15}}>
                        <View style={styles.message_card}>
                                {/* Contains the contact me card header */}
                                <View style={styles.message_header_view}>
                                    <View style={styles.message_header}>
                                        <Text style={styles.message_header_text}>Send me a message</Text>
                                    </View>

                                </View>
                                {/* Contains the contact me inputs */}
                                <View>

                                    
                                            <form>
                                                
                                                <div className="grey-text">
                                                    <TextField style={{width: '100%', borderRadius: 8, marginBottom: 15}} 
                                                    id="from_name" label="Your Name" variant="outlined" key="from_name" type="text"
                                                    onChange={this.handleInput} value={this.state.from_name}/>

                                                    <TextField style={{width: '100%', borderRadius: 8, marginBottom: 15}} 
                                                    id="from_email" label="Your Email" variant="outlined" key="from_email" type="email"
                                                    onChange={this.handleInput} value={this.state.from_email}/>

                                                    <TextField style={{width: '100%', borderRadius: 8, marginBottom: 15}} 
                                                    id="subject" label="Subject" variant="outlined" key="subject" type="text"
                                                    onChange={this.handleInput} value={this.state.subject}/>

                                                    <TextField style={{width: '100%', borderRadius: 8, marginBottom: 15}} 
                                                    id="message" label="Your Message" variant="outlined" key="message" type="text" 
                                                    rows={3} multiline
                                                    onChange={this.handleInput} value={this.state.message}/>

                                                
                                                </div>
                                                <div className="text-center" style={{marginTop: 10, marginBottom: 10, width: '90%'}}>
                                                    <Recaptcha
                                                        size="normal"
                                                        sitekey={recaptchaSiteKey}
                                                        render="explicit"
                                                        verifyCallback={this.verifyCallback}
                                                        onloadCallback={this.callback}
                                                    />
                                                </div>
                                                
                                                <div className="text-center">
                                                <TouchableOpacity  style={styles.touchable} 
                                                onPress={() => this.onSendClick()}>
                                                    
                                                    <Text style={styles.textSend}>Send</Text>
                                                </TouchableOpacity>
                                                {/* <MDBBtn onClick={()=> this.onSendClick()}
                                                    style={{width: '100%', }} outline color="secondary">
                                                    Send 
                                                </MDBBtn> */}
                                                </div>
                                                <Text style={{color: 'green'}}>{this.state.success_msg}</Text>
                                                <Text style={{color: 'red'}}>{this.state.fail_msg}</Text>
                                            </form>
                                            

                                </View>


                            </View>

                        </Col>
                    </Row>
                </View>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    message_card:{
        display: 'flex',
        flexDirection: 'column',
        borderColor: '#e9e9e9',
        borderWidth: 0.7,
        borderRadius: 10,
        width: '100%',
        height: '100%',
        padding: 15,
        marginBottom: 20,
    },
    message_header_view:{
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    message_header:{
        width: '95%',
        marginBottom: 5,
        textAlign: 'center',
    },
    message_header_text:{
        textAlign: 'center',
        fontSize: 18,
        fontWeight:'bold',
        marginBottom: 5,
    },
    heading_text:{
        fontWeight:'bold',
        fontSize: 22,
        fontFamily: 'Monospace',
        marginVertical: 10, 
        color: '#2D3047',
    },
    info_text:{
        fontSize: 16,
        marginVertical: 5,
    },
    touchable:{
        // borderColor: "#e9e9e9",
        borderRadius: 6,
        // borderWidth: 1.5,
        width: '100%', 
        height: 50, 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingVertical: 5,
        backgroundColor: '#2D3047',
        // backgroundColor: '#e9e9e9',
        shadowColor: '#000000',
        shadowOffset: {
        width: 0,
        height: 0.5
        },
        shadowRadius: 1.7,
      shadowOpacity: 0.5,
        // shadowRadius: 5,
        // shadowOpacity: 0.3,
      },
      textSend: {
        fontSize: 20, 
        color: 'white',
        fontWeight: 'bold'
      }
})
export default ContactMe;