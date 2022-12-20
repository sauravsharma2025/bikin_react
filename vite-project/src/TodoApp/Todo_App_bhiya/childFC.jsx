import Day6B from "./parentFC";

const Day6A = () => {
  const onPropsChange = (data) => {
    console.log("onPropsChange inside parent", data);
  };
  return (
    <>
      <p>Hello Day6 A</p>
      <Day6B
        onChange={onPropsChange}
        city="Chennai"
        name="Hareesh"
        country="India"
      />
    </>
  );
};

export default Day6A;