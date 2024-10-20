This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

# React Native

### Shortcust's with ES7 react-native

- **rnfe** _function export component_

- **rnfs** _function export component with stylesheets_

- _Shift + R for hard reload_

## Day - 1

## Issues

- Create a new react-native app `npx react-native init {app_name}`

- `npx react-native run-android` or `npx react-native start`

- on errors `npx react-native doctor` or `npm install`

- see list of connected divices `adb devices`

## Cncept

Hello World

## Content

### Basic components:

- View:

  > The View component is used like a _div_ tag it can be used to wrap other components **But not text**

- Text:

  > Just like the _p_ tag it is used to wrap text

- SafeAreaView:

  > SafeAreaView is used to avoid the notch and the bottom bar of the phone

- StyleSheet:

  > StyleSheet is used to create styles for the components. It helps in organizing and reusing styles.

- useColorScheme:

  > The useColorScheme React hook provides and subscribes to color scheme updates from the Appearance module. The return value indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle).

  ```javascript
  import React from 'react';
  import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    useColorScheme,
  } from 'react-native';

  function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'light';
    return (
      <View
        style={[
          styles.container,
          {backgroundColor: isDarkMode ? 'black' : 'white'},
        ]}>
        <Text style={isDarkMode ? styles.dark : styles.white}>Hello World</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    white: {
      color: 'black',
    },
    dark: {
      color: 'white',
    },
  });

  export default App;
  ```

## Day - 2

## Concept

Card's, Styling, Scrolling, Flex

## Content

- ScrollView:

  > The ScrollView is a generic scrolling container that can contain multiple components and views. The scrollable items can be heterogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).

`Note: Importing component's is simillar to that of react.`

- \<ScrollView> vs \<FlatList> - which one to use?

  > ScrollView renders all its react child components at once, but this has a performance downside.

  > Imagine you have a very long list of items you want to display, maybe several screens worth of content. Creating JS components and native views for everything all at once, much of which may not even be shown, will contribute to slow rendering and increased memory usage.

  > This is where FlatList comes into play. FlatList renders items lazily, when they are about to appear, and removes items that scroll way off screen to save memory and processing time.

- Image:

  > A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.

- Linking:

  > Linking is used to open an URL the anchor tag dosent work in React Native hence `Linking.openURL({url})` is used.

- TouchableOpacity:

  > TouchableOpacity help's to provide a action on touch it has a prop `onPress` that can be used to perform an action when the component is clicked.

```javascript
// App.tsx

import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import Scrollable from './components/Scrollable';
import HorizontalLine from './components/HorizontalLine';
import ImageCard from './components/ImageCard';
import ActionCard from './components/ActionCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard />
        <HorizontalLine />
        <Scrollable />
        <HorizontalLine />
        <ImageCard />
        <HorizontalLine />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;


// components/ActionCard.tsx

import {Linking, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <TouchableOpacity
        onPress={() => openWebsite('https://reactnative.dev')}
        style={styles.container}>
        <Text style={styles.blackText}>React Native</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 10,
    marginHorizontal: 100,
    borderRadius: 10,
  },
  blackText: {
    color: 'black',
  },
});


// components/FlatCard.tsx

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard(): JSX.Element {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.flexContainer}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Card 1</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Card 2</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Card 3</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Card 3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    margin: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
});


// components/ImageCard.tsx

import {View, Text, Image, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

const ImageCard = () => {
  return (
    <SafeAreaView>
      <Text style={styles.headingText}>ImageCard</Text>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
          height={100}
          width={100}
          style={{borderRadius: 10}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
});

export default ImageCard;


// components/Scrollable.txt

import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Scrollable() {
  return (
    <View>
      <Text style={styles.headingText}>ScrollableCard</Text>
      <View style={styles.flexContainer}>
        <ScrollView horizontal={true}>
          <View style={[styles.card, styles.cardOne]}>
            <Text>Card 1</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text>Card 2</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>Card 3</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>Card 3</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    margin: 20,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    width: 100,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
});


```
