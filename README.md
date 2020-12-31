### Color picking

I have decided to go with a set of colors handpicked and generate a random from those in order to provide a consistent color scheme. If the app is to be developed further and these colors are reused somewhere else, this enables easier reading by having control over the individual colors. This is why I didn't generate a totally random color with random rgb or hex code values.

### Saga, state and random todo retrieval

The API call is made with saga, then immediately saved to state. The entire list of todos are stored inside the state, the selector filters the array of todos by their completed status, picks one from the filtered pool and the ListItem component uses that information to render.

### Development environment config, expo, redux devtools

In order to get in and start developing as fast as possible I have used expo with metro bundler instead of the react-native-cli. Since many of the api's are already built in, and it also provides easier debugging solutions for this project right out of the box.

If I was to use this in production I would also turn off Redux Devtools connection in the Store.
