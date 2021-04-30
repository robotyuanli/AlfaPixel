import React from 'react';
import { Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

export function renderWebview(content) {
  const generateHtml =
    `
    <!DOCTYPE html>\n
    <html>
      <head>
        <title>Web View</title>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=` +
    Dimensions.get('window').width +
    `, user-scalable=no">
        <style type="text/css">
          body {
            margin: 30;
            padding: 0;
            text-align: right;
          }
        </style>
        <script>
        document.querySelector("button").onclick = function() {
          console.log("Send post message");
          window.postMessage("Hello React", "*");
        }
        </script>
      </head>
      <body>
        ${content}
      </body>
    </html>
    `;
  return (
    <WebView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      source={{ html: generateHtml }}
      automaticallyAdjustContentInsets={false}
      javaScriptEnabled={true}
      injectedJavaScript="window.ReactNativeWebView.postMessage(document.body.scrollHeight)"
    />
  );
}
