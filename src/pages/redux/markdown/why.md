<h1 style="text-align: center; text-decoration: underline; margin-top: 50px">Why Use Redux?</h1>

As we experienced in the last module, there are times when passing down props down to a component becomes tireing. It becomes even more cumbersome if that prop is a callback--now the prop has to go down several children, only to have to them travel back up to the parent to update a value.

<img style="display: block; margin: 10px auto; border: 2px solid black;" src="https://liendo-fed-training.s3.amazonaws.com/react-prop-drilling.jpg" alt="prop drilling"/>

When using redux, the state that is passed outside of the component that created it is stored in the redux store. So when transitioning from react to redux, that is the question that needs to be asked:

> Is this state being passed to another component? 

If so, redux can handle it.  If not, (like when managing the state of an input field), feel free to let that component handle the state with react.

