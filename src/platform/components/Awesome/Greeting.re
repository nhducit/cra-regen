let component = ReasonReact.statelessComponent("Greeting");

/** This is like declaring a normal ReasonReact component's `make` function, except the body is a the interop hook wrapJsForReason */
[@genType]
let make = (~name, _children) => {
  ...component,
  render: _self =>
    <button className="bg-grey text-red">
      {ReasonReact.string("Hello " ++ name ++ "!")}
    </button>,
};