import React from 'react';

const initialState = {
  name : 'shawn',
  message : 'typescript is cool',
};

type State = Readonly<typeof initialState>;

const messageHoc = (WrappedComponent: any) => {
  class HOC extends React.Component<{}, State> {
    readonly state : State = initialState;

    render () {
      return (
        <WrappedComponent name={this.state.name} message={this.state.message} />
      )
    }
  }
  return HOC;
} 

export default messageHoc;