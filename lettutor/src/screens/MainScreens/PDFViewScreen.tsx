import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import Pdf from "react-native-pdf";

export default function PDFViewScreen({ route }: any) {
    const params = route.params;
    const source = {
        uri: params.pdfUrl,
        cache: true,
    };
    return (
        <View style={styles.container}>
            <Pdf
                trustAllCerts={false}
                source={source}
                // onLoadComplete={(numberOfPages, filePath) => {
                //     console.log(`Number of pages: ${numberOfPages}`);
                // }}
                // onPageChanged={(page, numberOfPages) => {
                //     console.log(`Current page: ${page}`);
                // }}
                // onError={(error) => {
                //     console.log(error);
                // }}
                // onPressLink={(uri) => {
                //     console.log(`Link pressed: ${uri}`);
                // }}
                style={styles.pdf}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 25,
    },
    pdf: {
        flex: 1,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});
