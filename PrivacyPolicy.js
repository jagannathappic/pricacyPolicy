import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  BackHandler,
} from "react-native";
import { WebView } from "react-native-webview";
import { Input, Icon, Divider } from "react-native-elements";

import global from "../../global";

export default class PrivacyPolicy extends Component {
  static navigationOptions = {
    header: null,
  };
  backAction = () => {
    this.props.navigation.goBack();

    return true;
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
          style={styles.backContainer}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <Image style={styles.backIcon} source={global.ASSETS.BACKICON} />
          </TouchableOpacity>

          <Text style={styles.headerText}>Privacy Policy</Text>
          <Text style={{ color: "#fff" }}>.....</Text>
        </View>
        <Divider style={styles.divider} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.headingText}>
            Privacy Statement for the Study+ Airframe & Powerplant Mobile
            Application
          </Text>
          <Text style={styles.text}>
            Study+ Airframe & Powerplant has created this privacy statement in
            order to demonstrate our commitment to privacy. The following
            discloses our information gathering and dissemination practices for
            our Study+ Airframe & Powerplant mobile application. By using the
            products and services, you consent to the data we collect and how we
            use and share it in accordance with this Privacy Policy. If you do
            not agree with the data we collect, you should not use the products,
            services, website or portals.
          </Text>
          <Text style={styles.headingText}>Information Collected</Text>
          <Text style={styles.text}>
            In order to check the authenticity of user and to verify the user
            has made the payment with google play store/apple app store user
            must enter personal information. The information collected may
            include names, email address, and profile photo. At no time will
            Study+ Airframe & Powerplant sell, transfer, or otherwise use the
            collected information for any reasons other than for normal store
            operation and for statistical or diagnostic purposes.
          </Text>
          <Text style={styles.headingText}>Security </Text>
          <Text style={styles.text}>
            The Study+ Airframe & Powerplant application has security measures
            in place to protect the loss, misuse and alteration of the
            information under Study+ Airframe & Powerplant control.{" "}
          </Text>
          <Text style={styles.headingText}>Local Storage</Text>
          <Text style={styles.text}>
            Local Storage is accessed to deliver content, maintain the identity
            of purchasers, and track items the purchaser wishes to buy. It
            contains an encrypted authentication token which contains the
            information required to maintain the session. Study+ Airframe &
            Powerplant will not cause direct harm to the files on the
            purchaser’s hard drive by attempting to re-write other files or any
            other similar malicious activities. In addition, the data is stored
            so that it is returned only to the Study+ Airframe & Powerplant
            mobile application, and to no others.
          </Text>
          <Text style={styles.headingText}>
            How Long We Will Keep Your Personal Data
          </Text>
          <Text style={styles.text}>
            Study+ Airframe & Powerplant will retain your personal data for as
            long as necessary to provide the relevant services, maintain
            business records to satisfy tax, legal and other regulatory
            requirements, and protect and defend against potential legal claims.{" "}
          </Text>
          <Text style={styles.headingText}>
            Access To Your Data and Other Rights
          </Text>
          <Text style={styles.text}>
            Study+ Airframe & Powerplant tries to be as open as it can about the
            data that it processes and recommends you ask us if you have any
            questions about the data Study+ Airframe & Powerplant holds on you.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    backgroundColor: "#fff",
  },
  headingText: {
    fontSize: 16,
    fontFamily: global.FONT.SEMIBOLD,
    marginHorizontal: "5%",
    marginTop: "3%",
    textAlign: "justify",
  },
  text: {
    fontSize: 14,
    margin: 10,

    textAlign: "justify",
    fontFamily: global.FONT.REGULAR,
    marginHorizontal: "5%",
    marginTop: "3%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "12%",

    marginHorizontal: "4%",
  },
  backContainer: {
    height: 30,
    width: 60,
    // backgroundColor:"red",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "-5%",
    marginTop:"-2%"
  },
  backIcon: {
    height: 20,
    width: 20,
    resizeMode: "contain",
    marginTop: "13%",
  },
  headerText: {
    fontFamily: global.FONT.SEMIBOLD,
    fontSize: 16,
    marginLeft:"-5%"
  },
  divider: {
    height: 0.3,
    backgroundColor: "gray",
    width: 400,
    // marginHorizontal:-40,
    marginTop: 14,
  },
});
