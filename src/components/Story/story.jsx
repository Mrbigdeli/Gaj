const Story = (props) => {
  return (
    <div className="Story-Comp">
      <img src={props.src} alt={props.alt} className="Story-Comp-IMG" />
      <h5 className="Story-Comp-h5">{props.alt}</h5>
    </div>
  );
};

export default Story;
