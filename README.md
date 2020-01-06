# React / Redux Shop

This is a small application that uses:

* React
* Redux
* react-redux
* Reach Router

To build a little shop. It doesn't do much, but it is a better demo than a simple counter.

## Without Redux

If you want to compare what this application would look like _without_ redux, check out the `without-redux` branch.

Of particular note is the "messy" props passing in `App.js`, where each of the components must receive their own props rather than having them mapped from the store. The worst "offender" here is the `removeFromCart` which must be passed from `App`, to `Cart`, then to `Item`.

Another thing to notice is that all the "store" logic is in now in `App.js` and it feels like this would get rather crowded if this application was evolved further.
