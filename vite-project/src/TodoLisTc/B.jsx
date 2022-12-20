const Day6B = (props) => {
    console.log("@AJ LN2 Day6B: ", { props });
  
    const onChange = () => {
      console.log("On Change called");
      props.onChange({ name: "Pragati", city: "New York" });
    };
  
    return (
      <>
        <p>Hello Day6 B</p>
        <button onClick={onChange}>Call from Child</button>
      </>
    );
  };
  
  export default Day6B;