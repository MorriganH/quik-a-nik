//REACT
import { Text, View, Image, ScrollView, Platform } from "react-native";

//STYLES
import styles from "../styles/about";

//Store users platform in variable
const device = Platform.OS;

//FUNCTION DEFINITION
export default function About() {
  //WEB
  if (device === "web") {
    //RETURN
    return (
      <View style={styles.aboutWrapper}>
        <View style={styles.paragraphWrapper}>
          <Text style={styles.paragraph}>
            Welcome to Quik-a-nik, your premier destination for all your outdoor
            dining needs!
          </Text>
          <Text style={styles.paragraph}>
            At Quik-a-nik, we understand the joy and relaxation that comes with
            picnicking in beautiful natural settings. Whether it's a serene
            park, a picturesque beach, or a cozy spot in the woods, we believe
            that everyone should have the opportunity to savor these moments
            without the burden of planning and packing.
          </Text>
          <Text style={styles.paragraph}>
            Our mission is to provide you with a seamless and convenient way to
            create memorable picnics. From sumptuous food to well-equipped
            picnic baskets and even outdoor activities, we've got you covered.
            Our curated selection of picnic essentials ensures that you have
            everything you need for a delightful outing.
          </Text>
          <Text style={styles.paragraph}>
            We partner with local restaurants and vendors to offer a wide
            variety of delicious and freshly prepared meals, snacks, and
            beverages. Our diverse menu caters to different tastes and dietary
            preferences, so you can customize your picnic experience exactly as
            you desire. Whether you're craving a gourmet sandwich, a refreshing
            salad, or decadent desserts, we have something to please every
            palate.
          </Text>
          <Text style={styles.paragraph}>
            To make your picnic truly hassle-free, we provide thoughtfully
            designed picnic baskets that are packed with all the essentials. Our
            baskets include reusable plates, cutlery, glasses, and napkins, so
            you don't have to worry about bringing your own. We take pride in
            selecting high-quality and eco-friendly materials, ensuring that
            your picnic is not only convenient but also sustainable.
          </Text>

          <Text style={styles.paragraph}>
            At Quik-a-nik, affordability is at the heart of our business. We
            believe that everyone should have the opportunity to embrace the
            outdoors without breaking the bank. That's why we strive to provide
            fair prices for our products and services, ensuring that you can
            enjoy a delightful picnic experience without compromising your
            budget.
          </Text>
          <Text style={styles.paragraph}>
            Our user-friendly website and mobile app make it easy to browse our
            offerings, place orders, and track deliveries in real-time. We work
            with a dedicated team of delivery partners to ensure that your
            picnic essentials arrive promptly and in perfect condition, so you
            can focus on creating lasting memories with your loved ones.
          </Text>
          <Text style={styles.paragraph}>
            So, leave the packing to us and let Quik-a-nik be your trusted
            partner in outdoor dining. Embrace the beauty of nature, indulge in
            delicious food, and make every picnic a memorable experience. Start
            planning your perfect picnic today!
          </Text>
        </View>
        <View style={styles.base}></View>
        <View style={styles.bearBox}>
          <Image style={styles.qnBear} source={require("../assets/QB2.png")} />
        </View>
      </View>
    );
  }

  //ANDROID
  if (device !== "web") {
    //RETURN
    return (
      <ScrollView style={styles.aboutWrapper}>
        <View style={styles.paragraphWrapper}>
          <Text style={styles.paragraph}>
            Welcome to Quik-a-nik, your premier destination for all your outdoor
            dining needs!
          </Text>
          <Text style={styles.paragraph}>
            At Quik-a-nik, we understand the joy and relaxation that comes with
            picnicking in beautiful natural settings. Whether it's a serene
            park, a picturesque beach, or a cozy spot in the woods, we believe
            that everyone should have the opportunity to savor these moments
            without the burden of planning and packing.
          </Text>
          <Text style={styles.paragraph}>
            Our mission is to provide you with a seamless and convenient way to
            create memorable picnics. From sumptuous food to well-equipped
            picnic baskets and even outdoor activities, we've got you covered.
            Our curated selection of picnic essentials ensures that you have
            everything you need for a delightful outing.
          </Text>
          <Text style={styles.paragraph}>
            We partner with local restaurants and vendors to offer a wide
            variety of delicious and freshly prepared meals, snacks, and
            beverages. Our diverse menu caters to different tastes and dietary
            preferences, so you can customize your picnic experience exactly as
            you desire. Whether you're craving a gourmet sandwich, a refreshing
            salad, or decadent desserts, we have something to please every
            palate.
          </Text>
          <Text style={styles.paragraph}>
            To make your picnic truly hassle-free, we provide thoughtfully
            designed picnic baskets that are packed with all the essentials. Our
            baskets include reusable plates, cutlery, glasses, and napkins, so
            you don't have to worry about bringing your own. We take pride in
            selecting high-quality and eco-friendly materials, ensuring that
            your picnic is not only convenient but also sustainable.
          </Text>

          <Text style={styles.paragraph}>
            At Quik-a-nik, affordability is at the heart of our business. We
            believe that everyone should have the opportunity to embrace the
            outdoors without breaking the bank. That's why we strive to provide
            fair prices for our products and services, ensuring that you can
            enjoy a delightful picnic experience without compromising your
            budget.
          </Text>
          <Text style={styles.paragraph}>
            Our user-friendly website and mobile app make it easy to browse our
            offerings, place orders, and track deliveries in real-time. We work
            with a dedicated team of delivery partners to ensure that your
            picnic essentials arrive promptly and in perfect condition, so you
            can focus on creating lasting memories with your loved ones.
          </Text>
          <Text style={styles.paragraph}>
            So, leave the packing to us and let Quik-a-nik be your trusted
            partner in outdoor dining. Embrace the beauty of nature, indulge in
            delicious food, and make every picnic a memorable experience. Start
            planning your perfect picnic today!
          </Text>
        </View>
        <View style={styles.base}></View>
        <View style={styles.bearBox}>
          <Image style={styles.qnBear} source={require("../assets/QB2.png")} />
        </View>
      </ScrollView>
    );
  }
}
